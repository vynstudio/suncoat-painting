import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <div className="prose mt-8 text-sm text-slate-600">
          <p>{siteConfig.brand} respects your privacy. We collect contact information only to provide painting quotes and services.</p>
          <p>We do not sell your data. Information is used internally and may be shared with trusted service providers (scheduling, communications).</p>
          <p>Contact {siteConfig.email} to request access or deletion of your data.</p>
          <p className="text-xs">This is a placeholder. Replace with your full legal policy.</p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
