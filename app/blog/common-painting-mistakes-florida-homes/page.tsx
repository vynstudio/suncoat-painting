import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Common Painting Mistakes Florida Homeowners Make",
  description: "Avoid the biggest mistakes when painting your home in Orlando and Central Florida. Humidity, sun, and prep issues that cause paint to fail early.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Common Painting Mistakes Florida Homeowners Make",
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
  datePublished: "2026-06-20",
  description: "Avoid the biggest mistakes when painting your home in Orlando and Central Florida.",
  image: `${siteConfig.url}/images/hero.jpg`,
};

export default function CommonMistakes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tighter">Common Painting Mistakes Florida Homeowners Make</h1>
        <p className="mt-2 text-slate-500">Published June 2026 • {siteConfig.brand}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            Many Florida homeowners end up repainting sooner than expected because of avoidable mistakes. Here are the ones we see most often in Central Florida.
          </p>

          <h2>1. Skipping Proper Surface Preparation</h2>
          <p>
            In humid climates, skipping cleaning, sanding, or priming almost always leads to peeling within a year or two.
          </p>

          <h2>2. Using the Wrong Paint for the Climate</h2>
          <p>
            Standard interior paint won’t hold up on exteriors here. You need high-quality 100% acrylic with mildew resistance.
          </p>

          <h2>3. Painting in the Wrong Conditions</h2>
          <p>
            Painting right before or after heavy rain, or in extreme heat, can ruin the finish. Timing is everything in Florida.
          </p>

          <h2>4. Ignoring Moisture Issues</h2>
          <p>
            Painting over damp walls or siding without fixing the source of moisture guarantees failure.
          </p>

          <p className="mt-8">
            The good news? Professional painters know how to avoid these issues. <a href="/contact">Get a free quote</a> and do it right the first time.
          </p>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
