const nextConfig = {
  compiler: {
    emotion: true,
  },
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin", "korean"] },
      },
    ],
  },
};

export default nextConfig;
