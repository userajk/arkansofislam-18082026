/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Renamed resource: old slug -> current slug (301 permanent)
      {
        source: '/resource/is-insurance-halal',
        destination: '/resource/halal-insurance',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
