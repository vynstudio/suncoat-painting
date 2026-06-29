import { ClipboardList, FileText, Paintbrush, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & walkthrough",
    desc: "We visit your home (or review detailed photos), discuss your goals, and take precise measurements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Detailed proposal",
    desc: "You receive a clear written estimate with scope, timeline, paint products, and fixed pricing — no surprises.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Prep, paint & protect",
    desc: "Furniture moving, floor/wall protection, surface repairs, and expert application by consistent crews.",
    icon: Paintbrush,
  },
  {
    number: "04",
    title: "Final walkthrough",
    desc: "We walk the entire project with you, touch up anything needed, and leave your home spotless.",
    icon: CheckCircle,
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-slate-100 bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-xl">
          <div className="text-xs font-semibold tracking-[2px] text-amber-600">OUR PROCESS</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter">How we deliver consistent, high-quality results</h2>
        </div>

        {/* Mobile: 1 col | iPad: 2 col | Desktop: 4 col */}
        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="font-mono text-xs tracking-[3px] text-amber-600">{step.number}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
