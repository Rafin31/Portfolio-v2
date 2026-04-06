/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (50% smaller than WebP), fallback to WebP, then JPEG
    formats: ["image/avif", "image/webp"],
    // Cache optimised images on the CDN for 24 hours
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  // Enable gzip/brotli compression on responses
  compress: true,
  // Strip unused exports from server bundles
  modularizeImports: {
    "react-icons/fi": {
      transform: "react-icons/fi/{{member}}",
    },
    "react-icons/hi2": {
      transform: "react-icons/hi2/{{member}}",
    },
  },
}

export default nextConfig
