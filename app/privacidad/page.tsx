import Link from "next/link";

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to home</Link>
        </div>
        <h1 className="text-2xl font-semibold">Privacy Policy / Política de Privacidad</h1>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700">
          <p>CentralPrime Painting respects your privacy. We collect only the information necessary to provide painting quotes and services (name, phone, email, address, project details).</p>
          <h2 className="font-semibold mt-6">How we use your information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To contact you about your quote request</li>
            <li>To schedule and perform painting work</li>
            <li>Internal records and service improvement</li>
          </ul>
          <p>We do not sell your data. We may use secure third-party services (CRM, messaging) to manage leads.</p>
          <h2 className="font-semibold mt-6">Your rights</h2>
          <p>You may request to access, correct, or delete your information by contacting us at hello@centralprimepainting.com or (407) 555-0142.</p>
          <p className="text-xs text-slate-500 mt-8">This is placeholder privacy text. Replace with your full policy before launch.</p>
        </div>
        <div className="mt-10 text-xs">
          <Link href="/aviso-legal" className="text-slate-600 hover:text-slate-900">← Legal Notice / Aviso Legal</Link>
        </div>
      </div>
    </main>
  );
}
