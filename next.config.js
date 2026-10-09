/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // Required for next export / GitHub Pages
  images: {
    unoptimized: true
  },
  trailingSlash: true
}
