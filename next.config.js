/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "svgrepo.com","tecdn.b-cdn.net"],
  },
};

module.exports = nextConfig;
