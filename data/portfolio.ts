// ============================================================
// PORTFOLIO DATA - Single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Asif Hossain",
  role: "Full-Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "contact@asifhossain.dev",
  location: "Wollongong, NSW, Australia",
  github: "https://github.com/Rafin31",
  linkedin: "https://www.linkedin.com/in/asif-hossain-6982b81ba/",
  fiverr: "https://www.fiverr.com/rafin_31",
  bio: `I'm a passionate Full-Stack Developer and Software Engineer with 3+ years of professional experience building scalable, high-performance web applications. Having completed my Master's in Computer Science (Software Engineering) at the University of Wollongong, I bring a strong blend of academic excellence and real-world engineering expertise.

I specialise in React.js, Next.js, Node.js, and cloud-based solutions. I've successfully delivered 50+ projects on Fiverr with 100% client satisfaction, and developed a full-scale Medical Supplier Management System for a US-based client, reducing admin workload by 60% through smart automation.

I thrive in agile environments, enjoy solving complex problems, and am always eager to learn and contribute to meaningful projects.`,
}

// ============================================================
// SKILLS
// ============================================================
export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "tools"

export interface Skill {
  name: string
  icon?: string // react-icons name (for display)
}

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "tools", label: "Tools" },
]

export const skills: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript (ES6+)" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "TailwindCSS" },
    { name: "Bootstrap" },
    { name: "Responsive Design" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Python" },
    { name: "RESTful APIs" },
    { name: "Microservices" },
    { name: "JWT Auth" },
    { name: "OAuth 2.0" },
    { name: "RBAC" },
  ],
  database: [
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Firebase" },
    { name: "SQL" },
  ],
  devops: [
    { name: "AWS EC2" },
    { name: "AWS S3" },
    { name: "AWS Lambda" },
    { name: "Docker" },
    { name: "GitHub Actions" },
    { name: "CI/CD" },
    { name: "Netlify" },
    { name: "Heroku" },
    { name: "Railway" },
    { name: "CPanel" },
  ],
  tools: [
    { name: "Git" },
    { name: "Jira" },
    { name: "Postman" },
    { name: "Jest" },
    { name: "Linux/Ubuntu" },
    { name: "Agile/Scrum" },
    { name: "SDLC" },
    { name: "Unit Testing" },
    { name: "Integration Testing" },
    { name: "Web3.js" },
    { name: "Socket.io" },
    { name: "Solidity" },
  ],
}

// ============================================================
// EXPERIENCE
// ============================================================
export interface Experience {
  id: number
  role: string
  company: string
  location: string
  duration: string
  type: string
  description: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Web Application Developer",
    company: "Mendoza Brothers Holdings, LLC",
    location: "Florida, USA",
    duration: "Dec 2022 – Jun 2024",
    type: "Contract",
    description: [
      "Designed and developed a full-scale Medical Supplier Management System from scratch",
      "Automated bulk dataset upload/download with Excel integration, reducing admin workload by 60%",
      "Integrated a real-time chat system, reducing issue resolution time by 35%",
      "Built a secure Node.js backend with JWT authentication and Role-Based Access Control (RBAC)",
      "Collaborated with stakeholders using Agile/Scrum methodology across distributed teams",
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Excel Integration", "JWT", "REST APIs", "Agile", "Postman"],
  },
  {
    id: 2,
    role: "Freelance Software Engineer",
    company: "Fiverr",
    location: "Remote (Global)",
    duration: "Feb 2021 – Sept 2023",
    type: "Freelance",
    description: [
      "Delivered 50+ client projects with 100% satisfaction rate and consistent 5-star reviews",
      "Built 10+ full-stack web applications across e-commerce, real estate, and SaaS domains",
      "Worked with international clients from UK, USA, Australia, and Asia",
      "Integrated payment gateways, authentication systems, and third-party APIs",
      "Maintained clear communication and delivered projects ahead of deadlines",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "AWS", "TailwindCSS", "GitHub Actions"],
  },
  {
    id: 3,
    role: "Teaching Assistant – Computer Science",
    company: "AIUB",
    location: "Dhaka, Bangladesh",
    duration: "Sept 2021 – Dec 2021",
    type: "Part-time",
    description: [
      "Mentored 30+ undergraduate students in coding fundamentals and debugging techniques",
      "Assisted in lab sessions for programming courses",
      "Helped students understand algorithms, data structures, and software development concepts",
    ],
    tech: ["C", "C++", "Java", "Algorithms", "Data Structures"],
  },
]

