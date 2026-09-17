"use client"

import { useState } from "react"
import { ArrowUpRight, Copy, ExternalLink, Menu, X, Zap } from "lucide-react"

const issuer = "GDM2H5BOBSX42VI2MSA75LPX7PQZON5BKZGN4IQQGPHQE5AVLYB5UXRP"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const copyIssuer = async () => {
    await navigator.clipboard.writeText(issuer)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="XEVA home"><span className="brand-mark"><i /></span><span>XEVA</span></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why XEVA</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
          <a className="nav-cta" href="#get-xeva" onClick={() => setMenuOpen(false)}>Get XEVA <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Built on Stellar <span className="eyebrow-line" /> Asset live</div>
          <h1>Move value.<br /><em>Move forward.</em></h1>
          <p className="hero-lede">XEVA is a digital asset for a world that does not wait. Fast, borderless, and built for people who believe value should move as freely as ideas.</p>
          <div className="hero-actions"><a className="button button-primary" href="#get-xeva">Explore XEVA <ArrowUpRight size={17} /></a><a className="text-link" href="#how">Learn the basics <span>↓</span></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>V</span><span>E</span><span>X</span></div><div><strong>12,480+</strong><small>early believers and counting</small></div></div>
        </div>
        <div className="orb-stage" aria-label="Abstract XEVA asset visualization">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="orb-glow" /><div className="orb"><div className="orb-inner"><span>XE</span><small>01</small></div></div>
          <span className="float-label label-top">STELLAR / 01</span><span className="float-label label-bottom">FAST &amp; BORDERLESS</span>
          <div className="coordinate">43° 18&apos; 12.4&quot; N<br />7° 03&apos; 44.8&quot; E</div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>STELLAR NATIVE</span><b>✦</b><span>7 DECIMALS</span><b>✦</b><span>COMMUNITY LED</span><b>✦</b><span>LOW FRICTION</span><b>✦</b><span>STELLAR NATIVE</span><b>✦</b><span>7 DECIMALS</span></div></section>

      <section className="intro shell" id="why"><div className="section-kicker">01 / The signal</div><div><h2>A better kind of<br /><span>digital asset.</span></h2><p>XEVA lives on the Stellar network, where transactions settle in seconds instead of days. No gatekeepers. No geographic friction. Just a more open way to move.</p><a className="arrow-link" href="#how">See what makes it different <ArrowUpRight size={16} /></a></div></section>

      <section className="feature-grid shell" id="how"><article className="feature-card feature-dark"><div className="card-number">01</div><Zap className="feature-icon" size={24} /><h3>Speed<br /><span>as a standard.</span></h3><p>XEVA moves on Stellar, with near-instant settlement and fees designed to stay out of the way.</p><div className="card-line" /></article><article className="feature-card feature-lilac"><div className="card-number">02</div><div className="ring-icon">◎</div><h3>Value without<br /><span>borders.</span></h3><p>Send, hold, and discover new possibilities wherever you are. XEVA is built for the open internet.</p><div className="card-line" /></article><article className="feature-card feature-orange"><div className="card-number">03</div><div className="spark-icon">✦</div><h3>Community<br /><span>in the loop.</span></h3><p>A transparent asset with a growing community at the center of every next move.</p><div className="card-line" /></article></section>

      <section className="manifesto shell"><div className="manifesto-mark">XE<br />VA</div><div><div className="section-kicker">02 / The manifesto</div><h2>Not here to<br /><em>follow.</em></h2><p>We are building the connective layer between ambition and action. One that feels clear, useful, and distinctly human.</p></div><div className="manifesto-side">/ 2024—∞<br /><span>Always in motion.</span></div></section>

      <section className="get-section shell" id="get-xeva"><div className="get-panel"><div><div className="section-kicker">03 / Your next move</div><h2>Ready when<br /><em>you are.</em></h2><p>Get to know XEVA and join the movement toward more accessible value.</p></div><div className="get-actions"><a className="button button-light" href="https://stellar.expert/explorer/public/asset/XEVA-GDM2H5BOBSX42VI2MSA75LPX7PQZON5BKZGN4IQQGPHQE5AVLYB5UXRP" target="_blank" rel="noreferrer">View on Stellar Expert <ExternalLink size={16} /></a><button className="issuer-button" onClick={copyIssuer}><span>{copied ? "Issuer copied" : "Copy issuer address"}</span>{copied ? "✓" : <Copy size={15} />}</button></div></div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark"><i /></span><span>XEVA</span></a><p>Designed for forward motion.</p><span className="footer-meta">XEVA / STELLAR ASSET / 2024—∞</span></footer>
    </main>
  )
}
