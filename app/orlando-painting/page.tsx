import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CityPage } from "@/components/city-page";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("orlando")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Orlando, FL | Expert Painters ${siteConfig.brand}`,
    description: `Professional house painting in Orlando. Interior & exterior painting, trim work & color consultation. Experienced painters serving ${city.fullName} and nearby areas. Free quotes.`,
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

      <CityPage
        city={city}
        introText="Professional interior and exterior painting for Orlando homes. Careful prep, premium materials, and results that hold up to Florida weather."
        whyParagraph="Orlando’s climate is tough on paint. We focus on proper surface preparation and high-quality coatings that resist humidity, UV, and rain. Whether you need a full exterior repaint, interior refresh, or detailed trim work, our crews deliver consistent results across neighborhoods like College Park, Thornton Park, Dr. Phillips, and Baldwin Park."
        services={[
          "Full interior painting (walls, ceilings, trim)",
          "Exterior house painting & weatherproofing",
          "Cabinet & millwork refinishing",
          "Color consultation and design support"
        ]}
        neighborhoods="We work throughout Orlando including College Park, Thornton Park, Dr. Phillips, Baldwin Park, Winter Park border areas, and surrounding communities."
        relatedPosts={[
          { title: "Best Time to Paint in Central Florida", href: "/blog/best-time-to-paint-central-florida" },
          { title: "How to Prepare Your Home for Painting", href: "/blog/how-to-prepare-your-home-for-painting" },
          { title: "Best Exterior Paint Colors for Florida Homes", href: "/blog/best-exterior-paint-colors-florida-homes" },
        ]}
      />

      <SiteFooter />
    </>
  );
}
