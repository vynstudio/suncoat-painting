"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, X } from "lucide-react";
import { LeadForm } from "./lead-form";

export function StickyCTA() {
  const [open, setOpen] = useState(false);

  // Close modal on escape
  // (simple inline for now, no useEffect needed for basic)

  return (
    <>
      {/* Mobile-only sticky bottom CTA bar — always visible, thumb-friendly */}
      <div className="fixed bottom-0 left-0 right-0 z-[65] md:hidden border-t border-slate-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="flex h-[60px]">
          {/* Primary phone CTA - big tap target, full number */}
          <a
            href={siteConfig.phoneHref}
            className="flex flex-1 items-center justify-center gap-2.5 bg-slate-900 active:bg-black text-white active:scale-[0.985] transition-all"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[15px] font-semibold tracking-[-0.2px]">
              {siteConfig.phoneDisplay}
            </span>
          </a>

          {/* Secondary quote CTA */}
          <Link
            href="/#quote"
            className="flex flex-1 items-center justify-center gap-2 bg-amber-500 active:bg-amber-600 text-white font-semibold text-[15px] active:scale-[0.985] transition-all"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Mobile quote modal (bottom sheet style) */}
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Sheet */}
          <div className="relative w-full max-h-[88dvh] rounded-t-3xl bg-white shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between px-5 pt-5 pb-3 border-b border-slate-100">
              <div>
                <div id="quote-modal-title" className="font-semibold text-xl tracking-tight">
                  Get your free quote
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  We usually reply within 15 minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 -mr-1.5 text-slate-400 hover:text-slate-600 active:bg-slate-100 rounded-full"
                aria-label="Close quote form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-5 overflow-auto flex-1">
              <LeadForm source="sticky-mobile" />
            </div>

            {/* Bottom helper */}
            <div className="px-5 py-4 bg-slate-50 border-t text-center text-sm">
              Or call us directly:{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-slate-900 underline"
                onClick={() => setOpen(false)}
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
