import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "cdn.prod.website-files.com",
    ],
  },
};

export default nextConfig;