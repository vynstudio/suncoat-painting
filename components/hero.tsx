import { siteConfig } from "@/lib/site-config";
import { Clock, FileText, Shield, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-100 bg-slate-950 text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/70 via-slate-950/60 to-slate-950/40" />

      {/* Desktop & iPad Hero */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-[1.5px] text-white/80 backdrop-blur">
            {siteConfig.serviceAreaLabel}
          </div>

          {/* Responsive Typography: Mobile < iPad < Desktop */}
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            Beautiful homes deserve <span className="text-amber-400">beautiful paint.</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-white/90 sm:text-lg md:max-w-xl">
            {siteConfig.tagline} Expert prep and flawless finishes for homeowners across Central Florida.
          </p>

          {/* Desktop/iPad CTAs side-by-side, Mobile stacked */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-amber-100"
            >
              Get a free quote
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" /> Same-week scheduling
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5" /> Clear written quotes
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5" /> Fully protected homes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
