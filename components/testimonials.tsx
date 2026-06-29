import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The crew was incredibly professional. They protected every surface and the paint job looks like it was done by a high-end studio. We get compliments constantly.",
    name: "Elena M.",
    location: "Winter Park",
  },
  {
    quote: "They gave us honest advice on colors and finished the entire interior in less time than promised. The quote was exactly what we paid. Highly recommend.",
    name: "David & Rachel T.",
    location: "Winter Garden",
  },
  {
    quote: "Our 1990s home exterior looks brand new. Proper prep made all the difference — no peeling after two Florida summers.",
    name: "Marcus L.",
    location: "Clermont",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-9">
          <div className="text-xs font-semibold tracking-[2px] text-amber-600">FROM HOMEOWNERS</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter">Real results, real people</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
              <Quote className="h-5 w-5 text-amber-600" />
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">“{t.quote}”</p>
              <div className="mt-6 text-sm">
                <span className="font-medium text-slate-950">{t.name}</span>
                <span className="text-slate-500"> — {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
