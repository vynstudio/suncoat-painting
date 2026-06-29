import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} | Residential Painting Central Florida`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: `${siteConfig.brand} — Professional Home Painting in Central Florida`,
    description: siteConfig.description,
    images: [{ url: "/images/hero.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-950">{children}</body>
    </html>
  );
}
