import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, Phone, X,
  Brain, BrainCircuit, CheckCircle2, CheckSquare, Cloud, CloudCog, Code2, Component,
  Database, FileText, Layers, Layers3, Lock, MessageCircle, MousePointerClick,
  Monitor, RefreshCw, Route, Share2, ShieldAlert, ShieldCheck, Sparkles, Timer, TrendingUp,
  User, Users, Workflow, Box, ClipboardCheck
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { experience, profile, projects, skillGroups } from './data/profile'

const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'architecture', 'contact']

const systemStatuses = [
  '> request received from user',
  '> validating JWT & tenant context  ✓',
  '> invoking AI workflow',
  '> applying guardrails & safety checks  ✓',
  '> querying authorised data sources',
  '> generating analytics & insights',
  '> streaming response to client ...',
]

type ArchitectureCard = { key: string; left: string; top: string; accent: string; glow: string; eyebrow: string; title: string; subtitle: string; Icon: LucideIcon; items: [LucideIcon, string][] }

const architectureCards: ArchitectureCard[] = [
  { key: 'frontend', left: '2%', top: '6%', accent: '#4da3ff', glow: '77,163,255', eyebrow: 'FRONTEND', title: 'React / Angular', subtitle: 'User Experience Layer', Icon: Monitor, items: [[Component, 'Components'], [Layers, 'State Management'], [MousePointerClick, 'User Interaction'], [Route, 'Routing']] },
  { key: 'api', left: '64%', top: '6%', accent: '#a06bff', glow: '160,107,255', eyebrow: '.NET / APIS', title: 'Secure Services', subtitle: 'API Gateway & Services', Icon: ShieldCheck, items: [[Lock, 'JWT Authentication'], [ShieldCheck, 'Authorization'], [Timer, 'Rate Limiting'], [Share2, 'API Endpoints']] },
  { key: 'ai', left: '2%', top: '44%', accent: '#f24fa0', glow: '242,79,160', eyebrow: 'AI WORKFLOWS', title: 'MCP + LLM', subtitle: 'Intelligent Orchestration', Icon: Brain, items: [[Sparkles, 'Intent Understanding'], [Workflow, 'Workflow Orchestration'], [ShieldAlert, 'Guardrails & Validation'], [MessageCircle, 'Response Generation']] },
  { key: 'domain', left: '64%', top: '44%', accent: '#5b7cff', glow: '91,124,255', eyebrow: 'DOMAIN SERVICES', title: 'Business Logic', subtitle: 'Enterprise Rules', Icon: Box, items: [[CheckSquare, 'Validation'], [CheckCircle2, 'Business Rules'], [Box, 'Domain Models'], [ClipboardCheck, 'Policy Enforcement']] },
  { key: 'data', left: '36%', top: '78%', accent: '#33d18f', glow: '51,209,143', eyebrow: 'AZURE + DATA', title: 'Data & Cloud', subtitle: 'Storage, Messaging & Analytics', Icon: Cloud, items: [[Database, 'SQL Database'], [Database, 'Cosmos DB'], [RefreshCw, 'Service Bus / Events'], [FileText, 'Blob Storage / Files']] },
]

const requestFlow: [LucideIcon, string, string, string][] = [[User, 'User', 'Request', '#4da3ff'], [Lock, 'Auth', 'Validate', '#a06bff'], [Brain, 'AI', 'Process', '#f24fa0'], [Database, 'Data', 'Query', '#33d18f'], [TrendingUp, 'Response', 'Stream', '#4da3ff']]

