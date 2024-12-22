import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // your custom webpack configuration
    return config;
  },
  // other configurations
};

export default nextConfig;
