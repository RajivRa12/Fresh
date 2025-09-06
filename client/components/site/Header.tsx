import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import FarmerOnboard from "@/components/site/FarmerOnboard";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "For Business", href: "#business" },
  { label: "Contract Farming", href: "#contract" },
  { label: "For Farmers", href: "#farmers" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2 font-extrabold text-xl text-primary">
          <span className="inline-block h-6 w-6 rounded-sm bg-primary/10 ring-1 ring-primary/30" aria-hidden />
          FreshStore
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
          <div><FarmerOnboard triggerLabel="Join as a Farmer" /></div>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className={cn("md:hidden border-t border-border bg-white", open ? "block" : "hidden")}> 
        <div className="container mx-auto py-3 space-y-2">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-foreground/80">
              {n.label}
            </a>
          ))}
          <div className="w-full">
            <FarmerOnboard triggerLabel="Join as a Farmer" closeMenu={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
