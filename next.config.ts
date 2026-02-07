import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { domains: ["files.stripe.com"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Or specify your domain: 'https://yourdomain.com'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
