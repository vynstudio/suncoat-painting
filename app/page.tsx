import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { ProjectsGallery } from "@/components/projects-gallery";
import { Testimonials } from "@/components/testimonials";
import { ServiceAreas } from "@/components/service-areas";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

// Expanded FAQ for rich results and topical authority
const faqs = [
  {
    q: "How much does house painting cost in Orlando?",
    a: "Pricing depends on square footage, prep work needed, and paint type. Most interior rooms start around $300–$600. We provide free detailed written quotes.",
  },
  {
    q: "How long does it take to paint a house?",
    a: "A typical 3-bedroom home interior takes 3–5 days. Full exterior can take 5–8 days. We work efficiently while maintaining high quality.",
  },
  {
    q: "Do you paint both interior and exterior?",
    a: "Yes. We specialize in full interior painting, exterior house painting, trim, doors, cabinets, and decks across Central Florida.",
  },
  {
    q: "Are you licensed and insured?",
    a: `${siteConfig.brand} is fully licensed and insured in Florida with background-checked crews.`,
  },
  {
    q: "What preparation do you do before painting?",
    a: "We sand, repair cracks, clean surfaces, apply primer where needed, and protect furniture/floors with plastic and drop cloths. Proper prep is 70% of a great paint job.",
  },
  {
    q: "Do you use low-VOC or eco-friendly paints?",
    a: "Yes. We offer low-VOC and zero-VOC paints that are better for Florida homes and families with allergies or pets.",
  },
  {
    q: "What is the best time of year to paint in Central Florida?",
    a: "Spring (March–May) and fall (September–November) are ideal. Summers are humid; we adjust scheduling and use paints designed for Florida heat and humidity.",
  },
  {
    q: "Do you offer warranties on your work?",
    a: "Yes. We provide a satisfaction guarantee and warranty on workmanship. Details are included in every written proposal.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      <Hero />

      <Services />

      <WhyUs />

      <ProjectsGallery />

      <Process />

      <Testimonials />

      <ServiceAreas />

      {/* FAQ for rich results / strong SEO */}
      <section className="border-b border-slate-100 bg-slate-50 section-padding">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-lg">{faq.q}</h3>
                <p className="text-slate-600 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture section - responsive for all devices */}
      <section id="quote" className="bg-white section-padding">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">START YOUR PROJECT</div>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl">
              Ready for a professional paint job?
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Tell us about your home. We’ll send a detailed quote within hours.
            </p>
            <p className="mt-2 text-sm">
              <Link href="/blog" className="text-amber-600 hover:underline">Read our painting advice blog →</Link>
            </p>
          </div>

          {/* Form container - full on mobile, padded nicely on iPad/desktop */}
          <div className="mt-8 sm:mt-9 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <LeadForm source="homepage" />
          </div>

          <p className="mt-4 text-center text-xs text-slate-500 sm:text-sm">
            Or call <a href={siteConfig.phoneHref} className="font-medium text-slate-900 underline">{siteConfig.phoneDisplay}</a> for immediate assistance.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
