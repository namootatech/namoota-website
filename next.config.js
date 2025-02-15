/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  siteMap: {
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
      const blogPosts = fs.readdirSync(path.join(process.cwd(), 'content/blog'))
      return blogPosts.map(post => `/blog/${post.replace('.md', '')}`)
    }
  }
};

module.exports = nextConfig;
