"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Paintbrush } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
            <Paintbrush className="h-4 w-4" />
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-slate-950">
              {siteConfig.brand}
            </div>
            <div className="text-[10px] -mt-0.5 text-slate-500">Central Florida</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a href="#services" className="hover:text-slate-950">Services</a>
          <a href="#process" className="hover:text-slate-950">Process</a>
          <a href="#projects" className="hover:text-slate-950">Projects</a>
          <a href="#areas" className="hover:text-slate-950">Areas</a>
          <Link href="/contact" className="hover:text-slate-950">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 md:block"
          >
            Get quote
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
