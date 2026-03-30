import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"
import { projects } from "@/data/portfolio"

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
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
