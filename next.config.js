/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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