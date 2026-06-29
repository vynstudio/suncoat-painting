import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function ServiceAreas() {
  return (
    <section id="areas" className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[2px] text-amber-600">LOCAL EXPERTISE</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tighter">Proudly serving Central Florida neighborhoods</h2>
          <p className="mt-3 text-slate-600">
            We know the homes, the weather challenges, and the architectural styles in each area we serve.
          </p>
        </div>

        {/* Pills: full width touch targets on mobile, compact on iPad/desktop */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
          {siteConfig.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}-painting`}
              className="w-full sm:w-auto rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 sm:px-5 sm:py-2"
            >
              {city.fullName}
            </Link>
          ))}
          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-full border border-dashed border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 sm:px-5 sm:py-2"
          >
            + More cities
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-amber-600 hover:bg-amber-50 sm:px-5 sm:py-2"
          >
            Painting Tips Blog →
          </Link>
        </div>
      </div>
    </section>
  );
}
