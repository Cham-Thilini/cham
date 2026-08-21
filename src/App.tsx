import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, Phone, X,
  Brain, BrainCircuit, CheckCircle2, CheckSquare, Cloud, CloudCog, Code2, Component,
  Database, FileText, Layers, Layers3, Lock, MessageCircle, MousePointerClick,
  Monitor, RefreshCw, Route, Share2, ShieldAlert, ShieldCheck, Sparkles, Timer, TrendingUp,
  User, Users, Workflow, Box, ClipboardCheck, Languages
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { experience, profile, projects, skillGroups } from './data/profile'

const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'architecture', 'contact']

const copy = {
  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', architecture: 'Architecture', contact: 'Contact' },
    download: 'Download CV',
    liveArchitecture: 'Live Architecture',
    stackSubtitle: 'How I think across the stack',
    systemOnline: 'System Online',
    systemStatus: 'System Status',
    requestFlow: 'Typical Request Flow',
    about: 'About',
    aboutTitle: 'Full-stack ownership, from product problem to production.',
    experience: 'Professional Experience',
    experienceTitle: 'Enterprise Software, Technical Leadership & Modernisation',
    skills: 'Technical Skills',
    skillsTitle: 'Strong Microsoft engineering foundation with modern AI and cloud capability.',
    projects: 'Featured Work',
    projectsTitle: 'Selected engineering problems and systems.',
    architecture: 'Architecture',
    architectureTitle: 'I design beyond the UI.',
    philosophy: 'Engineering Philosophy',
    philosophyTitle: 'How I Build Software',
    statistics: 'Career Statistics',
    statisticsTitle: 'Senior engineering depth across software, architecture and cloud delivery.',
    contact: 'Contact',
    contactTitle: 'Let’s build something meaningful.',
    email: 'Email me',
    call: 'Call me',
    experienceIntro: 'My experience spans enterprise SaaS, fintech, cloud platforms, application modernisation, optimisation and production AI engineering.',
    experienceIntroTwo: 'Across these environments, my role has progressively expanded from implementing individual application features to owning problems across multiple layers of a system.',
    showLess: 'Show less',
    showMore: 'Show more',
    progression: 'Career Progression',
    progressionText: 'My career has not simply been a progression through different frameworks. It has been a progression in engineering responsibility.',
    architectureLead: 'My work spans browser clients, secure .NET APIs, distributed services, cloud infrastructure, AI workflows, data platforms and production operations.',
    principles: [['Secure by design', 'JWT validation, scope enforcement, guardrails'], ['Team engineering', 'Reviews, mentoring, technical decisions'], ['Data aware', 'SQL Server, analytics, safe data access']],
    philosophyItems: [['Business First', 'Understand the actual problem before selecting technology.'], ['Keep It Simple', 'Prefer maintainable solutions and avoid unnecessary complexity.'], ['Quality by Design', 'Use automated testing, code reviews, observability and clear architecture.'], ['Design for Change', 'Build systems that can evolve as business requirements change.'], ['Ownership', 'Take responsibility from requirement discovery through production support.'], ['Team Engineering', 'Share knowledge, mentor developers and improve engineering practices.']],
    statsLabels: ['Years in software engineering', 'Years in C# / .NET', 'Frontend → Backend → Cloud', 'Azure & modern DevOps'],
    contactText: 'I’m interested in senior full-stack and technical leadership opportunities where I can contribute to challenging products, architecture and engineering teams.',
    aboutParagraphs: ['I work across the complete engineering lifecycle—from problem understanding and architecture through implementation, testing, deployment and production support. My role as a senior engineer is not simply to turn tickets into features, but to understand the real business problem and translate it into a resilient system people can trust.', 'My recent work combines enterprise .NET engineering with production AI, real-time streaming, secure application integration, optimisation and cloud delivery. I think carefully about service boundaries, authentication, authorisation, data ownership, operational constraints and failure modes before choosing the technical solution.'],
  },
  de: {
    nav: { home: 'Startseite', about: 'Über mich', experience: 'Erfahrung', skills: 'Kompetenzen', projects: 'Projekte', architecture: 'Architektur', contact: 'Kontakt' },
    download: 'Lebenslauf herunterladen',
    liveArchitecture: 'Live-Architektur',
    stackSubtitle: 'So denke ich über den gesamten Stack',
    systemOnline: 'System online',
    systemStatus: 'Systemstatus',
    requestFlow: 'Typischer Anfrageablauf',
    about: 'Über mich',
    aboutTitle: 'Verantwortung für den gesamten Stack, vom Produktproblem bis zum produktiven Betrieb.',
    experience: 'Berufserfahrung',
    experienceTitle: 'Unternehmenssoftware, technische Führung und Modernisierung',
    skills: 'Technische Kompetenzen',
    skillsTitle: 'Starke Microsoft-Engineering-Basis mit modernen KI- und Cloud-Kompetenzen.',
    projects: 'Ausgewählte Arbeiten',
    projectsTitle: 'Ausgewählte technische Herausforderungen und Systeme.',
    architecture: 'Architektur',
    architectureTitle: 'Ich entwickle über die Benutzeroberfläche hinaus.',
    philosophy: 'Engineering-Philosophie',
    philosophyTitle: 'So entwickle ich Software',
    statistics: 'Karrierestatistik',
    statisticsTitle: 'Langjährige Erfahrung in Softwareentwicklung, Architektur und Cloud-Bereitstellung.',
    contact: 'Kontakt',
    contactTitle: 'Lassen Sie uns etwas Bedeutungsvolles entwickeln.',
    email: 'E-Mail senden',
    call: 'Anrufen',
    experienceIntro: 'Meine Erfahrung umfasst Enterprise-SaaS, Fintech, Cloud-Plattformen, Anwendungsmodernisierung, Optimierung und produktive KI-Entwicklung.',
    experienceIntroTwo: 'In diesen Umgebungen hat sich meine Rolle von der Umsetzung einzelner Funktionen zur Verantwortung für Probleme über mehrere Systemebenen hinweg entwickelt.',
    showLess: 'Weniger anzeigen',
    showMore: 'Mehr anzeigen',
    progression: 'Karriereentwicklung',
    progressionText: 'Meine Karriere war nicht nur eine Entwicklung durch verschiedene Frameworks, sondern vor allem eine Entwicklung technischer Verantwortung.',
    architectureLead: 'Meine Arbeit umfasst Browser-Clients, sichere .NET-APIs, verteilte Services, Cloud-Infrastruktur, KI-Workflows, Datenplattformen und produktiven Betrieb.',
    principles: [['Sicherheit by Design', 'JWT-Validierung, Bereichsprüfung und Schutzmechanismen'], ['Engineering im Team', 'Reviews, Mentoring und technische Entscheidungen'], ['Datenbewusst', 'SQL Server, Analysen und sicherer Datenzugriff']],
    philosophyItems: [['Geschäft zuerst', 'Das eigentliche Problem verstehen, bevor Technologie ausgewählt wird.'], ['Einfach halten', 'Wartbare Lösungen bevorzugen und unnötige Komplexität vermeiden.'], ['Qualität by Design', 'Automatisierte Tests, Code-Reviews, Überwachung und klare Architektur einsetzen.'], ['Für Veränderung entwickeln', 'Systeme so bauen, dass sie sich mit den Anforderungen weiterentwickeln.'], ['Verantwortung', 'Von der Anforderungsermittlung bis zum produktiven Betrieb Verantwortung übernehmen.'], ['Engineering im Team', 'Wissen teilen, Entwickler unterstützen und technische Praktiken verbessern.']],
    statsLabels: ['Jahre Softwareentwicklung', 'Jahre C# / .NET', 'Frontend → Backend → Cloud', 'Azure & moderne DevOps'],
    contactText: 'Ich interessiere mich für leitende Full-Stack- und technische Führungsrollen, in denen ich zu anspruchsvollen Produkten, Architekturen und Engineering-Teams beitragen kann.',
    aboutParagraphs: ['Ich arbeite über den gesamten Entwicklungszyklus hinweg – vom Verständnis des Problems und der Architektur über Implementierung und Tests bis hin zu Bereitstellung und produktivem Betrieb. Als Senior Engineer setze ich nicht einfach Tickets in Funktionen um, sondern verstehe das eigentliche Geschäftsproblem und übersetze es in ein belastbares System, dem Menschen vertrauen können.', 'Meine aktuelle Arbeit verbindet Enterprise-.NET-Entwicklung mit produktiver KI, Echtzeit-Streaming, sicherer Anwendungsintegration, Optimierung und Cloud-Bereitstellung. Vor der Wahl einer technischen Lösung prüfe ich sorgfältig Servicegrenzen, Authentifizierung, Autorisierung, Datenverantwortung, betriebliche Einschränkungen und Fehlerszenarien.'],
  },
} as const

