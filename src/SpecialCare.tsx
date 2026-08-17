import { useState } from 'react'

const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ADVENTURE CLUB', to: '/adventure-club' },
  { label: 'PET CARE SERVICES', to: '/services' },
  { label: 'SPECIAL CARE', to: '/special-care' },
  { label: 'PRICING', to: '/pricing' },
  { label: 'ADVENTURE JOURNAL', to: '/adventure-journal' },
]

const services = [
  { title: 'PAWS OF PROGRESS', tagline: 'Every step forward matters.', body: 'Personalized support for dogs building confidence, practicing better everyday habits, or working toward calmer, happier routines.' },
  { title: 'PAWS OF COURAGE', tagline: 'Every step forward is a win.', body: 'Confidence-building experiences for nervous, cautious, or easily overwhelmed dogs, shaped around patience, trust, and positive experiences.' },
  { title: 'WAGS TO WELLNESS', tagline: 'Comfort, care, and peace of mind.', body: 'Specialized support for seniors, recovering pups, and dogs with medical needs, with thoughtful attention to comfort and routine.' },
]

export default function SpecialCare() {
  const [open,setOpen]=useState(false)
  return <div style={{minHeight:'100vh',background:'#f2ead8',fontFamily:"'Outfit', sans-serif"}}>
    <header style={{background:'#10263b',padding:'0 28px',color:'white'}}>
      <div style={{maxWidth:1280,margin:'0 auto',height:72,display:'flex',alignItems:'center',gap:26}}>
        <nav className="nav-desktop" style={{display:'flex',gap:26,flex:1}}>{NAV_LINKS.map(l=><a key={l.label} href={l.to} style={{color:'white',textDecoration:'none',fontFamily:"'Barlow Condensed', sans-serif",fontWeight:800,letterSpacing:'0.08em',borderBottom:l.label==='SPECIAL CARE'?'2px solid #e8631a':'2px solid transparent'}}>{l.label}</a>)}</nav>
        <button className="nav-mobile-toggle" onClick={()=>setOpen(!open)} style={{background:'none',border:0,color:'white',fontSize:28}}>☰</button>
      </div>
      {open&&<div style={{padding:'8px 0 22px'}}>{NAV_LINKS.map(l=><a key={l.label} href={l.to} style={{display:'block',color:'white',textDecoration:'none',padding:'8px 0',fontFamily:"'Barlow Condensed', sans-serif",fontWeight:800}}>{l.label}</a>)}</div>}
    </header>
    <section style={{background:'#10263b',color:'white',padding:'72px 28px 90px',textAlign:'center'}}>
      <p style={{fontFamily:"'Dancing Script', cursive",color:'#e8631a',fontSize:'2rem',margin:'0 0 8px'}}>extra support, still full of heart</p>
      <h1 style={{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:900,fontSize:'clamp(3rem,8vw,6rem)',margin:'0 0 18px',letterSpacing:'0.04em'}}>SPECIAL CARE</h1>
      <p style={{maxWidth:720,margin:'0 auto',fontSize:'1.1rem',lineHeight:1.7,color:'rgba(255,255,255,.8)'}}>Thoughtful, individualized care for dogs who need a little more support, patience, confidence-building, or comfort.</p>
    </section>
    <section style={{padding:'64px 28px 90px',maxWidth:1180,margin:'0 auto'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:24}} className="special-grid">{services.map((s,i)=><article key={s.title} style={{background:i===1?'#e8631a':'white',color:i===1?'white':'#152638',borderRadius:22,padding:'34px 28px',boxShadow:'0 10px 34px rgba(21,38,56,.12)'}}><div style={{fontSize:28,marginBottom:18}}>🐾</div><h2 style={{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:900,fontSize:'2rem',margin:'0 0 8px'}}>{s.title}</h2><p style={{fontFamily:"'Dancing Script', cursive",fontSize:'1.4rem',margin:'0 0 16px'}}>{s.tagline}</p><p style={{lineHeight:1.7,opacity:.82}}>{s.body}</p></article>)}</div>
    </section>
    <section style={{background:'#152638',color:'white',textAlign:'center',padding:'52px 24px'}}><h2 style={{fontFamily:"'Barlow Condensed', sans-serif",fontWeight:900,fontSize:'2.6rem',margin:'0 0 10px'}}>NOT SURE WHAT YOUR DOG NEEDS?</h2><p style={{margin:0,color:'rgba(255,255,255,.75)'}}>We can create a care plan around the dog in front of us.</p></section>
    <style>{`@media(max-width:800px){.nav-desktop{display:none!important}.nav-mobile-toggle{display:block!important}.special-grid{grid-template-columns:1fr!important}}@media(min-width:801px){.nav-mobile-toggle{display:none!important}}`}</style>
  </div>
}
