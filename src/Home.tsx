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
              &amp; SURROUNDING