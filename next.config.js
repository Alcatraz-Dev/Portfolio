/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://themer.sanity.build/'],
    serverActions:true,
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "svgrepo.com","tecdn.b-cdn.net"],
  },
};

module.exports = nextConfig;
