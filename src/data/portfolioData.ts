import type { Project, SkillCategory, LearningItem, EducationItem, ContactTopic } from './types';

export const PERSONAL_INFO = {
  name: 'Shiven Mhatre',
  roleHeadline: 'CSE Student. Developer. Builder.',
  tagline: 'Building software, exploring AI, and turning ideas into real-world projects.',
  bioParagraph1:
    'I am a first-year Computer Science & Engineering undergraduate at IIIT Bhubaneswar with an active passion for engineering robust software, understanding computational systems, and experimenting with modern AI workflows.',
  bioParagraph2:
    'Rather than relying on generic tutorials, I believe in learning by shipping code—from crafting clean frontends and modular REST backends to implementing data structures from scratch. I am continuously improving my problem-solving fundamentals and exploring how intelligent systems can solve tangible problems.',
  college: 'IIIT Bhubaneswar',
  degree: 'B.Tech in Computer Science & Engineering',
  batch: '2026 – Present',
  location: 'Bhubaneswar, India',
  
  email: 'shiveniiitbbsr@gmail.com',
  emailPlaceholder: 'shiveniiitbbsr@gmail.com',
  isEmailPlaceholder: false,
  
  socials: {
    github: 'https://github.com/shivenmhatre23-cell',
    linkedin: 'https://www.linkedin.com/in/shiven-mhatre-212a63434/',
  },
  
  status: {
    badge: 'Available for Hackathons & Collaborations',
    activelyLearning: 'Data Structures & Algorithms in C++ and FastAPI architectures',
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Foundational languages used for systems programming, problem solving, and scripting.',
    skills: [
      { name: 'C', level: 'Building With', highlight: false },
      { name: 'C++', level: 'Practicing', highlight: true },
      { name: 'Python', level: 'Building With', highlight: true },
      { name: 'JavaScript', level: 'Building With', highlight: true },
    ],
  },
  {
    title: 'Web Development',
    description: 'Modern front-end tooling and component architecture for responsive user interfaces.',
    skills: [
      { name: 'HTML', level: 'Building With', highlight: false },
      { name: 'CSS', level: 'Building With', highlight: false },
      { name: 'React', level: 'Building With', highlight: true },
      { name: 'Next.js', level: 'Practicing', highlight: true },
    ],
  },
  {
    title: 'Backend & Data',
    description: 'Server frameworks, relational data persistence, and API design.',
    skills: [
      { name: 'FastAPI', level: 'Building With', highlight: true },
      { name: 'REST APIs', level: 'Building With', highlight: true },
      { name: 'PostgreSQL', level: 'Practicing', highlight: true },
      { name: 'Alembic', level: 'Practicing', highlight: false },
    ],
  },
  {
    title: 'Developer Tools',
    description: 'Daily workflow, version control, and development environments.',
    skills: [
      { name: 'Git', level: 'Building With', highlight: true },
      { name: 'GitHub', level: 'Building With', highlight: true },
      { name: 'VS Code', level: 'Building With', highlight: false },
    ],
  },
  {
    title: 'Areas of Interest',
    description: 'Domains I am actively exploring, studying, and building towards.',
    skills: [
      { name: 'Artificial Intelligence', level: 'Practicing', highlight: true },
      { name: 'Machine Learning', level: 'Learning', highlight: true },
      { name: 'Data Structures & Algorithms', level: 'Practicing', highlight: true },
      { name: 'Competitive Programming', level: 'Practicing', highlight: false },
      { name: 'Software Engineering', level: 'Building With', highlight: true },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'frosted-fine-cakes',
    title: 'Frosted & Fine Cakes',
    category: 'Web Application',
    description:
      'A responsive website built for a made-to-order eggless bakery, with a clean product browsing experience and an order/customization flow.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      'Mobile-first responsive layout with fluid grid product displays',
      'Interactive catalog with category filters and product preview states',
      'Clean order inquiry workflow tailored for made-to-order bakery customers',
      'Optimized asset loading and pure vanilla web standard performance',
    ],
    githubUrl: 'https://github.com/shivenmhatre23-cell/frosted-fine-cakes',
    liveUrl: 'https://frosted-and-fine-cakes.netlify.app/',
  },
  {
    id: 'careeros',
    title: 'CareerOS',
    category: 'Backend & Systems',
    description:
      'A career-focused application exploring backend architecture, APIs, authentication, and structured data management.',
    technologies: ['FastAPI', 'PostgreSQL', 'Alembic'],
    keyFeatures: [
      'Asynchronous REST endpoints powered by FastAPI and Pydantic validation',
      'Relational PostgreSQL schema managed with SQLAlchemy ORM models',
      'Version-controlled database schema migrations powered by Alembic',
      'Modular service architecture with clean separation of data and business logic',
    ],
  },
  {
    id: 'fintrack-ai',
    title: 'FinTrack AI',
    category: 'AI & Fullstack',
    description:
      'A modern financial tracking project exploring an AI-assisted approach to personal finance.',
    technologies: ['React', 'TanStack Start', 'Tailwind CSS'],
    keyFeatures: [
      'Full-stack architecture with TanStack Start and modern React',
      'Interactive ledger for transaction logging and budget visualization',
      'Exploration of AI heuristics for automated expense tagging',
      'Responsive dark-mode UI styled with custom Tailwind CSS tokens',
    ],
    githubUrl: 'https://github.com/shivenmhatre23-cell/FinTrack-AI',
    liveUrl: 'https://fintrack-ai.pages.dev/',
  },
  {
    id: 'scorepulse',
    title: 'ScorePulse',
    category: 'Fullstack Web App',
    description:
      'A sports score application built with a modern Next.js architecture and a provider-based approach to sports data.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    keyFeatures: [
      'Sports-data provider abstraction designed for seamless integration with live sports feeds',
      'Robust mock data fixture pipeline utilized during development for rapid iteration',
      'Server-side rendering (SSR) and responsive match timeline components',
      'Accessible score display cards optimized for mobile and desktop screens',
    ],
  },
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    id: 'cpp',
    topic: 'C++',
    category: 'Core Language',
    status: 'In Active Study',
    summary: 'Focusing on standard C++ syntax, object-oriented principles, memory management, pointers, and the Standard Template Library (STL).',
    keyConcepts: ['Pointers & References', 'Object-Oriented Design', 'STL Containers & Iterators', 'Memory Model'],
  },
  {
    id: 'dsa',
    topic: 'Data Structures & Algorithms',
    category: 'Algorithms',
    status: 'Continuous Practice',
    summary: 'Building strong computational intuition by solving fundamental to intermediate problems and analyzing time/space complexities.',
    keyConcepts: ['Arrays & Two Pointers', 'Linked Lists & Stacks', 'Recursion & Backtracking', 'Trees & Binary Search'],
  },
  {
    id: 'backend-dev',
    topic: 'Backend Development',
    category: 'Backend & Data',
    status: 'Building Projects',
    summary: 'Understanding the lifecycle of server requests, asynchronous I/O, middleware, dependency injection, and scalable application structure.',
    keyConcepts: ['Async Request Handling', 'Middleware & Authentication', 'Modular Routing', 'Error Boundaries'],
  },
  {
    id: 'apis-databases',
    topic: 'APIs & Databases',
    category: 'Backend & Data',
    status: 'Building Projects',
    summary: 'Designing clean RESTful API contracts, relational schemas in PostgreSQL, connection pooling, and schema migration strategies with Alembic.',
    keyConcepts: ['RESTful Standards', 'PostgreSQL Normalization', 'SQLAlchemy ORM', 'Alembic Migrations'],
  },
  {
    id: 'git-github',
    topic: 'Git & GitHub',
    category: 'Tools & AI',
    status: 'Continuous Practice',
    summary: 'Practicing professional version control hygiene: atomic commits, semantic commit messages, branching strategies, and merge conflict resolution.',
    keyConcepts: ['Branching & Merging', 'Pull Request Workflows', 'Rebasing & History', 'Git CLI Proficiency'],
  },
  {
    id: 'aiml-fundamentals',
    topic: 'AI/ML Fundamentals',
    category: 'Tools & AI',
    status: 'In Active Study',
    summary: 'Studying core mathematical foundations, Python data/ML libraries, and experimenting with LLM APIs and prompt engineering patterns.',
    keyConcepts: ['Linear Algebra Basics', 'Supervised Learning Concepts', 'API Integration (LLMs)', 'Data Preprocessing'],
  },
  {
    id: 'competitive-programming',
    topic: 'Competitive Programming',
    category: 'Algorithms',
    status: 'Continuous Practice',
    summary: 'Refining speed, precision, and edge-case handling under strict time limits on platforms like LeetCode and Codeforces.',
    keyConcepts: ['Time & Space Complexity', 'Number Theory Basics', 'Greedy Techniques', 'Binary Search Patterns'],
  },
];

