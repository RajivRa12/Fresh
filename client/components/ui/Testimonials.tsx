import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Chef Anita",
    role: "Head Chef, Oceanic Hotel",
    quote: "FreshStore's daily deliveries keep our kitchen running. Produce quality is chef-grade every time.",
  },
  {
    name: "Ravi",
    role: "Owner, GreenMart",
    quote: "Reliable supply and great wholesale pricing — our shelves never run empty.",
  },
  {
    name: "Priya",
    role: "Event Caterer",
    quote: "Large orders for events are always on-time and cost-effective.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {testimonials.map((t, i) => (
            <figure key={i} className="min-w-full p-6 rounded-xl border bg-white">
              <blockquote className="text-lg">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-foreground/70">{t.name} — {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <Button onClick={() => emblaApi?.scrollPrev()} variant="outline">Prev</Button>
        <Button onClick={() => emblaApi?.scrollNext()}>Next</Button>
      </div>
    </div>
  );
}
