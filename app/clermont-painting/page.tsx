import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("clermont")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Clermont, FL | ${siteConfig.brand}`,
    description: `Residential painting services in Clermont, FL. Interior and exterior painting for homes in the hills and lake communities. Professional prep and durable finishes. Free quotes.`,
    openGraph: {
      title: `Clermont House Painters | ${siteConfig.brand}`,
    },
  };
}

const cityJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "House Painting",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "City",
    name: city.fullName,
  },
  description: `Professional interior and exterior house painting services in ${city.fullName}.`,
};

export default function ClermontPainting() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />

      <SiteHeader />

      <div className="border-b border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-semibold tracking-tighter">
            House Painting in Clermont, Florida
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-slate-600">
            Professional painting for Clermont homes. We handle the rolling hills, lakefront properties, and new construction with expert prep and Florida-ready finishes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <h2>Why Clermont homeowners choose {siteConfig.brand}</h2>
          <p>
            Clermont’s unique terrain (one of the few hilly areas in Central Florida) and lake communities create specific painting challenges — sun exposure on hillsides and moisture near water. We use premium elastomeric and mildew-resistant coatings for exteriors and focus on clean, lasting results for interiors.
          </p>

          <h3>Popular services in Clermont</h3>
          <ul>
            <li>Exterior painting on hillside and lake homes</li>
            <li>Full interior refreshes for new and existing homes</li>
            <li>Deck, fence, and garage door painting</li>
            <li>Color consultation for bright Florida light</li>
          </ul>

          <h3>Areas we commonly serve</h3>
          <p>
            We work throughout Clermont including the 34711 and 34714 areas, near the Florida Turnpike, in the Four Corners region, and around the many lakes and golf communities.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Ready for a quote in {city.name}?</h3>
          <p className="mt-1 text-white/80">Tell us about your project — we’ll respond fast.</p>
          <div className="mt-6 max-w-md">
            <LeadForm variant="compact" source="clermont-page" />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
