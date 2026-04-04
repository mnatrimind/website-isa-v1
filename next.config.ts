import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/website-isa-v1',
  assetPrefix: '/website-isa-v1/',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
