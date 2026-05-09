'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const link = (href: string, label: string) => (
    <a href={href} className={`nav-link${isActive(href) ? ' active' : ''}`}>
      {label}
    </a>
  )

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-left">
          {link('/', 'Home')}
          {link('/about', 'About')}
          {link('/workshops', 'Workshops')}
        </div>

        <a href="/" className="nav-logo">
          <img
            src="/brand_assets/Logos/New Logo.webp"
            alt="Art Beyond Age — Creative Aging Studio, Dehradun"
          />
        </a>

        <div className="nav-right">
          {link('/community', 'Community')}
          {link('/blog', 'Blog')}
          {link('/contact', 'Contact')}
        </div>

        <button
          className="nav-hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {link('/', 'Home')}
        {link('/about', 'About')}
        {link('/workshops', 'Workshops')}
        {link('/community', 'Community')}
        {link('/blog', 'Blog')}
        {link('/contact', 'Contact')}
      </div>
    </>
  )
}
