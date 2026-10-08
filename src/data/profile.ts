import {
  PersonalProfile,
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
} from '../types/portfolio';

export const personalProfile: PersonalProfile = {
  name: 'Pulak Giri',
  navLogo: 'PULAK.',
  tagline: 'Flutter Developer · Mobile App Developer',
  heroHeadline: 'Building digital products that feel simple.',
  heroSubtext:
    "I'm Pulak Giri, a developer focused on Flutter, modern backend systems and turning practical ideas into polished applications.",
  aboutHeadline: 'Developer mindset, product thinking.',
  aboutParagraphs: [
    'I’m a BCA developer from West Bengal with a strong interest in mobile application development. My primary focus is Flutter and Dart, while I also work with backend APIs, databases and modern web technologies.',
    'I enjoy learning new technologies, solving engineering problems and taking an idea from interface to working product. I care about clean UI, reliable API integration and practical user experiences.',
  ],
  location: 'West Bengal, India',
  email: 'dev.pulakgiri@gmail.com', 
  github: 'https://github.com/pulakgiri',
  linkedin: 'https://linkedin.com/in/pulakgiri', 
  resumeUrl: '/assets/resume.pdf',
  footerText: '© 2026 Pulak Giri. Built with React.',
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Mobile Development',
    skills: [
      {
        name: 'Flutter',
        iconName: 'Smartphone',
        description:
          'Cross-platform UI toolkit for crafting high-performance mobile, web, and desktop applications from a single codebase.',
      },
      {
        name: 'Dart',
        iconName: 'Code2',
        description:
          'Client-optimized object-oriented language powering Flutter with strong null safety and sound type systems.',
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      {
        name: 'NestJS',
        iconName: 'Server',
        description:
          'Progressive Node.js framework building scalable, enterprise-grade server-side microservices and REST APIs.',
      },
      {
        name: 'Node.js',
        iconName: 'Cpu',
        description:
          'Event-driven asynchronous JavaScript runtime for constructing fast network applications and real-time backends.',
      },
      {
        name: 'PHP',
        iconName: 'FileCode',
        description:
          'Server-side scripting language for API development, CMS integrations, and robust database operations.',
      },
      {
        name: 'Laravel',
        iconName: 'Layers',
        description:
          'Expressive PHP web application framework with elegant MVC patterns, routing, authentication, and ORM.',
      },
    ],
  },
  {
    category: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        iconName: 'Database',
        description:
          'Powerful open-source object-relational database system with strong ACID compliance and structured schemas.',
      },
      {
        name: 'MySQL',
        iconName: 'HardDrive',
        description:
          'Widely adopted relational database management system optimized for reliable transactions and fast read queries.',
      },
      {
        name: 'MongoDB',
        iconName: 'Boxes',
        description:
          'Document-oriented NoSQL database engineered for high flexibility, scalable data models, and JSON-like storage.',
      },
      {
        name: 'Redis',
        iconName: 'Zap',
        description:
          'In-memory key-value data structure store used as a distributed cache, message broker, and real-time session store.',
      },
    ],
  },
  {
    category: 'Programming',
    skills: [
      {
        name: 'TypeScript',
        iconName: 'Binary',
        description:
          'Typed superset of JavaScript providing static type checking, enhanced refactoring, and code reliability.',
      },
      {
        name: 'Java',
        iconName: 'Terminal',
        description:
          'Robust object-oriented programming language foundational to Android native subsystems and core algorithms.',
      },
      {
        name: 'C',
        iconName: 'Cpu',
        description:
          'Procedural low-level systems programming language providing foundational knowledge in memory and data structures.',
      },
      {
        name: 'Python',
        iconName: 'FileTerminal',
        description:
          'Versatile high-level programming language ideal for scripting, backend automation, and data handling.',
      },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        name: 'Git',
        iconName: 'GitBranch',
        description:
          'Distributed version control system for tracking source code changes, branching, and team collaboration.',
      },
      {
        name: 'GitHub',
        iconName: 'Github',
        description:
          'Cloud hosting platform for version control, collaborative code reviews, CI/CD workflows, and issue tracking.',
      },
      {
        name: 'Postman',
        iconName: 'Send',
        description:
          'API platform for designing, testing, inspecting, and documenting RESTful endpoints and payloads.',
      },
      {
        name: 'VS Code',
        iconName: 'Monitor',
        description:
          'Lightweight, extensible code editor configured with Dart & Flutter SDK tooling for rapid mobile development.',
      },
      {
        name: 'Android Studio',
        iconName: 'AppWindow',
        description:
          'Official IDE for Android development used for device simulation, APK bundling, Profiler, and Gradle management.',
      },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'anyv-chat',
    number: '01',
    title: 'AnyV-Chat',
    type: 'Privacy-focused random voice chat',
    description:
      'A cloud-first voice-only random chat platform designed around temporary matchmaking, anonymous sessions, optional text chat and real-time communication.',
    technologies: ['Flutter', 'NestJS', 'Supabase', 'PostgreSQL', 'WebRTC'],
    links: {
      github: '', 
      demo: '', 
      details: '/projects/anyv-chat',
    },
    overview:
      'AnyV-Chat is an audio-centric communication application designed to solve privacy and friction problems in spontaneous conversations. Instead of persistent user profiles or intrusive identity tracking, AnyV-Chat connects two anonymous users into a temporary, peer-to-peer encrypted audio room, providing low-latency voice interaction with optional ephemeral messaging.',
    problem:
      'Most contemporary social and voice platforms enforce permanent profiles, phone number verification, and extensive data tracking. Users seeking spontaneous voice discussions or language practice often face privacy concerns, bloated interfaces, and high latency.',
    solution:
      'AnyV-Chat implements an ephemeral matchmaking pipeline using NestJS WebSockets paired with Supabase anonymous authentication. When two users request a session, the backend pairs them and negotiates WebRTC peer connections. All session state is temporary and purged once either participant leaves.',
    keyFeatures: [
      'Random anonymous matchmaking queue with quick pairing',
      'High-fidelity, low-latency WebRTC voice communication',
      'Optional ephemeral in-session text chat',
      'Anonymous session tokens via Supabase Auth without personal data collection',
      'Temporary session state management in memory',
      'Clean audio control toggles (Microphone Mute, Speaker Output, End Call)',
      'Cross-platform architecture engineered for Android and Web',
    ],
    architecture: {
      summary:
        'A hybrid architecture leveraging Supabase for secure anonymous identity, NestJS for signaling and pairing queues, and WebRTC for direct peer-to-peer audio transmission.',
      steps: [
        { label: 'Flutter App', sublabel: 'Mobile Client (Dart)' },
        { label: 'Supabase Auth', sublabel: 'Anonymous JWT Issuance' },
        { label: 'NestJS Backend', sublabel: 'Signaling & Matchmaking Queue' },
        { label: 'PostgreSQL', sublabel: 'Session Logging & Metrics' },
        { label: 'WebSocket / STUN', sublabel: 'ICE Candidate Exchange' },
        { label: 'WebRTC P2P', sublabel: 'Direct Encrypted Audio Stream' },
      ],
      technicalFlowText:
        'Flutter Client → Supabase Auth (Anonymous Token) → NestJS WebSocket Gateway (Pairing Pool) → PostgreSQL (Metrics) → ICE/SDP Signaling → Direct WebRTC Audio Pipeline',
    },
    developmentChallenges: [
      'Managing WebRTC peer connection state transitions cleanly across varying mobile network conditions (NAT traversal, STUN/TURN failovers).',
      'Handling sudden disconnections gracefully by alerting the remaining peer and immediate garbage collection of session resources.',
      'Achieving responsive microphone permissions and audio stream lifecycle handling across diverse Android manufacturer quirks.',
    ],
    mockupTheme: {
      accentColor: '#55D6FF',
      icon: 'Mic',
    },
  },
  {
    id: 'vidyapath',
    number: '02',
    title: 'VidyaPath',
    type: 'Educational platform',
    description:
      'A multi-platform education application connecting teachers and students with tools for batches, exams, notes, progress tracking and AI-assisted learning.',
    technologies: ['Flutter', 'Dart', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
    links: {
      github: 'https://github.com/pulakgiri/EDU_APP', 
      demo: '', 
      details: '/projects/vidyapath',
    },
    overview:
      'VidyaPath is an integrated learning management and academic collaboration ecosystem. Built for educators, tutors, and students, it consolidates day-to-day classroom activities into a streamlined mobile and web application. It eliminates scattered WhatsApp groups and disorganized drive links by offering dedicated batch hubs, interactive assessments, organized study resources, and automated analytics.',
    problem:
      'Educators and students in regional academic ecosystems often struggle with fragmented tools: assignment submissions via messaging apps, exam scheduling through spreadsheets, and notes lost in email threads, leading to poor progress visibility.',
    solution:
      'A unified Flutter application that provides dedicated role-based views (Teacher vs. Student). Backed by NestJS micro-APIs, it stores relational institutional data in PostgreSQL, rich multimedia notes in MongoDB, and caches high-frequency notifications in Redis.',
    keyFeatures: [
      'Role-based Teacher & Student dedicated dashboards',
      'Classroom batch creation, enrollment codes, and student roster management',
      'Exam creation module with objective & subjective formats and scheduled release',
      'Timed student exam participation with instant submission',
      'Categorized notes & study material sharing (PDFs, references, syllabus docs)',
      'Direct teacher-student academic connection channels',
      'Visual performance analytics and progress tracking over semesters',
      'AI-assisted study helper for question summarization and concept clarification',
      'Push notification alerts for upcoming exams and new study uploads',
      'Multi-language interface framework for regional accessibility',
    ],
    architecture: {
      summary:
        'A polyglot data layer separating relational operational entities (PostgreSQL) from unstructured academic content (MongoDB), with Redis accelerating active sessions.',
      steps: [
        { label: 'Flutter App', sublabel: 'Teacher & Student Interfaces' },
        { label: 'NestJS Core API', sublabel: 'RBAC & Business Logic Controller' },
        { label: 'PostgreSQL', sublabel: 'Batches, Enrollments & Grades' },
        { label: 'MongoDB', sublabel: 'Exam Papers, Questions & Note Vault' },
        { label: 'Redis', sublabel: 'Live Notifications & Session Caching' },
        { label: 'AI Study Service', sublabel: 'Contextual Academic Assistant' },
      ],
      technicalFlowText:
        'Flutter UI (Teacher/Student) ⇄ NestJS API Gateway ⇄ [PostgreSQL (Users & Batches) + MongoDB (Notes & Exams) + Redis (Notifications)] ⇄ AI Study Service',
    },
    developmentChallenges: [
      'Architecting a robust dual-database schema ensuring transactional integrity for grading in PostgreSQL while allowing flexible question structures in MongoDB.',
      'Developing an offline-tolerant notes viewer that caches syllabus documents locally on mobile devices with limited connectivity.',
      'Designing clean, distraction-free examination UI with anti-switch background detection.',
    ],
    mockupTheme: {
      accentColor: '#7C6CFF',
      icon: 'GraduationCap',
    },
  },
  {
    id: 'calculator-converter',
    number: '03',
    title: 'Calculator & Converter',
    type: 'Offline utility application',
    description:
      'An offline calculator and unit-converter application with scientific calculations and multiple conversion categories, built for privacy and simplicity.',
    technologies: ['Flutter', 'Dart'],
    links: {
      github: '', 
      demo: '', 
      playStore: 'https://play.google.com/store/apps/details?id=com.pulakgiri.mathcalculator', 
      details: '/projects/calculator-converter',
    },
    overview:
      'Calculator & Converter is a high-utility everyday application built with a focus on instantaneous performance, complete privacy, zero advertisements, and total offline autonomy. It brings together a standard arithmetic calculator, an advanced scientific computation engine, and a suite of ten distinct metric conversion categories in an uncluttered interface.',
    problem:
      'Most mobile calculator and unit converter apps on app stores are bloated with intrusive full-screen ads, require invasive permissions (such as location or storage), and fail or lag when operating offline.',
    solution:
      'Built purely with Flutter and Dart, the app operates 100% locally on the device with zero network calls, no user tracking, zero logins, and instant calculation responsiveness with scientific precision.',
    keyFeatures: [
      'Standard arithmetic calculator with real-time expression preview',
      'Advanced scientific calculator with trigonometry, logarithms, and powers',
      'Area converter (sq. meters, sq. feet, acres, hectares, etc.)',
      'Length converter (meters, kilometers, miles, inches, yards, etc.)',
      'Temperature converter (Celsius, Fahrenheit, Kelvin)',
      'Volume converter (liters, milliliters, gallons, cubic meters)',
      'Mass / Weight converter (kg, grams, pounds, ounces, tons)',
      'Digital data converter (bytes, KB, MB, GB, TB, PB)',
      'Speed converter (km/h, mph, m/s, knots)',
      'Time converter (seconds, minutes, hours, days, weeks, years)',
      'Dedicated Tip & Split Bill calculator with custom tip percentages',
      '100% offline operation — zero network dependencies',
      'No account registration, no telemetry, and strictly no advertisements',
    ],
    architecture: {
      summary:
        'A purely client-side reactive architecture driven by Flutter State Management and Dart mathematical evaluation engines without any external network dependency.',
      steps: [
        { label: 'Flutter UI', sublabel: 'Reactive Canvas & Theme Engine' },
        { label: 'Expression Parser', sublabel: 'Shunting-yard Algorithm in Dart' },
        { label: 'Scientific Math Engine', sublabel: 'High-Precision Math Core' },
        { label: 'Unit Conversion Matrix', sublabel: 'Base-unit normalization tables' },
        { label: 'Local Storage', sublabel: 'Calculation History & Preferences' },
      ],
      technicalFlowText:
        'Keypad Input → Lexer/Parser Engine → Scientific Evaluation / Conversion Matrix → Reactive State Display → Local Storage',
    },
    developmentChallenges: [
      'Managing floating-point arithmetic precision errors during repeated decimal conversions without scientific inaccuracy.',
      'Designing an ergonomic responsive keypad layout that works comfortably on small Android screens and large tablets alike.',
      'Implementing parentheses balancing and dynamic syntax validation in real-time as users type formulas.',
    ],
    mockupTheme: {
      accentColor: '#10B981',
      icon: 'Calculator',
    },
  },
  {
    id: 'esearch',
    number: '04',
    title: 'ESearch',
    type: 'Flutter utility application',
    description:
      'A Flutter application backed by PHP/MySQL APIs, demonstrating mobile UI development, REST API integration and database-backed workflows.',
    technologies: ['Flutter', 'PHP', 'MySQL', 'REST API'],
    links: {
      github: 'https://github.com/pulakgiri/ESearch', 
      demo: '', 
      details: '/projects/esearch',
    },
    overview:
      'ESearch is an exploration utility project designed to demonstrate clean mobile client-server architecture. It couples a snappy, reactive Flutter mobile interface with lightweight PHP REST micro-endpoints querying an optimized MySQL database, showcasing search debouncing, structured pagination, and reliable client-side caching.',
    problem:
      'Connecting mobile apps to traditional server-side relational databases often results in slow search experiences, unnecessary server load from every keystroke, and unhandled network errors.',
    solution:
      'ESearch implements an asynchronous debounced search pattern in Flutter, communicating via structured JSON with prepared PHP REST endpoints. It handles network timeouts gracefully and provides continuous infinite scrolling.',
    keyFeatures: [
      'Instant debounced multi-parameter search bar',
      'Clean RESTful API synchronization with JSON contract validation',
      'Relational MySQL backend queries with indexing for rapid responses',
      'Dynamic filter controls by category and date ranges',
      'Graceful error handling and retry states for intermittent connectivity',
      'Lightweight local search query history',
    ],
    architecture: {
      summary:
        'A classic client-server mobile pipeline linking Flutter stateful UI through RESTful HTTP payloads to PHP backend scripts backed by MySQL.',
      steps: [
        { label: 'Flutter Mobile Client', sublabel: 'Debounced Search Bar & List' },
        { label: 'HTTP / REST Layer', sublabel: 'JSON Request / Response Handler' },
        { label: 'PHP REST Endpoints', sublabel: 'Sanitization & Controller Logic' },
        { label: 'MySQL Relational DB', sublabel: 'Indexed Records & Full-text Search' },
      ],
      technicalFlowText:
        'Flutter Client (Debounce Stream) → HTTP GET / POST → PHP REST Endpoint → Prepared MySQL Query → JSON Payload → Reactive UI Render',
    },
    developmentChallenges: [
      'Preventing API spamming during rapid typing through Dart stream transformers and Rx-like debounce operators.',
      'Standardizing consistent error codes and HTTP responses between PHP scripts and the Flutter HTTP client.',
    ],
    mockupTheme: {
      accentColor: '#F59E0B',
      icon: 'Search',
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Flutter Developer Intern',
    company: 'Least Action Company', 
    period: 'APRIL 08, 2026 –  JULY 08, 2026', 
    duration: '3+ Months',
    description:
      'Worked on Flutter application development, responsive UI, API integration, debugging and backend-connected workflows.',
    technologies: [
      'Flutter',
      'Dart',
      'REST APIs',
      'Git',
      'Debugging',
      'Backend integration',
    ],
    responsibilities: [
      'Engineered responsive, pixel-clean mobile user interfaces using Flutter widgets and Dart following modern UI/UX guidelines.',
      'Integrated asynchronous RESTful backend endpoints with robust JSON serialization, state management, and error handling.',
      'Diagnosed bugs, profiled app performance, and eliminated layout rebuilds across multiple target Android devices.',
      'Participated in Git code versioning, branch management, and feature lifecycle development.',
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Contai College of Learning & Management Science',
    boardOrAffiliation: 'MAKAUT, West Bengal',
    period: '2023 – 2026',
    academicResults: [
      { label: 'Semester 1', score: '7.36 SGPA' },
      { label: 'Semester 2', score: '6.68 SGPA' },
      { label: 'Semester 3', score: '6.67 SGPA' },
      { label: 'Semester 4', score: '6.09 SGPA' },
      { label: 'Semester 5', score: '7.09 SGPA' },
    ],
    scoreSummary: 'Current Academic Standing: 7.36 / 6.68 / 6.67 SGPA',
  },
  {
    degree: 'Higher Secondary (10+2)',
    institution: 'Sabajput Sambodhi Sikshatirtha',
    boardOrAffiliation: 'West Bengal Council of Higher Secondary Education',
    period: '2021 – 2023',
    academicResults: [{ label: 'Board Percentage', score: '59%' }],
    scoreSummary: 'Completed with 59% aggregate',
  },
];
