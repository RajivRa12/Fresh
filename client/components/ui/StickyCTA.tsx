import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StickyCTA(){
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed right-4 bottom-6 z-50">
        <Dialog>
          <DialogTrigger asChild>
            <button className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg ring-2 ring-primary/30">Partner</button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Partner Signup</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! Our team will contact you.');}} className="space-y-3">
              <div>
                <label className="text-sm">Name</label>
                <input required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Phone</label>
                <input required className="mt-1 w-full rounded-md border border-input px-3 py-2" />
              </div>
              <DialogFooter>
                <Button type="submit">Request Contact</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
