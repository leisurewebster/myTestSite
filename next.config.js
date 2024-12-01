/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/myTestSite', // The base path for your GitHub Pages site
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