// ============================================================
// PROJECTS
// ============================================================
export type ProjectCategory = "all" | "fullstack" | "blockchain" | "freelance" | "frontend" | "backend"

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory[]
  tech: string[]
  github: string
  demo: string
  gradient: string // Tailwind gradient classes for fallback / detail hero
  highlight?: string // Featured text
  featured?: boolean // Show "Featured" badge on the card
  ongoing?: boolean // Show pulsing "Ongoing" badge — project is actively in development
  imagekitFolder?: string // Subfolder name in ImageKit "Portfolio Projects Images"
  imagekitSnapshots?: number // How many snapshot images exist (snapshot1 … snapshotN)
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "medical-supplier-management-system",
    title: "Medical Supplier Management System",
    description: "Full-stack web app for managing medical supplier orders, staff, and workflows with real-time chat.",
    longDescription:
      "Built for Mendoza Brothers Holdings, this enterprise-grade system streamlines supplier workflows, order tracking, and staff management. Features real-time chat, Excel bulk import/export, and secure RBAC.",
    category: ["fullstack"],
    tech: ["Node.js", "React.js", "MongoDB", "JWT", "REST APIs", "Socket.io", "Excel Integration"],
    github: "https://github.com/Rafin31/DME-Client",
    demo: "https://www.fiverr.com/users/rafin_31/portfolio/NjQ2NjA4OGY1OWYxNzUwMDAxNWIxNDY2",
    gradient: "from-amber-500 via-orange-600 to-red-700",
    highlight: "60% admin workload reduction",
    imagekitFolder: "Medical Management System",
    imagekitSnapshots: 1,
  },
  {
    id: 2,
    slug: "assert-blockchain-prediction-platform",
    title: "ASSERT Prediction Platform",
    description: "Blockchain-based sports prediction platform with Solidity smart contracts and real-time token transactions.",
    longDescription:
      "A decentralised sports prediction platform powered by Ethereum smart contracts. Users earn daily reward tokens, boosting engagement by 40%. Features real-time blockchain transactions and a seamless Web3 UI.",
    category: ["blockchain", "fullstack"],
    tech: ["Solidity", "Node.js", "Web3.js", "React.js", "Ganache", "MongoDB", "Firebase", "JWT"],
    github: "https://github.com/Rafin31/Assert-Frontend",
    demo: "https://github.com/Rafin31/Assert-Frontend",
    gradient: "from-purple-600 via-violet-700 to-indigo-800",
    highlight: "+40% user engagement",
    imagekitFolder: "Assert",
    imagekitSnapshots: 2,
  },
  {
    id: 3,
    slug: "auto-parts-ecommerce-platform",
    title: "Auto Parts E-Commerce Platform",
    description: "Full-stack e-commerce store with Stripe payments, product management, and order tracking.",
    longDescription:
      "A feature-rich e-commerce platform with product catalogue, cart management, Stripe payment integration, order tracking, and admin dashboard. Built with Next.js for fast SSR and SEO.",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    github: "https://github.com/Rafin31/autoPartsClient",
    demo: "https://github.com/Rafin31/autoPartsClient",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    imagekitFolder: "auto-parts"
  },
  {
    id: 4,
    slug: "game-coach-platform",
    title: "Game Coach Platform",
    description: "React-Firebase Application. Here users can Login and Sign up using email password or Google. Users can see services and can purchase them and the quantity of that service will automatically be updated. Admin can Add and Update services.",
    longDescription:
      "React-Firebase Application. Here users can Login and Sign up using email password or Google. Users can see services and can purchase them and the quantity of that service will automatically be updated. Admin can Add and Update services. Increased online orders by 40%.",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["React.js", "Node.js", "Firebase", "Firebase Auth"],
    github: "https://github.com/Rafin31/React-firebase-app",
    demo: "https://github.com/Rafin31/React-firebase-app",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    highlight: "+40% online orders",
    imagekitFolder:"Game-Coach-Platform"
  },
  {
    id: 5,
    slug: "figma-to-react-conversion",
    title: "Figma to React js",
    description: "Converted Client's Figma Design into React js and Tailwind CSS with Firebase Authentication and Functions. ",
    longDescription:
      "Converted Client's Figma Design into React js and Tailwind CSS with Firebase Authentication and Functions",
    category: ["freelance", "frontend"],
    tech: ["React.js", "Tailwind css", "firebase", "AWS S3"],
    github: "#",
    demo: "https://www.fiverr.com/users/rafin_31/portfolio/NjQ2NjEyZmMxNjhkYTAwMDAxOTAyZjE4",
    gradient: "from-blue-500 via-sky-600 to-indigo-700",
    imagekitFolder: "Figma-react",
    imagekitSnapshots: 1,
  },
  {
    id: 6,
    slug: "pocket-class-platform",
    title: "Pocket Class",
    description: "PocketClass connects students to freelance instructors in sports, music, and the arts, streamlining scheduling, secure payments, and administrative tasks into one seamless experience.",
    longDescription:
      "Founded by a team who personally experienced the challenges of finding qualified instructors, from countless online searches to messy payment processes, we set out to build a better way. PocketClass connects students to freelance instructors in sports, music, and the arts, streamlining scheduling, secure payments, and administrative tasks into one seamless experience.",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Firebase"],
    github: "#",
    demo: "https://www.pocketclass.ca/",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    highlight: "+100% customer Satisfaction",
    imagekitFolder: "PocketClass",
    imagekitSnapshots: 1,
  },
  {
    id: 7,
    slug: "claude-stats",
    title: "Claude Stats Dashboard",
    description: "A local dashboard for tracking Claude Code token usage, costs, and session history in real time. Built with Next.js, Recharts, and chokidar.",
    longDescription:
      "A self-hosted developer tool that gives you a live view of your Claude Code token consumption, session history, and estimated API costs. Built with Next.js App Router, Recharts for data visualisation, and chokidar for file watching — no config needed, it auto-detects your Claude data directory.",
    category: ["fullstack"],
    tech: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "Recharts", "chokidar"],
    github: "https://github.com/Rafin31/claude-stats",
    demo: "https://github.com/Rafin31/claude-stats",
    gradient: "from-indigo-500 via-violet-600 to-purple-700",
    highlight: "Real-time token tracking",
    imagekitFolder: "Claude-States",
    imagekitSnapshots: 1,
  },
  {
    id: 8,
    slug: "inventory-management-system",
    title: "Inventory-Management-System",
    description: " A Product Inventory System where users can enlist their products with Price, quantity, seller name and it will automatically calculate the total price according to price and quantity. Also, it can track record how many products have been sold and how much profit or loss have occurred",
    longDescription:
      "A Product Inventory System where users can enlist their products with Price, quantity, seller name and it will automatically calculate the total price according to price and quantity. Also, it can track record how many products have been sold and how much profit or loss have occurred",
    category: ["freelance", "fullstack", "backend", "frontend"],
    tech: ["React.js", "PHP", "SQL", "REST API"],
    github: "#",
    demo: "https://github.com/Rafin31/Inventory-Management-System",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    imagekitFolder:"Inventory-Management-System"
  },
  {
    id: 9,
    slug: "tourhill-europe-tour-booking-platform",
    title: "TourHill — Europe Tour & Travel Booking Platform",
    description: "Production travel booking platform for curated skip-the-line tickets and expert guided tours across Spain. Built with Next.js 15 and live at tourhill.com.",
    longDescription:
      "TourHill is a live, production-grade travel booking web application helping tourists discover and book skip-the-line tickets and expert guided tours across Spain's top destinations, starting with Barcelona. Built with Next.js 15 App Router, strict TypeScript, Zustand for state management, TanStack Query for server-state, Zod for form validation, and Framer Motion for animations. Supports multi-language (i18n) for international reach and is fully optimised for Core Web Vitals, SEO, and conversion.",
    category: ["fullstack", "freelance"],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Zod", "React Hook Form", "Framer Motion", "i18n"],
    github: "https://github.com/Rafin31/Europe-Tour-Attraction",
    demo: "https://www.tourhill.com/",
    gradient: "from-sky-400 via-cyan-500 to-blue-600",
    highlight: "Live production platform",
    featured: true,
    ongoing: true,
    imagekitFolder: "europe-tour-attraction",
  },
  {
    id: 10,
    slug: "quickfinance-tools-personal-finance-calculators",
    title: "QuickFinance Tools — Personal Finance Calculators",
    description: "Free personal finance calculator suite for freelancers, gig workers, and retirement planners. Clear numbers, zero jargon.",
    longDescription:
      "QuickFinance Tools is a free web-based finance calculator suite built for real-life financial decisions. Whether you freelance, drive for rideshare, or want to plan your retirement, it gives you clear and honest numbers without the financial jargon. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Monetised with Google AdSense and SEO-optimised for US and European search traffic.",
    category: ["fullstack", "frontend"],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel Analytics", "Google AdSense"],
    github: "https://github.com/Rafin31/quickfinance-tools",
    demo: "https://quickfinance-tools.vercel.app",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    highlight: "Finance tools for real life",
    imagekitFolder: "quickfinance-tools",
  },
]

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "blockchain", label: "Blockchain" },
  { id: "freelance", label: "Freelance" },
]

