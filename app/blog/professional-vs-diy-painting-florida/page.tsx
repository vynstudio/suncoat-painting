import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Professional vs DIY Painting in Central Florida",
  description: "Why hiring pros for house painting in Orlando and Central Florida often saves money and delivers better, longer-lasting results than DIY.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Professional vs DIY Painting in Central Florida",
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
  datePublished: "2026-06-22",
  description: "Why hiring pros for house painting in Orlando and Central Florida often saves money and delivers better results than DIY.",
  image: `${siteConfig.url}/images/hero.jpg`,
};

export default function ProVsDIY() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tighter">Professional vs DIY Painting in Central Florida</h1>
        <p className="mt-2 text-slate-500">Published June 2026 • {siteConfig.brand}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            DIY painting can seem like a money-saver, but in Florida’s climate it often leads to costly do-overs.
          </p>

          <h2>Why DIY Struggles Here</h2>
          <ul>
            <li>Humidity slows drying and causes adhesion problems</li>
            <li>Hard-to-reach areas on two-story homes</li>
            <li>Choosing the wrong products for sun and rain</li>
            <li>Time and physical demands</li>
          </ul>

          <h2>Benefits of Hiring Professionals</h2>
          <p>
            Pros bring the right tools, experience with Florida conditions, proper prep techniques, and high-performance paints. The job gets done faster and lasts longer.
          </p>

          <p className="mt-8">
            Considering a project? <a href="/contact">Get a free quote</a> from SunCoat Painting and compare the real costs and results.
          </p>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
