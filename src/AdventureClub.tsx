import { useState } from 'react'
import type { CSSProperties } from 'react'
import logoImg from '@/imports/CEDF61B2-EC8A-46E7-8F26-BD383FE52A0D.png'
import heroImg from '@/imports/1D393E05-6CAB-4B35-AD3F-355C6AF9D1CC.jpeg'
import maximusImg from '@/imports/IMG_1999.jpeg'

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

/* ─────────────────────────────────────────────────────────── */
/*  TORN PAPER TRANSITIONS                                      */
/* ─────────────────────────────────────────────────────────── */
function TornBottom({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'relative', height: 72, marginTop: -1, pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%', display: 'block' }}>
        <path d="M0,72 L0,24 C90,8 150,48 230,32 C310,16 370,52 460,36 C540,20 610,56 700,40 C780,24 850,60 940,44 C1020,28 1100,64 1180,48 C1260,32 1320,56 1380,44 C1410,38 1430,48 1440,46 L1440,72 Z" fill={fill} />
      </svg>
    </div>
  )
}

function TornTop({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'relative', height: 72, marginBottom: -1, pointerEvents: 'none' }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, width: '100%', height: '100%', display: 'block' }}>
        <path d="M0,0 L0,48 C90,64 150,24 230,40 C310,56 370,20 460,36 C540,52 610,16 700,32 C780,48 850,12 940,28 C1020,44 1100,8 1180,24 C1260,40 1320,16 1380,28 C1410,34 1430,24 1440,26 L1440,0 Z" fill={fill} />
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  ADVENTURE CARD                                              */
/* ─────────────────────────────────────────────────────────── */
function AdventureCard({
  photo, badgeIcon, title, tagline, body,
}: {
  photo: string
  badgeIcon: React.ReactNode
  title: string
  tagline: string
  body: string
}) {
  return (
    <div
      style={{
        flex: '1 1 190px', minWidth: 170, maxWidth: 250,
        borderRadius: 20, overflow: 'visible',
        display: 'flex', flexDirection: 'column',
        background: 'white',
        boxShadow: '0 6px 32px rgba(21,38,56,0.12)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-8px)'
        el.style.boxShadow = '0 18px 48px rgba(21,38,56,0.2)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = ''
        el.style.boxShadow = '0 6px 32px rgba(21,38,56,0.12)'
      }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', height: 190, borderRadius: '20px 20px 0 0', overflow: 'hidden', flexShrink: 0 }}>
        <img src={photo} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 45%, rgba(21,38,56,0.6) 100%)',
        }} />
        {/* Circle badge */}
        <div style={{
          position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)',
          width: 46, height: 46, borderRadius: '50%',
          background: 'linear-gradient(135deg, #e8631a, #c44e0f)',
          border: '3px solid white',
          boxShadow: '0 4px 14px rgba(232,99,26,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', zIndex: 2,
        }}>
          {badgeIcon}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '38px 20px 28px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: '1.1rem', letterSpacing: '0.06em',
          color: '#152638', margin: '0 0 6px',
        }}>{title}</h3>
        <p style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '0.95rem', color: '#e8631a',
          margin: '0 0 10px', lineHeight: 1.3,
        }}>{tagline}</p>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.82rem', color: '#5a6a7a',
          lineHeight: 1.6, margin: 0, flex: 1,
        }}>{body}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SERVICE CARD                                                */
/* ─────────────────────────────────────────────────────────── */
function ServiceCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1.5px solid rgba(232,99,26,0.28)',
      borderRadius: 14,
      padding: '24px 22px',
      display: 'flex', flexDirection: 'column', gap: 10,
      transition: 'background 0.2s, border-color 0.2s',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(232,99,26,0.09)'
        el.style.borderColor = 'rgba(232,99,26,0.6)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.04)'
        el.style.borderColor = 'rgba(232,99,26,0.28)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ color: '#e8631a', flexShrink: 0 }}>{icon}</div>
        <h4 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800, fontSize: '1.05rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'white', margin: 0,
        }}>{title}</h4>
      </div>
      <p style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)',
        lineHeight: 1.6, margin: 0,
      }}>{body}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  NAV                                                         */
