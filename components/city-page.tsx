"use client";

import Link from "next/link";
import { LeadForm } from "./lead-form";
import { siteConfig } from "@/lib/site-config";
import { 
  Paintbrush, 
  Home, 
  DoorOpen, 
  Palette, 
  CheckCircle, 
  Clock, 
  Shield, 
  Award 
} from "lucide-react";

interface CityPageProps {
  city: {
    slug: string;
    name: string;
    fullName: string;
  };
  introText: string;
  whyParagraph: string;
  services: string[];
  neighborhoods: string;
  relatedPosts: Array<{ title: string; href: string }>;
}

export function CityPage({ city, introText, whyParagraph, services, neighborhoods, relatedPosts }: CityPageProps) {
  // City-specific services with icons
  const serviceItems = [
    { icon: Paintbrush, text: services[0] || "Full interior painting (walls, ceilings, trim)" },
    { icon: Home, text: services[1] || "Exterior house painting & weatherproofing" },
    { icon: DoorOpen, text: services[2] || "Trim, doors, and millwork" },
    { icon: Palette, text: services[3] || "Color consultation and design support" },
  ];

  const whyPoints = [
    { icon: Shield, title: "Expert Local Prep", desc: "We know Florida's humidity, sun, and storms." },
    { icon: Award, title: "Premium Materials", desc: "Mildew-resistant, UV-protected coatings." },
    { icon: Clock, title: "On-Time & Clean", desc: "Efficient crews that respect your home." },
    { icon: CheckCircle, title: "12+ Years Experience", desc: "Hundreds of Central Florida homes painted." },
  ];

  return (
    <div>
      {/* Hero / Intro - Rich design matching homepage */}
      <div className="border-b border-slate-100 bg-slate-50 section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              SERVING {city.fullName.toUpperCase()}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
              House Painting in {city.name}, Florida
            </h1>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              {introText}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us in this City - Card grid like homepage WhyUs */}
      <div className="section-padding border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">WHY {city.name.toUpperCase()}</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Why {city.name} homeowners choose {siteConfig.brand}
            </h2>
          </div>

          <p className="max-w-3xl text-slate-600 mb-8">{whyParagraph}</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((point, index) => (
              <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <point.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{point.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services in this City - Grid like Services component */}
      <div className="section-padding border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">SERVICES IN {city.name.toUpperCase()}</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Professional painting services tailored for {city.name}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {serviceItems.map((item, index) => (
              <div key={index} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Neighborhoods */}
      <div className="section-padding border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Areas We Serve in {city.name}</h2>
          <p className="text-slate-600 max-w-3xl">{neighborhoods}</p>
        </div>
      </div>

      {/* Process Teaser - Simple version */}
      <div className="section-padding border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 max-w-xl">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">OUR PROVEN PROCESS</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Same high standards, everywhere in Central Florida</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { num: "01", title: "Discovery", desc: "We assess your home and discuss goals." },
              { num: "02", title: "Prep & Protect", desc: "Thorough prep and careful protection of your space." },
              { num: "03", title: "Paint & Deliver", desc: "Expert application and final walkthrough." },
            ].map((step, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 p-6">
                <div className="text-sm font-mono tracking-widest text-amber-600 mb-2">{step.num}</div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Form - Styled like homepage */}
      <div className="section-padding bg-white pb-20 md:pb-0 quote-section">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">GET STARTED IN {city.name.toUpperCase()}</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Ready for a professional paint job in {city.name}?</h2>
            <p className="mt-2 text-slate-600">Tell us about your project. We’ll send a detailed quote within hours.</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <LeadForm variant="compact" source={`${city.slug}-page`} />
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Or call <a href={siteConfig.phoneHref} className="font-medium text-slate-900 underline">{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </div>

      {/* Helpful Reading - Nicer cards */}
      <div className="section-padding border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="font-semibold tracking-tight mb-6 text-lg">Helpful Reading for {city.name} Homeowners</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map((post, index) => (
              <Link 
                key={index} 
                href={post.href} 
                className="group block rounded-2xl border border-slate-100 bg-white p-5 hover:border-amber-200 hover:shadow-sm transition"
              >
                <div className="text-sm font-medium text-amber-600 group-hover:underline">{post.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
