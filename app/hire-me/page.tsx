import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const BASE_URL = "https://asifhossain.dev"

export const metadata: Metadata = {
  title: "Hire a Website Developer in Wollongong NSW | Web Development Services Australia",
  description:
    "Hire Asif Hossain, a professional website developer in Wollongong, NSW. Custom websites, e-commerce stores, and web apps for Australian businesses. 50+ projects, 100% satisfaction.",
  keywords: [
    "hire website developer wollongong",
    "website developer for hire australia",
    "web developer wollongong nsw",
    "hire web developer australia",
    "website design services wollongong",
    "small business website developer wollongong",
    "affordable website developer australia",
    "freelance website developer wollongong",
    "website development services nsw",
    "ecommerce website developer australia",
    "react nextjs developer wollongong",
    "web development services australia",
  ],
  alternates: { canonical: `${BASE_URL}/hire-me` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/hire-me`,
    title: "Hire a Website Developer in Wollongong, NSW | Asif Hossain",
    description:
      "Professional website developer in Wollongong, NSW. Custom websites and web apps for Australian businesses. 50+ projects delivered.",
    images: [{ url: "/profile.jpg", width: 400, height: 400, alt: "Asif Hossain, Website Developer Wollongong" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developer Wollongong | Hire Asif Hossain",
    description: "Professional website developer in Wollongong, NSW. 50+ projects, 100% satisfaction.",
    images: ["/profile.jpg"],
  },
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/hire-me#service`,
  name: "Website Development Services – Asif Hossain, Wollongong NSW",
  url: `${BASE_URL}/hire-me`,
  image: `${BASE_URL}/profile.jpg`,
  description:
    "Professional website developer in Wollongong, NSW. Custom websites, e-commerce stores, and web applications for Australian businesses.",
  provider: {
    "@type": "Person",
    name: "Asif Hossain",
    url: BASE_URL,
    jobTitle: "Website Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wollongong",
      addressRegion: "NSW",
      postalCode: "2500",
      addressCountry: "AU",
    },
  },
  areaServed: [
    { "@type": "City", name: "Wollongong" },
    { "@type": "State", name: "New South Wales" },
    { "@type": "Country", name: "Australia" },
  ],
  serviceType: ["Website Development", "Web Design", "E-Commerce Development", "Web Application Development"],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Website Design and Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "React and Next.js Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Redesign and Modernisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Deployment and AWS Setup" } },
    ],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where are you based, and do you work with clients outside Wollongong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I'm based in Wollongong, NSW, Australia. I work with clients locally in the Illawarra region, across Australia (Sydney, Melbourne, Brisbane, etc.), and internationally. All project communication is handled online, with in-person meetings available for local clients.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a website cost in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website costs in Australia vary by scope. Simple landing pages start from $500–$1,500. Business websites with CMS from $1,500–$4,000. E-commerce stores from $4,000–$12,000. Custom web applications from $8,000+. I provide fixed-price quotes after a discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple website or landing page: 1–2 weeks. A business website with CMS: 2–4 weeks. A mid-complexity web application: 4–8 weeks. A complex, multi-feature system: 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build websites for small businesses in Wollongong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I specialise in building professional websites for small and medium businesses in Wollongong, the Illawarra region, and across NSW and Australia. I handle everything from design to launch.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use to build websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I use Next.js and React for frontend development, Node.js for backend, MongoDB and PostgreSQL for databases, and AWS or Vercel for hosting. This stack produces fast, SEO-friendly, scalable websites.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing website support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I offer post-launch support for bug fixes, content updates, and feature additions. Ongoing maintenance retainers are available for businesses that want regular support.",
      },
    },
  ],
}

const SERVICES = [
  {
    icon: "🌐",
    title: "Business Website Development",
    description:
      "Professional websites for small and medium businesses in Wollongong and across Australia. Fast, mobile-friendly, SEO-optimised, and ready to attract customers.",
    tech: ["Next.js", "TailwindCSS", "CMS", "SEO", "Google Analytics"],
  },
  {
    icon: "🖥️",
    title: "Custom Web Applications",
    description:
      "Custom web apps built end-to-end, from database schema to pixel-perfect UI. Ideal for SaaS products, internal tools, and business systems.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    icon: "🛒",
    title: "E-Commerce Development",
    description:
      "Fast, SEO-optimised online stores with payment processing, inventory management, and admin dashboards.",
    tech: ["Next.js", "Stripe", "TailwindCSS", "MongoDB"],
  },
  {
    icon: "🔌",
    title: "API Development & Integrations",
    description:
      "RESTful APIs, third-party integrations, and backend systems. Connect your tools, automate workflows, and expose clean APIs for your frontend.",
    tech: ["Node.js", "Express.js", "JWT", "REST APIs", "OAuth 2.0"],
  },
  {
    icon: "🎨",
    title: "React & Next.js Frontend",
    description:
      "Responsive, animated, and accessible frontends. Figma-to-code, landing pages, and interactive dashboards.",
    tech: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps Setup",
    description:
      "Deploy your application on AWS, set up CI/CD pipelines, and configure your infrastructure for scale.",
    tech: ["AWS EC2", "AWS S3", "Docker", "GitHub Actions", "Railway"],
  },
  {
    icon: "🔧",
    title: "Existing Project Work",
    description:
      "Take over, extend, or refactor your existing codebase. Fix bugs, add features, or modernise a legacy application.",
    tech: ["Code Review", "Refactoring", "TypeScript Migration", "Testing"],
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We discuss your project requirements, goals, timeline, and budget. I ask the right questions to understand what you actually need.",
  },
  {
    step: "02",
    title: "Proposal & Scope",
    description:
      "I provide a detailed written proposal with scope, tech stack recommendation, timeline, and fixed price. No surprises.",
  },
  {
    step: "03",
    title: "Build & Review",
    description:
      "I build in sprints with regular check-ins. You see progress throughout, not just at the end. Feedback is incorporated continuously.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "I handle deployment, testing, and handover. Post-launch support is available for bugs, features, and maintenance.",
  },
]

