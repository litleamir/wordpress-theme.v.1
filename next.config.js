/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/wp-content/themes/wp-theme/frontend',
  assetPrefix: '/wp-content/themes/wp-theme/frontend/'
}

module.exports = nextConfig 