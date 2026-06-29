/**
 * Central site configuration for the painting business.
 *
 * Single source of truth. Update here and changes flow everywhere.
 * TODO: Replace all placeholder values with real client data once branding is finalized.
 */

export type City = {
  slug: string;
  name: string;
  fullName: string; // "Orlando, FL"
  zipExamples?: string[];
  description?: string;
};

export const siteConfig = {
  // === BRANDING (will be finalized with client) ===
  brand: "SunCoat Painting",
  brandShort: "SunCoat",
  tagline: "Premium home painting for the Sunshine State.",
  description:
    "Professional residential painting in Central Florida. Expert prep, clean process, and beautiful results that stand up to Florida sun, humidity, and storms.",

  // === CONTACT ===
  phoneDisplay: "(407) 555-0192",
  phoneHref: "tel:+14075550192",
  whatsappNumber: "14075550192", // digits only, no +
  whatsappMessage:
    "Hi, I'd like a free quote for house painting. Can we schedule a quick walkthrough?",
  email: "hello@suncoatingpainting.com",

  // === SERVICE AREA (Central Florida focus for local SEO) ===
  primaryCity: "Orlando",
  serviceAreaLabel: "Central Florida",
  serviceCities: [
    "Orlando",
    "Winter Park",
    "Altamonte Springs",
    "Winter Garden",
    "Clermont",
    "Oviedo",
    "Maitland",
    "Casselberry",
    "Apopka",
    "Lake Mary",
  ] as const,

  // Detailed city data for local pages + SEO
  cities: [
    {
      slug: "orlando",
      name: "Orlando",
      fullName: "Orlando, FL",
      zipExamples: ["32801", "32803", "32804", "32805", "32806"],
    },
    {
      slug: "winter-park",
      name: "Winter Park",
      fullName: "Winter Park, FL",
      zipExamples: ["32789", "32792"],
    },
    {
      slug: "altamonte-springs",
      name: "Altamonte Springs",
      fullName: "Altamonte Springs, FL",
    },
    {
      slug: "winter-garden",
      name: "Winter Garden",
      fullName: "Winter Garden, FL",
    },
    {
      slug: "clermont",
      name: "Clermont",
      fullName: "Clermont, FL",
    },
    {
      slug: "oviedo",
      name: "Oviedo",
      fullName: "Oviedo, FL",
    },
    {
      slug: "maitland",
      name: "Maitland",
      fullName: "Maitland, FL",
    },
  ] as City[],

  // === BUSINESS DETAILS ===
  yearsExperience: "12",
  licenseInfo: "Licensed & Insured in Florida",
  url: "https://suncoatingpainting.com",

  // === SEO / LOCAL SEO ===
  keywords: [
    "house painting Orlando",
    "residential painting Central Florida",
    "SunCoat Painting",
    "interior painting Winter Park",
    "exterior painting Winter Garden",
    "professional painters Clermont",
    "Orlando house painters",
    "Central Florida painters",
  ],

  // For structured data
  address: {
    streetAddress: "123 Main St", // TODO: replace with real
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32801",
    addressCountry: "US",
  },
  geo: {
    latitude: 28.5383,
    longitude: -81.3792,
  },
  areaServed: [
    "Orlando, FL",
    "Winter Park, FL",
    "Altamonte Springs, FL",
    "Winter Garden, FL",
    "Clermont, FL",
    "Central Florida",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Helper: Build WhatsApp link
 */
export function getWhatsAppLink(customMessage?: string) {
  const msg = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`;
}

/**
 * Helper: Get city by slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return siteConfig.cities.find((c) => c.slug === slug);
}