const FAQS = [
  {
    q: "Where are you based, and do you work with clients outside Wollongong?",
    a: "I'm based in Wollongong, NSW, Australia. I work with clients locally in the Illawarra region, across Australia (Sydney, Melbourne, Brisbane, etc.), and internationally, including the US and UK. All project communication is handled online, with in-person meetings available for local clients.",
  },
  {
    q: "How much does a web development project cost?",
    a: "Pricing depends on scope and complexity. As a rough guide: simple landing pages start from $500–$1,500; business websites with CMS from $1,500–$4,000; custom web applications from $4,000 upward. I provide fixed-price quotes for most projects after a discovery call, so you know exactly what you're paying before work begins.",
  },
  {
    q: "How long does it take to build a web application?",
    a: "A simple website or landing page: 1–2 weeks. A mid-complexity web application with authentication and a database: 4–8 weeks. A complex, multi-feature system: 3–6 months. I'll give you a specific timeline estimate in my project proposal.",
  },
  {
    q: "What technologies do you specialise in?",
    a: "My core stack is React.js / Next.js (frontend), Node.js with Express (backend), MongoDB and PostgreSQL (databases), and AWS for cloud infrastructure. I also work with TypeScript, TailwindCSS, Docker, and GitHub Actions for CI/CD.",
  },
  {
    q: "Can you take over an existing project or legacy codebase?",
    a: "Yes. I regularly take on existing projects, whether that's adding features, fixing bugs, or modernising older code. I'll do a code review first to understand what's there and provide an honest assessment before committing to scope.",
  },
  {
    q: "Do you offer ongoing support after the project launches?",
    a: "Yes. I offer post-launch support packages for bug fixes, minor changes, and feature additions. For ongoing work, I'm available on a retainer basis.",
  },
  {
    q: "Do you sign NDAs or contracts?",
    a: "Absolutely. I sign NDAs when requested and provide written project agreements for all engagements. Clear contracts protect both parties.",
  },
]

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★", label: "Average Rating" },
]

export default function HireMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-sm font-medium mb-6">
            Available for Projects
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
            Website Developer{" "}
            <span className="gradient-text">in Wollongong, NSW</span>
          </h1>
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Professional website developer and web designer based in Wollongong,
            NSW. I build fast, modern websites and web applications for
            Australian businesses. 50+ projects delivered, 100% client
            satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-accent-yellow text-background font-bold rounded-xl text-lg hover:bg-amber-400 transition-colors glow-yellow"
            >
              Start a Project
            </Link>
            <a
              href="/Asif_Hossain_Resume.pdf"
              download
              className="px-8 py-4 bg-surface border border-border text-text-primary font-semibold rounded-xl text-lg hover:border-accent-cyan/50 transition-colors"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="font-heading text-3xl font-bold text-accent-yellow mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              <span className="section-title-underline">Services I Offer</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              End-to-end web development from architecture to deployment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl p-6 card-hover flex flex-col gap-4"
              >
                <div className="text-3xl">{service.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-surface text-text-muted text-xs border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              <span className="section-title-underline">How We Work Together</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              A clear, structured process so you always know what&apos;s happening.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROCESS.map((item) => (
              <div
                key={item.step}
                className="bg-card border border-border rounded-2xl p-6 flex gap-5"
              >
                <div className="font-heading text-3xl font-bold text-accent-yellow/30 shrink-0 leading-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIAL HIGHLIGHT ────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <blockquote className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-6 text-7xl text-accent-yellow/10 font-serif leading-none select-none">
              &ldquo;
            </div>
            <p className="text-text-primary text-lg leading-relaxed mb-6 relative z-10">
              Asif delivered exactly what we needed, on time and with great
              attention to detail. Our medical management system runs
              flawlessly. He understood complex business requirements and
              translated them into elegant code.
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-background font-bold text-sm">
                JM
              </div>
              <div>
                <div className="text-text-primary font-semibold text-sm">
                  James Mendoza
                </div>
                <div className="text-text-muted text-xs">
                  CEO, Mendoza Brothers Holdings, LLC
                </div>
              </div>
              <div className="ml-auto text-accent-yellow text-sm font-medium">
                ★★★★★
              </div>
            </footer>
          </blockquote>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              <span className="section-title-underline">
                Frequently Asked Questions
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none text-text-primary font-medium text-sm hover:text-accent-yellow transition-colors select-none">
                  {faq.q}
                  <span className="text-accent-yellow text-lg shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-text-muted text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-card via-surface to-card border border-border rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4 relative z-10">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-muted mb-8 relative z-10 max-w-md mx-auto">
              Send me a message with your project details and I&apos;ll get back
              to you within 24 hours with a no-obligation response.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-accent-yellow text-background font-bold rounded-xl hover:bg-amber-400 transition-colors glow-yellow"
              >
                Send a Message
              </Link>
              <a
                href="https://www.fiverr.com/rafin_31"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/50 transition-colors"
              >
                View Fiverr Profile
              </a>
            </div>
            <p className="text-text-muted text-sm mt-6 relative z-10">
              Based in Wollongong, NSW · Available for projects across Australia
              and globally
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
