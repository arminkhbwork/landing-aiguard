import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
