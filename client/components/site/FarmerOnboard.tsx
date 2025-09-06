import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function FarmerOnboard({ triggerLabel = "Join as a Farmer", closeMenu }: { triggerLabel?: string, closeMenu?: ()=>void }) {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      (err) => {
        alert("Unable to fetch location: " + err.message);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    for (const [k, v] of fd.entries()) data[k] = v;
    if (coords) {
      data['latitude'] = coords.lat;
      data['longitude'] = coords.lon;
    }
    // store locally as a mock persistence
    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem('farmer_signups') || '[]');
      existing.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem('farmer_signups', JSON.stringify(existing));
      alert('Registration submitted. Our partnerships team will contact you.');
      (e.currentTarget as HTMLFormElement).reset();
      setCoords(null);
    } catch (err) {
      console.error(err);
      alert('Submission failed. See console for details.');
    } finally {
      setSubmitting(false);
    }
  };

  const osmSrc = coords
    ? `https://www.openstreetmap.org/export/embed.html?marker=${coords.lat},${coords.lon}&amp;layer=mapnik&bbox=${coords.lon - 0.02}%2C${coords.lat - 0.02}%2C${coords.lon + 0.02}%2C${coords.lat + 0.02}`
    : undefined;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" onClick={() => { if (closeMenu) closeMenu(); }}>{triggerLabel}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Farmer Onboarding Form</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 max-h-[70vh] overflow-auto">
          <fieldset>
            <legend className="font-semibold">Basic Information</legend>
            <div className="grid gap-2 md:grid-cols-2 mt-2">
              <div>
                <label className="text-sm">Full Name</label>
                <input name="fullName" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Contact Number</label>
                <input name="contactNumber" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input name="email" type="email" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Aadhaar Number</label>
                <input name="aadhaar" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Farm & Crop Details</legend>
            <div className="grid gap-2 md:grid-cols-2 mt-2">
              <div>
                <label className="text-sm">Total Land Area (acres)</label>
                <input name="landArea" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Crops Grown</label>
                <input name="crops" placeholder="Comma separated" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Type of Farming</label>
                <select name="farmingType" className="mt-1 w-full rounded-md border border-input px-3 py-2">
                  <option>Conventional</option>
                  <option>Organic</option>
                  <option>Mixed</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Irrigation Method</label>
                <input name="irrigation" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Fertilizer & Pesticide Usage</label>
                <input name="fertilizerUsage" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Harvest Seasons</label>
                <input name="harvestSeasons" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Average Yield (quintals/tons)</label>
                <input name="averageYield" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Previous Buyers</label>
                <input name="previousBuyers" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Location Details</legend>
            <div className="grid gap-2 md:grid-cols-2 mt-2">
              <div>
                <label className="text-sm">Village</label>
                <input name="village" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Taluk / Tehsil</label>
                <input name="taluk" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">District</label>
                <input name="district" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">State</label>
                <input name="state" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Pin Code</label>
                <input name="pincode" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>

              <div>
                <label className="text-sm">Geo-Location</label>
                <div className="mt-2 flex gap-2">
                  <button type="button" onClick={fetchLocation} className="rounded-md bg-primary text-primary-foreground px-3 py-2">Fetch Location</button>
                  <div className="text-sm text-foreground/70 flex items-center">{coords ? `${coords.lat.toFixed(5)}, ${coords.lon.toFixed(5)}` : 'Not fetched'}</div>
                </div>
                <div className="mt-2">
                  {coords ? (
                    <iframe title="map" src={`https://www.openstreetmap.org/export/embed.html?marker=${coords.lat},${coords.lon}&amp;layer=mapnik&bbox=${coords.lon - 0.02}%2C${coords.lat - 0.02}%2C${coords.lon + 0.02}%2C${coords.lat + 0.02}`} className="w-full h-40 rounded-md border" />
                  ) : (
                    <div className="w-full h-40 rounded-md border bg-muted/20 flex items-center justify-center text-sm text-foreground/70">Map preview</div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm">Nearest Market / Mandi</label>
                <input name="nearestMarket" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Logistics & Supply Preferences</legend>
            <div className="grid gap-2 md:grid-cols-2 mt-2">
              <div>
                <label className="text-sm">Preferred Mode of Delivery</label>
                <input name="preferredDelivery" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Storage Facilities Available</label>
                <input name="storageFacilities" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Distance from Nearest Major Road (km)</label>
                <input name="distanceRoad" className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Availability of Transport Vehicle</label>
                <select name="transportVehicle" className="mt-1 w-full rounded-md border border-input px-3 py-2">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Payment & Banking Details</legend>
            <div className="grid gap-2 md:grid-cols-2 mt-2">
              <div>
                <label className="text-sm">Preferred Payment Method</label>
                <select name="paymentMethod" className="mt-1 w-full rounded-md border border-input px-3 py-2">
                  <option>Bank Transfer</option>
                  <option>UPI</option>
                  <option>Cash</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Supporting Documents (crop image)</label>
                <input name="cropImage" type="file" accept="image/*" className="mt-1 w-full" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-semibold">Additional Information</legend>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center gap-3">
                <label className="text-sm">Willing to Partner for Long-Term Supply?</label>
                <select name="longTerm" className="mt-1 rounded-md border border-input px-3 py-2">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Additional Remarks</label>
                <textarea name="remarks" className="mt-1 w-full rounded-md border border-input px-3 py-2" rows={3} />
              </div>
            </div>
          </fieldset>

          <DialogFooter>
            <Button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Registration'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
