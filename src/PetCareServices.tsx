import { useState } from 'react'
import type { CSSProperties } from 'react'
import logoImg from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'
import heroPhoto from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'

/* ─────────────────────────────────────────────────────────── */
/*  ICONS                                                       */
/* ─────────────────────────────────────────────────────────── */
function PawPrint({ size = 20, color = 'currentColor', style }: { size?: number; color?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill={color} width={size} height={size} style={{ flexShrink: 0, ...style }}>
      <ellipse cx="22" cy="28" rx="10" ry="14" />
      <ellipse cx="43" cy="18" rx="10" ry="14" />
      <ellipse cx="65" cy="18" rx="10" ry="14" />
      <ellipse cx="84" cy="28" rx="10" ry="14" />
      <path d="M50 38c-18 0-30 12-30 26 0 10 6 17 14 20 5 2 11 2.5 16 2.5s11-.5 16-2.5c8-3 14-10 14-20 0-14-12-26-30-26z" />
    </svg>
  )
}

const HeartIcon = ({ size = 18, color = '#e8631a' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 3.998 1 7.562 1c2.114 0 3.972 1.048 5.188 2.687a6.354 6.354 0 0 1 5.188-2.687C21.006 1 24 3.518 24 7.191c0 4.105-5.371 8.863-11 14.402z" />
  </svg>
)

/* ─────────────────────────────────────────────────────────── */
/*  TORN PAPER TRANSITIONS                                      */
/* ─────────────────────────────────────────────────────────── */
function TornBottom({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'relative', height: 72, marginTop: -1, pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%', display: 'block' }}>
        <path d="M0,72 L0,28 C100,10 170,50 260,34 C350,18 420,54 520,38 C610,22 690,58 790,42 C880,26 960,62 1060,46 C1150,30 1230,60 1320,46 C1370,38 1410,50 1440,47 L1440,72 Z" fill={fill} />
      </svg>
    </div>
  )
}

function TornTop({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'relative', height: 72, marginBottom: -1, pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'block' }}>
        <path d="M0,0 L0,44 C100,62 170,22 260,38 C350,54 420,18 520,34 C610,50 690,14 790,30 C880,46 960,10 1060,26 C1150,42 1230,12 1320,26 C1370,34 1410,22 1440,25 L1440,0 Z" fill={fill} />
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SERVICE CARD                                               */
/* ─────────────────────────────────────────────────────────── */
function ServiceCard({
  photo, badgeIcon, title, tagline, body, objectPos = 'center center',
}: {
  photo: string
  badgeIcon: React.ReactNode
  title: string
  tagline: string
  body: string
  objectPos?: string
}) {
  return (
    <div
      style={{
        width: '100%', minWidth: 0,
        background: 'white',
        borderRadius: 20,
        overflow: 'visible',
        boxShadow: '0 8px 40px rgba(21,38,56,0.13)',
        display: 'flex', flexDirection: 'column',
        transition: 'transform 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-6px)'
        el.style.boxShadow = '0 20px 56px rgba(21,38,56,0.2)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = ''
        el.style.boxShadow = '0 8px 40px rgba(21,38,56,0.13)'
      }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', height: 'clamp(240px, 28vw, 330px)', borderRadius: '20px 20px 0 0', overflow: 'hidden', flexShrink: 0 }}>
        <img src={photo} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: objectPos, display: 'block' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(21,38,56,0.55) 100%)',
        }} />
        {/* Circle badge */}
        <div style={{
          position: 'absolute', bottom: -26, left: '50%', transform: 'translateX(-50%)',
          width: 54, height: 54, borderRadius: '50%',
          background: '#152638',
          border: '3px solid #f2ead8',
          boxShadow: '0 4px 16px rgba(21,38,56,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#e8631a', zIndex: 2, flexShrink: 0,
        }}>
          {badgeIcon}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '44px 24px 28px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title + heart */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 'clamp(1.35rem, 2vw, 1.7rem)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: '#e8631a', margin: 0,
          }}>{title}</h3>
          <HeartIcon size={14} />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', color: '#152638',
          margin: '0 0 12px', lineHeight: 1.4,
          fontStyle: 'italic',
        }}>{tagline}</p>

        {/* Body */}
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.96rem', color: '#5a6a7a',
          lineHeight: 1.65, margin: '0 0 20px', flex: 1,
        }}>{body}</p>

        {/* Learn more */}
            </div>
          )}
        </header>

        {/* Logo */}
        <a href="/" style={{
          position: 'absolute', top: 76, left: 'clamp(24px, 5vw, 80px)',
          zIndex: 10, textDecoration: 'none', display: 'block',
        }}>
          <img src={logoImg} alt="Max & Me Pet Care" style={{ height: 110, width: 'auto', display: 'block', mixBlendMode: 'screen' }} />
        </a>

        {/* Hero copy */}
        <div style={{
          position: 'relative', zIndex: 3,
          padding: 'clamp(210px, 22vw, 240px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 100px)',
          maxWidth: 'clamp(360px, 55vw, 700px)',
        }}>
          {/* Script accent */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#e8631a',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}>care that feels like family</span>
            <HeartIcon size={16} />
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(2.8rem, 7vw, 7rem)',
            lineHeight: 0.9, color: 'white',
            margin: '0 0 22px',
            textShadow: '0 4px 28px rgba(0,0,0,0.5)',
            letterSpacing: '0.01em',
          }}>
            PET CARE<br />SERVICES
            <span style={{ display: 'inline-block', marginLeft: '0.12em', verticalAlign: 'middle' }}>
              <PawPrint size={48} color="#e8631a" />
            </span>
          </h1>

          {/* Body */}
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'clamp(0.92rem, 1.4vw, 1.05rem)',
            fontWeight: 300, lineHeight: 1.75,
            maxWidth: 440,
            textShadow: '0 1px 6px rgba(0,0,0,0.4)',
            margin: 0,
          }}>
            Love. Comfort. Peace of mind.<br />
            Thoughtful, personalized care built around your dog's needs, routines, personality, and the life you share together.
          </p>
        </div>

        {/* Torn bottom into cream */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          <TornBottom fill="#f2ead8" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TAGLINE STRIP — CREAM
      ════════════════════════════════════════════ */}
      <section style={{ background: '#f2ead8', padding: '28px clamp(20px, 4vw, 60px) 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 12, flexWrap: 'wrap', textAlign: 'center',
        }}>
          <HeartIcon size={20} color="#e8631a" />
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#152638',
          }}>
            PET CARE, THE MAX & ME WAY.
          </span>
          <span style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
            color: '#9b3f12',
          }}>
            Personal care. Familiar comfort. Plenty of heart.
          </span>
          <HeartIcon size={20} color="#e8631a" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOUR SERVICE CARDS — CREAM
      ════════════════════════════════════════════ */}
      <section style={{ background: '#f2ead8', padding: 'clamp(36px, 5vw, 60px) clamp(20px, 4vw, 60px) clamp(56px, 7vw, 88px)' }}>

        {/* Subtle paw watermarks */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.05, transform: 'rotate(18deg)', pointerEvents: 'none' }}>
            <PawPrint size={180} color="#152638" />
          </div>
          <div style={{ position: 'absolute', bottom: -20, left: -20, opacity: 0.04, transform: 'rotate(-12deg)', pointerEvents: 'none' }}>
            <PawPrint size={140} color="#152638" />
          </div>

          <div className="petcare-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 28,
            maxWidth: 1280, margin: '0 auto',
            position: 'relative', zIndex: 1,
          }}>
            <ServiceCard
              photo={PHOTOS.petcations}
              objectPos="center 30%"
              badgeIcon={
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e8631a" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
                  <path d="M9 21V12h6v9"/>
                </svg>
              }
              title="Petcations"
              tagline="Their vacation while you're on yours."
              body="A cozy, personalized home-away-from-home experience filled with comfort, enrichment, play, and plenty of love."
            />
            <ServiceCard
              photo={PHOTOS.staycations}
              objectPos="center 40%"
              badgeIcon={<PawPrint size={26} color="#e8631a" />}
              title="Staycations"
              tagline="Home is where the heart is."
              body="In-home pet sitting with love, attention, and a consistent routine so your pup can stay comfortable in their own space."
            />
            <ServiceCard
              photo={PHOTOS.daycations}
              objectPos="center 40%"
              badgeIcon={
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e8631a" strokeWidth="2.2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
              }
              title="Daycations"
              tagline="A full day of fun, enrichment, and care."
              body="A personalized day away filled with play, enrichment, outings, rest, and plenty of attention — with all the fun of a mini vacation."
            />
            <ServiceCard
              photo={PHOTOS.sniffari}
              objectPos="center 45%"
              badgeIcon={<PawPrint size={26} color="#e8631a" />}
              title="Sniffari"
              tagline="Our version of a dog walk."
              body="A dog walk with more purpose, more enrichment, and a whole lot more sniffing — tailored to your dog's pace, interests, and personality."
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BOTTOM CTA — DARK NAVY
      ════════════════════════════════════════════ */}
      <section style={{ background: '#152638', position: 'relative' }}>
        <TornTop fill="#152638" />

        {/* Subtle paw watermarks */}
        <div style={{ position: 'absolute', top: '10%', right: '-2%', opacity: 0.05, transform: 'rotate(16deg)', pointerEvents: 'none', zIndex: 0 }}>
          <PawPrint size={160} color="white" />
        </div>

        <div style={{
          position: 'relative', zIndex: 1,
          padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 80px) clamp(40px, 6vw, 72px)',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', gap: 40,
          maxWidth: 1200, margin: '0 auto',
        }}>

          {/* Left: polaroid-style photo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              background: 'white',
              padding: '10px 10px 32px',
              borderRadius: 4,
              boxShadow: '0 12px 48px rgba(0,0,0,0.4)',
              transform: 'rotate(-3deg)',
              width: 'clamp(140px, 18vw, 220px)',
            }}>
              <img
                src={PHOTOS.bottom}
                alt="Golden retriever playing joyfully"
                style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block', borderRadius: 2 }}
              />
              <div style={{ textAlign: 'center', marginTop: 10 }}>
                <HeartIcon size={18} color="#e8631a" />
              </div>
            </div>
          </div>

          {/* Center: Questions copy + CTA button */}
          <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <p style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                color: '#e8631a', margin: 0, lineHeight: 1.1,
              }}>Peace of mind starts here.</p>
              <HeartIcon size={24} color="#e8631a" />
            </div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
              color: 'rgba(255,255,255,0.75)',
              margin: '0 0 20px', lineHeight: 1.65,
            }}>
              Tell me what your dog needs, and we'll build care around them.
            </p>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #e8631a, #c44e0f)',
              color: 'white',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', letterSpacing: '0.12em',
              padding: '16px 36px', borderRadius: 8, textDecoration: 'none',
              textTransform: 'uppercase',
              boxShadow: '0 6px 28px rgba(232,99,26,0.5)',
              whiteSpace: 'nowrap' as const,
            }}>
              <PawPrint size={20} /> BOOK A MEET & GREET
            </a>
          </div>

          {/* Right: Arrow + Serving area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: '0 1 auto' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div>
              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'white', margin: '0 0 6px', lineHeight: 1.3,
              }}>
                SERVING SAINT CLOUD,<br />
                LAKE NONA, NARCOOSSEE<br />
                & SURROUNDING AREAS
              </p>
              <HeartIcon size={18} color="#e8631a" />
            </div>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile-toggle { display: none !important; }
        @media (max-width: 980px) and (min-width: 769px) {
          .petcare-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
          .petcare-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  )
}
