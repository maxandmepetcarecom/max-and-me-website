import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import heroImg from '@/imports/71D5B044-4929-4163-95D6-6043BA0DD6AC.png'
import logoImg from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'
import aboutImg from '@/imports/D65AC007-04BA-4069-9BEB-6A7D379CB0A3.png'

/* ── Paw icon ─────────────────────────────────────────────── */
function PawPrint({ className = 'w-5 h-5', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} style={style}>
      <ellipse cx="22" cy="28" rx="10" ry="14" />
      <ellipse cx="43" cy="18" rx="10" ry="14" />
      <ellipse cx="65" cy="18" rx="10" ry="14" />
      <ellipse cx="84" cy="28" rx="10" ry="14" />
      <path d="M50 38c-18 0-30 12-30 26 0 10 6 17 14 20 5 2 11 2.5 16 2.5s11-.5 16-2.5c8-3 14-10 14-20 0-14-12-26-30-26z" />
    </svg>
  )
}

/* ── Mountain circle icon ─────────────────────────────────── */
function MountainIcon() {
  return (
    <div className="flex-shrink-0" style={{ width: 100, height: 100 }}>
      <svg viewBox="0 0 100 100" fill="none" width="100" height="100">
        <circle cx="50" cy="50" r="47" stroke="white" strokeWidth="3" />
        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <polygon points="50,20 30,58 70,58" fill="white" opacity="0.9" />
        <polygon points="68,30 50,58 86,58" fill="white" opacity="0.7" />
        <polygon points="34,38 18,58 50,58" fill="white" opacity="0.6" />
        <polygon points="50,20 43,33 57,33" fill="white" />
        <polygon points="68,30 63,39 73,39" fill="white" opacity="0.85" />
        <polygon points="26,73 22,82 30,82" fill="white" opacity="0.8" />
        <polygon points="36,70 32,79 40,79" fill="white" opacity="0.8" />
        <polygon points="46,72 42,81 50,81" fill="white" opacity="0.8" />
        <rect x="25" y="82" width="2" height="5" fill="white" opacity="0.6" />
        <rect x="35" y="79" width="2" height="5" fill="white" opacity="0.6" />
        <rect x="45" y="81" width="2" height="5" fill="white" opacity="0.6" />
        <line x1="14" y1="87" x2="86" y2="87" stroke="white" strokeWidth="2" opacity="0.5" />
      </svg>
    </div>
  )
}

/* ── House/Heart circle icon ──────────────────────────────── */
function HomeHeartIcon() {
  return (
    <div className="flex-shrink-0" style={{ width: 100, height: 100 }}>
      <svg viewBox="0 0 100 100" fill="none" width="100" height="100">
        <circle cx="50" cy="50" r="47" stroke="white" strokeWidth="3" />
        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <polygon points="50,20 18,48 82,48" fill="white" opacity="0.9" />
        <rect x="28" y="48" width="44" height="35" rx="2" fill="white" opacity="0.9" />
        <rect x="41" y="64" width="18" height="19" rx="2" fill="#9b3f12" opacity="0.7" />
        <path d="M50 47c0 0-10-8-10-15 0-4.5 3.6-7 7-6 1.5.4 3 1.5 3 1.5s1.5-1.1 3-1.5c3.4-1 7 1.5 7 6 0 7-10 15-10 15z" fill="#9b3f12" transform="translate(0 10)" />
      </svg>
    </div>
  )
}

/* ── Trust badge icons ────────────────────────────────────── */
function TrustIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: 64, height: 64, margin: '0 auto 12px' }}>{children}</div>
  )
}