// ============================================================
// TESTIMONIALS
// ============================================================
export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
  rating: number
  initials: string
  avatarGradient: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Asif delivered exactly what we needed, on time and with great attention to detail. Our medical management system runs flawlessly. He understood complex business requirements and translated them into elegant code. Great work and prompt service. What more can you ask for. I hope to work with RAFIN again in the future to continue development.",
    name: "James Mendoza",
    role: "CEO",
    company: "Mendoza Brothers Holdings",
    rating: 5,
    initials: "JM",
    avatarGradient: "from-amber-400 to-orange-600",
  },
  {
    id: 2,
    quote:
      "He's very good at what he does. Has helped me a lot with learning the mechanics of backend engineering. A pleasure doing business with.",
    name: "senor_kyle",
    role: "Entrepreneur",
    company: "UK-based Startup",
    rating: 5,
    initials: "SK",
    avatarGradient: "from-pink-400 to-rose-600",
  },
  {
    id: 3,
    quote:
      "Asif is very helpful and accommodating. It's clear that he knows the game inside out. If you have a problem he'll solve it right away without any uncertainties. He was a pleasure doing business with.",
    name: "senor_kyle",
    role: "Property Manager",
    company: "Chen Properties",
    rating: 5,
    initials: "SK",
    avatarGradient: "from-blue-400 to-indigo-600",
  },
  {
    id: 4,
    quote:
      "Great experience with Asif.",
    name: "thegandrew",
    role: "Owner",
    company: "Sharma's Restaurant",
    rating: 5,
    initials: "TH",
    avatarGradient: "from-emerald-400 to-teal-600",
  },
  {
    id: 5,
    quote:
      "very good work. did what i described to him and communicated well. would recommend!",
    name: "popeyesbiscuit",
    role: "Founder",
    company: "Tech Startup",
    rating: 5,
    initials: "DP",
    avatarGradient: "from-violet-400 to-purple-600",
  },
  {
    id: 6,
    quote:
      "The seller was very nice, very helpful, and extremely fast. As soon as I wrote, he started working and did an excellent job. I also have to highlight his professionalism. 200 points out of 100. Definitely recommend",
    name: "matadamovic",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "MA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 8,
    quote:
      "Fast and satisfactory... highly recommended.",
    name: "zawad11",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "ZA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 9,
    quote:
      "Very intelligent! He was able to get it done really well",
    name: "babafemi97",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "BA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 10,
    quote:
      "Challenging request completed with usual professionalism.",
    name: "fh9977",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "FH",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 11,
    quote:
      "Good service , I highly recommend !",
    name: "camaraal",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "CA",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
   {
    id: 12,
    quote:
      "One of the best sellers in fiverr, he has amazing communication and very hardworking seller. would 100% recommend him",
    name: "adilaamjad4",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "AD",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
  {
    id: 13,
    quote:
      "He's very helpful and accommodating. It's clear that he knows the game inside out. If you have a problem he'll solve it right away without any uncertainties. He was a pleasure doing business with.",
    name: "senor_kyle",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "SE",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
    {
    id: 14,
    quote:
    "Asif is just so brilliant and a great teacher, his explanations are so good and easily understandable!",
    name: "aniqtanwir589",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "AN",
    avatarGradient: "from-cyan-400 to-sky-600",
  },
]

// ============================================================
// EDUCATION
// ============================================================
export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  duration: string
  details?: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Science (Software Engineering)",
    institution: "University of Wollongong",
    location: "Wollongong, NSW, Australia",
    duration: "07/2023 – 07/2025",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science and Engineering",
    institution: "American International University – Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    duration: "01/2018 – 01/2022",
    details: "Dean's List Honors – GPA 3.86/4.00",
  },
]

