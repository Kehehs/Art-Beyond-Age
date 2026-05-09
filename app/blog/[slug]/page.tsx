import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import styles from './blog-post.module.css'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

type Frontmatter = {
  title?: string
  description?: string
  ogImage?: string
  publishDate?: string
  [key: string]: unknown
}

function getPost(slug: string): { frontmatter: Frontmatter; content: string } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { frontmatter: data as Frontmatter, content }
}

export async function generateStaticParams() {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ slug: f.replace(/\.md$/, '') }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const { frontmatter } = post
  return {
    title: frontmatter.title
      ? `${frontmatter.title} | Art Beyond Age`
      : 'Art Beyond Age Blog',
    description: frontmatter.description ?? '',
    alternates: {
      canonical: `https://www.artbeyondage.com/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: frontmatter.title ?? undefined,
      description: frontmatter.description ?? '',
      url: `https://www.artbeyondage.com/blog/${slug}`,
      siteName: 'Art Beyond Age',
      publishedTime: frontmatter.publishDate ?? undefined,
      images: frontmatter.ogImage
        ? [{ url: frontmatter.ogImage, width: 1200, height: 630, alt: frontmatter.title ?? '' }]
        : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <SiteNav />
      <main className={styles.main}>
        <article className={styles.article}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Pass through images as plain <img> so relative paths resolve
              // correctly against the /blog/* page URL.
              // Files referenced as ./filename.webp must be placed in public/blog/.
              img({ src, alt }) {
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src ?? ''} alt={alt ?? ''} />
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
    </>
  )
}
