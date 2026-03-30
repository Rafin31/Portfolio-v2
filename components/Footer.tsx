"use client"

import { motion } from "framer-motion"
import { navLinks, personalInfo } from "@/data/portfolio"
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi"
import { HiArrowUp } from "react-icons/hi"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border relative overflow-hidden">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-yellow/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          {/* Left — Logo & tagline */}
          <div className="flex flex-col gap-4">
            <button onClick={() => handleNavClick("#home")} className="text-left">
              <span className="font-heading font-bold text-2xl">
                <span className="text-accent-yellow">Asif </span>
                <span className="text-accent-cyan">Hossain</span>
              </span>
            </button>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full-Stack Developer specialising in React.js, Next.js, and Node.js.
              Building scalable digital products that make an impact.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center — Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right — Contact info */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary text-sm mb-4 tracking-wide">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-muted text-sm hover:text-accent-yellow transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
              <span className="text-text-muted text-sm">{personalInfo.location}</span>
            </div>
            {/* Availability */}
            <div className="flex items-center gap-2 mt-5">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center sm:text-left">
            © {year} Asif Hossain. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-text-muted text-sm">
            Built with{" "}
            <span className="mx-1 text-red-400">
              <FiHeart className="w-3.5 h-3.5 inline" />
            </span>{" "}
            using{" "}
            <span className="text-accent-yellow font-medium mx-1">Next.js</span>
            &amp;
            <span className="text-accent-cyan font-medium ml-1">TailwindCSS</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200"
            aria-label="Back to top"
          >
            <HiArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
