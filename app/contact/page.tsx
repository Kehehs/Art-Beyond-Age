import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import FlowBtn from '@/components/FlowBtn'

export const metadata: Metadata = {
  title: 'Contact Us | Art Beyond Age | Dehradun Studio',
  description:
    'Visit or reach out to Art Beyond Age. Our studio is based in Dehradun, Uttarakhand. Email: chandni.artbeyondage@gmail.com',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.artbeyondage.com/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact Us | Art Beyond Age | Dehradun Studio',
    description:
      'Visit or reach out to Art Beyond Age. Our studio is based in Dehradun, Uttarakhand. Email: chandni.artbeyondage@gmail.com',
    url: 'https://www.artbeyondage.com/contact',
    siteName: 'Art Beyond Age',
    images: [
      {
        url: 'https://www.artbeyondage.com/brand_assets/About Page Images/art-beyond-age-creative-aging-hero.webp',
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      <div className="page-header">
        <div className="page-header-eyebrow">Get in Touch</div>
        <h1 className="page-header-title">
          Contact Art Beyond Age<br /><em>Dehradun Studio</em>
        </h1>
      </div>

      <div className="contact-content">
        <div>
          <div className="contact-info-label">Studio</div>
          <div className="contact-info-value">
            Dehradun, Uttarakhand<br />India
          </div>
          <div className="contact-info-label">Email</div>
          <div className="contact-info-value">
            <a href="mailto:chandni.artbeyondage@gmail.com">chandni.artbeyondage@gmail.com</a>
          </div>
          <div className="contact-info-label">Follow</div>
          <div className="contact-info-value"><a href="https://www.instagram.com/chandni.artbeyondage?igsh=eTkzNjIwa3FtbDJo" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.facebook.com/share/14fsjwrQy7F/" target="_blank" rel="noopener">Facebook</a> · <a href="https://wa.me/qr/YPCCUYQFCTIGE1" target="_blank" rel="noopener">WhatsApp</a></div>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label className="form-label">Your name</label>
            <input className="form-input" type="text" placeholder="Full name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input className="form-input" type="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Tell us what you have in mind…" />
          </div>
          <FlowBtn>Send message</FlowBtn>
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
