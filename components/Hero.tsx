"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { personalInfo, stats } from "@/data/portfolio"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { HiArrowDown } from "react-icons/hi"
import { HiArrowDownTray } from "react-icons/hi2"

// Animated floating particle dot
function Particle({ x, y, delay, size }: { x: string; y: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent-yellow/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

// Decorative ring around profile image
function ProfileRing({
  size,
  color,
  delay,
  duration,
}: {
  size: number
  color: string
  delay: number
  duration: number
}) {
  return (
    <motion.div
      className={`absolute rounded-full border ${color} opacity-30`}
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  )
}

// Particles data - pre-computed so they don't change on re-render
const particles = [
  { x: "10%", y: "20%", delay: 0, size: 4 },
  { x: "20%", y: "60%", delay: 1, size: 6 },
  { x: "30%", y: "40%", delay: 2, size: 3 },
  { x: "70%", y: "15%", delay: 0.5, size: 5 },
  { x: "80%", y: "50%", delay: 1.5, size: 4 },
  { x: "90%", y: "75%", delay: 2.5, size: 6 },
  { x: "50%", y: "80%", delay: 0.8, size: 3 },
  { x: "15%", y: "85%", delay: 3, size: 5 },
  { x: "60%", y: "30%", delay: 1.2, size: 4 },
  { x: "45%", y: "55%", delay: 2.2, size: 3 },
  { x: "75%", y: "90%", delay: 0.3, size: 5 },
  { x: "5%", y: "45%", delay: 1.8, size: 6 },
]

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background bg-grid"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* Social links - vertical on left side (hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-5"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-yellow transition-colors duration-200"
          title="GitHub"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-cyan transition-colors duration-200"
          title="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-text-muted hover:text-accent-yellow transition-colors duration-200"
          title="Email"
        >
          <FiMail className="w-5 h-5" />
        </a>
        {/* Vertical line */}
        <div className="w-px h-16 bg-border" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left side - text content */}
        <div className="flex flex-col gap-6">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-0.5 bg-accent-yellow" />
            <span className="text-accent-yellow font-mono text-sm tracking-widest uppercase">
              Hi there, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">Asif</span>
            <br />
            <span className="text-text-primary">Hossain</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-heading text-xl sm:text-2xl text-text-muted font-medium h-8"
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "React.js Expert",
                2000,
                "Node.js Developer",
                2000,
                "Problem Solver",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
              className="text-accent-cyan"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-lg"
          >
            Building scalable, high-performance web applications with modern technologies.
            50+ projects delivered, 3+ years of experience, 100% client satisfaction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-all duration-200 glow-yellow-sm hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-xl hover:bg-accent-cyan/10 transition-all duration-200 hover:scale-105"
            >
              Hire Me
            </button>
            <a
              href="/Asif_Hossain_Resume.pdf"
              download="Asif_Hossain_Resume.pdf"
              className="group relative flex items-center gap-2 px-6 py-3 bg-card border border-border text-text-muted font-medium rounded-xl hover:border-accent-yellow/40 hover:text-text-primary transition-all duration-200 overflow-hidden"
            >
              <span className="absolute inset-0 bg-accent-yellow/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <HiArrowDownTray className="w-4 h-4 relative z-10 group-hover:text-accent-yellow transition-colors" />
              <span className="relative z-10 text-sm">Download CV</span>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-2xl font-bold text-accent-yellow">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side - profile image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Decorative rotating rings */}
            <ProfileRing size={320} color="border-accent-yellow" delay={0} duration={12} />
            <ProfileRing size={370} color="border-accent-cyan" delay={0.5} duration={16} />
            <ProfileRing size={420} color="border-border" delay={1} duration={20} />

            {/* Profile avatar */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent-yellow/40 glow-yellow"
              style={{ zIndex: 1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Asif Hossain"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback: hide broken image and show initials behind it
                  e.currentTarget.style.display = "none"
                }}
              />
            </motion.div>

            {/* Floating badge - experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 -left-8 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl"
            >
              <div className="text-accent-yellow font-bold text-lg font-heading">3+</div>
              <div className="text-text-muted text-xs">Years Exp.</div>
            </motion.div>

            {/* Floating badge - projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-4 -right-8 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl"
            >
              <div className="text-accent-cyan font-bold text-lg font-heading">50+</div>
              <div className="text-text-muted text-xs">Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2 } }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-accent-yellow transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <HiArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  )
}
