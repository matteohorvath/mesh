import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static file serving for the CMS admin interface
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },

  // Configure webpack for better CMS support
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },

  // Enable experimental features for better performance
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
