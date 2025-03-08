import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function BlogIndex({ posts }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-sky-800">Namoota Blogs</h1>
          <p className="text-gray-700 dark:text-gray-300">
          Discover expert insights on web development, digital transformation, and tech innovation to elevate your business. Our team shares practical tips and industry trends to guide your digital journey.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-gray-800/50">
              <img src={post.image} alt="illustration" width="1300"
                className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900" />
              <div className="relative p-4 pt-10">
                <div className="absolute right-4 -top-8 bg-blue-600 px-4 py-0.5 flex flex-col">
                  <p className="font-bold text-2xl text-white">{new Date(post.date).getDate()}</p>
                  <p className="text-sm text-gray-200">{new Date(post.date).toLocaleString('default', { month: 'short' })}</p>
                </div>
                <h1 className="text-xl my-2 font-semibold text-gray-900 dark:text-white">{post.title}</h1>
                <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400">
                  <span>{post.excerpt}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-500 transition hover:text-opacity-90 flex items-center gap-x-3 group">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-4 h-4 transition-all ease-linear group-hover:ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      const { data } = matter(fileContent)
      
      return {
        slug: filename.replace('.md', ''),
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        author: data.author || '',
        category: data.category || '',
        image: data.image || '/images/blog/inventory.jpg'
      }
    })

  return {
    props: {
      posts: posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  }
}
