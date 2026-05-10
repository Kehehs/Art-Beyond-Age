import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Workshops & Curriculum | Art Beyond Age | Dehradun',
  description:
    'Explore our 12-week creative aging curriculum , watercolour, mandala, botanical painting, and more. Adaptive techniques for seniors with arthritis, tremors, or memory concerns.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.artbeyondage.com/workshops' },
  openGraph: {
    type: 'website',
    title: 'Workshops & Curriculum | Art Beyond Age | Dehradun',
    description:
      'Explore our 12-week creative aging curriculum , watercolour, mandala, botanical painting, and more. Adaptive techniques for seniors with arthritis, tremors, or memory concerns.',
    url: 'https://www.artbeyondage.com/workshops',
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
  '@type': 'Course',
  name: '12-Week Creative Aging Foundation Program',
  description:
    'A structured 12-week art curriculum for adults 50+ covering watercolour, mandala, botanical painting, and mixed media.',
  provider: {
    '@type': 'Organization',
    name: 'Art Beyond Age',
    url: 'https://www.artbeyondage.com',
  },
  educationalLevel: 'Beginner',
  audience: {
    '@type': 'Audience',
    audienceType: 'Adults 50 and above',
  },
}

export default function WorkshopsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteNav />

      {/* HERO */}
      <div className="ws-hero">
        <img
          className="ws-hero-img"
          src="/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-10.webp"
          alt="Senior participants in Art Beyond Age workshop , Art Beyond Age studio, Dehradun"
        />
        <div className="ws-hero-overlay" />
        <div className="ws-hero-content">
          <div className="ws-hero-eyebrow">Art Beyond Age , Dehradun</div>
          <h1 className="ws-hero-title">
            Art Workshops &amp; Curriculum<br />for Seniors | <em>Dehradun</em>
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="ws-intro-section">
        <div className="ws-intro-label">About our Workshops</div>
        <p className="ws-intro-text">
          Our workshops are designed to bridge the gap between clinical wellness and creative
          expression. Every element, from the brush handle to the emotional arc of the session, is
          curated for the specific needs of older adults.
        </p>
      </div>

      {/* 12-WEEK CURRICULUM */}
      <div className="ws-section" id="foundation-curriculum">
        <div className="ws-section-header">
          <div className="ws-section-label">01 , The Foundation Curriculum</div>
          <h2 className="ws-section-title">The 12-Week Journey</h2>
          <p className="ws-section-desc">
            The program is structured as three 4-week arcs, each building on the last. By Week 12,
            every participant has a portfolio of 12 artworks and a transformed relationship with
            their creativity.
          </p>
        </div>
        <div className="ws-phases-grid">
          {[
            {
              img: '/brand_assets/Workshops Page Images/12 week Curriculum/12 week curriculum phase 1.webp',
              alt: 'Phase 1 Safety and Play , Art Beyond Age 12-week creative aging curriculum, Dehradun',
              num: '01',
              weeks: 'Weeks 1–4',
              title: 'Safety & Play',
              body: 'Establish the psychological safety contract. Remove fear of failure and build group trust. Introduce color, mark-making, and texture without technical vocabulary.',
              outcome: 'Participants leave each session surprised by their own creations.',
            },
            {
              img: '/brand_assets/Workshops Page Images/12 week Curriculum/12 week curriculum phase 2.webp',
              alt: 'Phase 2 Skill and Meaning , Art Beyond Age creative aging workshop curriculum, Dehradun',
              num: '02',
              weeks: 'Weeks 5–8',
              title: 'Skill & Meaning',
              body: 'Introduce specific techniques (botanical, mandala, portrait, collage) paired with life-narrative themes. Skill develops alongside self-reflection.',
              outcome: 'Development of an artistic vocabulary and a deeper understanding of personal story.',
            },
            {
              img: '/brand_assets/Workshops Page Images/12 week Curriculum/12 week curriculum phase 3.webp',
              alt: 'Phase 3 Legacy and Celebration , Art Beyond Age senior art program, Dehradun',
              num: '03',
              weeks: 'Weeks 9–12',
              title: 'Legacy & Celebration',
              body: 'The final arc turns inward, then outward. Includes illustrated letters and collaborative canvases. The free-choice session affirms autonomy.',
              outcome: 'A final exhibition where families witness the transformation and participants are honored publicly.',
            },
          ].map((phase) => (
            <div key={phase.num} className="ws-phase-card">
              <div className="ws-phase-img-wrap">
                <img src={phase.img} alt={phase.alt} />
                <div className="ws-phase-overlay" />
                <div className="ws-phase-num">{phase.num}</div>
              </div>
              <div className="ws-phase-content">
                <div className="ws-phase-weeks">{phase.weeks}</div>
                <div className="ws-phase-title">{phase.title}</div>
                <p className="ws-phase-body">{phase.body}</p>
                <div className="ws-phase-outcome">
                  <span>Outcome:</span> {phase.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ART TECHNIQUES */}
      <div className="ws-section" id="art-techniques">
        <div className="ws-section-header">
          <div className="ws-section-label">02 , Art Techniques</div>
          <h2 className="ws-section-title">The Practices We Use</h2>
          <p className="ws-section-desc">
            Techniques are chosen for their therapeutic and accessibility properties, specifically
            suited for the bodies and minds of seniors.
          </p>
        </div>
        <div className="ws-techniques-grid">
          {[
            {
              img: '/brand_assets/Workshops Page Images/Art Techniques/Art techniques watercolor.webp',
              alt: 'Watercolour wash technique for seniors , Art Beyond Age workshop, Dehradun',
              name: 'Watercolor Wash',
              body: 'The flow of water and pigment is pleasurable and forgiving. It rewards spontaneity and penalizes rigidity, facilitating the psychological shift seniors need. Deeply calming sensory experience.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Art Techniques/Art technique-Mandala Drawing.webp',
              alt: 'Mandala drawing technique for cognitive wellness , Art Beyond Age workshop, Dehradun',
              name: 'Mandala Drawing',
              body: 'Repetitive, meditative geometry clinically shown to reduce anxiety. Provides cognitive scaffolding for those with early memory concerns and resonates culturally with Indian seniors.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Art Techniques/Art technique-Botanical Painting.webp',
              alt: 'Botanical painting class for seniors , Art Beyond Age workshop, Dehradun',
              name: 'Botanical Painting',
              body: 'Connects to deep cultural memories of nature and gardening. Observation of living things promotes mindfulness. The subject matter is inherently forgiving , nature has no "wrong" shapes.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Art Techniques/Art techniques collage.webp',
              alt: 'Collage and mixed media art for seniors , Art Beyond Age workshop, Dehradun',
              name: 'Collage & Mixed Media',
              body: 'Inclusive and requiring no drawing skill. The act of choosing and placing images is inherently narrative, allowing participants to create visual autobiographies (Life-Review).',
            },
            {
              img: '/brand_assets/Workshops Page Images/Art Techniques/Art techniques block printing.webp',
              alt: 'Hand and block printing technique for senior artists , Art Beyond Age workshop, Dehradun',
              name: 'Hand & Block Printing',
              body: 'Removes "drawing anxiety." Exercises fine motor coordination through the physical sensation of pressing and lifting. Produces repeatable, beautiful results that build confidence.',
            },
            {
              img: '/brand_assets/Workshops Page Images/Art Techniques/Art technique-Acrylic on canvas.webp',
              alt: 'Acrylic on canvas painting for older adults , Art Beyond Age workshop, Dehradun',
              name: 'Acrylic on Canvas',
              body: 'Creates a "trophy-worthy" physical artifact. Validating to hold a stretched canvas. The opacity allows mistakes to be painted over, removing permanent mistake anxiety.',
            },
          ].map((t) => (
            <div key={t.name} className="ws-technique">
              <div className="ws-technique-img">
                <img src={t.img} alt={t.alt} />
              </div>
              <div className="ws-technique-name">{t.name}</div>
              <p className="ws-technique-body">{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ACCESSIBILITY FRAMEWORK */}
      <div className="ws-access-new" id="accessibility-framework">
        <div className="ws-section-header">
          <div className="ws-section-label">03 , Accessibility Framework</div>
          <h2 className="ws-section-title">Designed for Every Body</h2>
          <p className="ws-section-desc">
            Creative Aging is not a "watered-down" art class. It is art designed from the ground
            up for older adults. Adaptations are framed as creative techniques, not accommodations
            , preserving dignity at every step.
          </p>
        </div>
        <div className="ws-access-grid">
          {[
            {
              img: '/brand_assets/Workshops Page Images/Accesibilty framework images/Arthritis toolkit.webp',
              alt: 'Adaptive art tools for seniors with arthritis , Art Beyond Age accessibility framework, Dehradun',
              cat: 'For Arthritis & Limited Grip',
              items: [
                'Wider, foam-handled brushes requiring minimal pressure',
                'Sponge application instead of brushes for "dab and press" movements',
                '5-minute hand warm-ups and stretches before sessions',
                'Tearing paper (collage) to replace scissor work',
                'Techniques that welcome imprecision (wash, print, stamp)',
              ],
            },
            {
              img: '/brand_assets/Workshops Page Images/Accesibilty framework images/Tremors & parkinsons wet on wet toolkit.webp',
              alt: 'Wet-on-wet watercolour technique for seniors with tremors and Parkinson\'s , Art Beyond Age, Dehradun',
              cat: 'For Tremor & Parkinson\'s',
              items: [
                'Watercolour wet-on-wet: water absorbs tremor into natural texture',
                'Large-scale work (A3+) providing a larger target area',
                'Weighted brushes to dampen involuntary movement',
                'Stabilized canvases using non-slip mats or binder clips',
                'Framing tremor-marks as intentional "energy" and texture',
              ],
            },
            {
              img: '/brand_assets/Workshops Page Images/Accesibilty framework images/Early Memory Concerns Multi-Sensory Engagement.webp',
              alt: 'Multi-sensory art engagement for seniors with early memory concerns , Art Beyond Age, Dehradun',
              cat: 'For Early Memory Concerns',
              items: [
                'Consistent session structure to reduce cognitive load',
                'One instruction at a time: demonstrate, invite, then observe',
                'Multi-sensory prompts (music, scent) to activate memory',
                'Portfolio review at the start of each session to reinforce progress',
                'Familiar subjects (flowers, faces) to activate long-term memory',
              ],
            },
            {
              img: '/brand_assets/Workshops Page Images/Accesibilty framework images/Vision Impairment The Tactile & High-Contrast Scaffold.webp',
              alt: 'Tactile and high-contrast art scaffold for seniors with vision impairment , Art Beyond Age, Dehradun',
              cat: 'For Vision Impairment',
              items: [
                'High-contrast materials (black on white, vivid colors)',
                'Tactile techniques (clay, textured collage) using touch as the primary sense',
                'Bold outlines printed or embossed for tracing confidence',
                'Optimal lighting and verbal descriptions during the sharing circle',
              ],
            },
          ].map((card) => (
            <div key={card.cat} className="ws-access-card">
              <div className="ws-access-card-img-wrap">
                <img src={card.img} alt={card.alt} />
                <div className="ws-access-card-img-overlay" />
                <div className="ws-access-card-cat">{card.cat}</div>
              </div>
              <div className="ws-access-card-body">
                <ul className="ws-access-list-new">
                  {card.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WORKSHOP GALLERY */}
      <div className="ws-gallery-section" id="gallery">
        <div className="ws-section-header">
          <div className="ws-section-label">04 , Workshop Gallery</div>
          <h2 className="ws-section-title">Our Workshops in Action</h2>
        </div>

        <div className="ws-gallery-label">Workshop I</div>
        <div className="ws-gallery-grid ws-gallery-grid-2" style={{ marginBottom: '40px' }}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <img
              key={n}
              src={`/brand_assets/Workshops Page Images/Workshop 1/WORKSHOP 1/senior-art-workshop-session-1-0${n}.webp`}
              alt={`Senior participant in Art Beyond Age workshop session 1, Dehradun`}
            />
          ))}
        </div>

        <div className="ws-gallery-label">Workshop II</div>
        <div className="ws-gallery-grid ws-gallery-grid-2">
          {['01', '04', '05', '07', '12', '16'].map((n) => (
            <img
              key={n}
              src={`/brand_assets/Workshops Page Images/Workshop 2/creative-aging-workshop-session-2-${n}.webp`}
              alt={`Senior participant in Art Beyond Age creative aging workshop session 2, Dehradun`}
            />
          ))}
        </div>

        <div className="ws-gallery-label">Workshop III</div>
        <div className="ws-gallery-grid ws-gallery-grid-3">
          {[2, 3, 5, 16, 18, 20].map((n) => (
            <img
              key={n}
              src={`/brand_assets/Workshops Page Images/Workshop 3/senior-art-workshop-dehradun-${n}.webp`}
              alt={`Senior participant in Art Beyond Age workshop session 3, Dehradun`}
            />
          ))}
        </div>

        <div className="ws-closing-quote">
          <p className="ws-closing-text">
            Art Beyond Age – Empowering Seniors through Structured Creativity.
          </p>
        </div>
      </div>

      <footer>
        <div className="footer-bottom" style={{ borderTop: '0.5px solid var(--mist)' }}>
          <div className="footer-social">
            <a href="https://www.instagram.com/chandni.artbeyondage?igsh=eTkzNjIwa3FtbDJo" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/share/14fsjwrQy7F/" target="_blank" rel="noopener">Facebook</a>
            <a href="https://wa.me/qr/YPCCUYQFCTIGE1" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div className="footer-copy">© 2025 Art Beyond Age. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
