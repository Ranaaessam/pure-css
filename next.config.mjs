// Import the required package
import withBundleAnalyzer from '@next/bundle-analyzer';

// Enable the analyzer based on the environment variable
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Define your Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
};

// Export the configuration wrapped with bundleAnalyzer
export default bundleAnalyzer(nextConfig);
