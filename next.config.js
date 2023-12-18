const withNextIntl = require('next-intl/plugin')('./i18n.ts')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'vercel.com']
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/steven-tey/precedent',
        permanent: false
      }
    ]
  }
}

module.exports = withNextIntl({ nextConfig })
