import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Best Exterior Paint Colors for Florida Homes",
  description: "Practical and stylish exterior paint color ideas that hold up to Central Florida sun, rain, and humidity in Orlando, Clermont, and surrounding areas.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Exterior Paint Colors for Florida Homes",
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
  datePublished: "2026-06-05",
  description: "Practical and stylish exterior paint color ideas that hold up to Central Florida sun, rain, and humidity.",
  image: `${siteConfig.url}/images/hero.jpg`,
};

export default function BestExteriorColors() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tighter">Best Exterior Paint Colors for Florida Homes</h1>
        <p className="mt-2 text-slate-500">Published June 2026 • {siteConfig.brand}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            Choosing exterior paint in Central Florida isn’t just about looks — it’s about performance. Intense UV, heavy rain, and salt air (even inland) can make the wrong color fail fast.
          </p>

          <h2>Top Performing Color Families</h2>

          <h3>Warm Neutrals &amp; Greiges</h3>
          <p>Light greige, taupe, and warm gray are very popular right now. They hide dirt well and pair beautifully with Florida landscaping.</p>

          <h3>Soft Whites &amp; Off-Whites</h3>
          <p>Classic for a reason. Use high-quality 100% acrylic paint with UV protection. Avoid pure bright white on south-facing walls.</p>

          <h3>Light Sage, Taupe, and Olive Greens</h3>
          <p>These colors blend with Central Florida’s natural surroundings and perform very well against fading.</p>

          <h2>Colors to Approach Carefully</h2>
          <ul>
            <li>Very dark colors (absorb heat and fade faster)</li>
            <li>Bright primary colors (tend to chalk quickly in the sun)</li>
            <li>High-gloss finishes on large areas (show every imperfection)</li>
          </ul>

          <p className="mt-8">
            Want personalized recommendations for your home’s architecture and location? <a href="/contact">Book a free color consultation</a> with our team.
          </p>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
