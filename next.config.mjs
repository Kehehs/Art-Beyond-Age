/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow <img> tags rendered by react-markdown without the Next.js Image wrapper
  images: {
    unoptimized: true,
  },
}

export default nextConfig
