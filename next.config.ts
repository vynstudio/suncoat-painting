import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(self), camera=(), microphone=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // Explicitly set tracing root to avoid Netlify/Next.js picking the wrong lockfile
  // (parent directory has a package-lock.json)
  outputFileTracingRoot: path.join(__dirname),

  trailingSlash: false,
  poweredByHeader: false,

  // Ensure images are handled correctly on Netlify
  images: {
    remotePatterns: [],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
