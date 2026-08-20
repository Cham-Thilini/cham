export const profile = {
  name: 'Cham Madamperuma',
  role: 'Senior Full-Stack Software Engineer',
  location: 'London, UK',
  phone: '+447467896526',
  email: 'eng.cham.net@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chamaramadamperuma/',
  github: 'https://github.com/Cham-Thilini',
  photo: './profile.jpg',
  cv: './Cham-Madamperuma-CV.pdf',
  intro:
    'Senior Full-Stack Software Engineer with 12+ years of commercial experience building enterprise software across fintech, AI-enabled analytics, workflow-heavy platforms and complex optimisation systems.',
}

export const skillGroups = [
  {
    title: 'Backend & APIs',
    items: ['C#', '.NET 6/8', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'Java', 'Python'],
  },
  {
    title: 'AI & Intelligent Systems',
    items: ['Azure OpenAI', 'Anthropic Claude API', 'Semantic Kernel', 'MCP', 'Prompt Engineering', 'Natural-language to SQL', 'Google OR-Tools'],
  },
  {
    title: 'Frontend',
    items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'React', 'Redux', 'HTML5', 'SCSS'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'AWS integrations', 'GCP integrations', 'Azure DevOps', 'Docker', 'Azure Functions', 'Azure Service Bus', 'Bicep', 'CI/CD'],
  },
  {
    title: 'Data',
    items: ['SQL Server', 'Azure SQL', 'MongoDB', 'Cosmos DB'],
  },
  {
    title: 'Architecture & Engineering',
    items: ['Microservices', 'Distributed Systems', 'SaaS', 'SOLID', 'DDD', 'Design Patterns', 'TDD', 'Secure System Integration'],
  },
]

export const experience = [
  {
    role: 'Senior Full-Stack Software Engineer',
    company: 'Bromcom',
    period: 'Oct 2024 – Present',
    points: [
      'Architected and delivered a production-grade, parent-embedded AI assistant spanning a React experience, .NET API gateway, MCP workflow service and Analytics on Demand microservice.',
      'Built secure host-to-iframe authentication and context propagation, JWT validation, downstream token handling and streamed response normalisation.',
      'Implemented real-time AI chat with Server-Sent Events, cancellation handling and timeout protection.',
      'Designed deterministic MCP workflow checkpoints and structured tool sequencing to keep critical workflow decisions controlled by application logic.',
      'Built a natural-language analytics pipeline producing controlled SQL-driven analytics and executive-level HTML outputs.',
      'Designed scalable C#/.NET REST APIs and Angular applications supporting enterprise timetable workflows.',
      'Designed automated timetable generation using Google OR-Tools across teacher, room, subject and band constraints.',
      'Contributed to architecture, technical reviews, production support, code quality and mentoring.',
    ],
    tech: ['C#', '.NET', 'React', 'Angular', 'Azure', 'MCP', 'SSE', 'SQL Server', 'OR-Tools'],
  },
  {
    role: 'Team Leader / Senior Full-Stack Developer',
    company: 'MGT Fintec Synergies Ltd',
    period: 'Dec 2022 – Sep 2024',
    points: [
      'Led a cross-functional engineering team delivering fintech applications and enterprise full-stack solutions.',
      'Architected and developed scalable .NET Core APIs and Angular applications supporting financial data platforms.',
      'Combined hands-on engineering with architecture decisions, delivery ownership and stakeholder collaboration.',
      'Introduced TDD and clean-code practices and managed Azure infrastructure, deployment pipelines and production release processes.',
    ],
    tech: ['.NET Core', 'Angular', 'Azure', 'TDD', 'CI/CD'],
  },
  {
    role: 'Senior Front-End Engineer',
    company: 'BlackSwan Technologies',
    period: 'Jul 2021 – Dec 2022',
    points: [
      'Developed reusable Angular service libraries for authentication workflows across Azure, AWS and GCP environments.',
      'Designed scalable Angular architectures and reusable enterprise UI components.',
      'Implemented Azure Service Bus messaging patterns and Azure DevOps CI/CD pipelines.',
      'Contributed to backend microservices and AI-driven analytics integrations using Java and Python.',
    ],
    tech: ['Angular', 'Azure', 'AWS', 'GCP', 'Service Bus', 'Java', 'Python'],
  },
  {
    role: 'Senior Front-End Engineer',
    company: 'InEight',
    period: 'Feb 2020 – Jun 2021',
    points: [
      'Led migration of established enterprise applications from JavaScript/Kendo UI to React.',
      'Implemented Azure Functions and cloud integrations supporting scalable frontend and serverless workflows.',
      'Built CI/CD pipelines and infrastructure-as-code deployments using Azure DevOps and Bicep.',
      'Improved production visibility using Azure Application Insights.',
    ],
    tech: ['React', 'Azure Functions', 'Azure DevOps', 'Bicep', 'Application Insights'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'QualitApps',
    period: 'Nov 2018 – Jan 2020',
    points: [
      'Developed scalable .NET Core APIs and Angular applications for enterprise web platforms.',
      'Integrated third-party APIs, authentication services and cloud-hosted systems across Azure, AWS and GCP.',
      'Applied SOLID principles and established design patterns to improve maintainability and scalability.',
    ],
    tech: ['.NET Core', 'Angular', 'Azure', 'AWS', 'GCP'],
  },
  {
    role: 'Full-Stack Team Leader / Software Engineer',
    company: 'Siyobit Holdings',
    period: '2014 – 2018',
    points: [
      'Built Angular and .NET applications supporting real-time financial and trading platforms.',
      'Developed scalable RESTful APIs and reusable frontend components.',
      'Combined hands-on full-stack development with team leadership responsibilities.',
      'Supported CI/CD and migration from WPF applications to modern web platforms.',
    ],
    tech: ['.NET', 'Angular', 'REST APIs', 'WPF', 'CI/CD'],
  },
]

export const projects = [
  {
    title: 'Production AI Assistant & Workflow Platform',
    eyebrow: 'AI Engineering',
    description:
      'Enterprise AI capability combining a React client, .NET gateway, MCP workflow service, real-time SSE streaming and natural-language analytics while keeping authentication, data scope and workflow controls deterministic.',
    highlights: ['MCP orchestration', 'JWT / tenant scope', 'SSE streaming', 'NL-to-SQL analytics', 'Prompt & SQL guardrails'],
  },
  {
    title: 'Enterprise Timetable Optimisation',
    eyebrow: 'Constraint Optimisation',
    description:
      'Automated timetable generation using Google OR-Tools CP-SAT, translating complex operational constraints across staff, rooms, subjects, sessions and availability into maintainable optimisation logic.',
    highlights: ['C#/.NET', 'Google OR-Tools', 'CP-SAT', 'Angular', 'SQL Server'],
  },
  {
    title: 'FinTech Full-Stack Platforms',
    eyebrow: 'Technical Leadership',
    description:
      'Led and delivered financial technology applications using .NET Core, Angular, Azure, CI/CD and clean engineering practices while owning architecture, delivery and stakeholder collaboration.',
    highlights: ['.NET Core', 'Angular', 'Azure', 'TDD', 'Team leadership'],
  },
  {
    title: 'Martian Robots',
    eyebrow: 'Engineering Challenge',
    description:
      'A .NET 8 implementation of the Martian Robots problem using clear domain modelling, command-based instructions, scent preservation and automated tests.',
    highlights: ['.NET 8', 'C#', 'Clean Architecture', 'Command Pattern', 'Testing'],
    link: 'https://github.com/Cham-Thilini/MartianRobots',
  },
]
