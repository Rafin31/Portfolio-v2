// Main page — assembles all sections in order
// Each section is a separate component for maintainability

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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections — in scroll order */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
