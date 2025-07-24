import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Performance optimizations
  experimental: {
    // Enable modern bundling optimizations
    turbo: {
      rules: {
        '*.md': {
          loaders: ['raw-loader'],
        },
      },
    },
  },
  
  // Compression and caching
  compress: true,
  poweredByHeader: false,
  
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'iapindia.org',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
  },
  
  // Security and caching headers
  async headers() {
    return [
      {
        source: '/api/articles/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=300',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, s-maxage=86400',
          },
        ],
      },
      {
        source: '/health-articles/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  },
  
  // Rewrites for SEO-friendly URLs
  async rewrites() {
    return [
      {
        source: '/articles/:slug',
        destination: '/health-articles/:slug',
      },
    ];
  },
  
  // Redirects for old URLs
  async redirects() {
    return [
      {
        source: '/blog/:slug',
        destination: '/health-articles/:slug',
        permanent: true,
      },
    ];
  },
}

export default nextConfig