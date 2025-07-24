/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
  },
  // Skip ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip TypeScript type checking during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  // SEO Optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Image optimization for better Core Web Vitals
  images: {
    domains: ['drramya-paediatrics.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Cache control for static assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Add any redirects here for old URLs
    ];
  },
  
  webpack: (config) => {
    // Handle .md files
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });

    // Handle dynamic imports for markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;