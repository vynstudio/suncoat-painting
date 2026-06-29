import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CityPage } from "@/components/city-page";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("maitland")!;

export async function generateMetadata() {
  const canonical = `${siteConfig.url}/${city.slug}-painting`;
  return {
    title: `House Painting in Maitland, FL | ${siteConfig.brand}`,
    description: `Premium house painting in Maitland. Interior and exterior services for upscale homes near lakes and parks. Free quotes for ${city.fullName}.`,
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

export default function MaitlandPainting() {
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
        introText="High-quality painting for Maitland’s beautiful lakefront and established homes. Attention to detail that matches the character of this Central Florida community."
        whyParagraph="Maitland is known for its scenic lakes, parks, and upscale residential areas. Our painting crews bring the same level of care to these homes — using top-tier products that resist Florida weather while enhancing curb appeal. We’re experienced with both historic properties and modern builds."
        services={[
          "Interior painting for lakefront and family homes",
          "Exterior painting with weather-resistant finishes",
          "Fine trim and millwork work",
          "Whole-home color consultation"
        ]}
        neighborhoods="We paint homes throughout Maitland, including neighborhoods around Lake Maitland, near the Enzian Theater, and in the established residential pockets off US 17-92 and Horatio Avenue."
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
