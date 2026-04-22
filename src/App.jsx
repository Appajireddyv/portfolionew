import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { content } from './content'
import { Reveal } from './components/Reveal'
import { ThemeToggle } from './components/ThemeToggle'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? 'about')

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0.15, 0.25, 0.5] },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [sectionIds])

  return active
}

function App() {
  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), [])
  const active = useActiveSection(sectionIds)
  const headerRef = useRef(null)

  const onNavClick = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page">
      <header className="header" ref={headerRef}>
        <div className="header-inner">
          <a className="brand" href="#about" onClick={onNavClick('about')}>
            <span className="brand-mark" aria-hidden="true">
              {'</>'}
            </span>
            <span className="brand-text">{content.name}</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={onNavClick(s.id)}
                className={active === s.id ? 'nav-link is-active' : 'nav-link'}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <a className="button ghost" href={content.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button" href="#contact" onClick={onNavClick('contact')}>
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero" id="about">
          <div className="hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="kicker">{content.kicker}</p>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="title">
                  {content.role}
                  <span className="title-accent">.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="lead">{content.about}</p>
              </Reveal>

              <Reveal delay={180}>
                <div className="hero-cta">
                  <a className="button" href="#projects" onClick={onNavClick('projects')}>
                    View projects
                  </a>
                  <a className="button ghost" href={content.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="button ghost" href={content.links.resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="stats">
                  {content.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal className="hero-right" delay={140}>
              <div className="hero-right-inner">
                <div className="photoCard">
                  <div className="photoGlow" aria-hidden="true" />
                  <img className="photo" src={content.photo.src} alt={content.photo.alt} loading="lazy" />
                </div>

                <div className="card glass hero-mini">
                  <div className="card-row">
                    <span className="pill">{content.location}</span>
                    <span className="muted small">Available for work</span>
                  </div>
                  <div className="divider" />
                  <div className="mini-list">
                    {content.highlights.map((h) => (
                      <div key={h} className="mini-item">
                        <span className="dot" aria-hidden="true" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Section id="skills" title="Skills">
          <div className="grid-2">
            {content.skills.map((group) => (
              <Reveal key={group.title}>
                <div className="card">
                  <h3 className="card-h">{group.title}</h3>
                  <div className="chips">
                    {group.items.map((x) => (
                      <span key={x} className="chip">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="A few things I’ve built recently.">
          <div className="grid-3">
            {content.projects.map((p) => (
              <Reveal key={p.title}>
                <article className="card project">
                  <div className="project-top">
                    <h3 className="card-h">{p.title}</h3>
                    <span className="muted small">{p.year}</span>
                  </div>
                  <p className="muted">{p.description}</p>
                  <div className="chips tight">
                    {p.stack.map((x) => (
                      <span key={x} className="chip">
                        {x}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {p.links.demo && (
                      <a className="button small" href={p.links.demo} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    )}
                    {p.links.code && (
                      <a className="button small ghost" href={p.links.code} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid-2">
            {content.certifications.map((c) => (
              <Reveal key={c.title}>
                <div className="card">
                  <div className="row between">
                    <h3 className="card-h">{c.title}</h3>
                    <span className="muted small">{c.year}</span>
                  </div>
                  <p className="muted">{c.issuer}</p>
                  <div className="row gap">
                    {c.credential && (
                      <a className="button small ghost" href={c.credential} target="_blank" rel="noreferrer">
                        Credential
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="grid-2">
            {content.achievements.map((a) => (
              <Reveal key={a.title}>
                <div className="card">
                  <h3 className="card-h">{a.title}</h3>
                  <p className="muted">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="If you’re building something with Django + React, let’s talk."
        >
          <div className="grid-2">
            <Reveal>
              <div className="card">
                <h3 className="card-h">Quick links</h3>
                <div className="link-list">
                  <a className="link" href={`mailto:${content.contact.email}`}>
                    <span>Email</span>
                    <span className="muted">{content.contact.email}</span>
                  </a>
                  <a className="link" href={content.links.github} target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <span className="muted">{content.handle.github}</span>
                  </a>
                  <a className="link" href={content.links.linkedin} target="_blank" rel="noreferrer">
                    <span>LinkedIn</span>
                    <span className="muted">{content.handle.linkedin}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <form
                className="card"
                onSubmit={(e) => {
                  e.preventDefault()
                  const fd = new FormData(e.currentTarget)
                  const subject = encodeURIComponent(`Portfolio inquiry: ${content.name}`)
                  const body = encodeURIComponent(
                    `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\n${fd.get('message')}`,
                  )
                  window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${body}`
                }}
              >
                <h3 className="card-h">Send a message</h3>
                <div className="fields">
                  <label className="field">
                    <span className="muted small">Name</span>
                    <input name="name" placeholder="Your name" required />
                  </label>
                  <label className="field">
                    <span className="muted small">Email</span>
                    <input name="email" type="email" placeholder="you@example.com" required />
                  </label>
                  <label className="field">
                    <span className="muted small">Message</span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me what you’re building…"
                      required
                    />
                  </label>
                </div>
                <button className="button" type="submit">
                  Email me
                </button>
              </form>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span className="muted small">© {new Date().getFullYear()} {content.name}</span>
          <a className="muted small" href="#about" onClick={onNavClick('about')}>
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-head">
        <Reveal>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        {subtitle ? (
          <Reveal delay={60}>
            <p className="section-subtitle">{subtitle}</p>
          </Reveal>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default App
