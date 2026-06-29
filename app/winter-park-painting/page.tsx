import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CityPage } from "@/components/city-page";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("winter-park")!;

export async function generateMetadata() {
  return {
    title: `House Painting in Winter Park, FL | ${siteConfig.brand}`,
    description: `Expert house painting in Winter Park. Interior, exterior & historic home painting with premium finishes. Free quotes for ${city.fullName}.`,
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

export default function WinterParkPainting() {
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
        introText="Specializing in beautiful finishes for Winter Park’s classic and modern homes."
        whyParagraph="Winter Park is known for its charming homes, tree-lined streets, and historic character near Park Avenue. Our crews are skilled at delivering crisp, elegant finishes that respect the architectural details of both older properties and newer builds."
        services={[
          "Interior painting with attention to historic details",
          "Exterior painting for classic Florida homes",
          "Fine trim and millwork restoration",
          "Color consultation for sophisticated palettes"
        ]}
        neighborhoods="We serve homes throughout Winter Park, including areas near Park Avenue, the historic district, and neighborhoods bordering Orlando and Maitland."
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
