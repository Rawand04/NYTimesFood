import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.w3.org",
      },
      {
        hostname: "static01.nyt.com",
      },
      {
        hostname: "cdn.dummyjson.com",
      },
      {
        hostname: "www.themealdb.com",
      },
      {
        hostname: "randomuser.me",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
