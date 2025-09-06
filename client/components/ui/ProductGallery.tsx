import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const images = [
  "https://images.pexels.com/photos/6707512/pexels-photo-6707512.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/32567312/pexels-photo-32567312.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7782941/pexels-photo-7782941.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6707512/pexels-photo-6707512.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export default function ProductGallery(){
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {images.map((src, i) => (
          <div key={i} className="rounded-lg overflow-hidden bg-white border">
            <img src={src} className="w-full h-40 object-cover" alt="product" />
            <div className="p-3">
              <Dialog>
                <DialogTrigger asChild>
                  <button onClick={() => setActive(src)} className="text-sm text-primary underline">View</button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Product Image</DialogTitle>
                  </DialogHeader>
                  <img src={active ?? src} alt="large" className="w-full h-64 object-cover rounded" />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
