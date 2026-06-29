import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticPages = [
    { path: "", priority: 1.0, change: "weekly" as const },
    { path: "/contact", priority: 0.8, change: "monthly" as const },
    { path: "/about", priority: 0.7, change: "monthly" as const },
    { path: "/blog", priority: 0.7, change: "weekly" as const },
    { path: "/projects", priority: 0.8, change: "weekly" as const },
  ].map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.change,
    priority: p.priority,
  }));

  // City service pages - high value for local SEO
  const cityPages = siteConfig.cities.map((city, index) => ({
    url: `${base}/${city.slug}-painting`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9 - index * 0.02, // Higher priority for primary cities
  }));

  // Blog posts for topical authority (expanded)
  const blogPosts = [
    "/blog/best-time-to-paint-central-florida",
    "/blog/how-to-prepare-your-home-for-painting",
    "/blog/best-exterior-paint-colors-florida-homes",
    "/blog/interior-vs-exterior-painting-differences",
    "/blog/common-painting-mistakes-florida-homes",
    "/blog/how-humidity-affects-paint-florida",
    "/blog/professional-vs-diy-painting-florida",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...blogPosts];
}
