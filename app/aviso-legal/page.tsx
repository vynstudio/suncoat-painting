import Link from "next/link";

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to home</Link>
        </div>
        <h1 className="text-2xl font-semibold">Legal Notice / Aviso Legal</h1>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700">
          <p><strong>CentralPrime Painting</strong> — Professional residential painting services.</p>
          <p>This website is provided for informational purposes. All content, images, and copy are the property of CentralPrime Painting unless otherwise noted.</p>
          <h2 className="font-semibold mt-6">Contact Information</h2>
          <p>Phone: (321) 758-0094<br />Email: hello@suncoatpainting.com<br />Service Area: Central Florida (Orlando metro and surrounding)</p>
          <p className="text-xs text-slate-500 mt-8">Last updated: June 2026. This is placeholder legal text. Consult an attorney for final version.</p>
        </div>
        <div className="mt-10 text-xs">
          <Link href="/privacidad" className="text-slate-600 hover:text-slate-900">Privacy / Privacidad →</Link>
        </div>
      </div>
    </main>
  );
}
