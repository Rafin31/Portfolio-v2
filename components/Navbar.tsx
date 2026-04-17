"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks, pageLinks } from "@/data/portfolio"
import { HiMenu, HiX } from "react-icons/hi"

function LogoMark() {
  return (
    <span className="flex items-center gap-1.5 font-heading tracking-tight select-none">
      <span className="font-mono text-accent-cyan text-sm font-bold opacity-70">&lt;/&gt;</span>
      <span className="font-black text-lg text-text-primary">
        Asif
      </span>
      <span className="font-light text-lg text-accent-yellow">Hossain</span>
      <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse" />
    </span>
  )
}

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
        { threshold: 0, rootMargin: "-40% 0px -55% 0px" }
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
            className="flex items-center gap-2 group"
          >
            {isHome ? (
              <LogoMark />
            ) : (
              <Link href="/"><LogoMark /></Link>
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
              const isHireMe = link.href === "/hire-me"

              if (isHireMe) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`ml-1 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      isActive
                        ? "bg-accent-yellow text-background border-accent-yellow"
                        : "border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-background"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              }

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

          <div className="hidden md:flex items-center" />

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
            className="md:hidden bg-surface border-b border-border"
            style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
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
              {pageLinks.map((link, i) => {
                const isHireMe = link.href === "/hire-me"
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + i) * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isHireMe
                          ? pathname === link.href
                            ? "bg-accent-yellow text-background font-semibold"
                            : "bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/30 font-semibold"
                          : pathname === link.href
                            ? "bg-accent-yellow/10 text-accent-yellow"
                            : "text-text-muted hover:text-text-primary hover:bg-card"
                      }`}
                    >
                      {link.label}
                      {isHireMe && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-accent-yellow/20 text-accent-yellow rounded font-mono">
                          available
                        </span>
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
