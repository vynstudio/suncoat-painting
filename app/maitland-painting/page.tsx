import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("maitland")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Maitland, FL | ${siteConfig.brand}`,
    description: `Premium house painting in Maitland. Interior and exterior services for upscale homes near lakes and parks. Free quotes for ${city.fullName}.`,
    openGraph: {
      title: `Maitland Painters | ${siteConfig.brand}`,
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

export default function MaitlandPainting() {
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
            House Painting in Maitland, Florida
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-slate-600">
            High-quality painting for Maitland’s beautiful lakefront and established homes. Attention to detail that matches the character of this Central Florida community.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <h2>Why Maitland homeowners choose {siteConfig.brand}</h2>
          <p>
            Maitland is known for its scenic lakes, parks, and upscale residential areas. Our painting crews bring the same level of care to these homes — using top-tier products that resist Florida weather while enhancing curb appeal. We’re experienced with both historic properties and modern builds.
          </p>

          <h3>Popular services in Maitland</h3>
          <ul>
            <li>Interior painting for lakefront and family homes</li>
            <li>Exterior painting with weather-resistant finishes</li>
            <li>Fine trim and millwork work</li>
            <li>Whole-home color consultation</li>
          </ul>

          <h3>Areas we serve</h3>
          <p>
            We paint homes throughout Maitland, including neighborhoods around Lake Maitland, near the Enzian Theater, and in the established residential pockets off US 17-92 and Horatio Avenue.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Ready for a quote in {city.name}?</h3>
          <p className="mt-1 text-white/80">Tell us about your project — we’ll respond fast.</p>
          <div className="mt-6 max-w-md">
            <LeadForm variant="compact" source="maitland-page" />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
