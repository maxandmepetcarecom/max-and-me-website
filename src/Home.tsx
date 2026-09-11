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

      <footer className="footer-photo">

        <img
          src={footerImg}
          alt="Max & Me adventure at golden hour"
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
            <br />
            NARCOOSSEE &amp; SURROUNDING AREAS
          </div>

          <div className="footer-contact">
            407.922.0912 &nbsp; | &nbsp; MAXANDMEPETCARE.COM
          </div>

          <div className="footer-socials">
            ● &nbsp; ◎ &nbsp; ♪
          </div>

        </div>

      </footer>


      <style>{`

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          background: #f3ead7;
        }

        .page {
          background: #f3ead7;
          min-height: 100vh;
          color: #0a2b49;
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        .hero {
          position: relative;
          height: 620px;
          overflow: hidden;
          background: #111;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 58% 43%;
        }

        .hero-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0,0,0,.82) 0%,
            rgba(0,0,0,.66) 30%,
            rgba(0,0,0,.18) 57%,
            rgba(0,0,0,.04) 78%,
            rgba(0,0,0,.24) 100%
          );
        }

        .site-header {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          height: 92px;
          display: flex;
          align-items: center;
          gap: 26px;
          padding: 10px clamp(28px, 4.4vw, 68px);
        }

        .brand {
          width: 185px;
          flex: 0 0 auto;
        }

        .brand img {
          width: 100%;
          display: block;
          filter: drop-shadow(0 2px 5px rgba(0,0,0,.45));
        }

        .desktop-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(13px, 1.55vw, 25px);
          flex: 1;
        }

        .desktop-nav a {
          color: #fff;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          letter-spacing: .04em;
          font-size: .9rem;
          padding: 8px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,.55);
          white-space: nowrap;
        }

        .desktop-nav a.active {
          border-bottom: 3px solid #f26522;
        }

        .book-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #f26522;
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          padding: 13px 18px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          letter-spacing: .06em;
          white-space: nowrap;
          box-shadow: 0 5px 15px rgba(0,0,0,.24);
        }

        .mobile-toggle {
          display: none;
          margin-left: auto;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,.5);
          background: rgba(8,32,52,.82);
          color: white;
          border-radius: 8px;
          font-size: 1.65rem;
          cursor: pointer;
        }

        .mobile-nav {
          position: absolute;
          top: 76px;
          left: 16px;
          right: 16px;
          background: rgba(8,31,52,.985);
          padding: 14px 20px;
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
          padding: 9px 0;
        }

        .hero-copy {
          position: absolute;
          z-index: 10;
          left: clamp(30px, 4.5vw, 68px);
          top: 165px;
          width: min(52vw, 660px);
          color: white;
        }

        .hero-copy h1 {
          margin: 0 0 8px;
          font-family: 'Anton', sans-serif;
          font-size: clamp(3.1rem, 5.3vw, 5.6rem);
          line-height: .94;
          letter-spacing: .005em;
          text-shadow: 0 4px 12px rgba(0,0,0,.4);
        }

        .hero-copy h1 span {
          color: #f15f16;
        }

        .hero-script {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 3.3vw, 3.2rem);
          line-height: 1.05;
          margin: 10px 0 12px;
          text-shadow: 0 3px 8px rgba(0,0,0,.45);
        }

        .hero-copy p {
          max-width: 520px;
          margin: 0;
          font-size: clamp(.98rem, 1.25vw, 1.15rem);
          line-height: 1.42;
          text-shadow: 0 2px 5px rgba(0,0,0,.55);
        }

        .hero-note {
          position: absolute;
          z-index: 8;
          right: 4.5%;
          top: 155px;
          color: white;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.5rem, 2.4vw, 2.35rem);
          line-height: 1.05;
          text-align: center;
          transform: rotate(-7deg);
          text-shadow: 0 2px 7px rgba(0,0,0,.7);
        }

        .paths {
          position: relative;
          background: #f3ead7;
          padding: 0 18px;
        }

        .path-grid {
          position: relative;
          max-width: 1180px;
          margin: -36px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 50% 50% 10px 10px / 44px 44px 10px 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(16,34,55,.14);
          z-index: 5;
        }

        .path-card {
          min-height: 365px;
          padding: 54px clamp(28px,4vw,58px) 36px;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: relative;
        }

        .adventure-card {
          background: linear-gradient(160deg, #063251, #08233d);
          border-right: 1px solid rgba(255,255,255,.35);
        }

        .pet-card {
          background: linear-gradient(155deg, #d94c0b, #9b3107);
        }

        .path-card:after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: .12;
          pointer-events: none;
          background-image:
            radial-gradient(
              circle at 25% 35%,
              transparent 0 26px,
              rgba(255,255,255,.22) 27px 28px,
              transparent 29px
            ),
            radial-gradient(
              circle at 80% 65%,
              transparent 0 36px,
              rgba(255,255,255,.16) 37px 38px,
              transparent 39px
            );
          background-size: 180px 180px, 230px 230px;
        }

        .path-card > * {
          position: relative;
          z-index: 1;
        }

        .center-paw {
          position: absolute;
          z-index: 9;
          left: 50%;
          top: 0;
          transform: translate(-50%, -34%);
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: #082b49;
          border: 4px solid #f3ead7;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,.2);
        }

        .adventure-mark {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #f3ead7;
          margin-bottom: 8px;
        }

        .adventure-badge {
          width: 126px;
          height: 82px;
          border: 3px solid #f3ead7;
          border-radius: 70px 70px 22px 22px;
          overflow: hidden;
          background: #f3ead7;
        }

        .adventure-badge svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .adventure-name {
          font-family: 'Dancing Script', cursive;
          font-size: 2.25rem;
          line-height: .9;
          margin-top: 5px;
        }

        .adventure-club-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .92rem;
          font-weight: 900;
          letter-spacing: .06em;
          border-top: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          padding: 3px 8px;
          margin-top: 5px;
        }

        .home-heart {
          height: 74px;
          width: 94px;
          position: relative;
          color: #fff;
          margin-bottom: -4px;
        }

        .home-heart .roof {
          font-family: Arial, sans-serif;
          font-size: 76px;
          line-height: .78;
          font-weight: 700;
          transform: scaleX(1.2);
        }

        .home-heart .heart {
          position: absolute;
          left: 0;
          right: 0;
          top: 31px;
          font-size: 25px;
          color: #9b3107;
        }

        .pet-path-logo {
          width: min(250px, 72%);
          max-height: 78px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          margin: 0 auto 4px;
        }

        .path-card h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          letter-spacing: .045em;
          font-size: clamp(1.55rem, 2.2vw, 2rem);
          margin: 4px 0 2px;
        }

        .path-card h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          letter-spacing: .05em;
          font-size: 1.05rem;
          color: #f47625;
          margin: 0 0 10px;
        }

        .pet-card h3 {
          color: #ff9b54;
        }

        .path-card p {
          max-width: 430px;
          min-height: 48px;
          font-size: .94rem;
          line-height: 1.45;
          margin: 0 0 20px;
          color: rgba(255,255,255,.9);
        }

        .path-button {
          margin-top: auto;
          min-width: 285px;
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 24px;
          border-radius: 7px;
          background: #f7f0e2;
          color: #0a2b49;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          letter-spacing: .045em;
          font-size: 1.13rem;
          box-shadow: 0 4px 12px rgba(0,0,0,.15);
        }

        .trust-strip {
          background: #f3ead7;
          padding: 22px clamp(22px,4vw,56px) 30px;
          text-align: center;
        }

        .trust-strip h2 {
          margin: 0 auto 18px;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 3vw, 2.85rem);
          color: #0a2b49;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: center;
        }

        .trust-strip h2 span {
          display: block;
          height: 2px;
          width: 105px;
          background: #f36b21;
        }

        .trust-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .trust-item {
          min-height: 82px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 0 10px;
          border-right: 1px solid rgba(16,45,74,.2);
        }

        .trust-item:last-child {
          border-right: 0;
        }

        .trust-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #0a2b49;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 7px;
        }

        .trust-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          line-height: 1.05;
          font-size: .92rem;
        }

        .footer-photo {
          position: relative;
          height: 360px;
          overflow: hidden;
          background: #071d31;
          color: white;
        }

        .footer-photo > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 52%;
        }

        .footer-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,19,34,.96) 0%,
            rgba(4,19,34,.1) 54%,
            rgba(0,0,0,.03) 100%
          );
        }

        .footer-script {
          position: absolute;
          top: 26%;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.8rem, 2.7vw, 2.7rem);
          line-height: 1.05;
          text-shadow: 0 2px 6px rgba(0,0,0,.7);
        }

        .footer-left {
          left: 4.5%;
          transform: rotate(-5deg);
        }

        .footer-right {
          right: 4.5%;
          text-align: right;
          transform: rotate(-5deg);
        }

        .footer-bottom {
          position: absolute;
          left: 4%;
          right: 4%;
          bottom: 18px;
          display: grid;
          grid-template-columns: 1.15fr 1.6fr .65fr;
          align-items: end;
          gap: 18px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
        }

        .footer-location {
          font-size: .88rem;
          line-height: 1.18;
        }

        .footer-contact {
          text-align: center;
          font-size: 1.05rem;
        }

        .footer-socials {
          text-align: right;
          font-size: 1.65rem;
        }

        @media (max-width: 980px) {

          .desktop-nav,
          .book-button {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .site-header {
            height: 82px;
            padding: 10px 24px;
          }

          .brand {
            width: 150px;
          }

          .hero-note {
            display: none;
          }

          .hero-copy {
            width: 66vw;
          }
        }

        @media (max-width: 640px) {

          .hero {
            height: 520px;
          }

          .hero-image {
            object-position: 58% center;
          }

          .hero-shade {
            background: linear-gradient(
              90deg,
              rgba(0,0,0,.8) 0%,
              rgba(0,0,0,.55) 47%,
              rgba(0,0,0,.08) 80%
            );
          }

          .site-header {
            height: 74px;
            padding: 8px 18px;
          }

          .brand {
            width: 132px;
          }

          .mobile-toggle {
            width: 44px;
            height: 44px;
          }

          .mobile-nav {
            top: 68px;
          }

          .hero-copy {
            left: 24px;
            top: 165px;
            width: calc(100% - 48px);
          }

          .hero-copy h1 {
            font-size: clamp(2.65rem, 11.7vw, 3.5rem);
            max-width: 94%;
          }

          .hero-script {
            font-size: 2rem;
            margin-top: 8px;
          }

          .hero-copy p {
            max-width: 88%;
            font-size: .9rem;
            line-height: 1.38;
          }

          .paths {
            padding: 0 8px;
          }

          .path-grid {
            margin-top: -24px;
            grid-template-columns: 1fr 1fr;
            border-radius: 46% 46% 8px 8px / 28px 28px 8px 8px;
          }

          .path-card {
            min-height: 300px;
            padding: 38px 10px 16px;
          }

          .center-paw {
            width: 50px;
            height: 50px;
          }

          .center-paw svg {
            width: 25px;
            height: 25px;
          }

          .adventure-badge {
            width: 88px;
            height: 58px;
            border-width: 2px;
          }

          .adventure-name {
            font-size: 1.5rem;
          }

          .adventure-club-name {
            font-size: .62rem;
            padding: 2px 4px;
          }

          .home-heart {
            transform: scale(.72);
            margin: -10px 0 -14px;
          }

          .pet-path-logo {
            width: 92%;
            max-height: 58px;
            margin-bottom: 2px;
          }

          .path-card h2 {
            font-size: 1.05rem;
            line-height: 1.05;
            margin-top: 4px;
          }

          .path-card h3 {
            font-size: .73rem;
            line-height: 1.05;
            margin: 4px 0 8px;
          }

          .path-card p {
            font-size: .72rem;
            line-height: 1.3;
            min-height: 55px;
            margin-bottom: 12px;
          }

          .path-button {
            min-width: 0;
            width: 100%;
            min-height: 42px;
            padding: 8px 5px;
            gap: 5px;
            font-size: .78rem;
          }

          .path-button svg {
            width: 15px;
            height: 15px;
          }

          .trust-strip {
            padding: 18px 14px 22px;
          }

          .trust-strip h2 {
            font-size: 1.85rem;
            gap: 10px;
            margin-bottom: 16px;
          }

          .trust-strip h2 span {
            width: 30px;
          }

          .trust-grid {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 17px;
          }

          .trust-item {
            min-height: 72px;
            border-right: 0;
            padding: 0 4px;
          }

          .trust-icon {
            width: 39px;
            height: 39px;
            font-size: 1.2rem;
            margin-bottom: 5px;
          }

          .trust-icon svg {
            width: 22px;
            height: 22px;
          }

          .trust-label {
            font-size: .72rem;
          }

          .footer-photo {
            height: 300px;
          }

          .footer-photo > img {
            object-position: center center;
          }

          .footer-script {
            top: 17%;
            font-size: 1.55rem;
          }

          .footer-left {
            left: 4%;
          }

          .footer-right {
            right: 4%;
          }

          .footer-bottom {
            left: 4%;
            right: 4%;
            bottom: 14px;
            grid-template-columns: 1fr;
            gap: 7px;
            text-align: center;
          }

          .footer-location {
            display: none;
          }

          .footer-contact,
          .footer-socials {
            text-align: center;
          }

          .footer-contact {
            font-size: .85rem;
          }

          .footer-socials {
            font-size: 1.4rem;
          }
        }

      `}</style>

    </main>
  )
}

