export const profile = {
  name: 'Cham Madamperuma',
  role: 'Senior Full-Stack Software Engineer',
  location: 'London, UK',
  phone: '+447467896526',
  email: 'eng.cham.net@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chamaramadamperuma/',
  github: 'https://github.com/Cham-Thilini',
  photo: './profile-hero.jpg',
  cv: './Cham-Madamperuma-CV.pdf',
  intro:
    'Senior Full-Stack Software Engineer based in London, with 12+ years of experience building enterprise applications across SaaS, fintech, education technology, AI-enabled analytics and optimisation.',
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
    company: 'Bromcom',
    role: 'Senior Full-Stack Software Engineer',
    period: 'October 2024 – Present | London',
    intro:
      'At Bromcom, I work across an established enterprise Management Information System where new functionality needs to operate alongside existing business processes, security boundaries, application architecture and large amounts of operational data. My responsibilities span traditional enterprise full-stack development, complex timetable optimisation and, more recently, production AI engineering.',
    sections: [
      {
        title: 'Production AI & Intelligent Systems',
        items: [
          'Architected and delivered a production AI assistant embedded within the existing enterprise MIS rather than developing AI as a separate proof of concept.',
          'Worked across the complete AI application architecture, including the React user experience, .NET API gateway, MCP workflow service and Analytics on Demand services.',
          'Designed the integration between the established host application and the embedded React AI experience, allowing authentication and application context to move between the two environments through defined postMessage contracts.',
          'Developed backend gateway functionality responsible for validating JWTs and resolving school and domain scope before requests were allowed to continue into downstream AI services.',
          'Designed the integration so AI functionality remained subject to existing application security boundaries rather than becoming an alternative route around enterprise authentication and data-access controls.',
          'Implemented real-time AI communication using Server-Sent Events, allowing long-running operations to stream status and results to the user rather than relying entirely on blocking request/response interactions.',
          'Added cancellation handling so unnecessary AI operations could be stopped when the user no longer required the result.',
          'Added timeout protection and controlled response handling to prevent long-running downstream operations from leaving the application indefinitely waiting for a response.',
          'Designed an MCP tool-server around a deterministic report-building state machine rather than allowing the language model to control the entire workflow independently.',
          'Introduced structured Action Required checkpoints so application logic could determine when user input or another controlled action was required before an AI workflow could proceed.',
          'Applied strict tool sequencing so important business workflow transitions remained governed by software rules.',
          'Worked on separating probabilistic AI behaviour from deterministic application behaviour, using AI where language interpretation and generation added value while keeping security, workflow and data-access decisions controlled by application code.',
        ],
      },
      {
        title: 'Natural-Language Analytics',
        items: [
          'Built an Analytics on Demand orchestration pipeline capable of translating natural-language requests into SQL-driven enterprise analytics.',
          'Worked on the complete flow from conversational user requests through classification, domain-specific processing, SQL generation, validation, execution and presentation of results.',
          'Introduced domain-specific processing so requests could be interpreted within the correct business context rather than using one unrestricted analytics workflow.',
          'Applied cross-domain restrictions to reduce the possibility of requests accessing or combining inappropriate areas of enterprise data.',
          'Implemented date-filter gating and other request constraints to ensure analytics operations followed the requirements of the selected analytical domain.',
          'Applied SQL safety guardrails around generated queries instead of executing AI-generated SQL without application-level validation.',
          'Designed structured communication between AI tools and the user interface so generated behaviour could be translated into predictable application states.',
          'Helped make enterprise information accessible through natural-language interaction while maintaining controlled access to the underlying data.',
        ],
      },
      {
        title: 'Business & User Impact',
        items: [
          'Helped introduce conversational AI capabilities into an established enterprise product while preserving the security and operational controls expected from the wider SaaS platform.',
          'Enabled users to interact with complex enterprise information using natural language rather than requiring every analytical question to be represented by a predefined screen or report.',
          'Helped bridge conversational AI with existing enterprise data through a controlled analytics pipeline rather than exposing direct unrestricted database access.',
          'Improved the experience of long-running AI operations by streaming progress and responses back to the application.',
          'Built failure handling, cancellation and timeout behaviour into the architecture so AI functionality could behave like a production application capability rather than an experimental integration.',
          'Created application-level boundaries around AI behaviour, helping make rapidly evolving AI technology more suitable for integration into an established enterprise product.',
        ],
      },
      {
        title: 'Timetable Optimisation & Complex Business Rules',
        items: [
          'Designed and developed scalable C#/.NET APIs supporting enterprise timetable and scheduling workflows.',
          'Developed reactive Angular functionality supporting complex timetable configuration and scheduling operations.',
          'Worked across backend services, frontend applications, APIs and SQL-backed functionality rather than operating within only one application layer.',
          'Designed automated timetable generation using Google OR-Tools CP-SAT.',
          'Modelled scheduling constraints around teacher availability so resources could not be allocated where they were unavailable.',
          'Modelled room allocation and resource conflicts to prevent incompatible timetable assignments.',
          'Worked with subject, year-group and band constraints that influence when and how sessions can be scheduled.',
          'Supported fixed-session behaviour where particular timetable activities already have predefined positions.',
          'Worked with linked and joined scheduling requirements where multiple sessions or resources need coordinated placement.',
          'Modelled preferred, undesirable and unavailable scheduling periods.',
          'Worked with subject relationships including ordering and continuity requirements.',
          'Supported scheduling rules involving consecutive and non-consecutive sessions.',
          'Worked with morning/afternoon balancing requirements to avoid poor distribution of activities across a timetable.',
          'Translated operational scheduling requirements into deterministic constraint logic that an optimisation solver could evaluate.',
          'Worked with optimisation across thousands of possible scheduling permutations rather than attempting to solve the problem through simple sequential rules.',
          'Balanced solver capability with application maintainability so complex optimisation logic could remain understandable within the wider enterprise platform.',
        ],
      },
      {
        title: 'Business & User Impact',
        items: [
          'Helped transform a highly constrained scheduling problem into an automated optimisation workflow.',
          'Allowed the system to evaluate large numbers of scheduling possibilities while simultaneously considering operational rules around teachers, rooms, subjects and groups.',
          'Reduced the need for every scheduling relationship to be resolved manually by allowing optimisation software to identify viable timetable combinations.',
          'Helped translate specialist timetable knowledge into reusable application rules rather than leaving important constraints dependent entirely on manual decision-making.',
          'Supported users working with complex scheduling scenarios where individual decisions can affect many other resources and sessions.',
        ],
      },
      {
        title: 'Enterprise Full-Stack Engineering',
        items: [
          'Develop and maintain enterprise C#/.NET REST APIs.',
          'Build and support Angular and React functionality within established production applications.',
          'Work with SQL Server-backed workflows and application data.',
          'Work across distributed application components where functionality crosses frontend, API and service boundaries.',
          'Investigate issues across the complete application stack rather than treating frontend, backend and database behaviour independently.',
          'Diagnose production and platform bottlenecks across application and integration layers.',
          'Contribute to cloud-native CI/CD delivery pipelines.',
          'Work with automated monitoring and production diagnostics.',
          'Participate in technical reviews and architectural discussions.',
          'Review implementation approaches with maintainability and long-term application evolution in mind.',
          'Support engineers through code reviews and technical discussions.',
          'Balance new technology adoption with the requirements of an established SaaS platform.',
        ],
      },
      {
        title: 'Engineering Outcome',
        paragraph:
          'My work at Bromcom has strengthened my ability to operate across several levels of engineering simultaneously: Product problem → Architecture → Backend → Frontend → Data → Cloud → Production. It has also given me practical experience integrating emerging AI capabilities into enterprise software without abandoning established engineering principles around security, reliability, maintainability and operational control.',
      },
    ],
  },
  {
    company: 'MGT Fintec Synergies Ltd',
    role: 'Team Leader / Senior Full-Stack Developer',
    period: 'December 2022 – September 2024 | London',
    intro:
      'At MGT Fintec, I combined hands-on full-stack development with team leadership and delivery ownership within a financial technology environment. The role required me to think beyond individual implementation tasks and consider how technical decisions affected the team, product, release process and long-term maintainability of the applications.',
    sections: [
      {
        title: 'Full-Stack Engineering',
        items: [
          'Architected and developed scalable .NET Core APIs supporting financial and operational applications.',
          'Developed Angular applications used to interact with financial data and business workflows.',
          'Worked across backend APIs, frontend applications and application integrations.',
          'Translated financial and operational requirements into implementable technical designs.',
          'Worked with product owners and business stakeholders to clarify requirements before implementation.',
          'Helped break larger business requirements into technical components that could be delivered incrementally.',
          'Made architectural decisions with consideration for maintainability and future application growth.',
          'Worked across the complete feature lifecycle rather than handing responsibility between isolated technical teams.',
        ],
      },
      {
        title: 'Technical Leadership',
        items: [
          'Led a cross-functional engineering team delivering fintech and enterprise full-stack solutions.',
          'Remained hands-on with development while taking responsibility for wider technical direction.',
          'Supported engineers when resolving difficult implementation and architectural problems.',
          'Conducted code reviews to improve consistency, maintainability and engineering quality.',
          'Discussed implementation alternatives with developers rather than simply prescribing solutions.',
          'Helped translate business requirements into technical work that the engineering team could understand and deliver.',
          'Balanced delivery pressure with the need to maintain engineering quality.',
          'Worked with stakeholders to ensure technical implementation remained aligned with actual business requirements.',
          'Helped create an environment where engineering decisions could be discussed rather than being owned entirely by one individual.',
        ],
      },
      {
        title: 'Engineering Quality',
        items: [
          'Introduced TDD practices into the team’s development approach.',
          'Promoted clean-code principles to make application behaviour easier to understand and modify.',
          'Used automated testing to make changes safer and reduce regression-related problems.',
          'Encouraged maintainability to be considered during implementation rather than treated as future technical debt.',
          'Applied architectural and coding practices that allowed applications to evolve as requirements changed.',
          'Supported quality through code review, testing and shared technical discussion.',
        ],
      },
      {
        title: 'Azure, CI/CD & Production Ownership',
        items: [
          'Managed Azure infrastructure supporting the applications delivered by the team.',
          'Worked with deployment pipelines and automated release processes.',
          'Supported production releases rather than limiting responsibility to development environments.',
          'Considered configuration and deployment as part of application engineering.',
          'Supported applications after release and participated in resolving production problems.',
          'Worked across requirements, technical design, implementation, testing, deployment and production operation.',
        ],
      },
      {
        title: 'Business & Team Impact',
        items: [
          'Helped connect product and business requirements with practical engineering implementation.',
          'Improved maintainability and reduced regression-related issues through stronger TDD and clean-code practices.',
          'Created greater technical ownership across the delivery lifecycle by connecting development with Azure infrastructure and production releases.',
          'Helped the team deliver financial technology solutions while maintaining attention to quality and long-term maintainability.',
          'Supported other engineers through technical guidance and code review while remaining actively involved in delivery.',
        ],
      },
    ],
  },
  {
    company: 'BlackSwan Technologies',
    role: 'Senior Front-End Engineer',
    period: 'July 2021 – December 2022',
    intro:
      'At BlackSwan Technologies, my work focused on enterprise frontend architecture but regularly crossed into cloud integration, messaging, backend services and AI-driven analytics. The environment strengthened my understanding of how modern frontend applications operate as one part of a larger distributed system.',
    sections: [
      {
        title: 'Angular Architecture',
        items: [
          'Developed reusable Angular service libraries for enterprise applications.',
          'Designed reusable authentication functionality rather than duplicating authentication behaviour across multiple application areas.',
          'Worked with authentication workflows spanning Azure, AWS and GCP environments.',
          'Designed scalable Angular application structures intended to support larger enterprise applications.',
          'Developed reusable UI components to improve consistency across the application.',
          'Applied object-oriented engineering principles within frontend architecture.',
          'Worked with TypeScript and Angular patterns designed for maintainability as applications evolved.',
          'Considered how shared frontend services could reduce duplication and simplify future development.',
        ],
      },
      {
        title: 'Distributed Systems & Cloud',
        items: [
          'Worked with Azure Service Bus messaging supporting asynchronous communication between distributed components.',
          'Developed frontend functionality that interacted with distributed backend systems rather than simple synchronous APIs.',
          'Gained practical experience working across application boundaries where operations may complete asynchronously.',
          'Built Azure DevOps CI/CD pipelines supporting repeatable application deployment.',
          'Worked with systems integrating multiple cloud environments.',
        ],
      },
      {
        title: 'Broader Engineering Contribution',
        items: [
          'Contributed beyond frontend development to backend microservices.',
          'Worked with Java services as part of distributed application functionality.',
          'Contributed to AI-driven analytics integrations using Python.',
          'Collaborated across frontend and backend boundaries to understand complete feature behaviour.',
        ],
      },
      {
        title: 'Engineering & Business Impact',
        items: [
          'Improved reuse across enterprise Angular applications through shared services and UI components.',
          'Helped create more consistent authentication behaviour across applications interacting with multiple cloud environments.',
          'Supported asynchronous system integration through Azure Service Bus.',
          'Improved repeatability of deployment through Azure DevOps CI/CD pipelines.',
          'Expanded frontend functionality within a broader distributed architecture rather than treating the browser as an isolated application.',
          'Developed experience across Java, Python and cloud services that strengthened my later transition back into broader full-stack and AI engineering responsibilities.',
        ],
      },
    ],
  },
  {
    company: 'InEight',
    role: 'Senior Front-End Engineer',
    period: 'February 2020 – June 2021',
    intro:
      'At InEight, I worked on modernising established enterprise applications and improving the surrounding cloud delivery and production-monitoring capabilities. The role provided valuable experience with one of the most difficult challenges in enterprise engineering: changing the technology underneath an established product without unnecessarily disrupting the product itself.',
    sections: [
      {
        title: 'Application Modernisation',
        items: [
          'Led migration work from established JavaScript/Kendo UI applications toward React.',
          'Developed modern React application functionality as part of the migration.',
          'Worked with existing application behaviour that needed to remain functional during modernisation.',
          'Helped move functionality incrementally rather than treating modernisation as a simple technology replacement exercise.',
          'Considered maintainability and user experience while moving established functionality toward a modern frontend architecture.',
          'Worked with reusable frontend approaches that supported continued application evolution.',
        ],
      },
      {
        title: 'Azure & Serverless Engineering',
        items: [
          'Implemented Azure Functions supporting application and integration workflows.',
          'Worked with cloud integrations connecting frontend applications with serverless capabilities.',
          'Used Azure services as part of scalable application workflows.',
        ],
      },
      {
        title: 'DevOps & Infrastructure',
        items: [
          'Developed CI/CD pipelines using Azure DevOps.',
          'Worked with infrastructure-as-code using Bicep.',
          'Helped make infrastructure configuration repeatable rather than dependent on manual environment setup.',
          'Connected application development with deployment and infrastructure concerns.',
        ],
      },
      {
        title: 'Observability',
        items: [
          'Worked with Azure Application Insights to improve production visibility.',
          'Supported performance monitoring of deployed applications.',
          'Improved the ability to diagnose application and operational issues using production telemetry.',
        ],
      },
      {
        title: 'Engineering & Business Impact',
        items: [
          'Helped modernise established enterprise applications from JavaScript/Kendo UI toward React.',
          'Improved maintainability and user experience as part of the modernisation effort.',
          'Supported incremental evolution of existing applications rather than requiring complete replacement before users could benefit.',
          'Improved repeatability of application deployment through CI/CD.',
          'Improved infrastructure consistency using Bicep.',
          'Strengthened production visibility through Application Insights.',
          'Helped connect frontend modernisation with the wider cloud delivery and operational lifecycle.',
        ],
      },
    ],
  },
  {
    company: 'QualitApps',
    role: 'Senior Software Engineer',
    period: 'November 2018 – January 2020',
    intro:
      'At QualitApps, I worked as a full-stack engineer developing enterprise web platforms using .NET Core and Angular. This role strengthened the C#/.NET and modern web engineering foundation that continues to form a major part of my technical profile.',
    sections: [
      {
        title: 'Backend Engineering',
        items: [
          'Developed scalable .NET Core APIs for enterprise applications.',
          'Built REST-based application functionality supporting frontend and integration requirements.',
          'Implemented business functionality across backend services.',
          'Worked with authentication and external system integrations.',
          'Applied SOLID principles when structuring application code.',
          'Used established design patterns where they improved maintainability and application evolution.',
        ],
      },
      {
        title: 'Frontend Engineering',
        items: [
          'Developed Angular applications for enterprise web platforms.',
          'Worked across both backend and frontend functionality rather than being restricted to one technical layer.',
          'Integrated frontend functionality with .NET Core APIs and external services.',
          'Built application functionality with maintainability and scalability in mind.',
        ],
      },
      {
        title: 'Integration & Cloud',
        items: [
          'Integrated third-party APIs into enterprise applications.',
          'Worked with external authentication services.',
          'Integrated cloud-hosted systems across Azure.',
          'Worked with AWS integrations.',
          'Worked with GCP integrations.',
          'Developed experience handling application functionality across organisational and cloud boundaries.',
        ],
      },
      {
        title: 'Engineering Impact',
        items: [
          'Helped deliver full-stack enterprise functionality from API through user interface.',
          'Improved maintainability by applying SOLID principles and appropriate design patterns.',
          'Enabled applications to interact with third-party services and multiple cloud environments.',
          'Strengthened the architectural foundations required for applications to continue evolving as functionality expanded.',
          'Developed broader experience in authentication and cloud integration that became increasingly important in my later distributed-system work.',
        ],
      },
    ],
  },
  {
    company: 'Siyobit Holdings',
    role: 'Full-Stack Team Leader / Software Engineer',
    period: '2014 – 2018',
    intro:
      'At Siyobit, I developed much of the full-stack engineering and technical leadership foundation that I continue to use today. I worked with financial and trading platforms where application reliability and controlled evolution were important because software supported business-critical workflows.',
    sections: [
      {
        title: 'Full-Stack Development',
        items: [
          'Built .NET applications supporting financial and trading platforms.',
          'Developed Angular applications for modern web-based functionality.',
          'Designed and implemented RESTful APIs.',
          'Built reusable frontend components.',
          'Worked across backend and frontend application layers.',
          'Developed functionality supporting real-time financial and trading environments.',
          'Worked with established applications where new functionality needed to coexist with existing business behaviour.',
        ],
      },
      {
        title: 'Application Modernisation',
        items: [
          'Contributed to migration from desktop WPF applications toward modern web platforms.',
          'Helped translate established desktop workflows into web-based application experiences.',
          'Worked with existing business functionality rather than treating modernisation as a complete restart.',
          'Helped preserve important application behaviour while introducing newer web technologies.',
          'Gained early experience with incremental application evolution and legacy modernisation.',
        ],
      },
      {
        title: 'Delivery & Production',
        items: [
          'Supported CI/CD deployments.',
          'Worked with software where reliability was an important engineering consideration.',
          'Considered maintainability as applications continued to evolve.',
          'Supported controlled application change rather than introducing unnecessary disruption into established financial systems.',
        ],
      },
      {
        title: 'Technical Leadership',
        items: [
          'Combined hands-on development with team leadership responsibilities.',
          'Supported other developers while continuing to contribute directly to application implementation.',
          'Participated in technical decision-making across full-stack application development.',
          'Developed early experience balancing individual engineering responsibilities with wider team delivery.',
        ],
      },
      {
        title: 'Business & Engineering Impact',
        items: [
          'Helped deliver and maintain business-critical financial and trading software.',
          'Supported the transition from desktop technology toward modern web platforms.',
          'Helped create reusable frontend and API functionality for continued product development.',
          'Contributed to application evolution while maintaining attention to reliability and existing business workflows.',
          'Established the combination of hands-on engineering and technical leadership that later developed into senior and Team Leader responsibilities.',
        ],
      },
    ],
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