export const EDUCATION_DATA: EducationItem = {
  institution: 'IIIT Bhubaneswar',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science & Engineering',
  period: '2026 – Present',
  location: 'Bhubaneswar, Odisha, India',
  summary:
    'Undergraduate computer science studies focusing on foundational computing theory, mathematical problem solving, systems programming, and active collaboration in tech communities.',
  highlights: [
    'International Institute of Information Technology (IIIT) Bhubaneswar',
    'Core coursework in Programming, Discrete Mathematics, and Computer Science foundations',
    'Actively participating in student developer initiatives, coding clubs, and technical hackathons',
  ],
};

export const COLLABORATION_AREAS: ContactTopic[] = [
  {
    title: 'Hackathons & Competitions',
    description: 'Looking to form or join driven teams to build innovative solutions under fast-paced hackathon environments.',
    iconName: 'Trophy',
  },
  {
    title: 'Open Source & Projects',
    description: 'Excited to collaborate on web apps, backend APIs, developer tools, or AI experiments.',
    iconName: 'GitPullRequest',
  },
  {
    title: 'Learning & Peer Study',
    description: 'Always eager to connect with fellow students and engineers practicing DSA, CP, or modern web systems.',
    iconName: 'BookOpen',
  },
  {
    title: 'Internship Opportunities',
    description: 'Actively preparing and open to technical internships where I can contribute code, learn from mentors, and grow.',
    iconName: 'Briefcase',
  },
];