type GermanExperience = { role: string; period: string; intro: string; highlights: string[]; sections: { title: string; items: string[] }[] }

const germanExperiencePreview: Record<string, GermanExperience> = {
  Bromcom: { role: 'Senior Full-Stack-Softwareentwickler', period: 'Oktober 2024 – Heute | London', intro: 'Bei Bromcom arbeite ich an einem etablierten Enterprise-Management-Informationssystem. Neue Funktionen müssen mit bestehenden Geschäftsprozessen, Sicherheitsgrenzen, der Anwendungsarchitektur und großen Mengen operativer Daten zusammenspielen. Meine Aufgaben umfassen klassische Full-Stack-Entwicklung, komplexe Stundenplanoptimierung und zunehmend produktive KI-Entwicklung.', highlights: ['Eine produktive KI-Assistenz entwickelt und in das bestehende Enterprise-MIS integriert.', 'Über die vollständige KI-Anwendungsarchitektur gearbeitet, einschließlich React, .NET, MCP und Analytics on Demand.', 'Die sichere Integration zwischen Host-Anwendung und eingebetteter React-KI-Erfahrung entworfen.', 'Echtzeit-Kommunikation, Abbruch- und Timeout-Verhalten für zuverlässige KI-Abläufe umgesetzt.'], sections: [{ title: 'Produktive KI und intelligente Systeme', items: ['Eine produktive KI-Assistenz entwickelt und in das bestehende Enterprise-MIS integriert.', 'React-Oberfläche, .NET-API-Gateway, MCP-Workflow-Service und Analytics-on-Demand-Services verbunden.', 'Sicherheitsgrenzen, Workflow-Steuerung und Datenzugriff deterministisch kontrolliert.'] }, { title: 'KI-Streaming und Zuverlässigkeit', items: ['Echtzeit-Kommunikation mit Server-Sent Events umgesetzt.', 'Abbruch- und Timeout-Verhalten für lang laufende KI-Operationen entwickelt.', 'Fehlerbehandlung für produktionsgeeignete KI-Funktionen integriert.'] }] },
  'MGT Fintec Synergies Ltd': { role: 'Teamleiter / Senior Full-Stack-Entwickler', period: 'Dezember 2022 – September 2024 | London', intro: 'Bei MGT Fintec habe ich praktische Full-Stack-Entwicklung mit Teamführung und Lieferverantwortung in einem Fintech-Umfeld verbunden.', highlights: ['Skalierbare .NET-Core-APIs für Finanz- und operative Anwendungen entwickelt.', 'Angular-Anwendungen für Finanzdaten und Geschäftsprozesse entwickelt.', 'Über Backend-APIs, Frontend-Anwendungen und Integrationen hinweg gearbeitet.', 'TDD, Clean Code und Code-Reviews zur Verbesserung der Wartbarkeit etabliert.'], sections: [{ title: 'Full-Stack-Entwicklung', items: ['Skalierbare .NET-Core-APIs für Finanz- und operative Anwendungen entwickelt.', 'Angular-Anwendungen für Finanzdaten und Geschäftsprozesse entwickelt.', 'Geschäftsanforderungen in wartbare technische Lösungen übersetzt.'] }, { title: 'Technische Führung', items: ['Ein crossfunktionales Engineering-Team unterstützt.', 'Code-Reviews, technische Diskussionen und gemeinsame Entscheidungsfindung gefördert.', 'Lieferdruck mit langfristiger Wartbarkeit ausbalanciert.'] }] },
  'BlackSwan Technologies': { role: 'Senior Frontend-Entwickler', period: 'Juli 2021 – Dezember 2022', intro: 'Bei BlackSwan Technologies lag mein Schwerpunkt auf Enterprise-Frontend-Architektur mit Berührungspunkten zu Cloud-Integration, Messaging, Backend-Services und KI-Analysen.', highlights: ['Wiederverwendbare Angular-Servicebibliotheken entwickelt.', 'Wiederverwendbare Authentifizierungsfunktionen entworfen.', 'Authentifizierungsabläufe über Azure, AWS und GCP umgesetzt.', 'Anwendungsarchitektur und Integrationen für verteilte Systeme unterstützt.'], sections: [{ title: 'Frontend-Architektur', items: ['Wiederverwendbare Angular-Servicebibliotheken für Enterprise-Anwendungen entwickelt.', 'Gemeinsame Frontend-Muster und Services für mehrere Anwendungsbereiche geschaffen.'] }, { title: 'Cloud-Integration', items: ['Authentifizierungsabläufe über Azure-, AWS- und GCP-Umgebungen umgesetzt.', 'Frontend-Anwendungen mit verteilten Backend- und Cloud-Services verbunden.'] }] },
  InEight: { role: 'Senior Frontend-Entwickler', period: 'Februar 2020 – Juni 2021', intro: 'Bei InEight habe ich etablierte Enterprise-Anwendungen modernisiert und die zugehörige Cloud-Bereitstellung sowie Produktionsüberwachung verbessert.', highlights: ['Die Migration etablierter JavaScript-/Kendo-UI-Anwendungen zu React geleitet.', 'Moderne React-Funktionen als Teil der Migration entwickelt.', 'Bestehendes Anwendungsverhalten während der Modernisierung erhalten.', 'Cloud-Bereitstellung, CI/CD und Produktionsüberwachung unterstützt.'], sections: [{ title: 'Anwendungsmodernisierung', items: ['Die Migration etablierter JavaScript-/Kendo-UI-Anwendungen zu React geleitet.', 'Moderne React-Funktionen innerhalb der Migration entwickelt.', 'Bestehende Funktionen während des Technologiewechsels erhalten.'] }, { title: 'Cloud und Betrieb', items: ['Cloud-Bereitstellung und CI/CD unterstützt.', 'Produktionsüberwachung und technische Diagnose verbessert.'] }] },
  QualitApps: { role: 'Senior Softwareentwickler', period: 'November 2018 – Januar 2020', intro: 'Bei QualitApps habe ich als Full-Stack-Entwickler Enterprise-Webplattformen mit .NET Core und Angular entwickelt.', highlights: ['Skalierbare .NET-Core-APIs für Enterprise-Anwendungen entwickelt.', 'REST-basierte Funktionen für Frontend- und Integrationsanforderungen entwickelt.', 'Geschäftsfunktionen über Backend-Services umgesetzt.', 'Mit Frontend-, Backend- und Datenbankkomponenten gearbeitet.'], sections: [{ title: 'Backend-Entwicklung', items: ['Skalierbare .NET-Core-APIs für Enterprise-Anwendungen entwickelt.', 'REST-basierte Anwendungsfunktionen für Integrationsanforderungen umgesetzt.'] }, { title: 'Full-Stack-Entwicklung', items: ['Angular-Funktionen für moderne Webplattformen entwickelt.', 'Geschäftslogik über Backend-Services implementiert.'] }] },
  'Siyobit Holdings': { role: 'Full-Stack-Teamleiter / Softwareentwickler', period: '2014 – 2018', intro: 'Bei Siyobit habe ich die Grundlage für meine Full-Stack-Entwicklung und technische Führung gelegt. Ich arbeitete an Finanz- und Handelsplattformen, bei denen Zuverlässigkeit und kontrollierte Weiterentwicklung geschäftskritisch waren.', highlights: ['.NET-Anwendungen für Finanz- und Handelsplattformen entwickelt.', 'Angular-Anwendungen für moderne webbasierte Funktionen entwickelt.', 'RESTful APIs entworfen und implementiert.', 'Geschäftskritische Workflows mit zuverlässigen Anwendungen unterstützt.'], sections: [{ title: 'Full-Stack-Entwicklung', items: ['.NET-Anwendungen für Finanz- und Handelsplattformen entwickelt.', 'Angular-Anwendungen für moderne webbasierte Funktionen entwickelt.', 'RESTful APIs entworfen und implementiert.'] }, { title: 'Technische Verantwortung', items: ['Zuverlässige Anwendungen für geschäftskritische Workflows unterstützt.', 'Anforderungen über Frontend-, Backend- und Datenbankgrenzen hinweg umgesetzt.'] }] },
}

