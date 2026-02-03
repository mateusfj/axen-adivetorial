import type { NextConfig } from "next";

const BASE_PATH = "/advetorial";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: BASE_PATH,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
