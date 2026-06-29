import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("orlando")!;

export const metadata = {
  title: `House Painting in Orlando, FL | ${siteConfig.brand}`,
  description: `Expert residential painting in Orlando. Interior & exterior house painting with professional prep and clean finishes. Free quotes for ${city.fullName}.`,
};

export default function OrlandoPainting() {
  return (
    <>
      <SiteHeader />

      <div className="border-b border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-semibold tracking-tighter">
            House Painting in Orlando, Florida
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-slate-600">
            Professional interior and exterior painting for Orlando homes. Careful prep, premium materials, and results that hold up to Florida weather.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <h2>Why Orlando homeowners choose {siteConfig.brand}</h2>
          <p>
            Orlando’s climate is tough on paint. We focus on proper surface preparation and high-quality coatings that resist humidity, UV, and rain. Whether you need a full exterior repaint, interior refresh, or detailed trim work, our crews deliver consistent results across neighborhoods like College Park, Thornton Park, Dr. Phillips, and Baldwin Park.
          </p>

          <h3>Popular services in Orlando</h3>
          <ul>
            <li>Full interior painting (walls, ceilings, trim)</li>
            <li>Exterior house painting &amp; weatherproofing</li>
            <li>Cabinet &amp; millwork refinishing</li>
            <li>Color consultation and design support</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Ready for a quote in {city.name}?</h3>
          <p className="mt-1 text-white/80">Tell us about your project — we’ll respond fast.</p>
          <div className="mt-6 max-w-md">
            <LeadForm variant="compact" source="orlando-page" />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
