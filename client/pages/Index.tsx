import { Button } from "@/components/ui/button";
import { useState } from "react";
import Testimonials from "@/components/ui/Testimonials";
import FAQ from "@/components/ui/FAQ";
import ProductGallery from "@/components/ui/ProductGallery";
import StatsCounter from "@/components/ui/StatsCounter";
import StickyCTA from "@/components/ui/StickyCTA";
import PricingModal from "@/components/ui/PricingModal";
import FarmerOnboard from "@/components/site/FarmerOnboard";

const heroBg =
  "https://images.pexels.com/photos/7782941/pexels-photo-7782941.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function Index() {
  const [pricingPlan, setPricingPlan] = useState<string | null>(null);

  const handlePricingSelect = (plan: string) => {
    setPricingPlan(plan);
    alert(`Selected plan: ${plan}. Our team will reach out to finalize details.`);
  };

  const handleContractSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      farmName: fd.get("farmName"),
      contactName: fd.get("contactName"),
      phone: fd.get("phone"),
      crop: fd.get("crop"),
      expectedQty: fd.get("expectedQty"),
    };
    console.log("Contract signup:", payload);
    alert("Thanks! We received your request. Our partnerships team will contact you soon.");
    e.currentTarget.reset();
  };

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative flex items-center min-h-[60vh] lg:min-h-[70vh]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              FreshStore
              <span className="block text-lg font-normal mt-2 text-white/90">Minimal. Reliable. Farm-to-business produce.</span>
            </h1>
            <p className="mt-6 text-white/80 max-w-xl">Tailored produce solutions for hotels, restaurants, supermarkets, caterers and food processors. Partner with vetted farmers and enjoy a transparent supply chain.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#business">For Businesses</a>
              </Button>
              <FarmerOnboard triggerLabel="Join as a Farmer" />
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses */}
      <section id="business" className="py-16 relative overflow-hidden">
        <img aria-hidden src="https://images.pexels.com/photos/6707512/pexels-photo-6707512.jpeg?auto=compress&cs=tinysrgb&w=1600" className="pointer-events-none absolute right-0 top-0 h-full w-[60%] object-cover opacity-10 md:opacity-20 -z-10" />
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold">For Businesses</h2>
            <p className="mt-3 text-foreground/70">Tailored solutions for different business types, ensuring fresh produce meets your specific operational needs.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">Hotels & Restaurants</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>Fresh ingredients delivered daily for your kitchen operations</li>
                <li>Daily delivery & chef-grade quality</li>
                <li>Flexible ordering & volume discounts</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">Supermarkets & Kirana Stores</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>Stock fresh produce with reliable supply chains</li>
                <li>Wholesale pricing & display-ready packaging</li>
                <li>Inventory support & regional sourcing</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">Caterers</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>Bulk orders for events and large-scale catering</li>
                <li>Event-specific orders & timely delivery</li>
                <li>Cost-effective pricing for large quantities</li>
              </ul>
            </article>

            <article className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">Food Processors</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>Raw materials for processing and manufacturing</li>
                <li>Processing-grade quality & large volumes</li>
                <li>Consistent supply and contract options</li>
              </ul>
            </article>
          </div>

          {/* Pricing cards */}
          <div className="mt-12 max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold">Volume Pricing</h3>
            <p className="text-sm text-foreground/70 mt-2">Simple, transparent pricing tiers — contact us for custom quotes.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border p-6 bg-white">
                <div className="text-2xl font-extrabold">Small</div>
                <div className="mt-2 text-foreground/70">Ideal for small kitchens</div>
                <div className="mt-4 text-3xl font-bold">₹50/kg</div>
                <div className="mt-4 flex items-center justify-between">
                  <Button onClick={() => handlePricingSelect('Small')}>Select</Button>
                  <PricingModal plan={{name:'Small', price:'₹50/kg', desc:'Ideal for small kitchens — low minimums, daily delivery options.'}} />
                </div>
              </div>

              <div className="rounded-xl border p-6 bg-white">
                <div className="text-2xl font-extrabold">Medium</div>
                <div className="mt-2 text-foreground/70">For restaurants & supermarkets</div>
                <div className="mt-4 text-3xl font-bold">₹40/kg</div>
                <div className="mt-4 flex items-center justify-between">
                  <Button onClick={() => handlePricingSelect('Medium')}>Select</Button>
                  <PricingModal plan={{name:'Medium', price:'₹40/kg', desc:'Best for restaurants & supermarkets — discounted volume pricing.'}} />
                </div>
              </div>

              <div className="rounded-xl border p-6 bg-white">
                <div className="text-2xl font-extrabold">Enterprise</div>
                <div className="mt-2 text-foreground/70">Bulk buyers & processors</div>
                <div className="mt-4 text-3xl font-bold">Contact us</div>
                <div className="mt-4 flex items-center justify-between">
                  <Button onClick={() => handlePricingSelect('Enterprise')}>Contact</Button>
                  <PricingModal plan={{name:'Enterprise', price:'Contact us', desc:'Custom enterprise pricing for large buyers and processors.'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold">Our Products</h2>
            <p className="mt-3 text-foreground/70">Fresh fruits and vegetables categorized for your business needs, with reliable supply cycles and quality assurance.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold">Leafy Greens</h4>
              <p className="mt-1 text-sm text-foreground/70">Daily Supply · Spinach, Lettuce, Kale, Cabbage, Bok Choy</p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold">Seasonal Fruits</h4>
              <p className="mt-1 text-sm text-foreground/70">Seasonal Cycles · Tomatoes, Mangoes, Oranges, Apples, Bananas</p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold">Staple Vegetables</h4>
              <p className="mt-1 text-sm text-foreground/70">Daily Supply · Onions, Potatoes, Carrots, Peppers, Garlic</p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold">Exotic Produce</h4>
              <p className="mt-1 text-sm text-foreground/70">Weekly Supply · Dragon Fruit, Avocados, Asparagus, Artichokes, Microgreens</p>
            </div>
          </div>

          {/* Product gallery */}
          <div className="mt-8">
            <ProductGallery />
          </div>

          {/* Downloadable contract docs */}
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <h4 className="font-semibold">Contract Farming Documents</h4>
            <p className="text-sm text-foreground/70 mt-2">Download a sample contract to understand terms and start discussions with our team.</p>
            <div className="mt-4">
              <a href="/contract-sample.txt" download className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
                Download Sample Contract
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted/10">
        <div className="container mx-auto">
          <h3 className="text-2xl font-extrabold text-center mb-6">What our customers say</h3>
          <Testimonials />
        </div>
      </section>

      {/* Contract Farming */}
      <section id="contract" className="py-16">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-extrabold">Contract Farming</h2>
            <p className="mt-3 text-foreground/70">Assured buyers, pre-arranged purchase agreements and support to scale production. Secure long-term demand for your crops with transparent terms.</p>
            <div className="mt-6 flex gap-3">
              <FarmerOnboard triggerLabel="Join as a Farmer" />
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h4 className="font-semibold">Contract Signup</h4>
            <p className="text-sm text-foreground/70 mt-2">Fill a short form and our partnerships team will follow up with details and next steps.</p>
            <form onSubmit={handleContractSignup} className="mt-4 space-y-3">
              <div>
                <label className="text-sm font-medium">Farm / Business Name</label>
                <input name="farmName" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Contact Name</label>
                  <input name="contactName" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input name="phone" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Primary Crop</label>
                <input name="crop" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Expected Quantity (kg)</label>
                <input name="expectedQty" required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <Button type="submit">Request Contract</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Partner / Farmers */}
      <section id="farmers" className="py-16 bg-secondary relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Left: Image mosaic */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <img src="https://images.pexels.com/photos/7782941/pexels-photo-7782941.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Farmer in field" className="w-full h-48 object-cover rounded-lg shadow-sm" />
                <img src="https://images.pexels.com/photos/6707512/pexels-photo-6707512.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Fresh produce" className="w-full h-48 object-cover rounded-lg shadow-sm" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <img src="https://images.pexels.com/photos/32567312/pexels-photo-32567312.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Market" className="col-span-2 h-32 w-full object-cover rounded-lg shadow-sm" />
                <img src="https://images.pexels.com/photos/6707512/pexels-photo-6707512.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Packaging" className="h-32 w-full object-cover rounded-lg shadow-sm" />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl font-extrabold">Partner With Us</h2>
              <p className="mt-3 text-foreground/90">Join our network of farmers and get fair prices for your produce. We eliminate middlemen and connect you directly with businesses looking for quality supply.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="p-4 bg-white rounded-lg text-center">
                  <h5 className="font-semibold">Easy Onboarding</h5>
                  <p className="mt-2 text-sm text-foreground/70">Simple registration with minimal paperwork — get started in 3 steps.</p>
                </div>
                <div className="p-4 bg-white rounded-lg text-center">
                  <h5 className="font-semibold">Transparent Pricing</h5>
                  <p className="mt-2 text-sm text-foreground/70">Fair market rates, real-time updates and clear payment terms.</p>
                </div>
                <div className="p-4 bg-white rounded-lg text-center">
                  <h5 className="font-semibold">Guaranteed Buyers</h5>
                  <p className="mt-2 text-sm text-foreground/70">Pre-arranged buyers and contract farming options ensure offtake.</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border bg-white p-6">
                <h4 className="font-semibold">Onboarding — 3 simple steps</h4>
                <ol className="mt-3 list-decimal list-inside text-sm text-foreground/80 space-y-2">
                  <li>Register and verify your farm details</li>
                  <li>Receive buyer matches and pricing</li>
                  <li>Schedule pickups and receive payments</li>
                </ol>
                <div className="mt-4 flex gap-3">
                  <FarmerOnboard triggerLabel="Join as a Farmer" />
                  <Button variant="outline" asChild>
                    <a href="/contract-sample.txt" target="_blank">Download Contract</a>
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-extrabold">500+</div>
                  <div className="text-sm text-foreground/70">Partner Farmers</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-extrabold">₹2.5Cr</div>
                  <div className="text-sm text-foreground/70">Paid to Farmers</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-extrabold">98%</div>
                  <div className="text-sm text-foreground/70">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-muted/10">
        <div className="container mx-auto">
          <h3 className="text-2xl font-extrabold text-center mb-6">Frequently Asked Questions</h3>
          <FAQ />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h3 className="text-2xl font-extrabold">Get in touch</h3>
            <p className="mt-3 text-foreground/70">Tell us your requirements and we will share a live price list or help you join our partner network.</p>
            <div className="mt-6 space-y-2 text-sm text-foreground/80">
              <p>Email: sales@freshstore.example</p>
              <p>Phone: +91 90000 00000</p>
              <p>Hours: 8:00–20:00 IST</p>
            </div>
          </div>

          <form className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <Button type="submit" className="w-full">Send</Button>
          </form>
        </div>
      </section>
      <StickyCTA />
    </>
  );
}
