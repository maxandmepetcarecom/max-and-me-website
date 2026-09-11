import { useState } from 'react'
import type { CSSProperties } from 'react'

import heroImg from '@/imports/IMG_1999.jpeg'
import huckImg from '@/imports/91EC3682-8CE8-43DF-A7D0-2F14A33A7734.png'
import petCareImg from '@/imports/IMG_2827.jpeg'
import footerImg from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'
import petCareLogo from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'


/* =========================================================
   PAW ICON
========================================================= */

function PawPrint({
  size = 20,
  style,
}: {
  size?: number
  style?: CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      width={size}
      height={size}
      style={{ flexShrink: 0, ...style }}
    >
      <ellipse cx="22" cy="28" rx="10" ry="14" />
      <ellipse cx="43" cy="18" rx="10" ry="14" />
      <ellipse cx="65" cy="18" rx="10" ry="14" />
      <ellipse cx="84" cy="28" rx="10" ry="14" />
      <path d="M50 38c-18 0-30 12-30 26 0 10 6 17 14 20 5 2 11 2.5 16 2.5s11-.5 16-2.5c8-3 14-10 14-20 0-14-12-26-30-26z" />
    </svg>
  )
}


/* =========================================================
   NAVIGATION
========================================================= */

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ADVENTURE CLUB', to: '/adventure-club' },
  { label: 'PET CARE', to: '/services' },
  { label: 'SPECIAL CARE', to: '/special-care' },
  { label: 'PRICING', to: '/pricing' },
  { label: 'ADVENTURE JOURNAL', to: '/adventure-journal' },
]