const germanProjects: Record<string, { eyebrow: string; title: string; description: string }> = {
  'Production AI Assistant & Workflow Platform': { eyebrow: 'KI-Engineering', title: 'Produktive KI-Assistenz und Workflow-Plattform', description: 'Enterprise-KI mit React-Client, .NET-Gateway, MCP-Workflow-Service, Echtzeit-SSE-Streaming und natürlichsprachlicher Analytik – bei deterministischer Authentifizierung, Datenbereichsprüfung und Workflow-Steuerung.' },
  'Enterprise Timetable Optimisation': { eyebrow: 'Constraint-Optimierung', title: 'Optimierung von Enterprise-Stundenplänen', description: 'Automatische Stundenplanerstellung mit Google OR-Tools CP-SAT, die komplexe Anforderungen für Mitarbeitende, Räume, Fächer, Sitzungen und Verfügbarkeiten in wartbare Optimierungslogik übersetzt.' },
  'FinTech Full-Stack Platforms': { eyebrow: 'Technische Führung', title: 'Full-Stack-Fintech-Plattformen', description: 'Finanztechnische Anwendungen mit .NET Core, Angular, Azure, CI/CD und sauberen Engineering-Praktiken entwickelt und verantwortet – von Architektur und Lieferung bis zur Zusammenarbeit mit Stakeholdern.' },
  'Martian Robots': { eyebrow: 'Engineering-Herausforderung', title: 'Mars-Roboter', description: 'Eine .NET-8-Implementierung des Problems der Mars-Roboter mit klarem Domänenmodell, befehlsbasierter Steuerung, Geruchsspeicherung und automatisierten Tests.' },
}

