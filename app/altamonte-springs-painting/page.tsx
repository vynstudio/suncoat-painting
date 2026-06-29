import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("altamonte-springs")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Altamonte Springs, FL | ${siteConfig.brand}`,
    description: `Professional house painting in Altamonte Springs. Interior painting for homes & condos, exterior services, and expert trim work. Free quotes for ${city.fullName}.`,
    openGraph: {
      title: `Altamonte Springs Painters | ${siteConfig.brand}`,
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

export default function AltamonteSpringsPainting() {
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
            House Painting in Altamonte Springs, Florida
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-slate-600">
            Expert painting for Altamonte Springs homes, condos, and townhomes. Careful prep and finishes designed for Florida's humid climate.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <h2>Why Altamonte Springs homeowners trust {siteConfig.brand}</h2>
          <p>
            Altamonte Springs has a mix of single-family homes, condos near the mall, and older neighborhoods. We tailor our approach: moisture-resistant systems for exteriors and low-VOC paints for interiors. Our crews are experienced with the unique challenges of painting in Seminole County.
          </p>

          <h3>Popular services in Altamonte Springs</h3>
          <ul>
            <li>Interior painting for homes and condos (walls, ceilings, trim)</li>
            <li>Exterior painting and weatherproofing</li>
            <li>Cabinet painting and refinishing</li>
            <li>Color consultation for modern and traditional Florida homes</li>
          </ul>

          <h3>Neighborhoods we serve</h3>
          <p>
            We regularly work in areas around Cranes Roost, near Altamonte Mall, Spring Oaks, and throughout the 32701 and 32714 zip codes.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Ready for a quote in {city.name}?</h3>
          <p className="mt-1 text-white/80">Tell us about your project — we’ll respond fast.</p>
          <div className="mt-6 max-w-md">
            <LeadForm variant="compact" source="altamonte-page" />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
