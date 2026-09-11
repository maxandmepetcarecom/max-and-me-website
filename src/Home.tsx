import { useState } from 'react'
import type { CSSProperties } from 'react'

import heroImg from '@/imports/IMG_1999.jpeg'
import huckImg from '@/imports/91EC3682-8CE8-43DF-A7D0-2F14A33A7734.png'
import petCareImg from '@/imports/IMG_2827.jpeg'
import footerImg from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'
import petCareLogo from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'
import adventureClubLogo from '@/imports/BA0B141F-5CFA-4C52-B1BD-BA344D4ABC27.png'

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
      aria-hidden="true"
    >
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
  { label: 'ABOUT', to: '/about' },
  { label: 'REVIEWS', to: '/reviews' },
  { label: 'CONTACT', to: '/contact' },
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

        <div className="hero-overlay" />

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
                className={link.label === 'HOME' ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/services" className="book-button">
            <PawPrint size={22} />
            BOOK NOW
          </a>

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

        <div className="hero-copy">

          <h1>
            EVERY DOG HAS AN
            <br />
            <span>ADVENTURER WITHIN.</span>
          </h1>

          <div className="hero-script">
            We’re here to unleash it. ♡
          </div>

          <p>
            Partnering with pet parents to give their pets the
            life they deserve. A life filled with adventure,
            enrichment, and lasting friendships. 🐾
          </p>

        </div>

        <div className="hero-note">
          Good
          <br />
          Dogs.
          <br />
          Happier
          <br />
          Humans
          <br />
          ♡
        </div>

      </section>


      {/* SERVICE CARDS */}
      <section className="services-section">

        <div className="service-grid">

          {/* ADVENTURE CLUB */}
          <article className="service-card">

            <div className="service-photo">
              <img
                src={huckImg}
                alt="Huck enjoying an outdoor adventure"
              />
            </div>

            <div className="paper-panel">

              <img
                src={adventureClubLogo}
                alt="Max & Me Canine Adventure Club"
                className="adventure-logo"
              />

              <div className="service-script navy-script">
                Beyond the walk.
                <br />
                Into a life of adventure.
              </div>

              <p className="service-copy">
                Hikes, field trips, pack walks, enrichment,
                and confidence-building adventures for dogs
                of every age and personality.
              </p>

              <a
                href="/adventure-club"
                className="service-button adventure-button"
              >
                EXPLORE THE CLUB
                <PawPrint size={21} />
              </a>

            </div>

          </article>


          {/* PET CARE */}
          <article className="service-card">

            <div className="service-photo">
              <img
                src={petCareImg}
                alt="Dogs resting comfortably during Max & Me pet care"
              />
            </div>

            <div className="paper-panel">

              <img
                src={petCareLogo}
                alt="Max & Me Pet Care"
                className="pet-logo"
              />

              <div className="service-script orange-script">
                Love. Comfort. Peace of mind.
              </div>

              <p className="service-copy">
                Petcations, Daycations, Staycations,
                and personalized care built around each pet’s
                routine, personality, and needs.
              </p>

              <a
                href="/services"
                className="service-button pet-button"
              >
                EXPLORE PET CARE
                <PawPrint size={21} />
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* TRUST STRIP */}
      <section className="trust-strip">

        <div className="trust-heading">
          <span />
          <h2>Why Pawrents Trust Max &amp; Me</h2>
          <span />
        </div>

        <div className="trust-grid">

          <div className="trust-item">
            <div className="trust-icon">
              <PawPrint size={24} />
            </div>
            <div>
              FEAR FREE
              <br />
              APPROACH
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              ✓
            </div>
            <div>
              INSURED &amp;
              <br />
              BONDED
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              ✚
            </div>
            <div>
              PET FIRST AID
              <br />
              CERTIFIED
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              ▣
            </div>
            <div>
              PERSONAL ADVENTURE
              <br />
              PHOTO ALBUM
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              ●
            </div>
            <div>
              LIVE
              <br />
              UPDATES
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              ●
            </div>
            <div>
              SERVING SAINT CLOUD
              <br />
              &amp; SURROUNDING AREAS
            </div>
          </div>

        </div>

      </section>


      {/* FOOTER IMAGE */}
      <footer className="footer-photo">

        <img
          src={footerImg}
          alt="Max & Me lakeside adventure at golden hour"
        />

        <div className="footer-overlay" />

        <div className="footer-left-script">
          Let’s explore
          <br />
          together! ♡
        </div>

        <div className="footer-right-script">
          Enriching lives
          <br />
          one paw at a time. ♡
        </div>

        <div className="footer-bottom">

          <div className="footer-location">
            <span className="pin">●</span>

            <span>
              SERVING SAINT CLOUD,
              <br />
              LAKE NONA, NARCOOSSEE
              <br />
              &amp; SURROUNDING AREAS
            </span>
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
          min-height: 100vh;
          overflow-x: hidden;
          background: #f3ead7;
          color: #0b2c48;
          font-family: 'Outfit', sans-serif;
        }


        /* HERO */

        .hero {
          position: relative;
          height: 615px;
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

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,.82) 0%,
              rgba(0,0,0,.66) 28%,
              rgba(0,0,0,.32) 48%,
              rgba(0,0,0,.05) 70%,
              rgba(0,0,0,.18) 100%
            );
        }


        /* HEADER */

        .site-header {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          height: 96px;
          display: flex;
          align-items: center;
          gap: 26px;
          padding: 12px clamp(34px, 4.5vw, 70px);
        }

        .brand {
          width: 195px;
          flex: 0 0 auto;
        }

        .brand img {
          width: 100%;
          display: block;
          filter: drop-shadow(0 2px 5px rgba(0,0,0,.55));
        }

        .desktop-nav {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(14px, 1.7vw, 28px);
        }

        .desktop-nav a {
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .94rem;
          font-weight: 800;
          letter-spacing: .045em;
          white-space: nowrap;
          padding: 8px 0;
          text-shadow: 0 2px 5px rgba(0,0,0,.7);
        }

        .desktop-nav a.active {
          border-bottom: 3px solid #f26419;
        }

        .book-button {
          flex: 0 0 auto;
          min-width: 145px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 18px;
          border-radius: 7px;
          background: #f26419;
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: .04em;
          box-shadow: 0 5px 14px rgba(0,0,0,.25);
        }

        .mobile-toggle {
          display: none;
          margin-left: auto;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,.5);
          border-radius: 8px;
          background: rgba(8,34,55,.9);
          color: white;
          font-size: 1.6rem;
          cursor: pointer;
        }

        .mobile-nav {
          position: absolute;
          top: 80px;
          left: 18px;
          right: 18px;
          padding: 16px 20px;
          background: rgba(6,28,47,.98);
          border-radius: 8px;
          box-shadow: 0 14px 30px rgba(0,0,0,.35);
        }

        .mobile-nav a {
          display: block;
          padding: 9px 0;
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          letter-spacing: .07em;
        }


        /* HERO TEXT */

        .hero-copy {
          position: absolute;
          z-index: 10;
          top: 170px;
          left: clamp(36px, 4.6vw, 72px);
          width: min(52vw, 640px);
          color: white;
        }

        .hero-copy h1 {
          margin: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(3.1rem, 5.25vw, 5.4rem);
          line-height: .94;
          letter-spacing: .005em;
          text-shadow: 0 4px 13px rgba(0,0,0,.45);
        }

        .hero-copy h1 span {
          color: #f15e16;
        }

        .hero-script {
          margin: 10px 0 12px;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 3.4vw, 3.25rem);
          font-weight: 700;
          line-height: 1;
          text-shadow: 0 3px 7px rgba(0,0,0,.5);
        }

        .hero-copy p {
          max-width: 485px;
          margin: 0;
          color: rgba(255,255,255,.94);
          font-size: clamp(.98rem, 1.3vw, 1.16rem);
          line-height: 1.4;
          text-shadow: 0 2px 5px rgba(0,0,0,.65);
        }

        .hero-note {
          position: absolute;
          z-index: 10;
          right: 5%;
          top: 150px;
          color: white;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.5rem, 2.2vw, 2.35rem);
          font-weight: 700;
          line-height: .95;
          text-align: center;
          transform: rotate(-7deg);
          text-shadow: 0 2px 6px rgba(0,0,0,.7);
        }


        /* SERVICES */

        .services-section {
          position: relative;
          background: #f3ead7;
          padding: 48px clamp(20px, 3vw, 36px) 24px;
        }

        .services-section:before {
          content: '';
          position: absolute;
          top: -24px;
          left: 0;
          right: 0;
          height: 40px;
          background: #f3ead7;
          clip-path: polygon(
            0 48%,
            3% 25%,
            7% 46%,
            11% 21%,
            16% 49%,
            20% 27%,
            25% 51%,
            30% 24%,
            35% 49%,
            40% 26%,
            45% 52%,
            50% 28%,
            55% 50%,
            60% 23%,
            65% 51%,
            70% 27%,
            75% 49%,
            80% 22%,
            85% 50%,
            90% 26%,
            95% 48%,
            100% 24%,
            100% 100%,
            0 100%
          );
        }

        .service-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .service-card {
          overflow: hidden;
          background: #eadcc0;
          box-shadow: 0 5px 16px rgba(53,42,24,.08);
        }

        .service-photo {
          height: 390px;
          overflow: hidden;
        }

        .service-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-card:first-child .service-photo img {
          object-position: center center;
        }

        .service-card:last-child .service-photo img {
          object-position: center center;
        }


        /* PAPER CARD */

        .paper-panel {
          position: relative;
          min-height: 318px;
          margin-top: -60px;
          padding: 74px 34px 28px;
          background: #f3ead7;
          text-align: center;
          clip-path: polygon(
            0 15%,
            5% 11%,
            10% 16%,
            16% 10%,
            23% 15%,
            30% 9%,
            37% 15%,
            44% 10%,
            51% 15%,
            58% 9%,
            65% 16%,
            72% 11%,
            79% 15%,
            86% 10%,
            93% 15%,
            100% 11%,
            100% 100%,
            0 100%
          );
        }

        .adventure-logo {
          display: block;
          width: min(300px, 78%);
          max-height: 150px;
          object-fit: contain;
          margin: -58px auto 8px;
        }

        .pet-logo {
          display: block;
          width: min(310px, 76%);
          max-height: 120px;
          object-fit: contain;
          margin: -48px auto 10px;
        }

        .service-script {
          margin: 8px 0 10px;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.6rem, 2.25vw, 2rem);
          font-weight: 700;
          line-height: 1.02;
        }

        .navy-script {
          color: #0b2c48;
        }

        .orange-script {
          color: #ef6420;
        }

        .service-copy {
          max-width: 465px;
          margin: 0 auto 18px;
          color: #15283a;
          font-size: .95rem;
          line-height: 1.4;
        }

        .service-button {
          width: 100%;
          max-width: 430px;
          min-height: 52px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 6px;
          color: white;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: .04em;
        }

        .adventure-button {
          background: #092943;
          border: 2px solid #f26419;
        }

        .pet-button {
          background: #264f25;
        }


        /* TRUST */

        .trust-strip {
          background: #f3ead7;
          padding: 8px clamp(20px,4vw,56px) 26px;
          text-align: center;
        }

        .trust-heading {
          max-width: 1000px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .trust-heading span {
          height: 2px;
          flex: 1;
          max-width: 185px;
          background: #0b2c48;
          opacity: .75;
        }

        .trust-heading h2 {
          margin: 0;
          color: #0b2c48;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 700;
          white-space: nowrap;
        }

        .trust-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .trust-item {
          min-height: 88px;
          padding: 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          border-right: 1px solid rgba(11,44,72,.2);
          color: #0b2c48;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: .9rem;
          font-weight: 900;
          line-height: 1.05;
        }

        .trust-item:last-child {
          border-right: 0;
        }

        .trust-icon {
          width: 44px;
          height: 44px;
          margin-bottom: 7px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0b2c48;
          color: white;
          font-size: 1.45rem;
        }


        /* FOOTER */

        .footer-photo {
          position: relative;
          height: 365px;
          overflow: hidden;
          background: #071b2d;
          color: white;
        }

        .footer-photo > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .footer-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(4,20,35,.96) 0%,
              rgba(4,20,35,.18) 53%,
              rgba(0,0,0,.03) 100%
            );
        }

        .footer-left-script,
        .footer-right-script {
          position: absolute;
          z-index: 3;
          top: 27%;
          color: white;
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.8rem, 2.7vw, 2.8rem);
          font-weight: 700;
          line-height: 1.05;
          text-shadow: 0 2px 7px rgba(0,0,0,.7);
        }

        .footer-left-script {
          left: 4.5%;
          transform: rotate(-5deg);
        }

        .footer-right-script {
          right: 4.5%;
          text-align: right;
          transform: rotate(-5deg);
        }

        .footer-bottom {
          position: absolute;
          z-index: 4;
          left: 4%;
          right: 4%;
          bottom: 18px;
          display: grid;
          grid-template-columns: 1.2fr 1.6fr .7fr;
          align-items: end;
          gap: 18px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
        }

        .footer-location {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: .86rem;
          line-height: 1.12;
        }

        .pin {
          font-size: 1.5rem;
          line-height: 1;
        }

        .footer-contact {
          text-align: center;
          font-size: 1.05rem;
        }

        .footer-socials {
          text-align: right;
          font-size: 1.65rem;
        }


        /* TABLET */

        @media (max-width: 900px) {

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


        /* MOBILE */

        @media (max-width: 640px) {

          .hero {
            height: 510px;
          }

          .hero-image {
            object-position: 58% center;
          }

          .hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(0,0,0,.82) 0%,
                rgba(0,0,0,.62) 44%,
                rgba(0,0,0,.08) 85%
              );
          }

          .site-header {
            height: 72px;
            padding: 8px 18px;
          }

          .brand {
            width: 135px;
          }

          .mobile-toggle {
            width: 44px;
            height: 44px;
          }

          .mobile-nav {
            top: 66px;
          }

          .hero-copy {
            top: 153px;
            left: 22px;
            width: calc(100% - 44px);
          }

          .hero-copy h1 {
            max-width: 92%;
            font-size: clamp(2.6rem, 11.5vw, 3.4rem);
          }

          .hero-script {
            margin-top: 8px;
            font-size: 2rem;
          }

          .hero-copy p {
            max-width: 87%;
            font-size: .88rem;
            line-height: 1.35;
          }


          /* KEEP SERVICE CARDS SIDE BY SIDE */

          .services-section {
            padding: 30px 8px 18px;
          }

          .service-grid {
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .service-photo {
            height: 205px;
          }

          .paper-panel {
            min-height: 235px;
            margin-top: -42px;
            padding: 53px 9px 13px;
          }

          .adventure-logo {
            width: 92%;
            max-height: 82px;
            margin: -38px auto 6px;
          }

          .pet-logo {
            width: 90%;
            max-height: 62px;
            margin: -31px auto 7px;
          }

          .service-script {
            margin: 6px 0 7px;
            font-size: .98rem;
            line-height: 1;
          }

          .service-copy {
            margin-bottom: 9px;
            font-size: .62rem;
            line-height: 1.24;
          }

          .service-button {
            min-height: 38px;
            gap: 4px;
            padding: 5px 3px;
            font-size: .73rem;
          }

          .service-button svg {
            width: 14px;
            height: 14px;
          }


          /* TRUST */

          .trust-strip {
            padding: 10px 10px 18px;
          }

          .trust-heading {
            gap: 8px;
            margin-bottom: 13px;
          }

          .trust-heading h2 {
            font-size: 1.55rem;
            white-space: normal;
          }

          .trust-heading span {
            max-width: 35px;
          }

          .trust-grid {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 14px;
          }

          .trust-item {
            min-height: 65px;
            border-right: 0;
            padding: 0 3px;
            font-size: .66rem;
          }

          .trust-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 5px;
            font-size: 1.1rem;
          }


          /* FOOTER */

          .footer-photo {
            height: 285px;
          }

          .footer-left-script,
          .footer-right-script {
            top: 18%;
            font-size: 1.45rem;
          }

          .footer-left-script {
            left: 4%;
          }

          .footer-right-script {
            right: 4%;
          }

          .footer-bottom {
            left: 3%;
            right: 3%;
            bottom: 12px;
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .footer-location {
            display: none;
          }

          .footer-contact,
          .footer-socials {
            text-align: center;
          }

          .footer-contact {
            font-size: .8rem;
          }

          .footer-socials {
            font-size: 1.25rem;
          }
        }

      `}</style>

    </main>
  )
}