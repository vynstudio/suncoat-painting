import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set tracing root to avoid Netlify/Next.js picking the wrong lockfile
  // (parent directory has a package-lock.json)
  outputFileTracingRoot: path.join(__dirname),

  // Ensure images are handled correctly on Netlify
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
