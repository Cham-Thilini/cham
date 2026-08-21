import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, Phone, X,
  BrainCircuit, CloudCog, Code2, Database, Layers3, ShieldCheck, Users
} from 'lucide-react'
import { useState } from 'react'
import { experience, profile, projects, skillGroups } from './data/profile'

const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'architecture', 'contact']

function App() {
  const [open, setOpen] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({})

  const toggleJob = (company: string) => {
    setExpandedJobs((current) => ({
      ...current,
      [company]: !current[company],
    }))
  }

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
              <a href={`#${item}`} key={item}>{item === 'home' ? 'Home' : item[0].toUpperCase() + item.slice(1)}</a>
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
                {item === 'home' ? 'Home' : item[0].toUpperCase() + item.slice(1)}
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
              <h1>Building Scalable Software for Complex Business Problems</h1>
              <p className="hero-subtitle">Senior Full-Stack Software Engineer</p>
              <p className="hero-description">
                Senior software engineer specialising in .NET, C#, React, Angular, Azure, distributed systems and AI-enabled applications.
                Experienced in designing and delivering scalable enterprise platforms across fintech, education technology, analytics and optimisation domains.
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
            <span className="section-label">Professional Experience</span>
            <h2>Enterprise Software, Technical Leadership &amp; Modernisation</h2>
            <p className="experience-intro">
              My experience spans enterprise SaaS, fintech, cloud platforms, application modernisation, optimisation and production AI engineering.
            </p>
            <p className="experience-intro">
              Across these environments, my role has progressively expanded from implementing individual application features to owning problems across multiple layers of a system—understanding business requirements, designing solutions, building frontend and backend components, integrating services, supporting production systems and helping other engineers make effective technical decisions.
            </p>

            <div className="experience-story">
              {experience.map((job) => {
                const fullItems = job.sections.flatMap((section) =>
                  section.items ?? (section.paragraph ? [section.paragraph] : []),
                )
                const visibleItems = expandedJobs[job.company] ? fullItems : fullItems.slice(0, 3)
                const isExpanded = Boolean(expandedJobs[job.company])

                return (
                  <article className="experience-entry" key={`${job.company}-${job.period}`}>
                    <h3 className="entry-company">{job.company}</h3>
                    <h4 className="entry-role">{job.role}</h4>
                    <p className="entry-period">{job.period}</p>
                    {job.intro && <p className="entry-intro">{job.intro}</p>}

                    {isExpanded ? (
                      <div className="expanded-experience-block">
                        {job.sections.map((section) => (
                          <div className="entry-section" key={`${job.company}-${section.title}`}>
                            <h5>{section.title}</h5>
                            {section.paragraph ? (
                              <p>{section.paragraph}</p>
                            ) : (
                              <ul>
                                {section.items?.map((item) => <li key={`${job.company}-${section.title}-${item}`}>{item}</li>)}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="experience-highlights">
                        {visibleItems.map((item) => <li key={`${job.company}-${item}`}>{item}</li>)}
                      </ul>
                    )}

                    {fullItems.length > 3 && (
                      <button
                        type="button"
                        className="toggle-details"
                        onClick={() => toggleJob(job.company)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </article>
                )
              })}

              <div className="entry-section progression-block">
                <h5>Career Progression</h5>
                <p>
                  My career has not simply been a progression through different frameworks. It has been a progression in engineering responsibility.
                </p>
                <div className="progression-steps" aria-label="Career progression">
                  <div>Full-Stack Engineering<br /><span>.NET · Angular · APIs · Financial Platforms</span></div>
                  <div>Integration &amp; Architecture<br /><span>Authentication · External APIs · Cloud Integration · SOLID</span></div>
                  <div>Modernisation &amp; Cloud<br /><span>React · Azure Functions · CI/CD · Infrastructure as Code · Observability</span></div>
                  <div>Distributed Systems<br /><span>Angular Architecture · Messaging · Multi-Cloud · Backend Integration</span></div>
                  <div>Technical Leadership<br /><span>Architecture · Team Leadership · TDD · Azure · Stakeholders · Production Ownership</span></div>
                  <div>Advanced Enterprise Engineering<br /><span>Production AI · MCP · Real-Time Streaming · Secure AI Integration · Natural-Language Analytics · Constraint Optimisation</span></div>
                </div>
                <p>
                  Today, that experience allows me to move comfortably between detailed implementation and higher-level engineering questions. I can discuss a React state-management problem, investigate a .NET API, reason about SQL behaviour, design communication between distributed services, review an authentication boundary, model an optimisation constraint or discuss how an AI workflow should be controlled.
                </p>
                <p>
                  But the technology itself is not the end goal. The goal is to build software that solves the business problem, works reliably in production, remains understandable to the engineering team and can continue evolving as the product changes.
                </p>
              </div>
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
            <h2>How I Build Software</h2>
            <div className="philosophy-grid">
              {[
                ['Business First', 'Understand the actual problem before selecting technology.'],
                ['Keep It Simple', 'Prefer maintainable solutions and avoid unnecessary complexity.'],
                ['Quality by Design', 'Use automated testing, code reviews, observability and clear architecture.'],
                ['Design for Change', 'Build systems that can evolve as business requirements change.'],
                ['Ownership', 'Take responsibility from requirement discovery through production support.'],
                ['Team Engineering', 'Share knowledge, mentor developers and improve engineering practices.'],
              ].map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <span className="section-label">Career Statistics</span>
            <h2>Senior engineering depth across software, architecture and cloud delivery.</h2>
            <div className="stats career-stats">
              <div><strong>12+</strong><span>Years in software engineering</span></div>
              <div><strong>9+</strong><span>Years in C# / .NET</span></div>
              <div><strong>Full Stack</strong><span>Frontend → Backend → Cloud</span></div>
              <div><strong>Cloud</strong><span>Azure & modern DevOps</span></div>
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
          <div className="footer-links" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>•</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>•</span>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <span>Built with modern web technologies and hosted on GitHub Pages.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
