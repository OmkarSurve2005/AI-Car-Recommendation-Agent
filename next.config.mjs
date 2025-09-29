/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.motor1.com' },
      { protocol: 'https', hostname: 'toyota.scene7.com' },
      { protocol: 'https', hostname: 'www.bmwusa.com' },
      { protocol: 'https', hostname: 'www.ford.com' },
      { protocol: 'https', hostname: 'imgd.aeplcdn.com' },
      { protocol: 'https', hostname: 'files.porsche.com' },
      { protocol: 'https', hostname: 'tesla-cdn.thron.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' }
    ],
  },
}

export default nextConfig
