import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['slerf-base.vercel.app', 'vercel.app', 'blob.v0.app'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },

  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/slerf00',
        permanent: false
      },
      {
        source: '/telegram',
        destination: 'https://t.me/boomtokn',
        permanent: false
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/slerf',
        permanent: false
      },
      {
        source: '/uniswap',
        destination: 'https://app.uniswap.org/swap?outputCurrency=0x233df63325933fa3f2dac8e695cd84bb2f91ab07&chain=base',
        permanent: false
      }
    ]
  },

  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: []
    }
  }
}

export default nextConfig
