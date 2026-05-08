'use client'

import { useEffect, useRef } from 'react'

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Swap video source for mobile
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const source = video.querySelector('source')
    if (!source) return

    const mq = window.matchMedia('(max-width: 768px)')
    const applyVideoSrc = (e: MediaQueryList | MediaQueryListEvent) => {
      const src = e.matches
        ? '/mobileviewherovid.mp4'
        : '/brand_assets/homepage-hero-section .mp4'
      if (source.getAttribute('src') !== src) {
        source.setAttribute('src', src)
        video.load()
        video.play().catch(() => {})
      }
    }
    applyVideoSrc(mq)
    mq.addEventListener('change', applyVideoSrc as (e: MediaQueryListEvent) => void)
    return () => mq.removeEventListener('change', applyVideoSrc as (e: MediaQueryListEvent) => void)
  }, [])

  // Hero parallax
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const onScroll = () => {
      if (window.scrollY < window.innerHeight) {
        const depth = Math.min(window.scrollY / window.innerHeight, 1)
        overlay.style.background = `linear-gradient(to bottom,
          rgba(26,26,24,${0.15 + depth * 0.2}) 0%,
          rgba(26,26,24,${0.05 + depth * 0.1}) 40%,
          rgba(26,26,24,${0.55 + depth * 0.2}) 100%)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline>
        <source src="/brand_assets/homepage-hero-section .mp4" type="video/mp4" />
      </video>
      <div ref={overlayRef} className="hero-overlay" />
      <div className="hero-caption-bar">
        <div>
          <div className="hero-caption-label">ART BEYOND AGE</div>
          <div className="hero-caption-title">
            The Art of<br /><em>Creative Becoming</em>
          </div>
        </div>
        <div className="hero-discover">Discover more</div>
      </div>
    </section>
  )
}
