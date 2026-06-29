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
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFormData({ name: "", phone: "", email: "", address: "", details: "" });
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Optimized inputs: larger tap areas on mobile/iPad */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5">Full Name</label>
          <input
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
          <label className="block text-xs font-medium text-slate-600 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base placeholder:text-slate-400 focus:border-slate-900 focus:outline-none md:py-2.5 md:text-sm"
            placeholder="(407) 555-1234"
          />
        </div>
      </div>

      {!isCompact && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Email (optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Property Address / Area</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                placeholder="Winter Park, FL or exact address"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">What do you need painted?</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
              placeholder="Interior of 3 bedrooms + living room, or full exterior repaint..."
            />
          </div>
        </>
      )}

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

      <p className="text-center text-[10px] text-slate-500">
        We usually reply within 15 minutes. No obligation.
      </p>
    </form>
  );
}
