import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import FlowBtn from '@/components/FlowBtn'

export const metadata: Metadata = {
  title: 'The ABA Circle | Creative Aging Community | Art Beyond Age',
  description:
    'Join the ABA Circle , a growing community of adults 50+ who gather around the practice of making art in Dehradun and beyond.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.artbeyondage.com/community' },
  openGraph: {
    type: 'website',
    title: 'The ABA Circle | Creative Aging Community | Art Beyond Age',
    description:
      'Join the ABA Circle , a growing community of adults 50+ who gather around the practice of making art in Dehradun and beyond.',
    url: 'https://www.artbeyondage.com/community',
    siteName: 'Art Beyond Age',
    images: [
      {
        url: 'https://www.artbeyondage.com/brand_assets/About Page Images/art-beyond-age-creative-aging-hero.webp',
      },
    ],
  },
}

export default function CommunityPage() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <div className="community-hero">
        <img
          src="/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-15.webp"
          alt="The ABA Circle community gathering at Art Beyond Age studio, Dehradun"
        />
        <div className="community-hero-overlay" />
        <div className="community-hero-text">
          <div className="hero-caption-label" style={{ marginBottom: '12px' }}>The ABA Circle</div>
          <h1 className="community-hero-title">
            The ABA Circle ,<br /><em>Creative Aging Community</em>
          </h1>
        </div>
      </div>

      {/* WORLD */}
      <section className="world">
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          The World of Art Beyond Age
        </div>
        <h2 className="world-title">Art that grows<br /><em>with you.</em></h2>
        <p className="world-body">
          Every programme is designed with intention , slow, considered, and deeply human. We
          believe that creativity is a practice of presence, and presence is the foundation of
          wellness.
        </p>
        <div className="world-grid">
          <div className="world-item">
            <div className="world-item-label">Always Open For</div>
            <div className="world-item-title">Beginners &amp; Returning Artists</div>
            <p className="world-item-body">
              No portfolio. No prerequisites. Our workshops are designed as gentle entry points ,
              a welcome back to the creative self you&apos;ve always carried.
            </p>
            <FlowBtn href="/contact">Learn more</FlowBtn>
          </div>
          <div className="world-item">
            <div className="world-item-label">Thoughtful Community</div>
            <div className="world-item-title">The ABA Circle</div>
            <p className="world-item-body">
              A quietly growing community of adults who gather around the practice of making.
              Members share work, attend exclusive talks, and hold each other&apos;s creative
              journeys with care.
            </p>
            <FlowBtn href="/contact">Join the circle</FlowBtn>
          </div>
          <div className="world-item">
            <div className="world-item-label">Where We Are</div>
            <div className="world-item-title">The Official ABA Studio</div>
            <p className="world-item-body">
              Our home in Dehradun , a calm, unhurried space filled with natural light, quality
              materials, and the quiet hum of people absorbed in making. Open for visits.
            </p>
            <FlowBtn href="/contact">Find the studio</FlowBtn>
          </div>
        </div>
      </section>

      {/* INSPIRE */}
      <section className="inspire">
        <div className="inspire-left">
          <div className="section-eyebrow">Stay Connected</div>
          <h2 className="inspire-heading">Get<br /><em>Inspired</em></h2>
          <p className="inspire-body">
            Receive gentle dispatches from the studio , new workshop announcements, reflections on
            creative aging, and glimpses of what&apos;s being made.
          </p>
          <div className="inspire-email-row">
            <input className="inspire-input" type="email" placeholder="Your email address" />
            <FlowBtn style={{ borderRadius: '0 100px 100px 0', borderLeft: 'none' }}>
              Subscribe
            </FlowBtn>
          </div>
        </div>
        <div className="inspire-right">
          {[
            {
              img: '/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-11.webp',
              alt: 'Senior artist making art at Art Beyond Age community workshop, Dehradun',
              label: 'Essay',
              title: 'Why Making Things is an Act of Hope',
              body: 'On the quiet radical act of creating when the world tells you your creative years are behind you.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-12.webp',
              alt: 'First session participant picking up a brush at Art Beyond Age workshop, Dehradun',
              label: 'Workshop Notes',
              title: 'What Happens in the First Session',
              body: 'A quiet account of what it looks like when someone picks up a brush for the first time in thirty years.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-13.webp',
              alt: 'ABA Circle community members at Art Beyond Age studio, Dehradun',
              label: 'Community',
              title: 'Portraits from the ABA Circle',
              body: 'Six members, six practices, one shared conviction: that art makes life richer at any age.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-14.webp',
              alt: 'Creative aging and wellbeing research at Art Beyond Age workshop, Dehradun',
              label: 'Wellbeing',
              title: 'The Science of Creative Aging',
              body: 'What the research says , and why our experience confirms every word of it.',
            },
          ].map((card) => (
            <div key={card.title} className="inspire-card">
              <div className="inspire-card-img">
                <img src={card.img} alt={card.alt} />
                <div className="inspire-card-overlay" />
              </div>
              <div className="inspire-card-label">{card.label}</div>
              <div className="inspire-card-title">{card.title}</div>
              <p className="inspire-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-bottom" style={{ borderTop: '0.5px solid var(--mist)' }}>
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