function ArchitectureCard({ card, activeSystem, setActiveSystem }: { card: ArchitectureCard; activeSystem: string; setActiveSystem: (key: string) => void }) {
  const Icon = card.Icon
  return (
    <article
      className={`live-arch-card live-card-${card.key} ${activeSystem === card.key ? 'is-active' : ''}`}
      style={{ left: card.left, top: card.top, '--card-accent': card.accent, '--card-glow': card.glow } as CSSProperties}
      onMouseEnter={() => setActiveSystem(card.key)}
      onMouseLeave={() => setActiveSystem('ai')}
    >
      <div className="live-card-icon"><Icon size={22} strokeWidth={1.75} /></div>
      <div className="live-card-eyebrow">{card.eyebrow}</div>
      <h3>{card.title}</h3>
      <p>{card.subtitle}</p>
      <ul>{card.items.map(([ItemIcon, label]) => <li key={label}><ItemIcon size={14} strokeWidth={2} />{label}</li>)}</ul>
    </article>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({})
  const [activeSystem, setActiveSystem] = useState('ai')
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= systemStatuses.length) {
      const reset = window.setTimeout(() => setVisibleLines(0), 1800)
      return () => window.clearTimeout(reset)
    }

    const timer = window.setTimeout(() => setVisibleLines((current) => current + 1), 650)
    return () => window.clearTimeout(timer)
  }, [visibleLines])

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
          <div className="container architecture-demo">
            <div className="hero-visual hero-visual-architecture" aria-label="Living AI system architecture">
              <div className="visual-header">
                <div className="visual-heading">
                  <div className="visual-title">Live Architecture</div>
                  <div className="visual-subtitle">How I think across the stack</div>
                </div>
                <div className="visual-status-pill"><span className="console-dot" /> System Online</div>
              </div>

              <div className="live-architecture-diagram">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    {[
                      ['blue', '#4da3ff'], ['purple', '#a06bff'], ['pink', '#f24fa0'], ['indigo', '#5b7cff'], ['green', '#33d18f'],
                    ].map(([name, color]) => (
                      <marker key={name} id={`live-arrow-${name}`} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="2.5" markerHeight="2.5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 z" fill={color} />
                      </marker>
                    ))}
                  </defs>
                  {[
                    ['M36,21 L36,32 Q36,36 39.5,36 L43,36', '#4da3ff', 'blue'],
                    ['M64,21 L64,32 Q64,36 60.5,36 L57,36', '#a06bff', 'purple'],
                    ['M36,59 L38.5,59 L38.5,52 Q38.5,48 42,48 L44,48', '#f24fa0', 'pink'],
                    ['M64,59 L61.5,59 L61.5,52 Q61.5,48 58,48 L55,48', '#5b7cff', 'indigo'],
                    ['M50,78 L50,61', '#33d18f', 'green'],
                  ].map(([path, color, marker], index) => (
                    <g key={path}>
                      <path d={path} fill="none" stroke={color} strokeWidth=".3" opacity=".35" vectorEffect="non-scaling-stroke" />
                      <path className="live-flow-line" d={path} style={{ color, stroke: color, animationDelay: `${index * 0.34}s` }} markerEnd={`url(#live-arrow-${marker})`} />
                      <circle r=".9" fill="#fff"><animateMotion begin={`${index * 0.55}s`} dur="2.6s" repeatCount="indefinite" path={path} /></circle>
                    </g>
                  ))}
                </svg>

                {architectureCards.slice(0, 4).map((card) => <ArchitectureCard key={card.key} card={card} activeSystem={activeSystem} setActiveSystem={setActiveSystem} />)}

                <div className={`live-core ${activeSystem === 'ai' ? 'is-active' : ''}`}>
                  <div className="live-core-ring" />
                  <div className="live-core-ring live-core-ring-alt" />
                  <Brain size={30} strokeWidth={1.6} color="#c9b7ff" />
                  <strong>AI SYSTEM</strong>
                  <small>Intelligence Core</small>
                  <span>LLM · MCP · NLQ</span>
                </div>

                <ArchitectureCard card={architectureCards[4]} activeSystem={activeSystem} setActiveSystem={setActiveSystem} />
              </div>

              <div className="architecture-diagram">
                <svg className="architecture-svg" viewBox="0 0 680 420" aria-hidden="true">
                  <defs>
                    <linearGradient id="frontendGlow" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                    <linearGradient id="apiGlow" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                    <linearGradient id="aiGlow" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#C084FC" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient id="dataGlow" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#2DD4BF" />
                      <stop offset="100%" stopColor="#22C55E" />
                    </linearGradient>
                    <filter id="softGlow" x="-120%" y="-120%" width="340%" height="340%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path id="flow-frontend-top" className="flow-line flow-frontend" d="M180 122 C230 122, 250 122, 302 122" />
                  <path id="flow-api-vertical-1" className="flow-line flow-api" d="M446 146 C446 178, 446 196, 446 214" />
                  <path id="flow-frontend-mid" className="flow-line flow-frontend" d="M195 150 C240 180, 260 196, 300 214" />
                  <path id="flow-api-vertical-2" className="flow-line flow-api" d="M446 258 C446 288, 446 302, 446 318" />
                  <path id="flow-ai-mid" className="flow-line flow-ai" d="M228 260 C250 246, 270 230, 295 230" />
                  <path id="flow-data-mid" className="flow-line flow-data" d="M440 260 C492 250, 505 244, 535 214" />
                  <path id="flow-ai-bottom" className="flow-line flow-ai" d="M314 306 C345 345, 390 345, 520 310" />
                  <path id="flow-data-left" className="flow-line flow-data" d="M220 214 C180 206, 160 188, 120 170" />

                  <circle r="4.2" fill="#7dd3fc" filter="url(#softGlow)"><animateMotion dur="3.4s" repeatCount="indefinite" rotate="auto"><mpath href="#flow-frontend-top" /></animateMotion></circle>
                  <circle r="4" fill="#a78bfa" filter="url(#softGlow)"><animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto"><mpath href="#flow-api-vertical-1" /></animateMotion></circle>
                  <circle r="4.5" fill="#f472b6" filter="url(#softGlow)"><animateMotion dur="4.6s" repeatCount="indefinite" rotate="auto"><mpath href="#flow-ai-bottom" /></animateMotion></circle>
                  <circle r="4.2" fill="#2dd4bf" filter="url(#softGlow)"><animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto"><mpath href="#flow-data-mid" /></animateMotion></circle>
                </svg>

                <div className={`arch-panel arch-panel-frontend ${activeSystem === 'frontend' ? 'is-active' : ''}`} onMouseEnter={() => setActiveSystem('frontend')} onMouseLeave={() => setActiveSystem('ai')}>
                  <div className="arch-card-head">
                    <div className="arch-icon arch-icon-blue"><Code2 size={16} /></div>
                    <div className="arch-label">Frontend</div>
                  </div>
                  <h3>React / Angular</h3>
                  <p>User Experience Layer</p>
                  <ul>
                    <li>Components</li>
                    <li>State Management</li>
                    <li>User Interaction</li>
                    <li>Routing</li>
                  </ul>
                </div>

                <div className={`arch-panel arch-panel-api ${activeSystem === 'api' ? 'is-active' : ''}`} onMouseEnter={() => setActiveSystem('api')} onMouseLeave={() => setActiveSystem('ai')}>
                  <div className="arch-card-head">
                    <div className="arch-icon arch-icon-purple"><ShieldCheck size={16} /></div>
                    <div className="arch-label">.NET / APIs</div>
                  </div>
                  <h3>Secure Services</h3>
                  <p>API Gateway &amp; Services</p>
                  <ul>
                    <li>JWT Authentication</li>
                    <li>Authorization</li>
                    <li>Rate Limiting</li>
                    <li>API Endpoints</li>
                  </ul>
                </div>

                <div className={`arch-core-panel ${activeSystem === 'ai' ? 'is-active' : ''}`}>
                  <div className="arch-core-shell">
                    <div className="arch-core-ring" />
                    <span className="core-spark">✦</span>
                    <h3>AI SYSTEM</h3>
                    <small>Intelligence Core</small>
                    <span>LLM · MCP · NLQ</span>
                  </div>
                </div>

                <div className={`arch-panel arch-panel-ai ${activeSystem === 'ai' ? 'is-active' : ''}`} onMouseEnter={() => setActiveSystem('ai')} onMouseLeave={() => setActiveSystem('ai')}>
                  <div className="arch-card-head">
                    <div className="arch-icon arch-icon-pink"><BrainCircuit size={16} /></div>
                    <div className="arch-label">AI Workflows</div>
                  </div>
                  <h3>MCP + LLM</h3>
                  <p>Intelligent Orchestration</p>
                  <ul>
                    <li>Intent Understanding</li>
                    <li>Workflow Execution</li>
                    <li>Guardrails &amp; Validation</li>
                    <li>Response Generation</li>
                  </ul>
                </div>

                <div className={`arch-panel arch-panel-domain ${activeSystem === 'domain' ? 'is-active' : ''}`} onMouseEnter={() => setActiveSystem('domain')} onMouseLeave={() => setActiveSystem('ai')}>
                  <div className="arch-card-head">
                    <div className="arch-icon arch-icon-indigo"><Layers3 size={16} /></div>
                    <div className="arch-label">Domain Services</div>
                  </div>
                  <h3>Business Logic</h3>
                  <p>Enterprise Rules</p>
                  <ul>
                    <li>Validation</li>
                    <li>Business Rules</li>
                    <li>Domain Models</li>
                    <li>Policy Enforcement</li>
                  </ul>
                </div>

                <div className={`arch-panel arch-panel-data ${activeSystem === 'data' ? 'is-active' : ''}`} onMouseEnter={() => setActiveSystem('data')} onMouseLeave={() => setActiveSystem('ai')}>
                  <div className="arch-card-head">
                    <div className="arch-icon arch-icon-teal"><Database size={16} /></div>
                    <div className="arch-label">Azure + Data</div>
                  </div>
                  <h3>Data &amp; Cloud</h3>
                  <p>Storage, Messaging &amp; Analytics</p>
                  <ul>
                    <li>SQL Database</li>
                    <li>Cosmos DB</li>
                    <li>Service Bus / Events</li>
                    <li>Blob Storage / Files</li>
                  </ul>
                </div>
              </div>

              <div className="bottom-panels">
                <div className="status-console" aria-live="polite">
                  <div className="console-header-row">
                    <div className="console-header">
                      <span className="console-dot" />
                      <span>System Status</span>
                    </div>
                    <span className="console-live">LIVE</span>
                  </div>
                  <div className="console-body">
                    {systemStatuses.slice(0, visibleLines).map((status, index) => (
                      <div key={status} className={`console-line console-line-${index % 3} ${index === visibleLines - 1 ? 'active' : ''}`}>
                        <span className="console-arrow">&gt;</span>{status.replace(/^>\s?/, '')}
                        {index === visibleLines - 1 && <span className="console-cursor" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="request-flow-panel">
                  <div className="request-flow-header">Typical Request Flow</div>
                  <div className="request-flow-steps">
                    {requestFlow.map(([Icon, label, sub], index) => (
                      <div className="flow-step" key={label} style={{ '--flow-delay': `${index * 0.58}s` } as CSSProperties}>
                        <span className={`flow-icon flow-icon-${index}`}><Icon size={16} /></span>
                        <small>{label}</small>
                        <em>{sub}</em>
                      </div>
                    ))}
                  </div>
                </div>
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
