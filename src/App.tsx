import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, Phone, X,
  BrainCircuit, CloudCog, Code2, Database, Layers3, ShieldCheck, Users
} from 'lucide-react'
import { useState } from 'react'
import { experience, profile, projects, skillGroups } from './data/profile'

const navItems = ['about', 'experience', 'skills', 'projects', 'architecture', 'contact']

function App() {
  const [open, setOpen] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <div className="app-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <button type="button" className="brand" onClick={() => setShowProfileModal(true)} aria-label="View profile photo">
            <img className="brand-mark" src={profile.photo} alt={profile.name} />
            <span>{profile.name}</span>
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <a href={`#${item}`} key={item}>{item[0].toUpperCase() + item.slice(1)}</a>
            ))}
            <a className="button button-small" href={profile.cv} download>
              <Download size={16} /> Download CV
            </a>
          </div>

          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="mobile-nav container">
            {navItems.map((item) => (
              <a href={`#${item}`} key={item} onClick={() => setOpen(false)}>
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a className="button" href={profile.cv} download onClick={() => setOpen(false)}>
              <Download size={16} /> Download CV
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="kicker">Senior Full-Stack Software Engineer · London, UK</div>
              <h1>I build software that solves difficult business problems.</h1>
              <p className="hero-subtitle">
                C#/.NET, Angular, React, Azure, AI-enabled engineering, distributed systems and SaaS architecture.
              </p>
              <p className="hero-description">
                {profile.intro} I work at the intersection of software engineering, architecture and product problem-solving.
              </p>
              <p className="hero-description hero-quote">
                I’m most comfortable when the problem is not simply “build this screen,” but “solve a complicated business problem with multiple systems, constraints and real operational pressure.”
              </p>
              <div className="hero-actions">
                <a className="button" href="#projects">View my work <ArrowRight size={18} /></a>
                <a className="button button-ghost" href={profile.cv} download><Download size={18} /> Download CV</a>
              </div>
              <div className="social-row">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
                <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
              </div>
            </div>

            <div className="hero-visual hero-visual-abstract" aria-label="Architecture overview">
              <div className="visual-badge">AI + Systems</div>
              <div className="visual-card visual-main">
                <span>React / Angular</span>
                <strong>Product experiences</strong>
              </div>
              <div className="visual-card visual-side">
                <span>.NET APIs</span>
                <strong>Secure services</strong>
              </div>
              <div className="visual-card visual-bottom">
                <span>Azure + Data</span>
                <strong>Cloud delivery</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <span className="section-label">About</span>
              <h2>Full-stack ownership, from product problem to production.</h2>
            </div>
            <div className="prose-card">
              <p>
                I work across the complete engineering lifecycle—from problem understanding and architecture through implementation,
                testing, deployment and production support. My role as a senior engineer is not simply to turn tickets into features,
                but to understand the real business problem and translate it into a resilient system people can trust.
              </p>
              <p>
                My recent work combines enterprise .NET engineering with production AI, real-time streaming, secure application integration,
                optimisation and cloud delivery. I think carefully about service boundaries, authentication, authorisation, data ownership,
                operational constraints and failure modes before choosing the technical solution.
              </p>
              <div className="stats">
                <div><strong>12+</strong><span>Years in software engineering</span></div>
                <div><strong>Full Stack</strong><span>Frontend → Backend → Cloud</span></div>
                <div><strong>AI + SaaS</strong><span>Production-grade engineering</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <span className="section-label">Experience</span>
            <h2>Enterprise software, technical leadership and modernisation.</h2>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={`${job.company}-${job.period}`}>
                  <div className="timeline-rail"><span /></div>
                  <div className="timeline-content">
                    <div className="job-head">
                      <div>
                        <h3>{job.role}</h3>
                        <p>{job.company}</p>
                      </div>
                      <span className="period">{job.period}</span>
                    </div>
                    <ul>
                      {job.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <div className="chip-row">
                      {job.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <span className="section-label">Technical Skills</span>
            <h2>Strong Microsoft engineering foundation with modern AI and cloud capability.</h2>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chip-row">
                    {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <span className="section-label">Featured Work</span>
            <h2>Selected engineering problems and systems.</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <span className="eyebrow">{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.highlights.map((item) => <span className="chip" key={item}>{item}</span>)}
                  </div>
                  {project.link && (
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                      View on GitHub <ArrowRight size={16} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="section">
          <div className="container architecture-grid">
            <div>
              <span className="section-label">Architecture</span>
              <h2>I design beyond the UI.</h2>
              <p className="lead">
                My work spans browser clients, secure .NET APIs, distributed services, cloud infrastructure,
                AI workflows, data platforms and production operations.
              </p>
              <div className="principles">
                <div><ShieldCheck /><span><strong>Secure by design</strong><small>JWT validation, scope enforcement, guardrails</small></span></div>
                <div><Users /><span><strong>Team engineering</strong><small>Reviews, mentoring, technical decisions</small></span></div>
                <div><Database /><span><strong>Data aware</strong><small>SQL Server, analytics, safe data access</small></span></div>
              </div>
            </div>

            <div className="architecture-map">
              <div className="arch-node">React / Angular</div>
              <div className="arch-line">↓</div>
              <div className="arch-node">ASP.NET Core API Gateway</div>
              <div className="arch-line">↓</div>
              <div className="arch-split">
                <div className="arch-node">Domain Services</div>
                <div className="arch-node">MCP / AI Workflows</div>
              </div>
              <div className="arch-line">↓</div>
              <div className="arch-split">
                <div className="arch-node">SQL / Analytics</div>
                <div className="arch-node">Azure Services</div>
              </div>
              <div className="arch-foot">Authentication · Validation · Monitoring · Logging · CI/CD</div>
            </div>
          </div>
        </section>

        <section className="section philosophy">
          <div className="container">
            <span className="section-label">Engineering Philosophy</span>
            <h2>How I build software.</h2>
            <div className="philosophy-grid">
              {[
                ['Understand before designing', 'Before writing code, I want to understand the business problem, user intent, constraints and failure modes.'],
                ['Prefer simple systems', 'I value clean abstractions, but not complexity for its own sake. Maintainable systems usually outperform clever ones.'],
                ['Design for failure', 'Production systems fail. I design with timeouts, cancellation, security boundaries, observability and resilience in mind.'],
                ['Make systems observable', 'Monitoring, logging and clear service boundaries are part of the product, not an afterthought.'],
                ['Keep learning', 'Technology changes constantly; strong engineering foundations help me adapt without losing judgement.'],
                ['Technical leadership', 'I enjoy helping teams make better decisions through architecture, reviews and hands-on engineering leadership.'],
              ].map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div>
              <span className="section-label">Contact</span>
              <h2>Let’s build something meaningful.</h2>
              <p>
                I’m interested in senior full-stack and technical leadership opportunities where I can contribute
                to challenging products, architecture and engineering teams.
              </p>
              <p className="location"><MapPin size={17} /> {profile.location}</p>
            </div>
            <div className="contact-actions">
              <a className="button" href={`mailto:${profile.email}`}><Mail size={18} /> Email me</a>
              <a
                className="button button-ghost phone-toggle"
                href={showPhone ? `tel:${profile.phone}` : '#contact'}
                onClick={() => setShowPhone((current) => !current)}
              >
                <Phone size={18} /> {showPhone ? profile.phone : 'Call me'}
              </a>
              <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a className="button button-ghost" href={profile.cv} download><Download size={18} /> Download CV</a>
            </div>
          </div>
        </section>
      </main>

      {showProfileModal && (
        <div className="profile-modal" onClick={() => setShowProfileModal(false)}>
          <div className="profile-modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="profile-modal-close" onClick={() => setShowProfileModal(false)} aria-label="Close profile photo">
              ×
            </button>
            <img src={profile.photo} alt={profile.name} />
          </div>
        </div>
      )}

      <footer>
        <div className="container footer-inner">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <span>Built with React, TypeScript & Vite · GitHub Pages ready.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
