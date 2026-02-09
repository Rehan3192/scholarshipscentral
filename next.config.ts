import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Fix intermittent dev-only RSC manifest issues on some setups.
    // (This does not affect production builds.)
    devtoolSegmentExplorer: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
