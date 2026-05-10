import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import HomeHero from '@/components/HomeHero'
import FlowBtn from '@/components/FlowBtn'

export const metadata: Metadata = {
  title: 'Art Beyond Age | Creative Aging Workshops for Adults 50+ | Dehradun',
  description:
    'Art Beyond Age offers evidence-based creative aging workshops for adults 50 and above in Dehradun. Painting, watercolour, mandala, and mixed media , designed for seniors.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.artbeyondage.com/' },
  openGraph: {
    type: 'website',
    title: 'Art Beyond Age | Creative Aging Workshops for Adults 50+ | Dehradun',
    description:
      'Art Beyond Age offers evidence-based creative aging workshops for adults 50 and above in Dehradun. Painting, watercolour, mandala, and mixed media , designed for seniors.',
    url: 'https://www.artbeyondage.com/',
    siteName: 'Art Beyond Age',
    images: [
      {
        url: 'https://www.artbeyondage.com/brand_assets/About Page Images/art-beyond-age-creative-aging-hero.webp',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Art Beyond Age',
  description: 'Creative aging workshops for adults 50 and above in Dehradun, India.',
  url: 'https://www.artbeyondage.com',
  email: 'chandni.artbeyondage@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dehradun',
    addressRegion: 'Uttarakhand',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/artbeyondage',
    'https://www.facebook.com/artbeyondage',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteNav />

      <h1 className="visually-hidden">Creative Aging Workshops for Adults 50+ in Dehradun</h1>

      <HomeHero />

      {/* FEATURED STORY */}
      <section className="featured">
        <div className="featured-text">
          <div className="section-eyebrow">Our Philosophy</div>
          <h2 className="featured-heading">
            Creativity does not<br />diminish with age ,<br />it <em>deepens.</em>
          </h2>
          <p className="featured-body">
            Art Beyond Age was founded on a quiet conviction: that the second half of life is not a
            retreat from expression, but its fullest arrival. Our workshops are unhurried, meditative
            spaces where adults 50 and beyond discover , or rediscover , the transformative power of
            making.
          </p>
          <FlowBtn href="/about">Our story</FlowBtn>
        </div>
        <div className="featured-img-wrap">
          <img
            src="/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-1.webp"
            alt="Senior participant creating artwork in Art Beyond Age studio workshop, Dehradun"
          />
          <div className="featured-img-overlay" />
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="experiences">
        <div className="experiences-header">
          <div className="section-eyebrow">Creative Experiences</div>
          <h2 className="editorial-title">Ways to engage with Art Beyond Age</h2>
        </div>
        <div className="experiences-grid">
          <div className="exp-card">
            <img
              src="/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-7.webp"
              alt="Adults 50+ painting in Art Beyond Age in-studio workshop, Dehradun"
            />
            <div className="exp-card-overlay" />
            <div className="exp-card-content">
              <div className="exp-card-eyebrow">In-Studio</div>
              <div className="exp-card-title">Studio<br /><em>Workshops</em></div>
              <FlowBtn href="/workshops" className="flow-btn-light">Explore sessions</FlowBtn>
            </div>
          </div>
          <div className="exp-card">
            <img
              src="/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-8.webp"
              alt="Senior artists at Art Beyond Age weekend retreat workshop, Dehradun"
            />
            <div className="exp-card-overlay" />
            <div className="exp-card-content">
              <div className="exp-card-eyebrow">Immersive</div>
              <div className="exp-card-title">Weekend<br /><em>Retreats</em></div>
              <FlowBtn href="/workshops" className="flow-btn-light">Explore retreats</FlowBtn>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE AGING */}
      <section className="creative-aging">
        <div className="ca-header">
          <div className="ca-header-left">
            <div className="ca-eyebrow">Creative Aging</div>
            <h2 className="ca-title">The Future of<br /><em>Creative Aging</em></h2>
          </div>
          <div className="ca-lead">
            Art Beyond Age is building the global destination for individuals aged 50 and above who
            are ready to bridge the gap between wellness and artistic expression. Our programs move
            beyond the limitations of standard creative classes by prioritizing the unique emotional
            and physiological needs of older adults.
          </div>
        </div>

        <div className="ca-why-block">
          <div className="ca-why-label">Why Creative Aging is Different</div>
          <p className="ca-why-text">
            Creative Aging is not a standard art class with the difficulty turned down; it is a
            methodology designed from the ground up to foster cognitive resilience and social
            connection.{' '}
            <strong>Evidence-Based vs. Anecdotal:</strong> Unlike regular classes, our workshops are
            measured via the GRACE Framework, a proprietary system that tracks emotional shifts
            across five domains, including Grounded Presence and Creative Confidence.
          </p>
        </div>

        <div className="ca-features-grid">
          <div className="ca-feature">
            <div className="ca-feature-num">01</div>
            <div className="ca-feature-title">Technique with Therapeutic Intent</div>
            <p className="ca-feature-body">
              Every medium , from the repetitive, anxiety-reducing geometry of Mandala Drawing to
              the sensory-rich Watercolor Wash , is selected for its specific cognitive and
              accessibility benefits.
            </p>
          </div>
          <div className="ca-feature">
            <div className="ca-feature-num">02</div>
            <div className="ca-feature-title">Adaptive Expertise</div>
            <p className="ca-feature-body">
              We utilize a specialized Accessibility Framework to ensure that participants with
              arthritis, tremors, or memory concerns engage with the same professional-grade tools
              as any other artist.
            </p>
          </div>
          <div className="ca-feature">
            <div className="ca-feature-num">03</div>
            <div className="ca-feature-title">A Shift in Identity</div>
            <p className="ca-feature-body">
              Our 12-week foundation curriculum is designed to move participants through an emotional
              arc of Safety, Skill, and Legacy, transforming their relationship with their own
              creativity.
            </p>
          </div>
          <div className="ca-feature">
            <div className="ca-feature-num">04</div>
            <div className="ca-feature-title">Our Workshops</div>
            <p className="ca-feature-body">
              We provide a structured environment where the "magic" of an art session is turned into
              a repeatable, data-driven experience , about returning to oneself through supportive
              community and professional-grade instruction.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <div className="quote-band">
        <div className="quote-text">"Your most expressive years are still ahead."</div>
        <div className="quote-attr">Art Beyond Age , Creative Aging &amp; Wellness</div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/brand_assets/Logos/Logo.webp"
              alt="Art Beyond Age logo , Creative Aging Studio, Dehradun"
            />
            <p className="footer-brand-body">
              A premium independent community for creative aging and mental wellness, for adults 50
              and beyond. Based in Dehradun.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Workshops</div>
            <ul>
              <li><a href="/workshops#foundation-curriculum">The Foundation Curriculum</a></li>
              <li><a href="/workshops#art-techniques">Art Techniques</a></li>
              <li><a href="/workshops#accessibility-framework">Accessibility Framework</a></li>
              <li><a href="/workshops#gallery">Workshop Gallery</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Community</div>
            <ul>
              <li><a href="/community">The ABA Circle</a></li>
              <li><a href="/community">Member Stories</a></li>
              <li><a href="/community">Essays &amp; Notes</a></li>
              <li><a href="/community">Events</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">About</div>
            <ul>
              <li><a href="/about#goal-purpose">Goal &amp; Purpose</a></li>
              <li><a href="/about#journey">The Journey</a></li>
              <li><a href="/about#team">Meet the Team</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <ul>
              <li><a href="/contact">Dehradun Studio</a></li>
              <li><a href="mailto:chandni.artbeyondage@gmail.com">chandni.artbeyondage@gmail.com</a></li>
              <li><a href="/contact">Enquire</a></li>
              <li><a href="/contact">Visit Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.instagram.com/artbeyondage" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/artbeyondage" target="_blank" rel="noopener">Facebook</a>
            <a href="/contact">WhatsApp</a>
          </div>
          <div className="footer-copy">© 2025 Art Beyond Age. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
