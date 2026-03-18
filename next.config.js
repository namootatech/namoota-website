/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  siteMap: {
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
      const blogPosts = fs.readdirSync(
        path.join(process.cwd(), 'content/blog')
      );

      return blogPosts.map((post) => {
        const slug = post.replace('.md', '');
        // Ensure spaces etc. are URL-encoded in generated sitemaps
        return `/blog/${encodeURIComponent(slug)}`;
      });
    },
  }
};

module.exports = nextConfig;