// ============================================================
// ACHIEVEMENTS
// ============================================================
export const achievements = [
  {
    id: 1,
    title: "Dean's List Honors",
    description: "GPA 3.86/4.00 at American International University – Bangladesh",
    icon: "trophy",
  },
  {
    id: 2,
    title: "SJ Innovation Hackathon",
    description: "1st Runner-Up, competing against 50+ teams",
    icon: "medal",
  },
  {
    id: 3,
    title: "50+ Projects Delivered",
    description: "All with 5-star ratings and 100% client satisfaction on Fiverr",
    icon: "star",
  },
]

// ============================================================
// STATS (Hero section)
// ============================================================
export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
]

// ============================================================
// AI SKILLS
// ============================================================
export type AISkillCategory = "tools" | "apis" | "techniques"

export const aiSkillCategories: { id: AISkillCategory; label: string }[] = [
  { id: "tools", label: "AI Tools" },
  { id: "apis", label: "APIs & SDKs" },
  { id: "techniques", label: "Techniques" },
]

export interface AISkill {
  name: string
}

export const aiSkills: Record<AISkillCategory, AISkill[]> = {
  tools: [
    { name: "Claude AI" },
    { name: "ChatGPT" },
    { name: "GitHub Copilot" },
    { name: "Cursor IDE" },
    { name: "v0 by Vercel" },
    { name: "Bolt.new" },
    { name: "Perplexity AI" },
  ],
  apis: [
    { name: "Anthropic API" },
    { name: "OpenAI API" },
    { name: "Vercel AI SDK" },
    { name: "LangChain" },
    { name: "Hugging Face" },
    { name: "Replicate" },
  ],
  techniques: [
    { name: "Prompt Engineering" },
    { name: "RAG Systems" },
    { name: "Vibe Coding" },
    { name: "AI Code Review" },
    { name: "Chain-of-Thought" },
    { name: "AI Debugging" },
    { name: "Context Management" },
  ],
}

export const aiCapabilities = [
  {
    id: 1,
    title: "AI-Powered Web Apps",
    description: "Full-stack apps with embedded AI hatbots, smart search, and intelligent content generation.",
    color: "violet" as const,
  },
  {
    id: 2,
    title: "Prompt Engineering",
    description: "Craft precise, reliable prompts that extract structured outputs from LLMs in production.",
    color: "cyan" as const,
  },
  {
    id: 3,
    title: "Vibe Coding",
    description: "Use AI as a pair programmer to ship production-quality features 10× faster.",
    color: "amber" as const,
  },
  {
    id: 4,
    title: "API Integration",
    description: "Connect Claude, GPT-4o, and other AI models to web apps through clean service layers.",
    color: "emerald" as const,
  },
]

// ============================================================
// NAV LINKS
// ============================================================
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

// Page route links (Blog, Hire Me - rendered as <Link> not scroll anchors)
export const pageLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/hire-me", label: "Hire Me" },
]