/* ─────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ADVENTURE CLUB', to: '/adventure-club' },
  { label: 'PET CARE SERVICES', to: '/services' },
  { label: 'SPECIAL CARE', to: '/special-care' },
  { label: 'PRICING', to: '/pricing' },
  { label: 'ADVENTURE JOURNAL', to: '/adventure-journal' },
]

/* ─────────────────────────────────────────────────────────── */
/*  CARD PHOTOS                                                 */
/* ─────────────────────────────────────────────────────────── */
const PHOTOS = {
  sniffari: 'https://images.unsplash.com/photo-1781781116929-fab6046ee691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
  adventure: 'https://images.unsplash.com/photo-1761583779993-72933dad58fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
  courage: 'https://images.unsplash.com/photo-1540653767498-cd679b1faa23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
  backyard: 'https://images.unsplash.com/photo-1777313043406-828f8e533382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
  wheels: 'https://images.unsplash.com/photo-1758406681488-ada033b6b728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
}

/* ─────────────────────────────────────────────────────────── */
/*  PAGE                                                        */
/* ─────────────────────────────────────────────────────────── */
export default function AdventureClub() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div style={{ background: '#f2ead8', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>

      {/* ════════════════════════════════════════════
          HERO — richer adventure-poster treatment
      ════════════════════════════════════════════ */}
      <section className="ac-hero" style={{ position: 'relative', width: '100%', minHeight: 820, overflow: 'hidden', background: '#0b2032' }}>

        {/* Full-width hero photo */}
        <img
          src={heroImg}
          alt="Ramona and Maximus jumping together outdoors beneath a dramatic blue sky"
          className="ac-hero-image"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center',
          }}
        />

        {/* Cinematic navy overlay inspired by the homepage */}
        <div className="ac-hero-gradient" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(98deg, rgba(7,25,40,0.98) 0%, rgba(7,25,40,0.93) 31%, rgba(7,25,40,0.68) 48%, rgba(7,25,40,0.16) 70%, rgba(7,25,40,0.02) 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 150,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, transparent 100%)', zIndex: 2,
        }} />

        {/* Navigation */}
        <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
          <div style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.32) 75%, transparent 100%)',
            padding: '0 32px',
          }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', height: 68, gap: 28 }}>
              <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1 }}>
                {NAV_LINKS.map(link => (
                  <a key={link.label} href={link.to} style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.08em',
                    color: 'white', textDecoration: 'none',
                    textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                    borderBottom: link.label === 'ADVENTURE CLUB' ? '2px solid #e8631a' : '2px solid transparent',
                    paddingBottom: 2, display: 'flex', alignItems: 'center',
                    whiteSpace: 'nowrap' as const,
                  }}>{link.label}</a>
                ))}
              </nav>
