// ============================================================
// PORTFOLIO DATA - Single source of truth for all content
// ============================================================

export const personalInfo = {
  name: "Asif Hossain",
  role: "Full-Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "asifhossain976@gmail.com",
  location: "Fairy Meadow NSW 2519, Australia",
  github: "https://github.com/Rafin31",
  linkedin: "https://www.linkedin.com/in/asif-hossain-6982b81ba/",
  fiverr: "https://www.fiverr.com/rafin_31",
  bio: `I'm a passionate Full-Stack Developer and Software Engineer with 3+ years of professional experience building scalable, high-performance web applications. Currently pursuing my Master's in Computer Science (Software Engineering) at the University of Wollongong, I bring a strong blend of academic excellence and real-world engineering expertise.

I specialise in React.js, Next.js, Node.js, and cloud-based solutions. I've successfully delivered 50+ projects on Fiverr with 100% client satisfaction, and developed a full-scale Medical Supplier Management System for a US-based client — reducing admin workload by 60% through smart automation.

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
export type ProjectCategory = "all" | "fullstack" | "blockchain" | "freelance"

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: ProjectCategory[]
  tech: string[]
  github: string
  demo: string
  gradient: string // Tailwind gradient classes for placeholder image
  highlight?: string // Featured text
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Medical Supplier Management System",
    description: "Full-stack web app for managing medical supplier orders, staff, and workflows with real-time chat.",
    longDescription:
      "Built for Mendoza Brothers Holdings, this enterprise-grade system streamlines supplier workflows, order tracking, and staff management. Features real-time chat, Excel bulk import/export, and secure RBAC.",
    category: ["fullstack"],
    tech: ["Node.js", "React.js", "MongoDB", "JWT", "REST APIs", "Socket.io", "Excel Integration"],
    github: "#",
    demo: "#",
    gradient: "from-amber-500 via-orange-600 to-red-700",
    highlight: "60% admin workload reduction",
  },
  {
    id: 2,
    title: "ASSERT Prediction Platform",
    description: "Blockchain-based sports prediction platform with Solidity smart contracts and real-time token transactions.",
    longDescription:
      "A decentralised sports prediction platform powered by Ethereum smart contracts. Users earn daily reward tokens, boosting engagement by 40%. Features real-time blockchain transactions and a seamless Web3 UI.",
    category: ["blockchain", "fullstack"],
    tech: ["Solidity", "Node.js", "Web3.js", "React.js", "Ganache", "MongoDB", "Firebase", "JWT"],
    github: "#",
    demo: "#",
    gradient: "from-purple-600 via-violet-700 to-indigo-800",
    highlight: "+40% user engagement",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce store with Stripe payments, product management, and order tracking.",
    longDescription:
      "A feature-rich e-commerce platform with product catalogue, cart management, Stripe payment integration, order tracking, and admin dashboard. Built with Next.js for fast SSR and SEO.",
    category: ["freelance", "fullstack"],
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    github: "#",
    demo: "#",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
  },
  {
    id: 4,
    title: "Restaurant Management System",
    description: "Online ordering, table booking, and inventory management system for a restaurant chain.",
    longDescription:
      "A complete restaurant management solution with online menu ordering, table reservation system, kitchen inventory tracking, and Firebase-powered authentication. Increased online orders by 40%.",
    category: ["freelance", "fullstack"],
    tech: ["React.js", "Node.js", "PostgreSQL", "Firebase Auth"],
    github: "#",
    demo: "#",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    highlight: "+40% online orders",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, agent dashboard, and AWS S3 media storage.",
    longDescription:
      "A comprehensive real estate portal allowing agents to list properties, upload images to AWS S3, and manage leads. Buyers can search with advanced filters, save favourites, and contact agents directly.",
    category: ["freelance", "fullstack"],
    tech: ["Next.js", "Express.js", "MongoDB", "AWS S3"],
    github: "#",
    demo: "#",
    gradient: "from-blue-500 via-sky-600 to-indigo-700",
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Real-time team collaboration tool with Socket.io live updates, task boards, and team chat.",
    longDescription:
      "A Trello-inspired task management application with real-time collaboration using Socket.io. Teams can create boards, assign tasks, track progress, and communicate — all in real time.",
    category: ["freelance", "fullstack"],
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
  },
]

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
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
      "Asif delivered exactly what we needed — on time and with great attention to detail. Our medical management system runs flawlessly. He understood complex business requirements and translated them into elegant code.",
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
      "Incredible work on our e-commerce platform. The code was clean, the UI was beautiful, and he was always responsive. He went above and beyond to ensure every feature worked perfectly. 5 stars!",
    name: "Sarah Collins",
    role: "Entrepreneur",
    company: "UK-based Startup",
    rating: 5,
    initials: "SC",
    avatarGradient: "from-pink-400 to-rose-600",
  },
  {
    id: 3,
    quote:
      "Asif built our real estate portal from scratch. His technical skills are top-notch and he understood our business needs perfectly. The AWS S3 integration and search filters work exactly as we envisioned.",
    name: "Michael Chen",
    role: "Property Manager",
    company: "Chen Properties",
    rating: 5,
    initials: "MC",
    avatarGradient: "from-blue-400 to-indigo-600",
  },
  {
    id: 4,
    quote:
      "Fast, professional, and a great communicator. The restaurant management app he built increased our online orders by 40%. He delivered ahead of schedule and the quality was exceptional.",
    name: "Priya Sharma",
    role: "Owner",
    company: "Sharma's Restaurant",
    rating: 5,
    initials: "PS",
    avatarGradient: "from-emerald-400 to-teal-600",
  },
  {
    id: 5,
    quote:
      "Working with Asif was a pleasure. He turned our complex blockchain idea into reality. The smart contracts are robust, the UI is smooth, and the platform works exactly as envisioned.",
    name: "David Park",
    role: "Founder",
    company: "Tech Startup",
    rating: 5,
    initials: "DP",
    avatarGradient: "from-violet-400 to-purple-600",
  },
  {
    id: 6,
    quote:
      "Asif is one of the most skilled developers I've worked with on Fiverr. He fixed our legacy codebase and added new features seamlessly. His documentation and code quality are outstanding.",
    name: "Emma Wilson",
    role: "Product Manager",
    company: "Wilson Digital",
    rating: 5,
    initials: "EW",
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
    location: "NSW, Australia",
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
    description: "1st Runner-Up — competed against 50+ teams",
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
// NAV LINKS
// ============================================================
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]
