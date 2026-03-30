"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks, pageLinks } from "@/data/portfolio"
import { HiMenu, HiX } from "react-icons/hi"
import { HiArrowDownTray } from "react-icons/hi2"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Only run intersection observer on the home page
  useEffect(() => {
    if (!isHome) return
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (isHome) {
      const id = href.replace("#", "")
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Navigate to home page and anchor
      window.location.href = `/${href}`
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => isHome ? handleNavClick("#home") : undefined}
            className="font-heading font-bold text-xl tracking-tight"
          >
            {isHome ? (
              <>
                <span className="text-accent-yellow">Asif </span>
                <span className="text-accent-cyan">Hossain</span>
              </>
            ) : (
              <Link href="/">
                <span className="text-accent-yellow">Asif </span>
                <span className="text-accent-cyan">Hossain</span>
              </Link>
            )}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.href.replace("#", "")
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-accent-yellow"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-yellow rounded-full"
                    />
                  )}
                </button>
              )
            })}
            {/* Page route links */}
            {pageLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-accent-yellow"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-yellow rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Download CV button (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Asif_Hossain_Resume.pdf"
              download="Asif_Hossain_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-accent-yellow text-background text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-200 glow-yellow-sm"
            >
              <HiArrowDownTray className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isHome && activeSection === link.href.replace("#", "")
                      ? "bg-accent-yellow/10 text-accent-yellow"
                      : "text-text-muted hover:text-text-primary hover:bg-card"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              {/* Page route links in mobile */}
              {pageLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + i) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-accent-yellow/10 text-accent-yellow"
                        : "text-text-muted hover:text-text-primary hover:bg-card"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="/Asif_Hossain_Resume.pdf"
                download="Asif_Hossain_Resume.pdf"
                className="flex items-center gap-2 mt-2 px-4 py-3 bg-accent-yellow text-background text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors"
              >
                <HiArrowDownTray className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
