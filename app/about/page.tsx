import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'

export const metadata: Metadata = {
  title: 'Our Story & Philosophy | Art Beyond Age | Dehradun',
  description:
    'Meet the founders of Art Beyond Age and learn how we built India\'s leading creative aging platform , rooted in the GRACE framework and evidence-based wellness.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.artbeyondage.com/about' },
  openGraph: {
    type: 'website',
    title: 'Our Story & Philosophy | Art Beyond Age | Dehradun',
    description:
      'Meet the founders of Art Beyond Age and learn how we built India\'s leading creative aging platform , rooted in the GRACE framework and evidence-based wellness.',
    url: 'https://www.artbeyondage.com/about',
    siteName: 'Art Beyond Age',
    images: [
      {
        url: 'https://www.artbeyondage.com/brand_assets/About Page Images/art-beyond-age-creative-aging-hero.webp',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <div className="about-hero">
        <img
          src="/brand_assets/About Page Images/art-beyond-age-creative-aging-hero.webp"
          alt="Art Beyond Age creative aging workshop in session, Dehradun"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-caption">
          <div className="about-hero-label">Art Beyond Age , Dehradun</div>
          <h1 className="about-hero-title">
            Building India&apos;s Leading<br />Creative Aging Platform<br />
            for <em>adults 50 and above.</em>
          </h1>
        </div>
      </div>

      {/* SECTION 1: OUR GOAL & PURPOSE */}
      <div className="about-section" id="goal-purpose">
        <div className="about-cols">
          <div className="about-col-label">01 , Our Goal &amp; Purpose</div>
          <div className="about-col-content">
            <div className="about-subhead">The Gap in Creative Aging</div>
            <p className="about-body-text">
              The global aging population is growing at an unprecedented rate, and with it, a rising
              crisis of loneliness and social isolation. Most available solutions for older adults
              fall into two categories: they are either too clinical to feel human or too casual to
              prove any lasting impact.
            </p>
            <div className="about-subhead">Our Mission</div>
            <p className="about-body-text">
              Art Beyond Age sits firmly in the gap. We are building the leading creative aging
              platform for individuals aged 50 and above, designed to bridge the distance between
              evidence-based wellness and the profound human need for expression.
            </p>
            <div className="about-subhead">Our Vision</div>
            <p className="about-body-text">
              We aim to scale the magic of the creative process through a data-driven approach. By
              combining facilitated art programs with AI-powered emotional analytics and a
              structured, repeatable curriculum, we provide an institutional infrastructure that
              turns "art therapy" into a measurable, scalable, and deeply moving experience for
              hundreds of thousands of older adults worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH IMAGE 1 */}
      <div className="about-full-img">
        <img
          src="/brand_assets/About Page Images/creative-aging-workshop-facilitator-dehradun.webp"
          alt="Chandni Kamboj facilitating a creative aging workshop , Art Beyond Age studio, Dehradun"
        />
        <div className="about-full-img-overlay" />
      </div>

      {/* SECTION 2: THE JOURNEY */}
      <div className="about-section" id="journey">
        <div className="about-cols">
          <div className="about-col-label">02 , The Journey</div>
          <div className="about-col-content">
            <div className="about-subhead">Born in Dehradun</div>
            <p className="about-body-text">
              Art Beyond Age wasn&apos;t born in a boardroom. It was born in a quiet room in
              Dehradun, when an artist watched an older woman pick up a brush for the first time in
              decades and saw her become herself again. It wasn&apos;t just a smile of satisfaction;
              it was a softening of posture, a slowing of breath, and a return to self that was
              undeniable.
            </p>
            <div className="about-subhead">The Shock of Joy</div>
            <p className="about-body-text">
              Our first workshop gathered 18 participants, all above the age of 50. Some came
              cautiously; most hadn&apos;t held a paintbrush since their school days. By the end of
              the session, the room was filled with the "shock of joy." Participants were crying,
              hugging strangers, and expressing a shared sentiment:{' '}
              <em style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '16px' }}>
                "I can&apos;t believe someone is finally doing this for us."
              </em>
            </p>
            <div className="about-subhead">From Magic to Methodology</div>
            <p className="about-body-text">
              As Workshop II transitioned from a pilot into a paid, intentional program, the
              patterns became clear. What initially seemed like magic was actually a repeatable
              sequence of emotional breakthroughs.
            </p>
            <p className="about-body-text">
              To capture this, we developed{' '}
              <span className="about-grace-tag">GRACE</span> , a five-domain observational
              framework that captures the emotional arc of every creative aging session. This turned
              an intuitive feeling into a rigorous methodology. Today, Art Beyond Age is evolving
              from a local workshop into a global platform, ensuring that the transformation seen in
              that first room in Dehradun can be experienced by seniors everywhere.
            </p>
          </div>
        </div>
      </div>

      {/* PARTICIPANT QUOTE */}
      <div className="about-participant-quote">
        <div className="about-participant-quote-label">Workshop I , Dehradun</div>
        <div>
          <span className="about-quote-mark">"</span>
          <div className="about-quote-text">
            I can&apos;t believe someone is finally doing this for us.
          </div>
          <div className="about-quote-attr">Workshop I Participant, Dehradun</div>
        </div>
      </div>

      {/* FULL-WIDTH IMAGE 2 */}
      <div className="about-full-img">
        <img
          src="/brand_assets/About Page Images/creative-aging-workshop-participants-dehradun.webp"
          alt="Seniors participating in Art Beyond Age creative aging workshop , Art Beyond Age studio, Dehradun"
        />
        <div className="about-full-img-overlay" />
      </div>

      {/* SECTION 3: MEET THE TEAM */}
      <div className="about-team-section" id="team">
        <div className="about-team-header">
          <div className="about-col-label">03 , Meet the Team</div>
          <div>
            <div className="about-team-title">
              The people behind<br />the{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--clay)' }}>practice.</em>
            </div>
            <p className="about-team-intro">
              Art Beyond Age is built by two founders whose roles are as complementary as the art
              and the science that underpin our work.
            </p>
          </div>
        </div>

        {/* Chandni */}
        <div className="about-founder-row">
          <div className="about-founder-img">
            <img
              src="/brand_assets/About Page Images/founderimages/chandni-kamboj-cofounder-art-beyond-age.webp"
              alt="Chandni Kamboj, Co-Founder and Lead Facilitator, Art Beyond Age"
            />
            <div className="about-founder-img-overlay" />
          </div>
          <div className="about-founder-info">
            <div className="about-founder-role">Co-Founder &amp; Lead Facilitator</div>
            <div className="about-founder-name">Chandni<br /><em>Kamboj</em></div>
            <div className="about-founder-body">
              <p>
                Chandni came to art as a compulsion rather than a choice, driven by a lifelong need
                to draw, paint, and observe light. A formally trained artist and educator, her
                practice is rooted in the belief that making art is a primary form of
                self-knowledge.
              </p>
              <p>
                Throughout years of teaching, Chandni discovered her true calling: she felt most
                alive when her students were older. She was moved by their unique courage , the
                willingness to try something new, risk embarrassment, and sit with imperfection.
              </p>
              <p>
                As the main facilitator of the Art Beyond Age workshops, Chandni is the architect
                of the emotional experience and the creator of the GRACE framework.
              </p>
            </div>
          </div>
        </div>

        {/* Mahesh */}
        <div className="about-founder-row reversed">
          <div className="about-founder-img">
            <img
              src="/brand_assets/About Page Images/founderimages/maheshfounderimage.webp"
              alt="Mahesh Rai, Co-Founder and Strategy Lead, Art Beyond Age"
            />
            <div className="about-founder-img-overlay" />
          </div>
          <div className="about-founder-info">
            <div className="about-founder-role">Co-Founder &amp; Strategy Lead</div>
            <div className="about-founder-name">Mahesh<br /><em>Rai</em></div>
            <div className="about-founder-body">
              <p>
                A strategic entrepreneur, Mahesh brings a wealth of experience in trade-tech
                platform architecture, B2B systems, and scaling ventures across multiple continents.
                Where others saw a wellness project, Mahesh saw an unmet market and a defensible
                methodology with the power to move institutions.
              </p>
              <p>
                His role is the infrastructure and strategy behind the art. He provides the
                frameworks that turn a beautiful idea into an enduring business , developing the
                measurement layers, AI-powered analytics dashboards, and the institutional licensing
                models.
              </p>
              <p>
                Mahesh leads the architecture of{' '}
                <strong>ABA-Tech LLP</strong>, the vehicle designed to carry this vision into the
                future of global healthcare and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING QUOTE */}
      <div className="quote-band">
        <div className="quote-text">"Your most expressive years are still ahead."</div>
        <div className="quote-attr">Art Beyond Age , Primary Tagline</div>
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
