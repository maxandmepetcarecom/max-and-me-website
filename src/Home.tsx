import { useState } from 'react'
import type { CSSProperties } from 'react'

import heroImg from '@/imports/IMG_1999.jpeg'
import footerImg from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'
import petCareLogo from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'

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

function AdventureMark() {
  return (
    <div
      className="adventure-mark"
      aria-label="Max & Me Canine Adventure Club"
    >
      <div className="adventure-badge">
        <svg viewBox="0 0 180 126" aria-hidden="true">
          <defs>
            <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffb52e" />
              <stop offset="1" stopColor="#f06a1d" />
            </linearGradient>
          </defs>

          <path
            d="M20 90a70 70 0 0 1 140 0"
            fill="url(#sun)"
          />

          <path
            d="M18 92 60 48l23 27 19-22 55 39Z"
            fill="#f3ead7"
            opacity=".95"
          />

          <path
            d="M0 94h180v32H0z"
            fill="#082b49"
          />

          <g fill="#082b49">
            <path d="M19 91 28 69l9 22zM34 91l10-28 11 28zM131 91l10-28 11 28zM148 91l9-22 9 22z" />
          </g>

          <path
            d="M72 87c10-16 29-18 40-7 5 5 9 8 17 8-6 4-14 4-21 1-4 9-13 13-24 11l-11 8 3-13-10-5z"
            fill="#082b49"
          />
        </svg>
      </div>

      <div className="adventure-name">
        Max &amp; Me
      </div>

      <div className="adventure-club-name">
        CANINE ADVENTURE CLUB
      </div>
    </div>
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

const trustItems = [
  {
    icon: <PawPrint size={27} />,
    label: (
      <>
        FEAR FREE
        <br />
        APPROACH
      </>
    ),
  },
  {
    icon: '✓',
    label: (
      <>
        INSURED &amp;
        <br />
        BONDED
      </>
    ),
  },
  {
    icon: '✚',
    label: (
      <>
        PET FIRST AID
        <br />
        CERTIFIED
      </>
    ),
  },
  {
    icon: '▣',
    label: (
      <>
        PERSONAL ADVENTURE
        <br />
        PHOTO ALBUM
      </>
    ),
  },
  {
    icon: '●',
    label: (
      <>
        LIVE
        <br />
        UPDATES
      </>
    ),
  },
  {
    icon: '●',
    label: (
      <>
        SERVING SAINT CLOUD
        <br />
        &amp; SURROUNDING AREAS
      </>
    ),
  },
]

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="page">

      {/* HERO */}
      <section className="hero">

        <img
          src={heroImg}
          alt="Maximus running on a wooded trail"
          className="hero-image"
        />

        <div className="hero-shade" />

        <header className="site-header">

          <a
            href="/"
            className="brand"
            aria-label="Max & Me Pet Care home"
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
                className={
                  link.label === 'HOME'
                    ? 'active'
                    : ''
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="/services"
            className="book-button"
          >
            <PawPrint size={20} />
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
            onClick={() =>
              setMobileOpen((open) => !open)
            }
          >
            {mobileOpen ? '×' : '☰'}
          </button>

          {mobileOpen && (
            <nav className="mobile-nav">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/services"
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                BOOK NOW
              </a>

            </nav>
          )}

        </header>

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
            Partnering with pet parents to give
            their pets the life they deserve,
            filled with adventure, enrichment,
            comfort, and lasting friendships. 🐾
          </p>

        </div>

        <div className="hero-note">
          Good Dogs.
          <br />
          Happier Humans. ♡
        </div>

      </section>


      {/* TWO PATHS */}
      <section
        className="paths"
        aria-label="Choose Max & Me service path"
      >

        <div className="path-grid">

          <article className="path-card adventure-card">

            <AdventureMark />

            <h2>
              CANINE ADVENTURE CLUB
            </h2>

            <h3>
              EXPLORE. PLAY. CONNECT.
            </h3>

            <p>
              Adventure, enrichment, and
              confidence-building outings for dogs
              of every age and personality.
            </p>

            <a
              href="/adventure-club"
              className="path-button"
            >
              ENTER THE ADVENTURE
              <PawPrint size={20} />
            </a>

          </article>


          <div className="center-paw">
            <PawPrint size={34} />
          </div>


          <article className="path-card pet-card">

            <div
              className="home-heart"
              aria-hidden="true"
            >
              <div className="roof">
                ⌂
              </div>

              <div className="heart">
                ♥
              </div>
            </div>

            <img
              src={petCareLogo}
              alt="Max & Me Pet Care"
              className="pet-path-logo"
            />

            <h2>
              PET CARE SERVICES
            </h2>

            <h3>
              LOVE. COMFORT. PEACE OF MIND.
            </h3>

            <p>
              Personalized care, specialized
              support, and peace of mind for every
              pet.
            </p>

            <a
              href="/services"
              className="path-button"
            >
              EXPLORE PET CARE
              <PawPrint size={20} />
            </a>

          </article>

        </div>

      </section>


      {/* TRUST STRIP */}
      <section className="trust-strip">

        <h2>
          <span />
          Why Pawrents Trust Max &amp; Me
          <span />
        </h2>

        <div className="trust-grid">

          {trustItems.map((item, index) => (

            <div
              className="trust-item"
              key={index}
            >

              <div className="trust-icon">
                {item.icon}
              </div>

              <div className="trust-label">
                {item.label}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* FOOTER PHOTO */}