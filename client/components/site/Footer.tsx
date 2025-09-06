export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container mx-auto py-16 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <a href="#home" className="font-extrabold text-2xl text-primary">FreshStore</a>
          <p className="mt-1 text-sm text-foreground/80 max-w-xs">Farm-to-business produce with reliable logistics, fair prices for farmers, and chef-grade quality for businesses.</p>
          <div className="flex items-center gap-3 mt-3 text-sm text-foreground/60">
            <span>Follow us</span>
            <a aria-label="Twitter" href="#" className="text-foreground/60 hover:text-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4.31 2-6.3 2.5A4.48 4.48 0 0 0 12 6.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="currentColor"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="text-foreground/60 hover:text-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#business" className="hover:text-foreground">For Business</a></li>
            <li><a href="#contract" className="hover:text-foreground">Contract Farming</a></li>
            <li><a href="#farmers" className="hover:text-foreground">For Farmers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Products & Resources</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><a href="#products" className="hover:text-foreground">Our Products</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="/contract-sample.txt" className="hover:text-foreground">Sample Contract</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>

        <div className="md:text-right">
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <p className="text-sm text-foreground/70 mb-3">Email us or subscribe for pricing updates and farmer programs.</p>

          <form className="flex gap-2 mb-4" onSubmit={(e) => { e.preventDefault(); const form = e.target as HTMLFormElement; const fd = new FormData(form); const email = fd.get('email'); alert(`Subscribed: ${email}`); form.reset(); }}>
            <input name="email" type="email" required placeholder="you@company.com" className="flex-1 rounded-md border border-input px-3 py-3 text-sm" />
            <button className="rounded-md bg-primary text-primary-foreground px-4 py-3 text-sm">Subscribe</button>
          </form>

          <div className="text-sm text-foreground/60">© {new Date().getFullYear()} FreshStore. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
