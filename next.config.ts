import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Fix intermittent dev-only RSC manifest issues on some setups.
    // (This does not affect production builds.)
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
