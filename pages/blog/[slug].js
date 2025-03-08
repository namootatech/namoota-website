import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function BlogPost({ post }) {
  return (
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
        content: marked(content)
      }
    }
  }
}
