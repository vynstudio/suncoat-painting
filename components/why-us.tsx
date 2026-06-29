import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Vetted",
    desc: "Background-checked crews with full liability insurance for your complete peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time & Reliable",
    desc: "Clear schedules and consistent crews. We show up when we say we will.",
  },
  {
    icon: Award,
    title: "Premium Finish Quality",
    desc: "Meticulous surface prep and top-tier paints for results that last through Florida weather.",
  },
  {
    icon: Users,
    title: "Referral-Driven Business",
    desc: "Most of our work comes from happy homeowners and real estate professionals.",
  },
];

export function WhyUs() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-xl">
          <div className="text-xs font-semibold tracking-[2px] text-amber-600">WHY HOMEOWNERS TRUST US</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter">Professional painting. Exceptional care.</h2>
          <p className="mt-3 text-slate-600">
            We don’t just paint walls — we protect your home and deliver finishes you’ll love for years.
          </p>
        </div>

        {/* Mobile 1 | iPad 2 | Desktop 4 */}
        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <reason.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
