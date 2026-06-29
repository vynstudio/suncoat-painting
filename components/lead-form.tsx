"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Send, CheckCircle } from "lucide-react";

interface LeadFormProps {
  variant?: "default" | "compact";
  source?: string;
}

export function LeadForm({ variant = "default", source = "homepage" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    squareFootage: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mapbox address autocomplete (for better quotes using property data)
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [addressDebounce, setAddressDebounce] = useState<NodeJS.Timeout | null>(null);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  const fetchMapboxSuggestions = async (query: string) => {
    if (!query || query.length < 3) {
      setAddressSuggestions([]);
      setIsLoadingSuggestions(false);
      return;
    }
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!token) {
      console.warn("NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN not set");
      return;
    }
    setIsLoadingSuggestions(true);
    try {
      const params = new URLSearchParams({
        access_token: token,
        limit: "5",
        country: "US",
        language: "en",
        types: "address",
        autocomplete: "true",
      });
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?${params.toString()}`
      );
      if (!res.ok) throw new Error(`Geocoding failed with status ${res.status}`);
      const data = await res.json();
      setAddressSuggestions(data.features || []);
      setShowAddressSuggestions(true);
    } catch (err) {
      console.error("Mapbox autocomplete error", err);
      setAddressSuggestions([]);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    const value = e.target.value;
    if (addressDebounce) clearTimeout(addressDebounce);
    const timeout = setTimeout(() => fetchMapboxSuggestions(value), 320);
    setAddressDebounce(timeout);
  };

  const selectAddress = (suggestion: any) => {
    const fullAddress = suggestion.place_name || suggestion.text || "";
    setFormData((prev) => ({ ...prev, address: fullAddress }));
    setAddressSuggestions([]);
    setShowAddressSuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", address: "", squareFootage: "", details: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle className="h-8 w-8 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-green-900">Thank you!</h3>
        <p className="mt-2 max-w-xs text-green-800">
          We received your request. A member of our team will contact you within 15 minutes during business hours.
        </p>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form 
      onSubmit={handleSubmit} 
      action="/api/quote" 
      method="POST" 
      className="space-y-4"
    >
      {/* Optimized inputs: larger tap areas on mobile/iPad */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="block text-xs font-medium text-slate-600 mb-1.5">Full Name</label>
          <input
            id="lead-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none md:py-2.5 md:text-sm"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="block text-xs font-medium text-slate-600 mb-1.5">Phone Number</label>
          <input
            id="lead-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none md:py-2.5 md:text-sm"
            placeholder="(407) 555-0123"
          />
        </div>
      </div>

      {!isCompact && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="lead-email" className="block text-xs font-medium text-slate-600 mb-1.5">Email (optional)</label>
              <input
                id="lead-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none md:py-2.5 md:text-sm"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="lead-square-footage" className="block text-xs font-medium text-slate-600 mb-1.5">Square Footage (optional)</label>
              <input
                id="lead-square-footage"
                type="number"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none md:py-2.5 md:text-sm"
                placeholder="e.g. 2200"
              />
            </div>
          </div>

          {/* Address with Mapbox autocomplete */}
          <div className="relative">
            <label htmlFor="lead-address" className="block text-xs font-medium text-slate-600 mb-1">Property Address / Area</label>
            <input
              id="lead-address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleAddressChange}
              onFocus={() => addressSuggestions.length > 0 && setShowAddressSuggestions(true)}
              onBlur={() => setTimeout(() => setShowAddressSuggestions(false), 150)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && addressSuggestions.length > 0) {
                  e.preventDefault();
                  selectAddress(addressSuggestions[0]);
                }
              }}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none pr-10 md:py-2.5 md:text-sm"
              placeholder="Start typing your address for autocomplete..."
            />
            {isLoadingSuggestions && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="animate-spin h-4 w-4 border-2 border-slate-300 border-t-amber-500 rounded-full"></div>
              </div>
            )}
            {showAddressSuggestions && addressSuggestions.length > 0 && (
              <div className="absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto text-sm">
                {addressSuggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="w-full text-left px-4 py-2.5 hover:bg-amber-50 active:bg-amber-100"
                    onMouseDown={(e) => {
                      e.preventDefault(); // prevent input blur
                      selectAddress(sug);
                    }}
                  >
                    {sug.place_name || sug.text}
                  </button>
                ))}
              </div>
            )}
            <p className="text-xs text-slate-500 mt-1">
              Autocomplete powered by Mapbox • Helps us estimate sq footage & prepare accurate quote
            </p>
          </div>

          <div>
            <label htmlFor="lead-details" className="block text-xs font-medium text-slate-600 mb-1">What do you need painted?</label>
            <textarea
              id="lead-details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none md:py-2.5 md:text-sm"
              placeholder="Interior of 3 bedrooms + living room, or full exterior repaint..."
            />
          </div>
        </>
      )}

      {/* Honeypot for spam protection - hidden from users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 disabled:opacity-70"
      >
        {status === "sending" ? "Sending request..." : (
          <>Get my free quote <Send className="h-4 w-4" /></>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong. Please call us at {siteConfig.phoneDisplay}.
        </p>
      )}

      <p className="text-center text-xs text-slate-500">
        We usually reply within 15 minutes. No obligation.
      </p>
    </form>
  );
}
