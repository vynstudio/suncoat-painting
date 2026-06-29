import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "How to Prepare Your Home for Professional Painting",
  description: "Homeowner checklist for painting prep in Orlando and Central Florida. What to move, clean, and protect before your painters arrive.",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Prepare Your Home for Professional Painting",
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
  datePublished: "2026-06-10",
  description: "Homeowner checklist for painting prep in Orlando and Central Florida.",
  image: `${siteConfig.url}/images/hero.jpg`,
};

export default function HowToPrepare() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-semibold tracking-tighter">How to Prepare Your Home for Professional Painting</h1>
        <p className="mt-2 text-slate-500">Published June 2026 • {siteConfig.brand}</p>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            The quality of your paint job depends heavily on preparation. Here’s a practical checklist we give all our Central Florida clients.
          </p>

          <h2>2–3 Weeks Before</h2>
          <ul>
            <li>Choose your colors and approve the proposal</li>
            <li>Clear any personal items you don’t want moved</li>
            <li>Arrange for pets to be elsewhere during work hours</li>
          </ul>

          <h2>1 Week Before</h2>
          <ul>
            <li>Remove pictures, mirrors, and wall decorations</li>
            <li>Take down curtains and blinds if possible</li>
            <li>Move or cover furniture in the work areas</li>
            <li>Clear access to electrical outlets and light switches</li>
          </ul>

          <h2>Day Before</h2>
          <ul>
            <li>Park vehicles away from the work area</li>
            <li>Secure valuables</li>
            <li>Confirm start time with our team</li>
          </ul>

          <p>
            Don’t worry — our crews are experienced at protecting floors, moving furniture carefully, and leaving your home clean every day. We just need a little cooperation from you.
          </p>

          <p className="mt-8">
            Have questions about prep for your specific home? <a href="/contact">Contact us</a> — we’re happy to walk through it.
          </p>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
