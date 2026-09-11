import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/muaj-taj-schelkovo",
        destination: "/tajskij-boks-schelkovo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
