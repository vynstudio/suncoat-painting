import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { StickyCTA } from "@/components/sticky-cta";

const TITLE = `${siteConfig.brand} | House Painting in Orlando & Central Florida`;
const DESCRIPTION = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: siteConfig.brand }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: siteConfig.url,
    siteName: siteConfig.brand,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "SunCoat Painting — residential painting in Central Florida" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og.jpg"],
  },
  // keywords removed intentionally — ignored by Google, only exposes targeting.
};

export const viewport = {
  themeColor: '#0f172a',
};

// Strong LocalBusiness + Service structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HousePainter"],
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.brand,
      url: siteConfig.url,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      image: `${siteConfig.url}/images/hero.jpg`,
      priceRange: "$$",
      areaServed: [
        { "@type": "City", "name": "Orlando" },
        { "@type": "City", "name": "Winter Park" },
        { "@type": "City", "name": "Altamonte Springs" },
        { "@type": "City", "name": "Winter Garden" },
        { "@type": "City", "name": "Clermont" },
        { "@type": "City", "name": "Oviedo" },
        { "@type": "City", "name": "Maitland" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": siteConfig.geo.latitude, "longitude": siteConfig.geo.longitude },
        "geoRadius": 48000
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
      description: siteConfig.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Residential Painting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior House Painting",
              description: "Professional interior painting for homes in Central Florida",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior House Painting",
              description: "Weather-resistant exterior painting for Florida homes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Trim & Millwork Painting",
              description: "Expert painting of doors, trim, baseboards and details",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.brand,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#business`,
      },
    },
  ],
};

// Base BreadcrumbList for homepage
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
