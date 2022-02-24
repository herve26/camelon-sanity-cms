/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'www.mapquestapi.com']
  }
}

module.exports = nextConfig