const germanProjectHighlights: Record<string, string[]> = {
  'Production AI Assistant & Workflow Platform': ['MCP-Orchestrierung', 'JWT / Mandantenbereich', 'SSE-Streaming', 'NL-zu-SQL-Analytik', 'Prompt- und SQL-Schutzmechanismen'],
  'Enterprise Timetable Optimisation': ['C#/.NET', 'Google OR-Tools', 'CP-SAT', 'Angular', 'SQL Server'],
  'FinTech Full-Stack Platforms': ['.NET Core', 'Angular', 'Azure', 'TDD', 'Teamführung'],
  'Martian Robots': ['.NET 8', 'C#', 'Saubere Architektur', 'Command Pattern', 'Tests'],
}

const germanArchitectureCards: Record<string, { eyebrow: string; title: string; subtitle: string; items: string[] }> = {
  frontend: { eyebrow: 'FRONTEND', title: 'React / Angular', subtitle: 'Benutzeroberfläche', items: ['Komponenten', 'Zustandsverwaltung', 'Benutzerinteraktion', 'Routing'] },
  api: { eyebrow: '.NET / APIS', title: 'Sichere Services', subtitle: 'API-Gateway und Services', items: ['JWT-Authentifizierung', 'Autorisierung', 'Ratenbegrenzung', 'API-Endpunkte'] },
  ai: { eyebrow: 'KI-WORKFLOWS', title: 'MCP + LLM', subtitle: 'Intelligente Orchestrierung', items: ['Intent-Erkennung', 'Workflow-Orchestrierung', 'Schutzmechanismen und Validierung', 'Antwortgenerierung'] },
  domain: { eyebrow: 'DOMÄNENSERVICES', title: 'Geschäftslogik', subtitle: 'Unternehmensregeln', items: ['Validierung', 'Geschäftsregeln', 'Domänenmodelle', 'Richtliniendurchsetzung'] },
  data: { eyebrow: 'AZURE + DATEN', title: 'Daten und Cloud', subtitle: 'Speicher, Messaging und Analysen', items: ['SQL-Datenbank', 'Cosmos DB', 'Service Bus / Events', 'Blob Storage / Dateien'] },
}

