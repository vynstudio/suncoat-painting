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

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <Hero />

      <Services />

      <WhyUs />

      <ProjectsGallery />

      <Process />

      <Testimonials />

      <ServiceAreas />

      {/* Lead capture section */}
      <section id="quote" className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">START YOUR PROJECT</div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tighter">
              Ready for a professional paint job?
            </h2>
            <p className="mt-3 text-slate-600">
              Tell us about your home. We’ll send a detailed quote within hours.
            </p>
          </div>

          <div className="mt-9 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <LeadForm source="homepage" />
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            Or call <a href={siteConfig.phoneHref} className="font-medium text-slate-900 underline">{siteConfig.phoneDisplay}</a> for immediate assistance.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
