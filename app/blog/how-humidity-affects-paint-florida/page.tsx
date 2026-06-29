import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "How Humidity Affects Paint in Central Florida",
  description: "Understand the impact of Florida humidity on interior and exterior painting projects in Orlando, Winter Park, and surrounding areas.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Humidity Affects Paint in Central Florida",
  author: {
    "@type": "Organization",
    name: siteConfig.brand,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.brand,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon.svg`,
    },
  },
  datePublished: "2026-06-18",
  description: "Understand the impact of Florida humidity on interior and exterior painting projects.",
  image: `${siteConfig.url}/images/hero.jpg`,
};

export default function HumidityEffects() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tighter">How Humidity Affects Paint in Central Florida</h1>
        <p className="mt-2 text-slate-500">Published June 2026 • {siteConfig.brand}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            High humidity is one of the biggest challenges for painters in the Orlando area. It can slow drying, cause blistering, and lead to mildew if not handled correctly.
          </p>

          <h2>Interior Painting Challenges</h2>
          <p>
            In homes, high moisture levels can prevent paint from curing properly. We often recommend running dehumidifiers and choosing paints formulated for humid environments.
          </p>

          <h2>Exterior Painting Challenges</h2>
          <p>
            Exterior surfaces absorb moisture from rain and humidity. Using elastomeric or high-build coatings helps, along with waiting for the right weather windows.
          </p>

          <h2>Our Approach</h2>
          <p>
            We monitor weather closely and use products specifically designed for Florida conditions. Proper ventilation and timing are key to a finish that lasts.
          </p>

          <p className="mt-8">
            Planning a project? <a href="/contact">Contact us</a> and we’ll advise on the best timing and products for your home.
          </p>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
