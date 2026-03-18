import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import Link from 'next/link'

const SITE_URL = 'https://namootatech.com';

// Category-based fallback images
const categoryImages = {
  'AI': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
  'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
  'Business': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  'Remote Work': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
  'Tools': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
  'Payments': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
  'Tutorial': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
  'Career': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
  'default': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop'
}

function getPostImage(post) {
  if (post.image && post.image.startsWith('http')) {
    return post.image
  }
  return categoryImages[post.category] || categoryImages['default']
}

export default function BlogPost({ post }) {
  const encodedSlug = encodeURIComponent(post.slug);
  const canonicalUrl = `${SITE_URL}/blog/${encodedSlug}`;
  const heroImage = getPostImage(post)
  const ogImage = heroImage

  return (
    <>
      <Head>
        <title key='title'>{post.title ? `${post.title} - Namoota Blog` : 'Namoota Blog'}</title>
        <meta
          key='description'
          name='description'
          content={
            post.excerpt ||
            'Read practical insights on web development, digital transformation, and tech innovation from Namoota.'
          }
        />
        <meta
          key='keywords'
          name='keywords'
          content={post.excerpt || 'Namoota Blog, web development, software development'}
        />
        <meta key='og:title' property='og:title' content={post.title || 'Namoota Blog'} />
        <meta
          key='og:description'
          property='og:description'
          content={
            post.excerpt ||
            'Read practical insights on web development, digital transformation, and tech innovation from Namoota.'
          }
        />
        <meta key='og:image' property='og:image' content={ogImage} />
        <meta key='og:url' property='og:url' content={canonicalUrl} />
        <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
        <meta key='twitter:title' name='twitter:title' content={post.title || 'Namoota Blog'} />
        <meta
          key='twitter:description'
          name='twitter:description'
          content={
            post.excerpt ||
            'Read practical insights on web development, digital transformation, and tech innovation from Namoota.'
          }
        />
        <meta key='twitter:image' name='twitter:image' content={ogImage} />
        <link key='canonical' rel='canonical' href={canonicalUrl} />
      </Head>

      <article className="min-h-screen bg-white dark:bg-slate-950">
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img 
            src={heroImage} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />
          
          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
            {post.category && (
              <span className="inline-block px-3 py-1 text-xs font-medium bg-sky-500 text-white rounded-full mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                <span className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  {post.author?.charAt(0) || 'N'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white">{post.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Author</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime} min read
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div
            className="prose prose-slate dark:prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 dark:prose-strong:text-white
              prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900 dark:prose-pre:bg-slate-800 prose-pre:rounded-xl
              prose-img:rounded-xl prose-img:shadow-lg
              prose-blockquote:border-l-sky-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900 prose-blockquote:rounded-r-lg prose-blockquote:py-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600 dark:text-slate-400">Share this article:</span>
                <div className="flex items-center gap-2">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"
              >
                More Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const filenames = fs.readdirSync(postsDirectory)
  
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`)
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
    props: {
      post: {
        slug: params.slug,
        title: data.title,
        author: data.author || 'Namoota Team',
        date: data.date,
        excerpt: data.excerpt || '',
        image: data.image || '',
        category,
        readingTime: readingTime < 1 ? 1 : readingTime,
        content: marked(content)
      }
    }
  }
}
