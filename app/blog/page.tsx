import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export const metadata = {
  title: "Painting Tips & Advice | Central Florida Homeowners",
  description: "Expert advice on house painting in Orlando, Winter Park, Clermont and Central Florida. Prep tips, color ideas, timing, and more from SunCoat Painting.",
};

const blogPosts = [
  {
    slug: "best-time-to-paint-central-florida",
    title: "Best Time of Year to Paint Your Home in Central Florida",
    excerpt: "Learn the ideal seasons for interior and exterior painting in Orlando and surrounding areas to avoid humidity and get the longest-lasting results.",
    date: "2026-06-15",
  },
  {
    slug: "how-to-prepare-your-home-for-painting",
    title: "How to Prepare Your Home for Professional Painting",
    excerpt: "A complete homeowner checklist for getting your house ready for painters — from moving furniture to protecting surfaces and choosing colors.",
    date: "2026-06-10",
  },
  {
    slug: "best-exterior-paint-colors-florida-homes",
    title: "Best Exterior Paint Colors for Florida Homes",
    excerpt: "Discover paint color trends and practical choices that hold up to intense sun, rain, and humidity in Central Florida neighborhoods.",
    date: "2026-06-05",
  },
  {
    slug: "interior-vs-exterior-painting-differences",
    title: "Interior vs Exterior Painting: Key Differences for Florida Homes",
    excerpt: "Understand the different products, prep work, and techniques used for inside and outside painting projects in hot, humid climates.",
    date: "2026-05-28",
  },
];

export default function Blog() {
  return (
    <>
      <SiteHeader />

      <div className="border-b border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-semibold tracking-tighter">Painting Advice for Central Florida Homeowners</h1>
          <p className="mt-3 text-xl text-slate-600">
            Practical tips from the painters at {siteConfig.brand}. Real advice for Orlando, Winter Park, Clermont and the surrounding communities.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b pb-8 last:border-none">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-semibold tracking-tight group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-slate-500 mt-1">{post.date}</p>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-block mt-2 text-sm font-medium text-amber-600 hover:underline"
              >
                Read full article →
              </Link>
            </article>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
