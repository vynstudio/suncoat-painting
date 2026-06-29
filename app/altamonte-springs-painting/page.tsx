import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CityPage } from "@/components/city-page";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("altamonte-springs")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Altamonte Springs, FL | ${siteConfig.brand}`,
    description: `Professional house painting in Altamonte Springs. Interior painting for homes & condos, exterior services, and expert trim work. Free quotes for ${city.fullName}.`,
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

export default function AltamonteSpringsPainting() {
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
        introText="Expert painting for Altamonte Springs homes, condos, and townhomes. Careful prep and finishes designed for Florida's humid climate."
        whyParagraph="Altamonte Springs has a mix of single-family homes, condos near the mall, and older neighborhoods. We tailor our approach: moisture-resistant systems for exteriors and low-VOC paints for interiors. Our crews are experienced with the unique challenges of painting in Seminole County."
        services={[
          "Interior painting for homes and condos (walls, ceilings, trim)",
          "Exterior painting and weatherproofing",
          "Cabinet painting and refinishing",
          "Color consultation for modern and traditional Florida homes"
        ]}
        neighborhoods="We regularly work in areas around Cranes Roost, near Altamonte Mall, Spring Oaks, and throughout the 32701 and 32714 zip codes."
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
