import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/my--project",
  assetPrefix: "/my--project",
  trailingSlash: true,
};

export default nextConfig;
