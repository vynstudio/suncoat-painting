import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectsGallery } from "@/components/projects-gallery";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata = {
  title: "Our Projects | SunCoat Painting - Central Florida",
  description: "See examples of our professional house painting work in Orlando, Winter Park, Winter Garden, Clermont, and across Central Florida. Before and after transformations.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero / Intro */}
      <div className="border-b border-slate-100 bg-slate-50 section-padding">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[2px] text-amber-600">OUR WORK</div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
              Recent Painting Projects in Central Florida
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Take a look at some of the homes we've transformed across Orlando, Winter Park, and surrounding communities. From full exteriors to detailed interiors — clean results every time.
            </p>
            <div className="mt-6">
              <Link 
                href="/#quote" 
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get a free quote for your project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery */}
      <div className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <ProjectsGallery />
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-slate-100 bg-slate-50 section-padding pb-20 md:pb-0 quote-section">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to transform your home?</h2>
          <p className="text-slate-600 mb-6">We're proud of every project. Let's make yours the next one on this page.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white hover:bg-amber-600"
          >
            Request your free quote
          </Link>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