const systemStatuses = [
  '> request received from user',
  '> validating JWT & tenant context  ✓',
  '> invoking AI workflow',
  '> applying guardrails & safety checks  ✓',
  '> querying authorised data sources',
  '> generating analytics & insights',
  '> streaming response to client ...',
]

const germanSystemStatuses = [
  '> Anfrage vom Benutzer empfangen',
  '> JWT- und Mandantenkontext wird validiert  ✓',
  '> KI-Workflow wird aufgerufen',
  '> Schutzmechanismen und Sicherheitsprüfungen werden angewendet  ✓',
  '> Berechtigte Datenquellen werden abgefragt',
  '> Analysen und Erkenntnisse werden erzeugt',
  '> Antwort wird an den Client gestreamt ...',
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
const germanRequestFlow: [LucideIcon, string, string, string][] = [[User, 'Benutzer', 'Anfrage', '#4da3ff'], [Lock, 'Auth', 'Validierung', '#a06bff'], [Brain, 'KI', 'Verarbeitung', '#f24fa0'], [Database, 'Daten', 'Abfrage', '#33d18f'], [TrendingUp, 'Antwort', 'Stream', '#4da3ff']]

function ArchitectureCard({ card, activeSystem, setActiveSystem, language }: { card: ArchitectureCard; activeSystem: string; setActiveSystem: (key: string) => void; language: 'en' | 'de' }) {
  const Icon = card.Icon
  const germanCard = germanArchitectureCards[card.key]
  return (
    <article
      className={`live-arch-card live-card-${card.key} ${activeSystem === card.key ? 'is-active' : ''}`}
      style={{ left: card.left, top: card.top, '--card-accent': card.accent, '--card-glow': card.glow } as CSSProperties}
      onMouseEnter={() => setActiveSystem(card.key)}
      onMouseLeave={() => setActiveSystem('ai')}
    >
      <div className="live-card-icon"><Icon size={22} strokeWidth={1.75} /></div>
      <div className="live-card-eyebrow">{language === 'de' && germanCard ? germanCard.eyebrow : card.eyebrow}</div>
      <h3>{language === 'de' && germanCard ? germanCard.title : card.title}</h3>
      <p>{language === 'de' && germanCard ? germanCard.subtitle : card.subtitle}</p>
      <ul>{card.items.map(([ItemIcon, label], index) => <li key={label}><ItemIcon size={14} strokeWidth={2} />{language === 'de' && germanCard ? germanCard.items[index] : label}</li>)}</ul>
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
  const [language, setLanguage] = useState<'en' | 'de'>('en')
  const text = copy[language]

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
              <a href={`#${item}`} key={item}>{text.nav[item as keyof typeof text.nav]}</a>
            ))}
            <button type="button" className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'de' : 'en')} aria-label="Switch language">
              <Languages size={15} /> {language.toUpperCase()}
            </button>
            <a className="button button-small" href={profile.cv} download>
              <Download size={16} /> {text.download}
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
                {text.nav[item as keyof typeof text.nav]}
              </a>
            ))}
            <button type="button" className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}>
              <Languages size={15} /> {language.toUpperCase()}
            </button>
            <a className="button" href={profile.cv} download onClick={() => setOpen(false)}>
              <Download size={16} /> {text.download}
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
                    <div className="visual-title">{text.liveArchitecture}</div>
                      <div className="visual-subtitle">{text.stackSubtitle}</div>
                </div>
                <div className="visual-status-pill"><span className="console-dot" /> {text.systemOnline}</div>
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

                {architectureCards.slice(0, 4).map((card) => <ArchitectureCard key={card.key} card={card} activeSystem={activeSystem} setActiveSystem={setActiveSystem} language={language} />)}

                <div className={`live-core ${activeSystem === 'ai' ? 'is-active' : ''}`}>
                  <div className="live-core-ring" />
                  <div className="live-core-ring live-core-ring-alt" />
                  <Brain size={30} strokeWidth={1.6} color="#c9b7ff" />
                  <strong>{language === 'de' ? 'KI-SYSTEM' : 'AI SYSTEM'}</strong>
                  <small>{language === 'de' ? 'Intelligenzkern' : 'Intelligence Core'}</small>
                  <span>LLM · MCP · NLQ</span>
                </div>

                <ArchitectureCard card={architectureCards[4]} activeSystem={activeSystem} setActiveSystem={setActiveSystem} language={language} />
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
                    <h3>{language === 'de' ? 'KI-SYSTEM' : 'AI SYSTEM'}</h3>
                    <small>{language === 'de' ? 'Intelligenzkern' : 'Intelligence Core'}</small>
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
                      <span>{text.systemStatus}</span>
                    </div>
                    <span className="console-live">LIVE</span>
                  </div>
                  <div className="console-body">
                    {(language === 'de' ? germanSystemStatuses : systemStatuses).slice(0, visibleLines).map((status, index) => (
                      <div key={status} className={`console-line console-line-${index % 3} ${index === visibleLines - 1 ? 'active' : ''}`}>
                        <span className="console-arrow">&gt;</span>{status.replace(/^>\s?/, '')}
                        {index === visibleLines - 1 && <span className="console-cursor" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="request-flow-panel">
                  <div className="request-flow-header">{text.requestFlow}</div>
                  <div className="request-flow-steps">
                    {(language === 'de' ? germanRequestFlow : requestFlow).map(([Icon, label, sub], index) => (
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
              <span className="section-label">{text.about}</span>
              <h2>{text.aboutTitle}</h2>
            </div>
            <div className="prose-card">
              <p>{text.aboutParagraphs[0]}</p>
              <p>{text.aboutParagraphs[1]}</p>
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
            <span className="section-label">{text.experience}</span>
            <h2>{text.experienceTitle}</h2>
            <p className="experience-intro">
              {text.experienceIntro}
            </p>
            <p className="experience-intro">
              {text.experienceIntroTwo}
            </p>

            <div className="experience-story">
              {experience.map((job) => {
                const fullItems = job.sections.flatMap((section) =>
                  section.items ?? (section.paragraph ? [section.paragraph] : []),
                )
                const germanPreview = germanExperiencePreview[job.company]
                const germanItems = germanPreview?.highlights ?? []
                const sourceItems = language === 'de' && germanPreview ? germanItems : fullItems
                const isExpanded = Boolean(expandedJobs[job.company])
                const visibleItems = isExpanded ? sourceItems : sourceItems.slice(0, 3)

                return (
                  <article className="experience-entry" key={`${job.company}-${job.period}`}>
                    <h3 className="entry-company">{job.company}</h3>
                    <h4 className="entry-role">{language === 'de' && germanPreview ? germanPreview.role : job.role}</h4>
                    <p className="entry-period">{language === 'de' && germanPreview ? germanPreview.period : job.period}</p>
                    {job.intro && <p className="entry-intro">{language === 'de' && germanPreview ? germanPreview.intro : job.intro}</p>}

                    {isExpanded ? (
                      <div className="expanded-experience-block">
                        {(language === 'de' && germanPreview ? germanPreview.sections : job.sections).map((section) => (
                          <div className="entry-section" key={`${job.company}-${section.title}`}>
                            <h5>{section.title}</h5>
                            {'paragraph' in section ? (
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

                    {sourceItems.length > 3 && (
                      <button
                        type="button"
                        className="toggle-details"
                        onClick={() => toggleJob(job.company)}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? text.showLess : text.showMore}
                      </button>
                    )}
                  </article>
                )
              })}

              <div className="entry-section progression-block">
                <h5>{text.progression}</h5>
                <p>{text.progressionText}</p>
                <div className="progression-steps" aria-label="Career progression">
                  <div>{language === 'de' ? 'Full-Stack-Entwicklung' : 'Full-Stack Engineering'}<br /><span>.NET · Angular · APIs · Finanzplattformen</span></div>
                  <div>{language === 'de' ? 'Integration und Architektur' : 'Integration & Architecture'}<br /><span>Authentifizierung · Externe APIs · Cloud-Integration · SOLID</span></div>
                  <div>{language === 'de' ? 'Modernisierung und Cloud' : 'Modernisation & Cloud'}<br /><span>React · Azure Functions · CI/CD · Infrastructure as Code · Observability</span></div>
                  <div>{language === 'de' ? 'Verteilte Systeme' : 'Distributed Systems'}<br /><span>Angular-Architektur · Messaging · Multi-Cloud · Backend-Integration</span></div>
                  <div>{language === 'de' ? 'Technische Führung' : 'Technical Leadership'}<br /><span>Architektur · Teamführung · TDD · Azure · Stakeholder · Produktionsverantwortung</span></div>
                  <div>{language === 'de' ? 'Fortgeschrittene Enterprise-Entwicklung' : 'Advanced Enterprise Engineering'}<br /><span>Produktive KI · MCP · Echtzeit-Streaming · Sichere KI-Integration · Natürlichsprachliche Analytik · Constraint-Optimierung</span></div>
                </div>
                <p>
                  {language === 'de' ? 'Heute kann ich mich sicher zwischen detaillierter Implementierung und übergeordneten Engineering-Fragen bewegen. Ich kann ein React-Problem bei der Zustandsverwaltung besprechen, eine .NET-API untersuchen, SQL-Verhalten analysieren, die Kommunikation verteilter Services entwerfen, eine Authentifizierungsgrenze prüfen, eine Optimierungsbedingung modellieren oder die Steuerung eines KI-Workflows diskutieren.' : 'Today, that experience allows me to move comfortably between detailed implementation and higher-level engineering questions. I can discuss a React state-management problem, investigate a .NET API, reason about SQL behaviour, design communication between distributed services, review an authentication boundary, model an optimisation constraint or discuss how an AI workflow should be controlled.'}
                </p>
                <p>
                  {language === 'de' ? 'Die Technologie selbst ist jedoch nicht das Ziel. Das Ziel ist Software, die das Geschäftsproblem löst, zuverlässig im Betrieb funktioniert, für das Engineering-Team verständlich bleibt und sich mit dem Produkt weiterentwickeln kann.' : 'But the technology itself is not the end goal. The goal is to build software that solves the business problem, works reliably in production, remains understandable to the engineering team and can continue evolving as the product changes.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <span className="section-label">{text.skills}</span>
            <h2>{text.skillsTitle}</h2>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{language === 'de' ? ({ 'Backend & APIs': 'Backend & APIs', 'AI & Intelligent Systems': 'KI & intelligente Systeme', Frontend: 'Frontend', 'Cloud & DevOps': 'Cloud & DevOps', Data: 'Daten', 'Architecture & Engineering': 'Architektur & Engineering' }[group.title] ?? group.title) : group.title}</h3>
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
            <span className="section-label">{text.projects}</span>
            <h2>{text.projectsTitle}</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <span className="eyebrow">{language === 'de' ? germanProjects[project.title]?.eyebrow ?? project.eyebrow : project.eyebrow}</span>
                  <h3>{language === 'de' ? germanProjects[project.title]?.title ?? project.title : project.title}</h3>
                  <p>{language === 'de' ? germanProjects[project.title]?.description ?? project.description : project.description}</p>
                  <div className="chip-row">
                    {(language === 'de' ? germanProjectHighlights[project.title] ?? project.highlights : project.highlights).map((item) => <span className="chip" key={item}>{item}</span>)}
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
              <span className="section-label">{text.architecture}</span>
              <h2>{text.architectureTitle}</h2>
              <p className="lead">{text.architectureLead}</p>
              <div className="principles">
                {text.principles.map(([title, description], index) => <div key={title}>{index === 0 ? <ShieldCheck /> : index === 1 ? <Users /> : <Database />}<span><strong>{title}</strong><small>{description}</small></span></div>)}
              </div>
            </div>

            <div className="architecture-map">
              <div className="arch-node">React / Angular</div>
              <div className="arch-line">↓</div>
              <div className="arch-node">{language === 'de' ? 'ASP.NET Core API-Gateway' : 'ASP.NET Core API Gateway'}</div>
              <div className="arch-line">↓</div>
              <div className="arch-split">
                <div className="arch-node">{language === 'de' ? 'Domänendienste' : 'Domain Services'}</div>
                <div className="arch-node">{language === 'de' ? 'MCP / KI-Workflows' : 'MCP / AI Workflows'}</div>
              </div>
              <div className="arch-line">↓</div>
              <div className="arch-split">
                <div className="arch-node">{language === 'de' ? 'SQL / Analysen' : 'SQL / Analytics'}</div>
                <div className="arch-node">Azure-Services</div>
              </div>
              <div className="arch-foot">{language === 'de' ? 'Authentifizierung · Validierung · Überwachung · Protokollierung · CI/CD' : 'Authentication · Validation · Monitoring · Logging · CI/CD'}</div>
            </div>
          </div>
        </section>

        <section className="section philosophy">
          <div className="container">
            <span className="section-label">{text.philosophy}</span>
            <h2>{text.philosophyTitle}</h2>
            <div className="philosophy-grid">
              {text.philosophyItems.map(([title, description]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <span className="section-label">{text.statistics}</span>
            <h2>{text.statisticsTitle}</h2>
            <div className="stats career-stats">
              <div><strong>12+</strong><span>{text.statsLabels[0]}</span></div>
              <div><strong>9+</strong><span>{text.statsLabels[1]}</span></div>
              <div><strong>{language === 'de' ? 'Full Stack' : 'Full Stack'}</strong><span>{text.statsLabels[2]}</span></div>
              <div><strong>Cloud</strong><span>{text.statsLabels[3]}</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div>
              <span className="section-label">{text.contact}</span>
              <h2>{text.contactTitle}</h2>
              <p>{text.contactText}</p>
              <p className="location"><MapPin size={17} /> {profile.location}</p>
            </div>
            <div className="contact-actions">
              <a className="button" href={`mailto:${profile.email}`}><Mail size={18} /> {text.email}</a>
              <a
                className="button button-ghost phone-toggle"
                href={showPhone ? `tel:${profile.phone}` : '#contact'}
                onClick={() => setShowPhone((current) => !current)}
              >
                <Phone size={18} /> {showPhone ? profile.phone : text.call}
              </a>
              <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a className="button button-ghost" href={profile.cv} download><Download size={18} /> {text.download}</a>
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
          <span>© 2026 {profile.name}. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</span>
          <div className="footer-links" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>•</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>•</span>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <span>{language === 'de' ? 'Mit modernen Webtechnologien entwickelt und auf GitHub Pages gehostet.' : 'Built with modern web technologies and hosted on GitHub Pages.'}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