<button onClick={() => setMobileOpen(!mobileOpen)} className="nav-mobile-toggle"
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginLeft: 'auto' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  {mobileOpen
                    ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                    : <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />}
                </svg>
              </button>
            </div>
          </div>
          {mobileOpen && (
            <div style={{ background: 'rgba(8,17,36,0.98)', padding: '18px 28px 30px' }}>
              {NAV_LINKS.map(link => (
                <div key={link.label} style={{ marginBottom: 16 }}>
                  <a href={link.to} onClick={() => setMobileOpen(false)} style={{
                    color: link.label === 'ADVENTURE CLUB' ? '#e8631a' : 'white',
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: '1.15rem', letterSpacing: '0.1em', textDecoration: 'none',
                  }}>{link.label}</a>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Brand logo */}
        <a href="/" className="ac-hero-logo" style={{
          position: 'absolute', top: 84, left: 'clamp(28px, 4.5vw, 72px)', zIndex: 10,
          textDecoration: 'none', display: 'block',
        }}>
          <img src={logoImg} alt="Max & Me Pet Care" style={{ height: 96, width: 'auto', display: 'block', mixBlendMode: 'screen' }} />
        </a>

        {/* Hero copy */}
        <div className="ac-hero-copy" style={{
          position: 'relative', zIndex: 4,
          minHeight: 820,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingTop: 176, paddingBottom: 118,
          paddingLeft: 'clamp(28px, 4.5vw, 72px)',
          paddingRight: 'clamp(24px, 4vw, 54px)',
          maxWidth: 690,
        }}>
          <div className="ac-hero-brush" style={{
            display: 'inline-block', alignSelf: 'flex-start',
            background: '#d95b17',
            padding: '13px 28px 16px',
            marginBottom: 20,
            transform: 'rotate(-1deg)',
            clipPath: 'polygon(0 8%, 5% 0, 97% 4%, 100% 90%, 94% 100%, 3% 94%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}>
            <h1 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(3.2rem, 6vw, 6.3rem)',
              lineHeight: 0.92, color: '#fff8ec', margin: 0,
              letterSpacing: '0.025em', textShadow: '0 2px 2px rgba(0,0,0,0.18)',
            }}>
              CANINE ADVENTURE<br />CLUB
            </h1>
          </div>

          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
            color: '#fff5e3', margin: '0 0 14px', lineHeight: 1.15,
            textShadow: '0 2px 8px rgba(0,0,0,0.35)',
          }}>
            Beyond the walk. Into a life of adventure.
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'clamp(0.96rem, 1.4vw, 1.08rem)',
            lineHeight: 1.7, maxWidth: 520, margin: '0 0 18px',
            textShadow: '0 1px 6px rgba(0,0,0,0.35)',
          }}>
            The Canine Adventure Club is more than a walk. It is a lifestyle of exploration, enrichment, confidence-building, and joyful experiences tailored to every paw and personality.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <PawPrint size={22} color="#fff4df" />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', letterSpacing: '0.13em',
              color: '#e8631a', textTransform: 'uppercase',
            }}>EXPLORE. PLAY. CONNECT.</span>
            <PawPrint size={22} color="#fff4df" />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="#choose-adventure" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#f5ead5', color: '#10293d',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
              fontSize: '1rem', letterSpacing: '0.1em',
              padding: '14px 26px', borderRadius: 7, textDecoration: 'none',
              boxShadow: '0 5px 18px rgba(0,0,0,0.18)',
            }}>
              EXPLORE THE CLUB <PawPrint size={18} color="#10293d" />
            </a>
            <a href="#solo-adventures" style={{
              display: 'inline-flex', alignItems: 'center',
              color: 'white', border: '1.5px solid rgba(255,255,255,0.58)',
              background: 'rgba(5,24,39,0.32)',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: '0.98rem', letterSpacing: '0.08em',
              padding: '13px 22px', borderRadius: 7, textDecoration: 'none',
            }}>
              PACK + SOLO OPTIONS →
            </a>
          </div>
        </div>
      </section>

      {/* PERFECT FOR — paper card overlapping the hero */}
      <section style={{ background: '#f2ead8', position: 'relative', zIndex: 8, padding: '0 clamp(18px, 4vw, 52px)' }}>
        <div className="ac-perfect-card" style={{
          position: 'relative', maxWidth: 1120, margin: '-48px auto 24px',
          background: '#fff9ed', border: '1px solid rgba(21,38,56,0.1)',
          borderRadius: 18, boxShadow: '0 12px 40px rgba(21,38,56,0.16)',
          padding: '34px clamp(24px, 4vw, 52px) 30px',
        }}>
          <div style={{
            position: 'absolute', width: 92, height: 24, top: -12, left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
            background: 'rgba(210,187,143,0.7)', border: '1px solid rgba(160,130,90,0.2)',
          }} />
          <div className="ac-perfect-layout" style={{ display: 'grid', gridTemplateColumns: '230px 1fr', gap: 34, alignItems: 'center' }}>
            <div style={{
              background: '#d95b17', color: '#fff8ec',
              padding: '12px 18px', transform: 'rotate(-1deg)',
              clipPath: 'polygon(0 7%, 7% 0, 96% 4%, 100% 88%, 92% 100%, 3% 94%)',
              textAlign: 'center',
            }}>
              <span style={{
                fontFamily: "'Anton', sans-serif", fontSize: '1.55rem', letterSpacing: '0.04em',
              }}>PERFECT FOR:</span>
            </div>
            <div className="ac-perfect-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px 22px' }}>
              {[
                'High-energy pups',
                'Shy or nervous dogs',
                'Confidence building',
                'Mental enrichment',
                'Dogs of all ages',
                'Solo or pack adventures',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 9, color: '#152638' }}>
                  <PawPrint size={17} color="#152638" />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.02em' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CHOOSE YOUR ADVENTURE — CREAM
      ════════════════════════════════════════════ */}
      <section id="choose-adventure" style={{ background: '#f2ead8', position: 'relative', paddingBottom: 0 }}>
        <div style={{ padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 72px) 0' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
              color: '#9b3f12', margin: '0 0 6px',
            }}>
              find the right adventure for your dog
            </p>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: '#152638', margin: '0 0 20px',
              letterSpacing: '0.04em',
            }}>
              CHOOSE YOUR ADVENTURE
            </h2>
            <div style={{ width: 72, height: 4, background: '#e8631a', margin: '0 auto 36px', borderRadius: 2 }} />

            {/* Pack + Solo intro */}
            <div style={{
              maxWidth: 720, margin: '0 auto 52px',
              background: 'white',
              borderRadius: 16,
              padding: '28px 36px',
              boxShadow: '0 4px 24px rgba(21,38,56,0.08)',
              borderLeft: '5px solid #e8631a',
              textAlign: 'left',
            }}>
              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800, fontSize: '1.15rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#152638', margin: '0 0 10px',
              }}>
                PACK ADVENTURES + SOLO OUTINGS
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.96rem', color: '#4a5a6a',
                lineHeight: 1.75, margin: 0,
              }}>
                Every dog is different. Adventures can be enjoyed with a carefully matched small pack or as a personalized one-on-one outing tailored entirely to your dog's personality, comfort level, interests, energy, and needs.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 24,
            justifyContent: 'center', marginBottom: 52,
          }}>
            <AdventureCard
              photo={PHOTOS.sniffari}
              badgeIcon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/><path d="M8 11c0-1.5 1-2 2-2s2 1 2 2"/></svg>}
              title="SNIFFARI"
              tagline="Our version of a dog walk."
              body="A walk with more purpose, more enrichment, and a whole lot more sniffing. Offered as pack outings or personalized solo adventures."
            />
            <AdventureCard
              photo={PHOTOS.adventure}
              badgeIcon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M3 17l4-8 4 4 4-6 4 10"/><path d="M3 21h18"/></svg>}
              title="ADVENTURE OUTINGS"
              tagline="New places. Big adventures. Tail-wagging memories."
              body="Field trips, parks, waterfronts, nature trails, and new destinations. Available as small-pack or personalized solo outings."
            />
            <AdventureCard
              photo={PHOTOS.courage}
              badgeIcon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 3.998 1 7.562 1c2.114 0 3.972 1.048 5.188 2.687a6.354 6.354 0 0 1 5.188-2.687C21.006 1 24 3.518 24 7.191c0 4.105-5.371 8.863-11 14.402z"/></svg>}
              title="PAWS OF COURAGE"
              tagline="Every step forward is a win."
              body="Confidence-building outings for nervous, cautious, or easily overwhelmed pups — often best as one-on-one solo adventures with extra patience and care."
            />
            <AdventureCard
              photo={PHOTOS.backyard}
              badgeIcon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9l6 6M15 9l-6 6"/></svg>}
              title="BACKYARD ADVENTURES"
              tagline="Enrichment right at home."
              body="Games, exploration, enrichment activities, and outdoor fun for dogs who thrive in familiar surroundings or simply deserve an amazing day without leaving home."
            />
            <AdventureCard
              photo={PHOTOS.wheels}
              badgeIcon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8l4 4-4 4"/></svg>}
              title="WHEELS OF WONDER"
              tagline="Every dog explores."
              body="Personalized outings for dogs with mobility challenges — because every dog deserves fresh air, exploration, stimulation, connection, and joy."
            />
          </div>

          {/* NOT A PACK DOG callout */}
          <div id="solo-adventures" style={{
            maxWidth: 680, margin: '0 auto',
            background: 'linear-gradient(135deg, #152638 0%, #1e3a52 100%)',
            borderRadius: 20, padding: '32px 40px',
            display: 'flex', alignItems: 'flex-start', gap: 24,
            boxShadow: '0 8px 40px rgba(21,38,56,0.18)',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
              background: 'rgba(232,99,26,0.18)', border: '2px solid rgba(232,99,26,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginTop: 2,
            }}>
              <PawPrint size={26} color="#e8631a" />
            </div>
            <div>
              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                color: 'white', margin: '0 0 10px',
                letterSpacing: '0.04em',
              }}>
                NOT A PACK DOG? NO PROBLEM.
              </h3>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.72, margin: 0,
              }}>
                Some dogs shine brightest one-on-one. Solo adventures give your dog the same enrichment, exploration, movement, and fun — with an experience created entirely around <em>them</em>.
              </p>
            </div>
          </div>

          {/* ADVENTURE EXPERIENCE — richer camp-style middle section */}
          <div className="ac-experience-wrap" style={{ maxWidth: 1120, margin: '56px auto 0' }}>
            <div className="ac-experience-grid" style={{
              display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 18, alignItems: 'stretch',
            }}>
              {/* What your pup will enjoy */}
              <div style={{
                background: '#10293d', borderRadius: 22, padding: '34px clamp(24px, 3.5vw, 44px)',
                boxShadow: '0 14px 42px rgba(21,38,56,0.18)',
                border: '1px solid rgba(232,99,26,0.28)', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', right: -34, bottom: -42, opacity: 0.045, transform: 'rotate(12deg)' }}>
                  <PawPrint size={180} color="white" />
                </div>
                <p style={{
                  fontFamily: "'Dancing Script', cursive", fontSize: '1.35rem', color: '#e8631a',
                  margin: '0 0 4px', position: 'relative', zIndex: 1,
                }}>built for curious noses & happy hearts</p>
                <h3 style={{
                  fontFamily: "'Anton', sans-serif", color: 'white', margin: '0 0 26px',
                  fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', letterSpacing: '0.035em', position: 'relative', zIndex: 1,
                }}>WHAT YOUR PUP WILL ENJOY</h3>
                <div className="ac-enjoy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 28px', position: 'relative', zIndex: 1 }}>
                  {[
                    ['SCENIC ADVENTURES', 'Trails, fields, lakes, parks, and more.', 'tree'],
                    ['NEW SNIFFS & SIGHTS', 'Fresh places, interesting smells, and new experiences.', 'camera'],
                    ['CONFIDENCE & CONNECTION', 'Positive experiences that build trust and joy.', 'heart'],
                    ['MENTAL + PHYSICAL ENRICHMENT', 'Activities that engage both body and mind.', 'paw'],
                    ['SPLASH, PLAY & FUN', 'Movement, games, water play, and tail-wagging moments.', 'drop'],
                    ['TAILORED CARE', 'Every outing is shaped around your dog’s individual needs.', 'leaf'],
                  ].map(([title, body, icon]) => (
                    <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                        border: '2px solid rgba(232,99,26,0.75)', color: '#f5ead5',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {icon === 'paw' ? <PawPrint size={22} color="#f5ead5" /> :
                          icon === 'heart' ? <span style={{ fontSize: 22 }}>♡</span> :
                          icon === 'tree' ? <span style={{ fontSize: 21 }}>♠</span> :
                          icon === 'camera' ? <span style={{ fontSize: 19 }}>▣</span> :
                          icon === 'drop' ? <span style={{ fontSize: 22 }}>◒</span> :
                          <span style={{ fontSize: 22 }}>◢</span>}
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: 'white', letterSpacing: '0.06em', fontSize: '1rem' }}>{title}</div>
                        <div style={{ fontFamily: "'Outfit', sans-serif", color: 'rgba(255,255,255,0.68)', lineHeight: 1.5, fontSize: '0.82rem', marginTop: 4 }}>{body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Club perks */}
              <div style={{
                background: 'linear-gradient(145deg, #c85116 0%, #9d3c10 100%)', borderRadius: 22,
                padding: '34px clamp(24px, 3vw, 38px)', boxShadow: '0 14px 42px rgba(124,53,16,0.2)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'repeating-linear-gradient(8deg, transparent 0 18px, rgba(255,255,255,0.14) 19px 20px)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.35rem', color: '#ffe5bf', margin: '0 0 4px' }}>the good stuff</p>
                  <h3 style={{ fontFamily: "'Anton', sans-serif", color: 'white', margin: '0 0 26px', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', letterSpacing: '0.04em' }}>CLUB PERKS</h3>
                  {[
                    ['ADVENTURE UPDATES', 'Photos and updates so you can share in the fun.'],
                    ['PERSONALIZED PLANS', 'Outings shaped around your dog’s personality, comfort, and energy.'],
                    ['PACK + SOLO FLEXIBILITY', 'The right experience whether your dog loves friends or one-on-one time.'],
                  ].map(([title, body]) => (
                    <div key={title} style={{ display: 'flex', gap: 14, marginBottom: 20, alignItems: 'flex-start' }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: '50%', border: '2px solid rgba(255,245,227,0.75)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}><PawPrint size={20} color="#fff5e3" /></div>
                      <div>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: 'white', letterSpacing: '0.07em', fontSize: '1.02rem' }}>{title}</div>
                        <div style={{ fontFamily: "'Outfit', sans-serif", color: 'rgba(255,255,255,0.78)', lineHeight: 1.5, fontSize: '0.83rem', marginTop: 4 }}>{body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wood-sign style adventure mantra */}
            <div className="ac-wood-row" style={{ display: 'flex', justifyContent: 'center', gap: 10, margin: '18px auto 0', flexWrap: 'wrap' }}>
              {['RUN HARD.', 'RUN FAST.', 'RUN FREE.'].map((label, i) => (
                <div key={label} style={{
                  background: 'linear-gradient(180deg, #a96b35 0%, #7b4926 100%)', color: '#10293d',
                  minWidth: 180, padding: '12px 28px', textAlign: 'center',
                  fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: '1.55rem',
                  borderRadius: 4, transform: `rotate(${i === 0 ? -1.2 : i === 1 ? 0.7 : -0.5}deg)`,
                  boxShadow: '0 5px 14px rgba(64,38,22,0.25)', border: '1px solid rgba(72,40,20,0.45)',
                  textShadow: '0 1px rgba(255,255,255,0.16)',
                }}>{label} <span style={{ color: '#e8631a' }}>🐾</span></div>
              ))}
            </div>
          </div>
        </div>

        <TornBottom fill="#152638" />
      </section>

      {/* ════════════════════════════════════════════
          MORE WAYS WE CAN HELP — DARK NAVY
      ════════════════════════════════════════════ */}
      <section style={{ background: '#152638', position: 'relative' }}>

        {/* Subtle paw watermarks */}
        <div style={{ position: 'absolute', top: '8%', left: '-2%', opacity: 0.04, pointerEvents: 'none', transform: 'rotate(-18deg)' }}>
          <PawPrint size={180} color="white" />
        </div>
        <div style={{ position: 'absolute', bottom: '12%', right: '-1%', opacity: 0.035, pointerEvents: 'none', transform: 'rotate(14deg)' }}>
          <PawPrint size={150} color="white" />
        </div>

        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(60px, 7vw, 96px) clamp(20px, 5vw, 80px)' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
              color: '#e8631a', margin: '0 0 6px',
            }}>
              beyond the trail
            </p>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              color: 'white', margin: '0 0 20px',
              letterSpacing: '0.04em',
            }}>
              MORE WAYS WE CAN HELP
            </h2>
            <div style={{ width: 72, height: 4, background: '#e8631a', margin: '0 auto', borderRadius: 2 }} />
          </div>

          {/* Service cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 18,
            maxWidth: 1000, margin: '0 auto 96px',
          }}>
            <ServiceCard
              icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>}
              title="Staycations"
              body="In-home care where love stays local."
            />
            <ServiceCard
              icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L3 6.27A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l8 4.62a2 2 0 0 0 2 0l8-4.62A2 2 0 0 0 21 16z"/></svg>}
              title="Petcations"
              body="Cozy boarding and vacation-style care in a loving home."
            />
            <ServiceCard
              icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>}
              title="Pawsonal Assistant"
              body="Transportation, errands, baths, nail trims, and more."
            />
            <ServiceCard
              icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.27c1.33-1.06 2.83-1.27 4.18-1.27C10 18 12 19.27 14 19c2.86-.39 5-2.84 5-5.83C19 10.07 17 8 17 8z"/></svg>}
              title="Clean Paws Tidy Turf"
              body="Poop scooping for a clean, safe yard."
            />
            <ServiceCard
              icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zM2 20c0-4 4-7 10-7s10 3 10 7"/></svg>}
              title="Top to Tail Spa Care"
              body="Baths and light grooming to keep dogs feeling fresh."
            />
            <ServiceCard
              icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
              title="And More!"
              body="Just ask. If it helps your dog, I'm here."
            />
          </div>

          {/* ── Bottom story row ── */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 56,
            alignItems: 'center', justifyContent: 'center',
            maxWidth: 1100, margin: '0 auto',
          }}>

            {/* Left: Maximus photo + quote */}
            <div style={{ flex: '1 1 300px', maxWidth: 460 }}>
              <div style={{
                borderRadius: 20, overflow: 'hidden', marginBottom: 32,
                boxShadow: '0 16px 56px rgba(0,0,0,0.4)',
                border: '3px solid rgba(232,99,26,0.25)',
              }}>
                <img
                  src={maximusImg}
                  alt="Maximus running joyfully toward the camera on a sunlit forest trail"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/3' }}
                />
              </div>

              {/* Quote */}
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <PawPrint size={28} color="#e8631a" style={{ marginTop: 4, flexShrink: 0 }} />
                <blockquote style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                  color: 'rgba(255,255,255,0.92)', lineHeight: 1.55,
                  margin: 0,
                }}>
                  "We don't just care for dogs. We open their world to new places, new friends, new experiences, and a life worth wagging about."
                </blockquote>
              </div>
            </div>

            {/* Right: CTA */}
            <div style={{
              flex: '1 1 280px', maxWidth: 400,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center',
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(232,99,26,0.12)',
                border: '2px solid rgba(232,99,26,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28,
              }}>
                <PawPrint size={40} color="#e8631a" />
              </div>

              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                color: 'white', margin: '0 0 14px',
                lineHeight: 1.05, letterSpacing: '0.03em',
              }}>
                READY TO GIVE YOUR DOG THE BEST DAY EVER?
              </h3>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7, margin: '0 0 32px',
              }}>
                Whether they adventure with friends or prefer the trail all to themselves, let's create their next adventure together.
              </p>

              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'linear-gradient(135deg, #e8631a, #c44e0f)',
                color: 'white',
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: '1.1rem', letterSpacing: '0.12em',
                padding: '18px 44px', borderRadius: 8,
                textDecoration: 'none', textTransform: 'uppercase',
                boxShadow: '0 6px 28px rgba(232,99,26,0.5)',
                whiteSpace: 'nowrap' as const,
              }}>
                <PawPrint size={22} /> BOOK YOUR ADVENTURE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile-toggle { display: none !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
          .ac-hero { min-height: 760px !important; }
          .ac-hero-copy { min-height: 760px !important; max-width: 620px !important; padding-top: 178px !important; }
          .ac-perfect-layout { grid-template-columns: 1fr !important; gap: 24px !important; }
          .ac-perfect-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ac-experience-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ac-hero { min-height: 850px !important; }
          .ac-hero-image { object-position: 58% center !important; }
          .ac-hero-gradient { background: linear-gradient(180deg, rgba(7,25,40,0.66) 0%, rgba(7,25,40,0.9) 45%, rgba(7,25,40,0.97) 100%) !important; }
          .ac-hero-logo { top: 80px !important; left: 24px !important; }
          .ac-hero-logo img { height: 76px !important; }
          .ac-hero-copy { min-height: 850px !important; max-width: none !important; padding: 190px 24px 92px !important; justify-content: flex-end !important; }
          .ac-hero-brush { padding: 10px 18px 13px !important; margin-bottom: 16px !important; }
          .ac-perfect-card { margin-top: -36px !important; }
          .ac-perfect-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .ac-enjoy-grid { grid-template-columns: 1fr !important; }
          .ac-wood-row { gap: 8px !important; }
          .ac-wood-row > div { width: 100% !important; min-width: 0 !important; }
        }
      `}</style>
    </div>
  )
}
