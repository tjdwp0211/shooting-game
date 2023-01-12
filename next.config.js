/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font",
        options: { subsets: ["latin", "korean"] },
      },
    ],
  },
};

module.exports = nextConfig;
