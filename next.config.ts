import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
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
  },
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Webpack configuration for markdown files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  
  // Security headers
  async headers() {
    return [
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