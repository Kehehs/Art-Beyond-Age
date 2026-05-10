import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import FlowBtn from '@/components/FlowBtn'
import styles from './blog-listing.module.css'

export const metadata: Metadata = {
  title: 'Creative Aging Blog | Art Beyond Age',
  description:
    'Research, reflections, and stories on creative aging, art therapy, and what it means to make something at every stage of life.',
  alternates: { canonical: 'https://www.artbeyondage.com/blog' },
  openGraph: {
    type: 'website',
    title: 'Creative Aging Blog | Art Beyond Age',
    description:
      'Research, reflections, and stories on creative aging, art therapy, and what it means to make something at every stage of life.',
    url: 'https://www.artbeyondage.com/blog',
    siteName: 'Art Beyond Age',
  },
}

type PostCard = {
  slug: string
  title: string
  displayDate: string
  rawDate: string
  excerpt: string
  keyword: string
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function firstParagraph(content: string): string {
  const line = content
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l.length > 60 && !l.startsWith('#') && !l.startsWith('!') && !l.startsWith('---'))
  return line ? line.replace(/\*\*/g, '').replace(/\*/g, '').slice(0, 200) : ''
}

function getPosts(): PostCard[] {
  const dir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data, content } = matter(raw)
      const rawDate: string = data.publishDate ?? ''
      return {
        slug: filename.replace(/\.md$/, ''),
        title: (data.title as string | undefined) ?? filename.replace(/[-_]/g, ' ').replace(/\.md$/, ''),
        displayDate: formatDate(rawDate),
        rawDate,
        excerpt: (data.description as string | undefined) ?? firstParagraph(content),
        keyword: (data.primaryKeyword as string | undefined) ?? '',
      }
    })
    .sort((a, b) => {
      if (!a.rawDate && !b.rawDate) return 0
      if (!a.rawDate) return 1
      if (!b.rawDate) return -1
      return new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()
    })
}

export default function BlogListingPage() {
  const posts = getPosts()

  return (
    <>
      <SiteNav />

      <div className={styles.pageHeader}>
        <div className="section-eyebrow">The Studio Journal</div>
        <h1 className={styles.pageTitle}>
          Creative Aging ,<br /><em>Insights &amp; Stories</em>
        </h1>
        <p className={styles.pageLead}>
          Research, reflections, and stories on creative aging, art therapy, and what it means to
          make something at every stage of life.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <p>No posts yet. Check back soon.</p>
        </div>
      ) : (
        <ul className={styles.grid}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.card}>
              <div className={styles.meta}>
                {post.displayDate && (
                  <span className={styles.date}>{post.displayDate}</span>
                )}
                {post.keyword && (
                  <span className={styles.tag}>{post.keyword}</span>
                )}
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              {post.excerpt && (
                <p className={styles.excerpt}>{post.excerpt}</p>
              )}
              <FlowBtn href={`/blog/${post.slug}`}>Read more</FlowBtn>
            </li>
          ))}
        </ul>
      )}

      <footer>
        <div className="footer-bottom" style={{ borderTop: '0.5px solid var(--mist)' }}>
          <div className="footer-social">
            <a href="https://www.instagram.com/artbeyondage" target="_blank" rel="noopener">
              Instagram
            </a>
            <a href="https://www.facebook.com/artbeyondage" target="_blank" rel="noopener">
              Facebook
            </a>
            <a href="/contact">WhatsApp</a>
          </div>
          <div className="footer-copy">© 2025 Art Beyond Age. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
