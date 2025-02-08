import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/test-fuse8",
  images: {
    domains: ['rickandmortyapi.com'],
  },
};


export default nextConfig;
