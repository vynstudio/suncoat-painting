import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact Us | Free Painting Quotes Central Florida",
  description: `Get a free quote for house painting in Orlando, Winter Park, Winter Garden and Central Florida. Call or submit the form — we respond fast.`,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tighter">Let’s talk about your painting project</h1>
          <p className="mt-3 text-lg text-slate-600">
            Fill out the form and we’ll get back to you quickly with a detailed proposal.
          </p>

          <div className="mt-4 text-sm text-slate-600">
            <div>Phone: <a href={siteConfig.phoneHref} className="font-medium text-slate-950">{siteConfig.phoneDisplay}</a></div>
            <div>Email: <a href={`mailto:${siteConfig.email}`} className="font-medium text-slate-950">{siteConfig.email}</a></div>
          </div>
        </div>

        <div className="mt-10 max-w-xl rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <LeadForm source="contact-page" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
