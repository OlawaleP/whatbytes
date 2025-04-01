/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure it's enabled if you're using the App Router
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
