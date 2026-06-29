import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CityPage } from "@/components/city-page";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("oviedo")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Oviedo, FL | ${siteConfig.brand}`,
    description: `Professional residential painting in Oviedo. Interior & exterior painting for family homes and historic properties. Free quotes for ${city.fullName}.`,
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

export default function OviedoPainting() {
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
        introText="Trusted painting for Oviedo families. We handle new construction, established neighborhoods, and historic homes with the care Central Florida deserves."
        whyParagraph="Oviedo blends suburban family living with historic charm. Our teams are familiar with the challenges of painting in this area — from new builds needing full protection to older homes requiring delicate surface prep. We use premium paints formulated for Florida’s unique climate."
        services={[
          "Full interior painting for family homes",
          "Exterior painting and siding protection",
          "Trim, doors, and cabinet refinishing",
          "Color selection for Florida light and family living"
        ]}
        neighborhoods="We work throughout Oviedo including areas near the University of Central Florida, historic downtown Oviedo, and family communities off Lockwood and Mitchell Hammock."
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
