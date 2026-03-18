import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

const SITE_URL = 'https://namootatech.com';

// Category-based fallback images using Unsplash
const categoryImages = {
  'AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
  'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
  'Business': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
  'Remote Work': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
  'Tools': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  'Payments': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
  'Tutorial': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
  'default': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop'
}

function getPostImage(post) {
  // If post has a valid external image, use it
  if (post.image && post.image.startsWith('http')) {
    return post.image
  }
  // Use category-based fallback
  return categoryImages[post.category] || categoryImages['default']
}

function estimateReadingTime(content) {
  const wordsPerMinute = 200
  const words = content?.split(/\s+/).length || 0
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes < 1 ? 1 : minutes
}

function BlogCard({ post, featured = false }) {
  const imageUrl = getPostImage(post)
  
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-slate-900 h-[400px] md:h-[500px]">
          <img 
            src={imageUrl} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-sky-500 text-white rounded-full">
                Featured
              </span>
              {post.category && (
                <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-slate-300 mb-4 line-clamp-2 max-w-2xl">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-300 hover:shadow-lg hover:shadow-sky-100 dark:hover:shadow-sky-900/20">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img 
            src={imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {post.category && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-slate-900/80 text-white rounded-md backdrop-blur-sm">
              {post.category}
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span>{post.readingTime} min read</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
              <span className="text-xs font-medium text-sky-700 dark:text-sky-300">
                {post.author?.charAt(0) || 'N'}
              </span>
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400">{post.author}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function BlogIndex({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <>
      <Head>
        <title key='title'>Namoota Blog - Web & App Insights</title>
        <meta
          key='description'
          name='description'
          content='Discover expert insights on web development, digital transformation, and tech innovation from Namoota.'
        />
        <meta key='keywords' name='keywords' content='Namoota blog, web development, digital transformation, software development' />
        <meta key='og:title' property='og:title' content='Namoota Blog - Web & App Insights' />
        <meta
          key='og:description'
          property='og:description'
          content='Discover expert insights on web development, digital transformation, and tech innovation from Namoota.'
        />
        <meta key='og:image' property='og:image' content={`${SITE_URL}/og.png`} />
        <meta key='og:url' property='og:url' content={`${SITE_URL}/blog`} />
        <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
        <meta key='twitter:title' name='twitter:title' content='Namoota Blog - Web & App Insights' />
        <meta
          key='twitter:description'
          name='twitter:description'
          content='Discover expert insights on web development, digital transformation, and tech innovation from Namoota.'
        />
        <meta key='twitter:image' name='twitter:image' content={`${SITE_URL}/og.png`} />
        <link key='canonical' rel='canonical' href={`${SITE_URL}/blog`} />
      </Head>
      
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Namoota Blog
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Insights on web development, AI, and digital transformation. Practical guides and industry trends to power your digital journey.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeCategory === category
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-200 dark:shadow-sky-900/30'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto text-slate-300 dark:text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or filter to find what you&apos;re looking for.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <BlogCard post={featuredPost} featured />
                </div>
              )}

              {/* Post Grid */}
              {regularPosts.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}


export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      // Estimate reading time
      const wordsPerMinute = 200
      const words = content.split(/\s+/).length
      const readingTime = Math.ceil(words / wordsPerMinute)
      
      // Detect category from title/content if not set
      let category = data.category || ''
      if (!category) {
        const titleLower = data.title?.toLowerCase() || ''
        if (titleLower.includes('ai') || titleLower.includes('agent') || titleLower.includes('llm')) {
          category = 'AI'
        } else if (titleLower.includes('payment') || titleLower.includes('stripe')) {
          category = 'Payments'
        } else if (titleLower.includes('deploy') || titleLower.includes('hosting') || titleLower.includes('website')) {
          category = 'Web Development'
        } else if (titleLower.includes('remote') || titleLower.includes('bootcamp') || titleLower.includes('junior')) {
          category = 'Career'
        } else if (titleLower.includes('tool') || titleLower.includes('pricing') || titleLower.includes('vibe')) {
          category = 'Tools'
        } else if (titleLower.includes('business') || titleLower.includes('revolution')) {
          category = 'Business'
        } else {
          category = 'Tutorial'
        }
      }
      
      return {
        slug: filename.replace('.md', ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || 'Namoota Team',
        category,
        image: data.image || '',
        readingTime: readingTime < 1 ? 1 : readingTime
      }
    })

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  // Extract unique categories
  const categories = [...new Set(posts.map(p => p.category).filter(Boolean))]

  return {
    props: {
      posts: sortedPosts,
      categories
    }
  }
}
