import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PricingModal({plan}:{plan:{name:string;price:string;desc:string}}){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-md border px-3 py-2 text-sm">Details</button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{plan.name} — {plan.price}</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-foreground/70">
          <p>{plan.desc}</p>
        </div>
        <DialogFooter>
          <Button>Contact Sales</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
