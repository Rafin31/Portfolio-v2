import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { projects } from "@/data/portfolio"

// Below-the-fold: defer these to reduce initial JS bundle
const About       = dynamic(() => import("@/components/About"))
const Skills      = dynamic(() => import("@/components/Skills"))
const AISkills    = dynamic(() => import("@/components/AISkills"))
const Experience  = dynamic(() => import("@/components/Experience"))
const Projects    = dynamic(() => import("@/components/Projects"))
const Testimonials = dynamic(() => import("@/components/Testimonials"))
const Contact     = dynamic(() => import("@/components/Contact"))
const Footer      = dynamic(() => import("@/components/Footer"))

const BASE_URL = "https://asifhossain.dev"

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Projects by Asif Hossain",
  description: "Full-stack web development projects by Asif Hossain, a developer based in Wollongong, Australia.",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.longDescription,
      applicationCategory: "WebApplication",
      programmingLanguage: project.tech,
      author: {
        "@type": "Person",
        name: "Asif Hossain",
        url: BASE_URL,
      },
      ...(project.demo && project.demo !== "#" ? { url: project.demo } : {}),
    },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <AISkills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
