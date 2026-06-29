import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Legal Notice" };

export default function Legal() {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Legal Notice</h1>
        <div className="prose mt-8 text-sm text-slate-600">
          <p>{siteConfig.brand} provides professional residential painting services in Central Florida.</p>
          <p>Phone: {siteConfig.phoneDisplay} • Email: {siteConfig.email}</p>
          <p className="text-xs mt-6">Placeholder content. Consult legal counsel for your final version.</p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
