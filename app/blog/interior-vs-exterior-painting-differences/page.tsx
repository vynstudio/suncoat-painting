import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Interior vs Exterior Painting: Key Differences for Florida Homes",
  description: "Learn the differences between interior and exterior house painting in Central Florida — products, prep, and techniques that matter in humid climates.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Interior vs Exterior Painting: Key Differences for Florida Homes",
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
  datePublished: "2026-05-28",
  description: "Learn the differences between interior and exterior house painting in Central Florida.",
  image: `${siteConfig.url}/images/hero.jpg`,
};

export default function InteriorVsExterior() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tighter">Interior vs Exterior Painting: Key Differences for Florida Homes</h1>
        <p className="mt-2 text-slate-500">Published June 2026 • {siteConfig.brand}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            Many homeowners assume painting is painting. In reality, interior and exterior work in Central Florida require completely different approaches.
          </p>

          <h2>Paint Products</h2>
          <p>
            Exterior paints need to be mildew-resistant, flexible, and UV-stable. Interior paints focus more on washability, low odor, and coverage.
          </p>

          <h2>Preparation</h2>
          <p>
            Exterior prep includes power washing, scraping loose paint, and addressing moisture issues. Interior prep is mostly about protecting surfaces and repairing drywall imperfections.
          </p>

          <h2>Application</h2>
          <p>
            We often use airless sprayers outside and brushes/rollers inside for better control and finish quality.
          </p>

          <p className="mt-8">
            Most full-home projects combine both. We can handle the entire scope efficiently.
          </p>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
