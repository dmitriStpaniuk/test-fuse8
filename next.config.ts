import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/test-fuse8",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

export default nextConfig;
