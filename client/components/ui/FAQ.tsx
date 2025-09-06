import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I sign up as a business?", a: "Click 'For Businesses' and contact sales or use the volume pricing to select a plan." },
  { q: "How do farmers get paid?", a: "Payments are processed within 7 business days after collection and quality checks." },
  { q: "Do you support bulk deliveries for events?", a: "Yes — our Caterers plan supports event-specific bulk deliveries and scheduling." },
];

export default function FAQ(){
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible>
        {faqs.map((f, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
