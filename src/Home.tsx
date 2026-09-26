import { useState } from 'react'
import type { CSSProperties } from 'react'

import heroImg from '@/imports/IMG_1999.jpeg'
import huckImg from '@/imports/91EC3682-8CE8-43DF-A7D0-2F14A33A7734.png'
import petCareImg from '@/imports/IMG_2827.jpeg'
import footerImg from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'
import petCareLogo from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'
import adventureClubLogo from '@/imports/BA0B141F-5CFA-4C52-B1BD-BA344D4ABC27.png'

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

          <button type="button" className="mobile-toggle" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
            {mobileOpen ? '×' : '☰'}
          </button>

          {mobileOpen && (
            <nav className="mobile-nav">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.to} onClick={() => setMobileOpen(false)}>{link.label}</a>
              ))}
              <a href="/services" onClick={() => setMobileOpen(false)}>BOOK NOW</a>
            </nav>
          )}
        </header>

        <div className="hero-copy">
          <h1>EVERY DOG HAS AN<br /><span>ADVENTURER WITHIN.</span></h1>
          <div className="hero-script">We’re here to unleash it. ♡</div>
          <p>Partnering with pet parents to give their pets the life they deserve, filled with adventure, enrichment, comfort, and lasting friendships. 🐾</p>
        </div>
      </section>

      <section className="choice-section">
        <div className="choice-sign" aria-label="Choose your adventure. Two paths. One bigger story.">
          <div className="choice-sign-title">CHOOSE YOUR ADVENTURE <PawPrint size={24} /></div>
          <div className="choice-sign-subtitle"><span />TWO PATHS. ONE BIGGER STORY.<span /></div>
        </div>
        <div className="choice-arrows" aria-hidden="true"><span>↙</span><span>↘</span></div>

        <div className="choice-grid">
          <article className="choice-card">
            <div className="choice-photo adventure-photo">
              <img src={huckImg} alt="Huck enjoying an outdoor adventure" />
              <div className="choice-label">CANINE ADVENTURE CLUB</div>
            </div>
            <div className="choice-paper">
              <img src={adventureClubLogo} alt="Max & Me Canine Adventure Club" className="adventure-logo" />
              <p className="choice-tagline navy">Beyond the walk.<br />Into a life of adventure.</p>
              <a href="/adventure-club" className="choice-button adventure-btn">EXPLORE THE CLUB<PawPrint size={18} /></a>
            </div>
          </article>

          <article className="choice-card">
            <div className="choice-photo pet-photo">
              <img src={petCareImg} alt="Dogs relaxing during Max & Me pet care" />
              <div className="choice-label">PET CARE SERVICES</div>
            </div>
            <div className="choice-paper">
              <img src={petCareLogo} alt="Max & Me Pet Care" className="pet-logo" />
              <p className="choice-tagline orange">Love. Comfort. Peace of mind.</p>
              <a href="/services" className="choice-button pet-btn">EXPLORE PET CARE<PawPrint size={18} /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-title"><span /><h2>Why Pawrents Trust Max &amp; Me</h2><span /></div>
        <div className="trust-grid">
          <div className="trust-item"><div className="trust-icon">♡</div><strong>FEAR FREE<br />APPROACH</strong></div>
          <div className="trust-item"><div className="trust-icon">✓</div><strong>INSURED &amp;<br />BONDED</strong></div>
          <div className="trust-item"><div className="trust-icon">✚</div><strong>PET FIRST AID</strong></div>
          <div className="trust-item"><div className="trust-icon camera-icon">▣</div><strong>PERSONAL ADVENTURE<br />PHOTO ALBUM</strong></div>
          <div className="trust-item"><div className="trust-icon location-icon">●</div><strong>SERVING SAINT CLOUD<br />&amp; SURROUNDING AREAS</strong></div>
        </div>
      </section>

      <footer className="footer-photo">
        <img src={footerImg} alt="Max & Me lakeside adventure at golden hour" />
        <div className="footer-shade" />
        <div className="footer-script footer-left">Let’s explore<br />together! ♡</div>
        <div className="footer-script footer-right">Enriching lives<br />one paw at a time. ♡</div>
        <div className="footer-bottom">
          <div className="footer-location">● &nbsp; SERVING SAINT CLOUD, LAKE NONA, NARCOOSSEE &amp; SURROUNDING AREAS</div>
          <div className="footer-contact">407.922.0912 &nbsp; | &nbsp; MAXANDMEPETCARE.COM &nbsp; 🐾</div>
          <div className="footer-socials">● &nbsp; ◎ &nbsp; ♪</div>
        </div>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; padding: 0; width: 100%; max-width: 100%; overflow-x: hidden; }
        body { background: #f3ead7; }
        .page { width: 100%; max-width: 100%; min-height: 100vh; overflow-x: hidden; background: #f3ead7; color: #102d4a; font-family: 'Outfit', sans-serif; }

        .hero { position: relative; height: 560px; overflow: hidden; background: #111; }
        .hero-image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 57% 43%; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.61) 28%, rgba(0,0,0,.30) 47%, rgba(0,0,0,.05) 70%, rgba(0,0,0,.10) 100%); }

        .site-header { position: absolute; z-index: 20; top: 0; left: 0; right: 0; height: 92px; padding: 10px clamp(26px, 4vw, 64px); display: flex; align-items: center; gap: 22px; }
        .brand { width: 175px; flex: 0 0 auto; }
        .brand img { width: 100%; display: block; filter: drop-shadow(0 2px 5px rgba(0,0,0,.5)); }
        .desktop-nav { flex: 1; display: flex; justify-content: center; align-items: center; gap: clamp(12px, 1.5vw, 24px); }
        .desktop-nav a { color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-size: .88rem; font-weight: 800; letter-spacing: .05em; white-space: nowrap; padding: 7px 0; text-shadow: 0 2px 5px rgba(0,0,0,.65); }
        .desktop-nav a.active { border-bottom: 3px solid #f36b21; }
        .book-button { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-width: 130px; padding: 12px 16px; border-radius: 7px; background: #f36b21; color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-weight: 900; letter-spacing: .05em; box-shadow: 0 4px 12px rgba(0,0,0,.25); }
        .mobile-toggle { display: none; margin-left: auto; width: 44px; height: 44px; border: 1px solid rgba(255,255,255,.55); background: rgba(8,29,49,.85); color: white; border-radius: 7px; font-size: 1.55rem; cursor: pointer; }
        .mobile-nav { position: absolute; top: 72px; left: 14px; right: 14px; background: rgba(8,29,49,.985); padding: 14px 20px; border-radius: 8px; box-shadow: 0 14px 30px rgba(0,0,0,.35); }
        .mobile-nav a { display: block; color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; letter-spacing: .07em; padding: 8px 0; }

        .hero-copy { position: absolute; z-index: 10; left: clamp(30px, 4.5vw, 68px); top: 165px; width: min(53vw, 650px); color: white; }
        .hero-copy h1 { margin: 0 0 5px; font-family: 'Anton', sans-serif; font-size: clamp(3rem, 5.4vw, 5.3rem); line-height: .92; letter-spacing: .005em; text-shadow: 0 4px 12px rgba(0,0,0,.42); }
        .hero-copy h1 span { color: #f15f16; }
        .hero-script { margin: 7px 0 9px; font-family: 'Dancing Script', cursive; font-size: clamp(1.9rem, 3.2vw, 3.1rem); font-weight: 700; line-height: 1; text-shadow: 0 3px 7px rgba(0,0,0,.45); }
        .hero-copy p { max-width: 500px; margin: 0; color: rgba(255,255,255,.94); font-size: clamp(.9rem, 1.2vw, 1.08rem); line-height: 1.35; text-shadow: 0 2px 5px rgba(0,0,0,.55); }

        .choice-section { position: relative; padding: 70px clamp(16px, 3vw, 40px) 30px; background: #f3ead7; }
        .choice-section:before { content: ''; position: absolute; z-index: 3; top: -76px; left: 0; width: 100%; height: 95px; background: url('/torn-paper-top.png') center bottom / 100% 100% no-repeat; pointer-events: none; }
        .choice-sign { position: relative; z-index: 4; width: min(650px, 78vw); margin: -18px auto 8px; padding: 15px 28px 13px; color: #102d4a; text-align: center; transform: rotate(-.4deg); background: linear-gradient(rgba(255,255,255,.07), rgba(0,0,0,.04)), repeating-linear-gradient(0deg, #c99658 0 27px, #bd874d 28px 30px); border: 2px solid rgba(91,55,25,.38); border-radius: 3px 7px 4px 6px; box-shadow: 0 6px 13px rgba(72,43,20,.24), inset 0 0 18px rgba(80,45,16,.15); }
        .choice-sign:before, .choice-sign:after { content: ''; position: absolute; width: 9px; height: 9px; top: 14px; border-radius: 50%; background: #6d533c; box-shadow: inset 0 1px 2px #24180e; }
        .choice-sign:before { left: 13px; }
        .choice-sign:after { right: 13px; }
        .choice-sign-title { display: flex; align-items: center; justify-content: center; gap: 8px; font-family: 'Barlow Condensed', sans-serif; font-size: clamp(1.45rem, 3vw, 2.3rem); font-weight: 900; letter-spacing: .035em; line-height: 1; }
        .choice-sign-subtitle { margin-top: 6px; display: flex; align-items: center; justify-content: center; gap: 12px; font-family: 'Barlow Condensed', sans-serif; font-size: clamp(.82rem, 1.45vw, 1.15rem); font-weight: 900; letter-spacing: .055em; }
        .choice-sign-subtitle span { width: 54px; height: 2px; background: #102d4a; }
        .choice-arrows { width: min(860px, 82vw); margin: -4px auto 0; display: flex; justify-content: space-between; color: #f36b21; font-family: serif; font-size: 2.1rem; font-weight: 900; line-height: .8; }
        .choice-grid { position: relative; z-index: 2; width: 100%; max-width: 940px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 28px; }
        .choice-card { min-width: 0; overflow: hidden; background: #efe4ce; border: 1px solid rgba(34,49,61,.14); border-radius: 16px; box-shadow: 0 7px 20px rgba(40,31,19,.13); }
        .choice-photo { position: relative; height: 300px; overflow: hidden; }
        .choice-photo:after { content: ''; position: absolute; z-index: 2; left: 0; right: 0; bottom: -1px; height: 70px; background: url('/torn-paper-top.png') center bottom / 100% 100% no-repeat; pointer-events: none; }
        .choice-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .adventure-photo img { object-position: center 42%; }
        .pet-photo img { object-position: center 50%; }
        .choice-label { position: absolute; left: 50%; top: 18px; transform: translateX(-50%); width: max-content; max-width: 90%; padding: 8px 18px; border-radius: 7px; background: rgba(247,241,226,.94); color: #102d4a; font-family: 'Barlow Condensed', sans-serif; font-size: 1.05rem; font-weight: 900; letter-spacing: .045em; box-shadow: 0 3px 9px rgba(0,0,0,.18); }
        .choice-paper { position: relative; min-width: 0; overflow: hidden; min-height: 174px; margin-top: 0; padding: 4px 24px 22px; background: #f3ead7; text-align: center; }
        .adventure-logo { display: block; width: min(235px, 72%); height: 76px; object-fit: contain; margin: 0 auto 4px; }
        .pet-logo { display: block; width: min(235px, 72%); height: 76px; object-fit: contain; margin: 0 auto 4px; }
        .choice-tagline { margin: 2px 0 15px; font-family: 'Dancing Script', cursive; font-size: clamp(1.35rem, 2vw, 1.75rem); font-weight: 700; line-height: 1.02; }
        .choice-tagline.navy { color: #102d4a; }
        .choice-tagline.orange { color: #ef6420; }
        .choice-button { width: 100%; min-width: 0; white-space: nowrap; max-width: 370px; min-height: 50px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 9px; color: white; text-decoration: none; font-family: 'Barlow Condensed', sans-serif; font-size: 1.12rem; font-weight: 900; letter-spacing: .05em; border-radius: 7px; }
        .adventure-btn { background: #092943; border: 2px solid #f36b21; }
        .pet-btn { background: #e95f12; }

        .trust-strip { padding: 10px clamp(18px, 4vw, 50px) 28px; background: #f3ead7; text-align: center; }
        .trust-title { width: 100%; max-width: 900px; min-width: 0; margin: 0 auto 17px; display: flex; align-items: center; justify-content: center; gap: 16px; }
        .trust-title span { height: 2px; flex: 1; max-width: 150px; background: #f36b21; }
        .trust-title h2 { min-width: 0; margin: 0; color: #102d4a; font-family: 'Dancing Script', cursive; font-size: clamp(1.8rem, 2.8vw, 2.6rem); line-height: 1; white-space: nowrap; }
        .trust-grid { width: 100%; max-width: 1050px; margin: 0 auto; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .trust-item { min-height: 82px; padding: 0 9px; display: flex; flex-direction: column; align-items: center; border-right: 1px solid rgba(16,45,74,.18); color: #102d4a; font-family: 'Barlow Condensed', sans-serif; font-size: .82rem; line-height: 1.05; }
        .trust-item:last-child { border-right: 0; }
        .trust-icon { width: 40px; height: 40px; margin-bottom: 6px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #102d4a; color: white; font-size: 1.3rem; font-weight: 700; }
        .live-icon { font-size: .8rem; }
        .location-icon { position: relative; font-size: .72rem; }
        .location-icon:after { content: ''; position: absolute; bottom: -5px; width: 8px; height: 8px; background: #102d4a; transform: rotate(45deg); }

        .footer-photo { position: relative; height: 330px; overflow: hidden; background: #081b2d; color: white; }
        .footer-photo:before { content: ''; position: absolute; z-index: 4; top: -1px; left: 0; width: 100%; height: 66px; background: url('/torn-paper-bottom.png') center top / 100% 100% no-repeat; pointer-events: none; }
        .footer-photo > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 50%; }
        .footer-shade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,19,34,.95) 0%, rgba(4,19,34,.16) 52%, rgba(0,0,0,.02) 100%); }
        .footer-script { position: absolute; z-index: 2; top: 26%; font-family: 'Dancing Script', cursive; font-size: clamp(1.7rem, 2.6vw, 2.7rem); font-weight: 700; line-height: 1.02; text-shadow: 0 2px 6px rgba(0,0,0,.65); }
        .footer-left { left: 5%; transform: rotate(-5deg); }
        .footer-right { right: 5%; text-align: right; transform: rotate(-5deg); }
        .footer-bottom { position: absolute; z-index: 3; left: 4%; right: 4%; bottom: 17px; display: grid; grid-template-columns: 1.25fr 1.5fr .65fr; align-items: end; gap: 16px; font-family: 'Barlow Condensed', sans-serif; font-weight: 800; }
        .footer-location { font-size: .78rem; line-height: 1.15; }
        .footer-contact { text-align: center; font-size: .98rem; }
        .footer-socials { text-align: right; font-size: 1.5rem; }

        @media (max-width: 900px) {
          .desktop-nav, .book-button { display: none; }
          .mobile-toggle { display: block; }
          .site-header { height: 74px; padding: 8px 20px; }
          .brand { width: 145px; }
          .hero-copy { width: 68vw; }
          .trust-grid { grid-template-columns: repeat(5, 1fr); row-gap: 14px; }
          .trust-item:nth-child(3) { border-right: 1px solid rgba(16,45,74,.18); }
        }

        @media (max-width: 640px) {
          .hero { height: 390px; }
          .hero-image { object-position: 59% 45%; }
          .hero-overlay { background: linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.62) 37%, rgba(0,0,0,.22) 64%, rgba(0,0,0,.03) 100%); }
          .site-header { height: 64px; padding: 6px 14px; }
          .brand { width: 118px; }
          .mobile-toggle { width: 40px; height: 40px; font-size: 1.35rem; }
          .mobile-nav { top: 58px; }
          .hero-copy { top: 115px; left: 18px; width: 68%; }
          .hero-copy h1 { font-size: clamp(2rem, 8.6vw, 2.75rem); line-height: .91; }
          .hero-script { margin: 6px 0 7px; font-size: 1.55rem; }
          .hero-copy p { width: 94%; font-size: .72rem; line-height: 1.27; }

          .choice-section { padding: 43px 8px 18px; }
          .choice-section:before { top: -41px; height: 53px; }
          .choice-sign { width: 84%; margin: -14px auto 6px; padding: 10px 13px 9px; }
          .choice-sign-title { gap: 5px; font-size: 1.08rem; }
          .choice-sign-title svg { width: 16px; height: 16px; }
          .choice-sign-subtitle { gap: 6px; margin-top: 4px; font-size: .59rem; }
          .choice-sign-subtitle span { width: 24px; height: 1px; }
          .choice-arrows { width: 80%; margin: -2px auto 3px; font-size: 1.35rem; }
          .choice-grid { width: 100%; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
          .choice-card { border-radius: 8px; }
          .choice-photo { height: 175px; }
          .choice-photo:after { height: 37px; }
          .adventure-photo img, .pet-photo img { object-position: center center; }
          .choice-label { top: 8px; padding: 5px 8px; border-radius: 4px; font-size: .62rem; }
          .choice-paper { min-height: 144px; margin-top: 0; padding: 3px 7px 10px; }
          .adventure-logo, .pet-logo { width: 82%; height: 52px; margin: 0 auto 1px; }
          .choice-tagline { margin: 2px 0 9px; font-size: .82rem; line-height: .98; }
          .choice-button { min-height: 34px; padding: 4px 2px; gap: 4px; font-size: .68rem; border-radius: 4px; }
          .choice-button svg { width: 12px; height: 12px; }

          .trust-strip { padding: 8px 8px 15px; }
          .trust-title { gap: 7px; margin-bottom: 12px; }
          .trust-title span { max-width: 34px; }
          .trust-title h2 { font-size: 1.42rem; white-space: normal; }
          .trust-grid { width: 100%; grid-template-columns: repeat(5, minmax(0, 1fr)); row-gap: 0; }
          .trust-item { min-height: 68px; padding: 0 2px; border-right: 0; font-size: .52rem; }
          .trust-icon { width: 31px; height: 31px; margin-bottom: 4px; font-size: .95rem; }
          .trust-item strong { max-width: 72px; }

          .footer-photo { height: 235px; }
          .footer-photo:before { height: 36px; }
          .footer-photo > img { object-position: center center; }
          .footer-script { top: 25%; font-size: 1.3rem; }
          .footer-left { left: 4%; }
          .footer-right { right: 4%; }
          .footer-bottom { left: 3%; right: 3%; bottom: 10px; display: block; text-align: center; }
          .footer-location { display: none; }
          .footer-contact { font-size: .72rem; text-align: center; }
          .footer-socials { margin-top: 4px; font-size: 1.05rem; text-align: center; }
        }
      `}</style>
    </main>
  )
}
