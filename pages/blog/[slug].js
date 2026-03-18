import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'

const SITE_URL = 'https://namootatech.com';

export default function BlogPost({ post }) {
  const encodedSlug = encodeURIComponent(post.slug);
  const canonicalUrl = `${SITE_URL}/blog/${encodedSlug}`;
  const ogImage =
    post.image && post.image.startsWith('http')
      ? post.image
      : `${SITE_URL}${post.image?.startsWith('/') ? '' : '/'}${post.image || '/images/blog/inventory.jpg'}`;

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

      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-sky-800 mb-4">{post.title}</h1>
        <div className="font-semibold text-gray-600 mb-2">
          Published: {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="font-semibold text-gray-600 mb-8">
          By: {post.author}
        </div>
        <div
          className="prose lg:prose-xl prose-p:mb-6 prose-headings:mt-8 prose-headings:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
  
  return {
    props: {
      post: {
        slug: params.slug,
        title: data.title,
        author: data.author,
        date: data.date,
        excerpt: data.excerpt || '',
        image: data.image || '/images/blog/inventory.jpg',
        content: marked(content)
      }
    }
  }
}
