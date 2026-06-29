"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#process",  label: "Process" },
    { href: "/projects",  label: "Projects" },
    { href: "/#areas",    label: "Areas" },
    { href: "/contact",   label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo from concept-02-stacked: icon + text on mobile, full horizontal logo on desktop */}
        <Link href="/" className="flex items-center gap-3">
          {/* Mobile: icon mark + full "SunCoat Painting" name */}
          <Image 
            src="/logos/icon.svg" 
            alt="SunCoat" 
            width={36}
            height={36}
            className="h-9 w-9 flex-shrink-0 md:hidden" 
          />
          <div className="md:hidden">
            <div className="text-base font-semibold tracking-tight text-slate-950 leading-none">
              {siteConfig.brand}
            </div>
            <div className="text-[10px] -mt-0.5 text-slate-500">Central Florida</div>
          </div>

          {/* Desktop + iPad: horizontal logo (icon + wordmark) from the kit */}
          <Image 
            src="/logos/horizontal-primary.svg" 
            alt="SunCoat Painting" 
            width={113}
            height={32}
            className="hidden h-8 md:block" 
          />
        </Link>

        {/* Desktop + iPad Navigation (horizontal) */}
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-slate-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link href="/blog" className="hover:text-slate-950 transition-colors">Blog</Link>
        </nav>

        {/* Desktop + iPad CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#quote"
            className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
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

        {/* Mobile only: Hamburger + prominent phone number */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white active:bg-black"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phoneDisplay}
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col px-4 py-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2.5 text-slate-700 hover:text-slate-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link 
              href="/blog" 
              className="py-2.5 text-slate-700 hover:text-slate-950"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href="/#quote"
              className="mt-2 rounded-full border border-slate-300 py-2.5 text-center font-medium text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a free quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