/* ── Torn paper SVG dividers ──────────────────────────────── */
function TornBottom({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'relative', height: 56, marginTop: -2 }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,0 L1440,0 L1440,32 C1400,24 1370,42 1320,32 C1280,24 1250,44 1200,34 C1155,24 1120,46 1075,36 C1035,26 1000,48 950,36 C905,25 870,46 820,34 C775,23 740,45 690,33 C645,22 610,44 560,32 C515,21 480,43 430,31 C385,20 350,42 300,30 C255,19 220,41 170,29 C125,18 90,40 40,28 C20,23 10,12 0,18 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ADVENTURE CLUB', to: '/adventure-club' },
  { label: 'PET CARE SERVICES', to: '/services' },
  { label: 'SPECIAL CARE', to: '/special-care' },
  { label: 'PRICING', to: '/pricing' },
  { label: 'ADVENTURE JOURNAL', to: '/adventure-journal' },
]

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div style={{ background: '#f0e8d5', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>

      {/* HERO */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>

        {/* NAVIGATION */}
        <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
          <div style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 70%, transparent 100%)',
            padding: '0 32px',
          }}>
            <div style={{
              maxWidth: 1280,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              height: 68,
              gap: 28,
            }}>
              <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1 }}>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.to}
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      letterSpacing: '0.08em',
                      color: 'white',
                      textDecoration: 'none',
                      textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                      borderBottom: link.label === 'HOME' ? '2px solid #e8631a' : '2px solid transparent',
                      paddingBottom: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="nav-mobile-toggle"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                style={{
                  background: 'rgba(8, 20, 36, 0.35)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: 'white',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  position: 'relative',
                  zIndex: 110,
                  pointerEvents: 'auto',
                  touchAction: 'manipulation',
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true">
                  {mobileOpen
                    ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                    : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
                </svg>
              </button>
            </div>
          </div>

          {mobileOpen && (
            <nav
              aria-label="Mobile navigation"
              style={{
                position: 'absolute',
                top: 68,
                left: 0,
                right: 0,
                zIndex: 109,
                background: 'rgba(10,20,38,0.985)',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                padding: '18px 24px 26px',
                boxShadow: '0 14px 28px rgba(0,0,0,0.34)',
                pointerEvents: 'auto',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    color: 'white',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    padding: '10px 0',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </header>

        <img
          src={heroImg}
          alt="Woman walking four dogs on a forest trail beside a lake at golden hour"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />

        <a
          href="/"
          style={{
            position: 'absolute',
            top: 36,
            left: 'clamp(24px, 5vw, 80px)',
            zIndex: 10,
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <img
            src={logoImg}
            alt="Max & Me Pet Care"
            style={{
              height: 160,
              width: 'auto',
              display: 'block',
              mixBlendMode: 'screen',
            }}
          />
        </a>

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(95deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.78) 20%, rgba(0,0,0,0.5) 42%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0) 85%)',
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 30%)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          paddingBottom: 110,
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 48px)',
          paddingTop: 185,
          maxWidth: 'clamp(400px, 50vw, 680px)',
        }}>
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            color: '#e8a060',
            lineHeight: 1.2,
            marginBottom: 6,
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}>
            More than pet care...
          </p>

          <h1 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(4.5rem, 10vw, 8.5rem)',
            lineHeight: 0.92,
            color: 'white',
            margin: 0,
            marginBottom: 20,
            textShadow: '0 4px 16px rgba(0,0,0,0.35)',
            letterSpacing: '0.01em',
          }}>
            IT'S A<br />
            LIFESTYLE.
            <span style={{
              display: 'inline-block',
              marginLeft: '0.12em',
              fontSize: '0.55em',
              color: '#e8631a',
              verticalAlign: 'middle',
              lineHeight: 1,
            }}>
              ♡
            </span>
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.92)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.55,
            marginBottom: 16,
            maxWidth: 320,
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}>
            Enriching lives one paw at a time<br />
            through adventure, care,<br />
            and connection.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
              letterSpacing: '0.18em',
              color: 'white',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}>
              EXPLORE. PLAY. CONNECT.
            </span>
            <PawPrint className="w-4 h-4" style={{ color: 'white', flexShrink: 0 }} />
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section style={{ position: 'relative', zIndex: 10, marginTop: -90 }}>
        <div className="cards-row" style={{ display: 'flex', position: 'relative' }}>

          <div className="card-left" style={{
            flex: 1,
            background: '#152638',
            borderTopRightRadius: '100% 100px',
            overflow: 'hidden',
            padding: '80px 40px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: 380,
            position: 'relative',
          }}>
            <div style={{ marginBottom: 24 }}>
              <MountainIcon />
            </div>

            <div style={{ textAlign: 'center', maxWidth: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                letterSpacing: '0.08em',
                color: 'white',
                margin: 0,
                marginBottom: 6,
                textTransform: 'uppercase',
              }}>
                Canine Adventure Club
              </h2>

              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.12em',
                color: '#e8631a',
                margin: 0,
                marginBottom: 14,
                textTransform: 'uppercase',
              }}>
                EXPLORE. PLAY. CONNECT.
              </p>

              <p style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: 28,
                flex: 1,
              }}>
                Adventure, enrichment, and confidence-building outings for dogs of every age and personality.
              </p>

              <a href="/adventure-club" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '2px solid white',
                background: 'rgba(255,255,255,0.06)',
                color: 'white',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                padding: '13px 28px',
                borderRadius: 8,
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                ENTER THE ADVENTURE
                <PawPrint className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -46px)',
            zIndex: 20,
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: '#152638',
            border: '3px solid #e8631a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
          }}>
            <PawPrint className="w-9 h-9" style={{ color: 'white' }} />
          </div>

          <div className="card-right" style={{
            flex: 1,
            background: '#9b3f12',
            borderTopLeftRadius: '100% 100px',
            overflow: 'hidden',
            padding: '80px 40px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: 380,
            position: 'relative',
          }}>
            <div style={{ marginBottom: 24 }}>
              <HomeHeartIcon />
            </div>

            <div style={{ textAlign: 'center', maxWidth: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                letterSpacing: '0.08em',
                color: 'white',
                margin: 0,
                marginBottom: 6,
                textTransform: 'uppercase',
              }}>
                Pet Care Services
              </h2>

              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,220,180,0.85)',
                margin: 0,
                marginBottom: 14,
                textTransform: 'uppercase',
              }}>
                LOVE. COMFORT. PEACE OF MIND.
              </p>

              <p style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: 28,
                flex: 1,
              }}>
                Personalized care, specialized support, and peace of mind for every pup.
              </p>

              <a href="/services" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '2px solid white',
                background: 'rgba(255,255,255,0.06)',
                color: 'white',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                padding: '13px 28px',
                borderRadius: 8,
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                EXPLORE PET CARE
                <PawPrint className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <TornBottom fill="#f0e8d5" />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          background: '#f0e8d5',
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 84px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            gap: 'clamp(36px, 6vw, 72px)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: '5px solid #152638',
              boxShadow: '0 18px 40px rgba(21,38,56,0.16)',
            }}>
              <img
                src={aboutImg}
                alt="Ramona with dogs from the Max & Me pack"
                style={{
                  width: '100%',
                  display: 'block',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                }}
              />
            </div>

            <div style={{
              position: 'absolute',
              right: -14,
              bottom: -18,
              background: '#e8631a',
              color: 'white',
              borderRadius: 999,
              width: 76,
              height: 76,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '5px solid #f0e8d5',
              boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
            }}>
              <PawPrint className="w-9 h-9" />
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              color: '#e8631a',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.15rem)',
              margin: '0 0 8px',
            }}>
              the heart behind Max & Me
            </p>

            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              color: '#152638',
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              lineHeight: 0.95,
              letterSpacing: '0.04em',
              margin: '0 0 24px',
              textTransform: 'uppercase',
            }}>
              MEET RAMONA & MAXIMUS
            </h2>

            <p style={{
              color: '#46586a',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              margin: '0 0 18px',
            }}>
              Max & Me started with a promise I made to my own true Adventure Dog: that I would continue his legacy by bringing more joy, enrichment, and adventure to the lives of every paw that crossed my path. That promise became the heart behind Max & Me and still guides the way I care for every dog today.
            </p>

            <p style={{
              color: '#46586a',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              margin: '0 0 26px',
            }}>
              Inspired by Maximus and shaped by years of caring for dogs with all kinds of needs, every Max & Me experience is personal. Some dogs want a trail full of new smells. Some want familiar comforts at home. Some need a little extra patience and support. The goal is always the same: help each dog feel safe, understood, enriched, and genuinely happy.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: '#152638',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              <PawPrint className="w-5 h-5" style={{ color: '#e8631a' }} />
              Pet care with heart, purpose, and personality.
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{
        background: '#f0e8d5',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 32px 48px',
      }}>

        {[
          { top: '5%', left: '-2%', size: 140, rotate: -20, opacity: 0.09 },
          { top: '50%', left: '4%', size: 100, rotate: 10, opacity: 0.07 },
          { top: '-5%', right: '-1%', size: 130, rotate: 15, opacity: 0.08 },
          { bottom: '5%', right: '5%', size: 90, rotate: -10, opacity: 0.06 },
        ].map((m, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: m.top,
              left: m.left,
              right: (m as any).right,
              bottom: (m as any).bottom,
              opacity: m.opacity,
              transform: `rotate(${m.rotate}deg)`,
              pointerEvents: 'none',
            }}
          >
            <svg viewBox="0 0 100 100" fill="#7a5020" style={{ width: m.size, height: m.size }}>
              <ellipse cx="22" cy="28" rx="10" ry="14" />
              <ellipse cx="43" cy="18" rx="10" ry="14" />
              <ellipse cx="65" cy="18" rx="10" ry="14" />
              <ellipse cx="84" cy="28" rx="10" ry="14" />
              <path d="M50 38c-18 0-30 12-30 26 0 10 6 17 14 20 5 2 11 2.5 16 2.5s11-.5 16-2.5c8-3 14-10 14-20 0-14-12-26-30-26z" />
            </svg>
          </div>
        ))}

        <div
          className="trust-grid"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1180,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            alignItems: 'start',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrustIcon>
              <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                <path d="M32 6L8 18v16c0 14 10 26 24 30 14-4 24-16 24-30V18L32 6z" stroke="#1a2d4a" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M21 32l7 7 15-15" stroke="#1a2d4a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </TrustIcon>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              color: '#1a2d4a',
              lineHeight: 1.3,
              margin: 0,
            }}>
              INSURED &amp;<br />BONDED
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrustIcon>
              <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                <rect x="6" y="22" width="52" height="36" rx="5" stroke="#1a2d4a" strokeWidth="2.5" />
                <path d="M22 22v-6a10 10 0 0120 0v6" stroke="#1a2d4a" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="32" cy="40" r="7" stroke="#1a2d4a" strokeWidth="2.5" />
                <path d="M28 40l3 3 5-5" stroke="#1a2d4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </TrustIcon>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              color: '#1a2d4a',
              lineHeight: 1.3,
              margin: 0,
            }}>
              PROFESSIONAL<br />EXPERIENCE
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrustIcon>
              <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                <rect x="4" y="14" width="40" height="30" rx="5" stroke="#1a2d4a" strokeWidth="2.5" />
                <path d="M44 26l14-8v22l-14-8V26z" stroke="#1a2d4a" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="18" cy="29" r="6" stroke="#1a2d4a" strokeWidth="2" />
                <circle cx="18" cy="29" r="2.5" fill="#1a2d4a" opacity="0.4" />
              </svg>
            </TrustIcon>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              color: '#1a2d4a',
              lineHeight: 1.3,
              margin: 0,
            }}>
              DAILY PHOTO &amp;<br />VIDEO UPDATES
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TrustIcon>
              <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
                <path d="M32 6C21 6 12 15 12 26c0 16 20 36 20 36s20-20 20-36C52 15 43 6 32 6z" stroke="#1a2d4a" strokeWidth="2.5" strokeLinejoin="round" />
                <ellipse cx="25" cy="22" rx="3.5" ry="4.5" fill="#1a2d4a" />
                <ellipse cx="32" cy="18" rx="3.5" ry="4.5" fill="#1a2d4a" />
                <ellipse cx="39" cy="22" rx="3.5" ry="4.5" fill="#1a2d4a" />
                <path d="M32 26c-6 0-10 4-10 9 0 3.5 2 5.5 5 7 1.5.7 3.5 1 5 1s3.5-.3 5-1c3-1.5 5-3.5 5-7 0-5-4-9-10-9z" fill="#1a2d4a" />
              </svg>
            </TrustIcon>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              color: '#1a2d4a',
              lineHeight: 1.3,
              margin: 0,
            }}>
              SERVING SAINT CLOUD<br />
              LAKE NONA • NARCOOSSEE<br />
              &amp; SURROUNDING AREAS
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{
        background: '#152638',
        color: 'white',
        padding: 'clamp(54px, 8vw, 84px) 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            color: '#e8a060',
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            margin: '0 0 8px',
          }}>
            their best life starts here
          </p>

          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 0.95,
            margin: '0 0 18px',
            letterSpacing: '0.04em',
          }}>
            READY FOR MORE THAN PET CARE?
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: 620,
            margin: '0 auto 28px',
          }}>
            Whether your dog is ready for a new adventure or needs loving, personalized care closer to home, Max & Me is here to help.
          </p>

          <div className="cta-buttons" style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/adventure-club" style={{
              background: '#e8631a',
              color: 'white',
              textDecoration: 'none',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              letterSpacing: '0.08em',
              padding: '14px 24px',
              borderRadius: 8,
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}>
              EXPLORE ADVENTURE CLUB
              <PawPrint className="w-4 h-4" />
            </a>

            <a href="/services" style={{
              border: '2px solid white',
              color: 'white',
              textDecoration: 'none',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              letterSpacing: '0.08em',
              padding: '12px 24px',
              borderRadius: 8,
              textTransform: 'uppercase',
            }}>
              EXPLORE PET CARE
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: '#0e1c30',
        padding: '18px 32px',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.4)',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
      }}>
        © 2026 MAX &amp; ME PET CARE · ALL RIGHTS RESERVED
      </footer>

      {/* RESPONSIVE */}
      <style>{`
        .nav-mobile-toggle { display: none; }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }

          .nav-mobile-toggle {
            display: flex !important;
          }

          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .cards-row {
            flex-direction: column !important;
          }

          .card-left {
            border-top-right-radius: 0 !important;
            border-bottom-left-radius: 100% 80px !important;
          }

          .card-right {
            border-top-left-radius: 0 !important;
          }

          .cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
        }
      `}</style>
    </div>
  )
}