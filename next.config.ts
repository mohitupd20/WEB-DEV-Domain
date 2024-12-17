import type { NextConfig } from "next";

import { nodePolyfills } from 'vite-plugin-node-polyfills'

const nextConfig: NextConfig = {
  plugins: [
    nodePolyfills(),
  ],
  /* config options here */
};

export default nextConfig;
