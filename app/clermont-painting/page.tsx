import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CityPage } from "@/components/city-page";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("clermont")!;

export async function generateMetadata() {
  const canonical = `${siteConfig.url}/${city.slug}-painting`;
  return {
    title: `House Painting in Clermont, FL | ${siteConfig.brand}`,
    description: `Residential painting services in Clermont, FL. Interior and exterior painting for homes in the hills and lake communities. Professional prep and durable finishes. Free quotes.`,
    alternates: { canonical },
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: `Painting in ${city.name}`, item: `${siteConfig.url}/${city.slug}-painting` },
  ],
};

export default function ClermontPainting() {
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
        introText="Professional painting for Clermont homes. We handle the rolling hills, lakefront properties, and new construction with expert prep and Florida-ready finishes."
        whyParagraph="Clermont’s unique terrain (one of the few hilly areas in Central Florida) and lake communities create specific painting challenges — sun exposure on hillsides and moisture near water. We use premium elastomeric and mildew-resistant coatings for exteriors and focus on clean, lasting results for interiors."
        services={[
          "Exterior painting on hillside and lake homes",
          "Full interior refreshes for new and existing homes",
          "Deck, fence, and garage door painting",
          "Color consultation for bright Florida light"
        ]}
        neighborhoods="We work throughout Clermont including the 34711 and 34714 areas, near the Florida Turnpike, in the Four Corners region, and around the many lakes and golf communities."
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
