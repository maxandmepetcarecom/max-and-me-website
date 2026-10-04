import { useState } from 'react'
import type { CSSProperties } from 'react'

import heroImg from '@/imports/IMG_1999.jpeg'
import footerImg from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'
import petCareLogo from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'

function PawPrint({ size = 20, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" width={size} height={size} style={{ flexShrink: 0, ...style }} aria-hidden="true">
      <ellipse cx="22" cy="28" rx="10" ry="14" />
      <ellipse cx="43" cy="18" rx="10" ry="14" />
      <ellipse cx="65" cy="18" rx="10" ry="14" />
      <ellipse cx="84" cy="28" rx="10" ry="14" />
      <path d="M50 38c-18 0-30 12-30 26 0 10 6 17 14 20 5 2 11 2.5 16 2.5s11-.5 16-2.5c8-3 14-10 14-20 0-14-12-26-30-26z" />
    </svg>
  )
}

function MountainIcon() {
  return (
    <svg viewBox="0 0 120 120" className="service-svg" aria-hidden="true">
      <path d="M12 88 43 39l15 23 13-18 37 44H12Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
      <path d="m35 52 8-13 8 13M62 58l9-14 10 13M58 88V68m-10 20 10-20 10 20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HomeHeartIcon() {
  return (
    <svg viewBox="0 0 120 120" className="service-svg" aria-hidden="true">
      <path d="M18 56 60 20l42 36v45H18V56Z" fill="currentColor" />
      <path d="M60 84C43 72 39 64 43 56c5-10 14-7 17-1 4-6 13-9 18 1 4 8 0 16-18 28Z" fill="#ad4815" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ADVENTURE CLUB', to: '/adventure-club' },
  { label: 'PET CARE', to: '/services' },
  { label: 'SPECIAL CARE', to: '/special-care' },
  { label: 'PRICING', to: '/pricing' },
  { label: 'ADVENTURE JOURNAL', to: '/adventure-journal' },
]

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="page">
      <section className="hero">
        <img src={heroImg} alt="Maximus running on a wooded trail" className="hero-image" />
        <div className="hero-overlay" />

        <header className="site-header">
          <a href="/" className="brand" aria-label="Max & Me Pet Care home">
            <img src={petCareLogo} alt="Max & Me Pet Care" />
          </a>

          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.to} className={link.label === 'HOME' ? 'active' : ''}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/services" className="book-button"><PawPrint size={19} />BOOK NOW</a>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? '×' : '☰'}
          </button>

          {mobileOpen && (
            <nav className="mobile-nav">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.to} onClick={() => setMobileOpen(false)}>{link.label}</a>
              ))}
            </nav>
          )}
        </header>

        <div className="hero-copy">
          <h1>EVERY DOG HAS AN<br /><span>ADVENTURER WITHIN.</span></h1>
          <div className="hero-script">We’re here to unleash it. ♡</div>
          <p>Partnering with pet parents to give their pets the life they deserve, filled with adventure, enrichment, comfort, and lasting friendships. 🐾</p>
        </div>
      </section>

      <section className="choice-section" aria-label="Max & Me services">
        <div className="choice-grid">
          <article className="choice-card adventure-card">
            <div className="choice-icon" aria-hidden="true"><MountainIcon /></div>
            <div className="choice-content">
              <h2>CANINE ADVENTURE CLUB</h2>
              <p className="choice-kicker">EXPLORE. PLAY. CONNECT.</p>
              <p className="choice-description">Adventure, enrichment, and confidence-building outings for dogs of every age and personality.</p>
              <a href="/adventure-club" className="choice-button">ENTER THE ADVENTURE <PawPrint size={20} /></a>
            </div>
            <PawPrint size={78} style={{ position: 'absolute', right: 18, bottom: 22, opacity: .09 }} />
          </article>

          <article className="choice-card pet-card">
            <div className="choice-icon" aria-hidden="true"><HomeHeartIcon /></div>
            <div className="choice-content">
              <h2>PET CARE SERVICES</h2>
              <p className="choice-kicker">LOVE. COMFORT. PEACE OF MIND.</p>
              <p className="choice-description">Personalized care, specialized support, and peace of mind built around each pet’s routine, personality, and needs.</p>
              <a href="/services" className="choice-button">EXPLORE PET CARE <PawPrint size={20} /></a>
            </div>
            <PawPrint size={78} style={{ position: 'absolute', right: 18, bottom: 22, opacity: .10 }} />
          </article>
        </div>
      </section>

      <section className="trust-strip" aria-label="Why families trust Max & Me">
        <div className="trust-grid">
          <div className="trust-item"><div className="trust-icon heart-icon">♡</div><strong>FEAR FREE<br />APPROACH</strong></div>
          <div className="trust-item"><div className="trust-icon shield-icon">✓</div><strong>INSURED &amp;<br />BONDED</strong></div>
          <div className="trust-item"><div className="trust-icon first-aid-icon">✚</div><strong>PET FIRST AID</strong></div>
          <div className="trust-item"><div className="trust-icon camera-icon">▣</div><strong>ADVENTURES<br />CAPTURED DAILY</strong></div>
          <div className="trust-item"><div className="trust-icon pin-icon">●</div><strong>SERVING SAINT CLOUD<br />LAKE NONA · NARCOOSSEE<br />&amp; SURROUNDING AREAS</strong></div>
        </div>
      </section>

      <footer className="footer-photo">
        <div className="torn-edge" aria-hidden="true" />
        <img src={footerImg} alt="Max & Me lakeside adventure at golden hour" />
        <div className="footer-shade" />
        <div className="footer-script footer-left">Let’s explore<br />together! ♡</div>
        <div className="footer-script footer-right">Enriching lives<br />one paw at a time. ♡</div>
        <div className="footer-bottom">
          <div className="footer-location">● &nbsp; SERVING SAINT CLOUD, LAKE NONA, NARCOOSSEE &amp; SURROUNDING AREAS</div>
          <div className="footer-contact">407.922.0912 &nbsp; | &nbsp; MAXANDMEPETCARE.COM &nbsp; 🐾</div>
        </div>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        body { background: #f3ead7; }
        .page { width: 100%; min-height: 100vh; overflow-x: hidden; background: #f3ead7; color: #102d4a; font-family: 'Outfit', sans-serif; }

        .hero { position: relative; height: 560px; overflow: hidden; background: #111; }
        .hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 31% 43%; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.80) 0%, rgba(0,0,0,.60) 28%, rgba(0,0,0,.28) 47%, rgba(0,0,0,.04) 72%, rgba(0,0,0,.08) 100%); }

        .site-header { position: absolute; z-index: 20; top: 0; left: 0; right: 0; height: 92px; padding: 10px clamp(26px, 4vw, 64px); display: flex; align-items: center; gap: 22px; }
        .brand { width: 175px; flex: 0 0 auto; }
        .brand img { width: 100%; display: block; filter: drop-shadow(0 2px 5px rgba(0,0,0,.5)); }
        .desktop-nav { flex: 1; display: flex; justify-content: center; align-items: center; gap: clamp(12px, 1.5vw, 24px); }
        .desktop-nav a { color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-size: .88rem; font-weight: 800; letter-spacing: .05em; white-space: nowrap; padding: 7px 0; text-shadow: 0 2px 5px rgba(0,0,0,.65); }
        .desktop-nav a.active { border-bottom: 3px solid #f36b21; }
        .book-button { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-width: 130px; padding: 12px 16px; border-radius: 7px; background: #f36b21; color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; letter-spacing: .05em; box-shadow: 0 4px 12px rgba(0,0,0,.25); }
        .mobile-toggle { display: none; margin-left: auto; width: 44px; height: 44px; border: 1px solid rgba(255,255,255,.55); background: rgba(8,29,49,.88); color: white; border-radius: 7px; font-size: 1.55rem; cursor: pointer; }
        .mobile-nav { position: absolute; top: 72px; left: 14px; right: 14px; background: rgba(8,29,49,.985); padding: 14px 20px; border-radius: 8px; box-shadow: 0 14px 30px rgba(0,0,0,.35); }
        .mobile-nav a { display: block; color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; letter-spacing: .07em; padding: 8px 0; }

        .hero-copy { position: absolute; z-index: 10; left: clamp(30px, 4.5vw, 68px); top: 165px; width: min(53vw, 650px); color: white; }
        .hero-copy h1 { margin: 0 0 5px; font-family: 'Anton', sans-serif; font-size: clamp(3rem, 5.4vw, 5.3rem); line-height: .92; letter-spacing: .005em; text-shadow: 0 4px 12px rgba(0,0,0,.42); }
        .hero-copy h1 span { color: #f15f16; }
        .hero-script { margin: 7px 0 9px; font-family: 'Dancing Script', cursive; font-size: clamp(1.9rem, 3.2vw, 3.1rem); font-weight: 700; line-height: 1; text-shadow: 0 3px 7px rgba(0,0,0,.45); }
        .hero-copy p { max-width: 500px; margin: 0; color: rgba(255,255,255,.94); font-size: clamp(.9rem, 1.2vw, 1.08rem); line-height: 1.35; text-shadow: 0 2px 5px rgba(0,0,0,.55); }

        .choice-section { position: relative; z-index: 2; padding: 18px clamp(18px, 3vw, 34px) 10px; background: #f3ead7; }
        .choice-grid { width: min(1180px, 100%); margin: 0 auto; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        .choice-card { position: relative; overflow: hidden; min-width: 0; min-height: 300px; padding: 34px clamp(20px, 2.8vw, 42px); display: grid; grid-template-columns: 30% 70%; align-items: center; gap: 22px; border-radius: 28px; color: white; box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
        .adventure-card { background: #0d2d49; }
        .pet-card { background: #ad4815; }
        .choice-icon { width: 128px; height: 128px; max-width: 100%; aspect-ratio: 1; justify-self: center; border: 2px solid rgba(255,255,255,.88); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff8ed; }
        .service-svg { width: 72%; height: 72%; display: block; }
        .choice-content { position: relative; z-index: 2; width: 100%; text-align: left; }
        .choice-content h2 { margin: 0 0 5px; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(1.75rem, 2.7vw, 2.65rem); letter-spacing: .035em; line-height: 1; }
        .choice-kicker { margin: 0 0 12px; color: #f36b21; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(1rem, 1.5vw, 1.25rem); letter-spacing: .055em; }
        .pet-card .choice-kicker { color: #d99755; }
        .choice-description { max-width: 470px; margin: 0 0 20px; color: rgba(255,255,255,.95); font-size: 1rem; line-height: 1.42; }
        .choice-button { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 52px; padding: 11px 26px; border-radius: 8px; background: #fff8ed; color: #102d4a; font-family: 'Barlow Condensed', sans-serif; font-size: 1.16rem; font-weight: 900; letter-spacing: .045em; text-decoration: none; }
        .pet-card .choice-button svg { color: #a94613; }
        .choice-button:hover { background: white; }

        .trust-strip { position: relative; padding: 28px clamp(18px, 4vw, 52px); background: #f4ead7; border-top: 1px solid rgba(109,74,41,.16); border-bottom: 1px solid rgba(109,74,41,.16); }
        .trust-strip:before, .trust-strip:after { content: ''; position: absolute; left: 0; right: 0; height: 8px; opacity: .16; background: repeating-linear-gradient(90deg, transparent 0 17px, #8c6c49 18px 20px, transparent 21px 37px); }
        .trust-strip:before { top: 0; }
        .trust-strip:after { bottom: 0; }
        .trust-grid { width: min(1050px, 100%); margin: 0 auto; display: grid; grid-template-columns: repeat(5, 1fr); align-items: stretch; }
        .trust-item { min-height: 92px; padding: 5px 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; border-right: 1px solid rgba(16,45,74,.23); color: #0d2740; text-align: center; font-family: 'Barlow Condensed', sans-serif; font-size: .86rem; line-height: 1.06; letter-spacing: .02em; }
        .trust-item:last-child { border-right: 0; }
        .trust-icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; color: #0d2740; font-size: 1.65rem; font-weight: 900; border: 3px solid #0d2740; border-radius: 12px; }
        .heart-icon { border-radius: 50% 50% 50% 12px; }
        .shield-icon { border-radius: 45% 45% 55% 55%; }
        .first-aid-icon { border-radius: 8px; font-size: 1.9rem; }
        .camera-icon { border-radius: 8px; }
        .pin-icon { border-radius: 50% 50% 50% 12px; background: #0d2740; color: #f4ead7; }

        .footer-photo { position: relative; height: 360px; overflow: hidden; background: #081b2d; color: white; }
        .footer-photo > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 50%; }
        .footer-shade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,19,34,.94) 0%, rgba(4,19,34,.30) 48%, rgba(0,0,0,.04) 100%); }
        .torn-edge { position: absolute; z-index: 5; top: -1px; left: -2%; width: 104%; height: 25px; background: #f4ead7; clip-path: polygon(0 0,100% 0,100% 40%,97% 65%,94% 38%,91% 70%,88% 44%,85% 76%,82% 45%,79% 69%,76% 42%,73% 78%,70% 48%,67% 72%,64% 40%,61% 76%,58% 46%,55% 70%,52% 41%,49% 78%,46% 44%,43% 71%,40% 39%,37% 76%,34% 45%,31% 69%,28% 40%,25% 75%,22% 45%,19% 70%,16% 38%,13% 74%,10% 43%,7% 69%,4% 40%,0 66%); }
        .footer-script { position: absolute; z-index: 2; top: 25%; font-family: 'Dancing Script', cursive; font-size: clamp(1.9rem, 3.1vw, 3rem); font-weight: 700; line-height: 1.02; text-shadow: 0 3px 8px rgba(0,0,0,.72); }
        .footer-left { left: 5%; transform: rotate(-4deg); }
        .footer-right { right: 5%; text-align: right; transform: rotate(-4deg); }
        .footer-bottom { position: absolute; z-index: 3; left: 4%; right: 4%; bottom: 20px; display: grid; grid-template-columns: 1.2fr 1fr; align-items: end; gap: 20px; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; letter-spacing: .035em; }
        .footer-location { font-size: .82rem; line-height: 1.2; }
        .footer-contact { text-align: right; font-size: 1.02rem; }

        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .site-header { height: 74px; padding: 8px 20px; }
          .brand { width: 145px; }
          .book-button { margin-left: auto; min-width: 105px; padding: 10px 12px; font-size: .88rem; }
          .hero-copy { width: 62vw; }
          .choice-grid { grid-template-columns: minmax(0,1fr); max-width: 700px; }
          .choice-card { min-height: 275px; }
          .trust-grid { grid-template-columns: repeat(6, 1fr); }
          .trust-item { border-right: 1px solid rgba(16,45,74,.23); }
          .trust-item:nth-child(-n+3) { grid-column: span 2; }
          .trust-item:nth-child(4), .trust-item:nth-child(5) { grid-column: span 3; border-top: 1px solid rgba(16,45,74,.18); padding-top: 14px; }
          .trust-item:nth-child(3), .trust-item:nth-child(5) { border-right: 0; }
        }

        @media (max-width: 640px) {
          .hero { height: 500px; }
          .hero-image { object-position: 24% 45%; transform: scale(1.08) translateX(13%); }
          .hero-overlay { background: linear-gradient(90deg, rgba(0,0,0,.84) 0%, rgba(0,0,0,.64) 35%, rgba(0,0,0,.20) 63%, rgba(0,0,0,.02) 100%); }
          .site-header { height: 66px; padding: 7px 12px; gap: 8px; }
          .brand { width: 118px; }
          .book-button { min-width: 88px; padding: 9px 8px; gap: 4px; font-size: .76rem; }
          .book-button svg { width: 15px; height: 15px; }
          .mobile-toggle { width: 40px; height: 40px; font-size: 1.35rem; }
          .mobile-nav { top: 60px; }
          .hero-copy { top: 150px; left: 18px; width: 62%; }
          .hero-copy h1 { font-size: clamp(1.85rem, 7.8vw, 2.5rem); line-height: .94; }
          .hero-script { margin: 7px 0 8px; font-size: 1.55rem; }
          .hero-copy p { width: 98%; font-size: .73rem; line-height: 1.3; }

          .choice-section { padding: 12px 10px 8px; }
          .choice-grid { gap: 10px; }
          .choice-card { min-height: 285px; padding: 24px 16px; grid-template-columns: 30% 70%; gap: 14px; border-radius: 22px; }
          .choice-icon { width: 92px; height: 92px; }
          .choice-content h2 { font-size: 1.7rem; }
          .choice-kicker { margin-bottom: 10px; font-size: .98rem; }
          .choice-description { margin-bottom: 15px; font-size: .88rem; line-height: 1.35; }
          .choice-button { width: 100%; min-height: 48px; padding: 9px 12px; font-size: 1.03rem; }

          .trust-strip { padding: 22px 8px 24px; }
          .trust-item { min-height: 94px; padding: 8px 5px; font-size: .72rem; }
          .trust-icon { width: 42px; height: 42px; font-size: 1.35rem; }
          .footer-photo { height: 270px; }
          .footer-photo > img { object-position: center center; }
          .torn-edge { height: 20px; }
          .footer-script { top: 20%; font-size: 1.48rem; }
          .footer-left { left: 4%; }
          .footer-right { right: 4%; }
          .footer-bottom { left: 4%; right: 4%; bottom: 12px; display: block; text-align: center; }
          .footer-location { margin-bottom: 6px; font-size: .63rem; }
          .footer-contact { text-align: center; font-size: .78rem; }
        }
      `}</style>
    </main>
  )
}
