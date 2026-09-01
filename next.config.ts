import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portogamegweh',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
