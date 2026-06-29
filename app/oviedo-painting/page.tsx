import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("oviedo")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Oviedo, FL | ${siteConfig.brand}`,
    description: `Professional residential painting in Oviedo. Interior & exterior painting for family homes and historic properties. Free quotes for ${city.fullName}.`,
    openGraph: {
      title: `Oviedo House Painters | ${siteConfig.brand}`,
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

export default function OviedoPainting() {
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
            House Painting in Oviedo, Florida
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-slate-600">
            Trusted painting for Oviedo families. We handle new construction, established neighborhoods, and historic homes with the care Central Florida deserves.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <h2>Why Oviedo homeowners choose {siteConfig.brand}</h2>
          <p>
            Oviedo blends suburban family living with historic charm. Our teams are familiar with the challenges of painting in this area — from new builds needing full protection to older homes requiring delicate surface prep. We use premium paints formulated for Florida’s unique climate.
          </p>

          <h3>Popular services in Oviedo</h3>
          <ul>
            <li>Full interior painting for family homes</li>
            <li>Exterior painting and siding protection</li>
            <li>Trim, doors, and cabinet refinishing</li>
            <li>Color selection for Florida light and family living</li>
          </ul>

          <h3>Neighborhoods we serve</h3>
          <p>
            We work throughout Oviedo including areas near the University of Central Florida, historic downtown Oviedo, and family communities off Lockwood and Mitchell Hammock.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Ready for a quote in {city.name}?</h3>
          <p className="mt-1 text-white/80">Tell us about your project — we’ll respond fast.</p>
          <div className="mt-6 max-w-md">
            <LeadForm variant="compact" source="oviedo-page" />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
