import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";
import Link from "next/link";

const city = getCityBySlug("orlando")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Orlando, FL | Expert Painters ${siteConfig.brand}`,
    description: `Professional house painting in Orlando. Interior & exterior painting, trim work & color consultation. Licensed, insured painters serving ${city.fullName} and nearby areas. Free quotes.`,
    openGraph: {
      title: `House Painting Orlando FL | ${siteConfig.brand}`,
      description: `Top-rated residential painting in Orlando. Careful prep, premium finishes that last in Florida weather.`,
    },
  };
}

// Local schema for this city page
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: `Painting in ${city.name}`, item: `${siteConfig.url}/${city.slug}-painting` },
  ],
};

export default function OrlandoPainting() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

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

        <div className="mt-12">
          <h3 className="font-semibold mb-3">Helpful Reading</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><Link href="/blog/best-time-to-paint-central-florida">Best Time to Paint in Central Florida</Link></li>
            <li><Link href="/blog/how-to-prepare-your-home-for-painting">How to Prepare Your Home for Painting</Link></li>
            <li><Link href="/blog/best-exterior-paint-colors-florida-homes">Best Exterior Paint Colors for Florida Homes</Link></li>
          </ul>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
