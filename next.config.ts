import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Fix intermittent dev-only RSC manifest issues on some setups.
    // (This does not affect production builds.)
    devtoolSegmentExplorer: false,
  },
  eslint: {
    // Running ESLint during `next build` can be memory-heavy on low-RAM machines.
    // Use `npm run lint` instead (same rules, but runs as a separate step).
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
