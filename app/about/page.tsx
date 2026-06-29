import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "About Us" };

export default function About() {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-4xl font-semibold tracking-tighter">About {siteConfig.brand}</h1>
        <div className="mt-6 max-w-prose text-slate-700 leading-relaxed">
          <p>We are a Central Florida residential painting company focused on exceptional preparation and beautiful, durable finishes.</p>
          <p className="mt-4">Our crews are background-checked, consistent, and trained to treat every home with care. We believe great painting starts long before the first coat goes on.</p>
        </div>
        <div className="mt-8 text-sm text-slate-600">
          {siteConfig.yearsExperience}+ years serving Central Florida
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
