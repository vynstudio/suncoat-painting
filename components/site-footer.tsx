import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-y-10 md:flex-row">
          <div>
            <div className="flex items-center gap-2 text-white">
              <img 
                src="/logos/icon.svg" 
                alt="SunCoat" 
                className="h-7 w-7" 
              />
              <span className="font-semibold">{siteConfig.brand}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm">{siteConfig.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm md:grid-cols-3">
            <div>
              <div className="mb-3 text-xs font-medium tracking-widest text-slate-500">COMPANY</div>
              <div className="space-y-1.5">
                <Link href="/about" className="block hover:text-white">About us</Link>
                <Link href="/projects" className="block hover:text-white">Projects</Link>
                <Link href="/contact" className="block hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <div className="mb-3 text-xs font-medium tracking-widest text-slate-500">AREAS</div>
              <div className="space-y-1.5">
                {siteConfig.cities.slice(0, 4).map((c) => (
                  <Link key={c.slug} href={`/${c.slug}-painting`} className="block hover:text-white">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3 text-xs font-medium tracking-widest text-slate-500">GET IN TOUCH</div>
              <a href={siteConfig.phoneHref} className="block hover:text-white">{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-white">{siteConfig.email}</a>
              <Link href="/contact" className="mt-2 block font-medium text-white">Request a quote →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-y-2 border-t border-white/10 pt-6 text-xs md:flex-row">
          <div>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/legal" className="hover:text-white">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
