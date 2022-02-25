/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'www.mapquestapi.com']
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    
    return config;
  }
}

module.exports = nextConfig