/* =========================================================
   HOMEPAGE
========================================================= */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div
      style={{
        background: '#f3ead7',
        minHeight: '100vh',
        fontFamily: "'Outfit', sans-serif",
        color: '#10233b',
      }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <img
          src={heroImg}
          alt="Maximus running on a wooded trail"
          className="hero-image"
        />

        <div className="hero-shade" />


        {/* HEADER */}

        <header className="site-header">

          <a
            href="/"
            className="brand"
            aria-label="Max and Me Pet Care home"
          >
            <img
              src={petCareLogo}
              alt="Max & Me Pet Care"
            />
          </a>


          <nav className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className={link.label === 'HOME' ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>


          <a
            href="/services"
            className="book-button"
          >
            <PawPrint size={22} />
            BOOK NOW
          </a>


          <button
            type="button"
            className="mobile-toggle"
            aria-label={
              mobileOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? '×' : '☰'}
          </button>


          {mobileOpen && (
            <nav className="mobile-nav">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/services"
                onClick={() => setMobileOpen(false)}
              >
                BOOK NOW
              </a>
            </nav>
          )}

        </header>


        {/* HERO TEXT */}

        <div className="hero-copy">

          <h1>
            EVERY DOG HAS AN
            <br />

            <span>
              ADVENTURER WITHIN.
            </span>
          </h1>


          <div className="hero-script">
            We’re here to unleash it. ♡
          </div>


          <p>
            Partnering with pet parents to give their pets the life they
            deserve, filled with adventure, enrichment, comfort, and
            lasting friendships. 🐾
          </p>

        </div>

      </section>



      {/* =====================================================
          TWO PATHS
      ===================================================== */}

      <section className="choice-section">

        <div className="choice-grid">


          {/* ADVENTURE CLUB */}

          <article className="choice-card">

            <div className="choice-photo">
              <img
                src={huckImg}
                alt="Huck enjoying an outdoor adventure"
              />
            </div>


            <div className="choice-copy adventure-copy">

              <div
                className="adventure-mark"
                aria-label="Max & Me Canine Adventure Club"
              >

                <div className="adventure-circle">

                  <div className="mountains">
                    ▲
                  </div>

                  <div className="tiny-trees">
                    ♠ ♠ ♠
                  </div>

                </div>


                <div className="adventure-script">
                  Max &amp; Me
                </div>


                <div className="adventure-title">
                  CANINE ADVENTURE CLUB
                </div>

              </div>


              <p className="choice-tagline">
                Small Adventures.
                <br />
                Make Big Happier Dogs.
              </p>


              <a
                href="/adventure-club"
                className="choice-button navy"
              >
                EXPLORE THE CLUB
                <PawPrint size={23} />
              </a>

            </div>

          </article>



          {/* PET CARE */}

          <article className="choice-card">

            <div className="choice-photo pet-photo">

              <img
                src={petCareImg}
                alt="Dogs resting comfortably during Max & Me pet care"
              />

            </div>


            <div className="choice-copy pet-copy">

              <img
                src={petCareLogo}
                alt="Max & Me Pet Care"
                className="pet-logo"
              />


              <p className="choice-tagline orange">
                Love. Comfort. Peace of mind.
              </p>


              <a
                href="/services"
                className="choice-button green"
              >
                EXPLORE PET CARE
                <PawPrint size={23} />
              </a>

            </div>

          </article>

        </div>

      </section>



      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="trust-strip">

        <h2>
          Why Pawrents Trust Max &amp; Me
        </h2>


        <div className="trust-grid">


          <div className="trust-item">

            <div className="trust-icon">
              ♡
            </div>

            <span>
              FEAR FREE
              <br />
              APPROACH
            </span>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              ✓
            </div>

            <span>
              INSURED &amp;
              <br />
              BONDED
            </span>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              ✚
            </div>

            <span>
              PET FIRST AID
              <br />
              CERTIFIED
            </span>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              ▣
            </div>

            <span>
              PERSONAL ADVENTURE
              <br />
              PHOTO ALBUM
            </span>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              ●
            </div>

            <span>
              LIVE
              <br />
              UPDATES
            </span>

          </div>


          <div className="trust-item">

            <div className="trust-icon">
              ●
            </div>

            <span>
              SERVING SAINT CLOUD
              <br />
                          &amp; SURROUNDING AREAS
            </span>

          </div>

        </div>

      </section>


      {/* FOOTER PHOTO */}

      <section className="footer-photo">

        <img
          src={footerImg}
          alt="Max & Me lakeside adventure at golden hour"
        />

        <div className="footer-shade" />

        <div className="footer-script footer-left">
          Let’s explore
          <br />
          together! ♡
        </div>

        <div className="footer-script footer-right">
          Enriching lives
          <br />
          one paw at a time. ♡
        </div>

        <div className="footer-bottom">

          <div className="footer-location">
            ● &nbsp; SERVING SAINT CLOUD, LAKE NONA,
            NARCOOSSEE &amp; SURROUNDING AREAS
          </div>

          <div className="footer-contact">
            407.922.0912
            &nbsp; | &nbsp;
            MAXANDMEPETCARE.COM
            &nbsp; 🐾
          </div>

          <div className="footer-socials">
            ● &nbsp; ◎ &nbsp; ♪
          </div>

        </div>

      </section>


      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .hero {
          position: relative;
          height: min(760px, 74vw);
          min-height: 560px;
          overflow: hidden;
          background: #111;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 38%;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,.74) 0%,
            rgba(0,0,0,.57) 30%,
            rgba(0,0,0,.18) 57%,
            rgba(0,0,0,.04) 78%,
            rgba(0,0,0,.18) 100%
          );
        }

        .site-header {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          min-height: 112px;
          display: flex;
          align-items: center;
          gap: 26px;
          padding: 16px clamp(24px, 4.5vw, 68px);
        }

        .brand {
          width: 190px;
          flex: 0 0 auto;
        }

        .brand img {
          width: 100%;
          display: block;
          filter: drop-shadow(0 2px 5px rgba(0,0,0,.4));
        }

        .desktop-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(14px, 1.7vw, 27px);
          flex: 1;
        }

        .desktop-nav a {
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          letter-spacing: .04em;
          font-size: .92rem;
          padding: 8px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,.55);
          white-space: nowrap;
        }

        .desktop-nav a.active {
          border-bottom: 3px solid #f36b21;
        }

        .book-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: #f36b21;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          padding: 14px 20px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          letter-spacing: .06em;
          white-space: nowrap;
          box-shadow: 0 5px 15px rgba(0,0,0,.22);
        }

        .mobile-toggle {
          display: none;
          margin-left: auto;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,.5);
          background: rgba(8,24,42,.78);
          color: white;
          border-radius: 8px;
          font-size: 1.7rem;
          cursor: pointer;
        }

        .mobile-nav {
          position: absolute;
          top: 88px;
          left: 18px;
          right: 18px;
          background: rgba(11,28,48,.985);
          padding: 16px 22px;
          border-radius: 10px;
          box-shadow: 0 15px 30px rgba(0,0,0,.35);
        }

        .mobile-nav a {
          display: block;
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          letter-spacing: .08em;
          padding: 10px 0;
        }

        .hero-copy {
          position: absolute;
          z-index: 10;
          left: clamp(28px, 4.5vw, 68px);
          top: 34%;
          width: min(56vw, 700px);
          color: white;
        }

        .hero-copy h1 {
          margin: 0 0 8px;
          font-family: 'Anton', sans-serif;
          font-size: clamp(3.4rem, 6.6vw, 6.6rem);
          line-height: .94;
          letter-spacing: .01em;
          text-shadow: 0 4px 12px rgba(0,0,0,.4);
        }

        .hero-copy h1 span {
          color: #f15f16;
        }

        .hero-script {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 4vw, 3.8rem);
          line-height: 1.05;
          margin: 8px 0 12px;
          text-shadow: 0 3px 8px rgba(0,0,0,.4);
        }

        .hero-copy p {
          max-width: 560px;
          margin: 0;
          font-size: clamp(1rem, 1.45vw, 1.28rem);
          line-height: 1.38;
          text-shadow: 0 2px 5px rgba(0,0,0,.55);
        }

        .choice-section {
          position: relative;
          background: #f3ead7;
          padding: 34px clamp(20px, 3vw, 42px) 30px;
        }

        .choice-section:before {
          content: '';
          position: absolute;
          top: -22px;
          left: 0;
          right: 0;
          height: 34px;
          background: #f3ead7;
          clip-path: polygon(
            0 48%, 4% 22%, 9% 48%, 14% 25%, 20% 52%,
            26% 28%, 32% 55%, 38% 27%, 44% 51%, 50% 30%,
            56% 55%, 62% 26%, 68% 50%, 74% 24%, 80% 51%,
            86% 28%, 92% 54%, 96% 30%, 100% 48%, 100% 100%, 0 100%
          );
        }

        .choice-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
        }

        .choice-card {
          background: #efe4cf;
          overflow: hidden;
          box-shadow: 0 5px 18px rgba(49,39,25,.08);
        }

        .choice-photo {
          height: 390px;
          overflow: hidden;
        }

        .choice-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .choice-copy {
          min-height: 310px;
          padding: 20px 34px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          text-align: center;
        }

        .adventure-mark {
          color: #102d4a;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: -10px;
        }

        .adventure-circle {
          width: 102px;
          height: 82px;
          border: 4px solid #102d4a;
          border-radius: 80px 80px 42px 42px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .mountains {
          font-size: 48px;
          line-height: 1;
          transform: translateY(-6px);
        }

        .tiny-trees {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 6px;
          font-size: 13px;
          letter-spacing: 4px;
        }

        .adventure-script {
          font-family: 'Dancing Script', cursive;
          font-size: 2.6rem;
          font-weight: 700;
          line-height: .95;
          margin-top: 7px;
        }

        .adventure-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.08rem;
          font-weight: 900;
          letter-spacing: .08em;
          border-top: 2px solid #102d4a;
          border-bottom: 2px solid #102d4a;
          padding: 4px 10px;
          margin-top: 5px;
        }

        .pet-logo {
          width: min(340px, 82%);
          max-height: 125px;
          object-fit: contain;
          margin: 0 auto 2px;
          display: block;
        }

        .choice-tagline {
          font-family: 'Dancing Script', cursive;
          color: #102d4a;
          font-weight: 700;
          font-size: clamp(1.5rem, 2.3vw, 2rem);
          line-height: 1.02;
          margin: 14px 0 18px;
        }

        .choice-tagline.orange {
          color: #ef6420;
        }

        .choice-button {
          width: 100%;
          max-width: 430px;
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          letter-spacing: .05em;
          font-size: 1.25rem;
          border-radius: 7px;
        }

        .choice-button.navy {
          background: #09253e;
        }

        .choice-button.green {
          background: #274d22;
        }

        .trust-strip {
          background: #f3ead7;
          padding: 12px clamp(20px,4vw,56px) 36px;
          text-align: center;
        }

        .trust-strip h2 {
          margin: 0 auto 25px;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 3.6vw, 3.2rem);
          color: #102d4a;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 22px;
          justify-content: center;
        }

        .trust-strip h2:before,
        .trust-strip h2:after {
          content: '';
          height: 2px;
          width: 120px;
          background: #f36b21;
        }

        .trust-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .trust-item {
          min-height: 105px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 12px;
          border-right: 1px solid rgba(16,45,74,.2);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          line-height: 1.05;
        }

        .trust-item:last-child {
          border-right: 0;
        }

        .trust-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #102d4a;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 9px;
        }

        .footer-photo {
          position: relative;
          height: 430px;
          overflow: hidden;
          background: #081b2d;
          color: white;
        }

        .footer-photo > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .footer-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,19,34,.96) 0%,
            rgba(4,19,34,.16) 56%,
            rgba(0,0,0,.04) 100%
          );
        }

        .footer-script {
          position: absolute;
          top: 26%;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 3vw, 3.1rem);
          line-height: 1.05;
          text-shadow: 0 2px 6px rgba(0,0,0,.65);
        }

        .footer-left {
          left: 5%;
          transform: rotate(-5deg);
        }

        .footer-right {
          right: 5%;
          text-align: right;
          transform: rotate(-5deg);
        }

        .footer-bottom {
          position: absolute;
          left: 4%;
          right: 4%;
          bottom: 22px;
          display: grid;
          grid-template-columns: 1.2fr 1.6fr .7fr;
          align-items: end;
          gap: 20px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
        }

        .footer-contact {
          text-align: center;
          font-size: 1.1rem;
        }

        .footer-socials {
          text-align: right;
          font-size: 1.8rem;
        }

        @media (max-width: 900px) {

          .desktop-nav,
          .book-button {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .site-header {
            height: 88px;
          }

          .brand {
            width: 155px;
          }

          .hero {
            min-height: 600px;
            height: 76vh;
          }

          .hero-copy {
            width: 78vw;
            top: 31%;
          }

          .trust-grid {
            grid-template-columns: repeat(3,1fr);
            row-gap: 26px;
          }

          .footer-bottom {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-location,
          .footer-contact,
          .footer-socials {
            text-align: center;
          }

          .footer-photo {
            height: 500px;
          }
        }

        @media (max-width: 640px) {

          .hero {
            height: 650px;
          }

          .hero-image {
            object-position: 48% center;
          }

          .hero-copy {
            top: 31%;
            width: 88%;
          }

          .hero-copy h1 {
            font-size: clamp(3rem, 14vw, 4.3rem);
          }

          .choice-section {
            padding-left: 14px;
            padding-right: 14px;
          }

          .choice-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .choice-photo {
            height: 320px;
          }

          .choice-copy {
            min-height: 280px;
            padding: 20px 22px 24px;
          }

          .trust-strip h2:before,
          .trust-strip h2:after {
            width: 35px;
          }

          .trust-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .trust-item {
            border-right: 0;
          }

          .footer-script {
            top: 18%;
            font-size: 2rem;
          }

          .footer-bottom {
            bottom: 18px;
            font-size: .9rem;
          }
        }

      `}</style>

    </div>
  )
}