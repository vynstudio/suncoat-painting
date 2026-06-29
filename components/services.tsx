import { siteConfig } from "@/lib/site-config";
import { Paintbrush, Home, DoorOpen, Palette } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    desc: "Living rooms, bedrooms, kitchens, bathrooms, and whole-home refreshes with premium low-VOC paints.",
    icon: Paintbrush,
  },
  {
    title: "Exterior Painting",
    desc: "Full house exteriors, trim, siding, garages, and fences. Florida weather-resistant systems.",
    icon: Home,
  },
  {
    title: "Trim, Doors & Millwork",
    desc: "Crisp white trim, baseboards, doors, and detailed work that makes the biggest visual difference.",
    icon: DoorOpen,
  },
  {
    title: "Color Consultation",
    desc: "Professional guidance on palettes that increase light, flow, and resale value in Florida homes.",
    icon: Palette,
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-slate-100 bg-white section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-xl">
          <div className="text-xs font-semibold tracking-[2px] text-amber-600">WHAT WE DO BEST</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter">Residential painting services in Central Florida</h2>
          <p className="mt-3 text-slate-600">
            From careful prep to the final brush stroke — we handle every detail so you get results that last.
          </p>
        </div>

        {/* Mobile: 1 col | iPad: 2 col | Desktop: 4 col */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <service.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">{service.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Serving {siteConfig.serviceCities.slice(0, 5).join(", ")} and surrounding communities.
        </p>
      </div>
    </section>
  );
}
