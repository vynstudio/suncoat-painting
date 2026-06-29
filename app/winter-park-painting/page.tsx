import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";
import { siteConfig, getCityBySlug } from "@/lib/site-config";

const city = getCityBySlug("winter-park")!;

export const metadata = {
  title: `House Painting Winter Park, FL | ${siteConfig.brand}`,
  description: `Premium residential painting for Winter Park homes. Trusted local painters for interior, exterior, and historic home painting projects.`,
};

export default function WinterParkPainting() {
  return (
    <>
      <SiteHeader />
      <div className="border-b border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-semibold tracking-tighter">House Painting in Winter Park, FL</h1>
          <p className="mt-2 text-lg text-slate-600">Specializing in beautiful finishes for Winter Park’s classic and modern homes.</p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="max-w-prose text-slate-700">
          From charming bungalows near Park Avenue to larger estates, we deliver meticulous prep and elegant results. Many Winter Park clients ask for specific historic color palettes — we’re happy to help.
        </p>

        <div className="mt-10 rounded-3xl bg-white border p-8">
          <h3 className="font-semibold">Get a quote for your Winter Park home</h3>
          <div className="mt-5 max-w-md">
            <LeadForm variant="compact" source="winter-park-page" />
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
