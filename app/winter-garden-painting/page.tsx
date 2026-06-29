import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("winter-garden")!;

export const metadata = {
  title: `Painting Services Winter Garden | ${siteConfig.brand}`,
  description: `Residential painting experts serving Winter Garden, FL. Interior and exterior painting with excellent prep and communication.`,
};

export default function WinterGardenPainting() {
  return (
    <>
      <SiteHeader />
      <div className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-semibold tracking-tighter">Painting in Winter Garden, FL</h1>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <LeadForm source="winter-garden-page" />
      </div>
      <SiteFooter />
    </>
  );
}
