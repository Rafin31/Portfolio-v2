"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { personalInfo, education, achievements } from "@/data/portfolio"
import {
  HiCodeBracket,
  HiLightBulb,
  HiUsers,
  HiRocketLaunch,
  HiAcademicCap,
  HiMapPin,
} from "react-icons/hi2"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiFirebase,
  SiJavascript,
  SiPython,
} from "react-icons/si"

// Floating skill icons config — position, color, animation timing
const floatingIcons = [
  { Icon: SiReact,       label: "React",      x: "10%",  y: "8%",   color: "#61DAFB", delay: 0,    duration: 4   },
  { Icon: SiNextdotjs,   label: "Next.js",    x: "70%",  y: "5%",   color: "#ffffff", delay: 0.5,  duration: 5   },
  { Icon: SiNodedotjs,   label: "Node.js",    x: "85%",  y: "35%",  color: "#68A063", delay: 1,    duration: 4.5 },
  { Icon: SiTypescript,  label: "TypeScript", x: "5%",   y: "50%",  color: "#3178C6", delay: 0.8,  duration: 5.5 },
  { Icon: SiMongodb,     label: "MongoDB",    x: "75%",  y: "70%",  color: "#47A248", delay: 1.5,  duration: 4   },
  { Icon: SiPostgresql,  label: "PostgreSQL", x: "20%",  y: "78%",  color: "#336791", delay: 0.3,  duration: 6   },
  { Icon: SiTailwindcss, label: "Tailwind",   x: "50%",  y: "88%",  color: "#38BDF8", delay: 1.2,  duration: 4.8 },
  { Icon: SiDocker,      label: "Docker",     x: "88%",  y: "15%",  color: "#2496ED", delay: 0.7,  duration: 5.2 },
  { Icon: SiGit,         label: "Git",        x: "40%",  y: "10%",  color: "#F05032", delay: 2,    duration: 4.2 },
  { Icon: SiFirebase,    label: "Firebase",   x: "60%",  y: "50%",  color: "#FFCA28", delay: 1.8,  duration: 5.8 },
  { Icon: SiPython,      label: "Python",     x: "30%",  y: "40%",  color: "#3776AB", delay: 0.4,  duration: 6.2 },
  { Icon: SiJavascript,  label: "JavaScript", x: "15%",  y: "22%",  color: "#F7DF1E", delay: 1.1,  duration: 4.6 },
]

// What I bring to the table cards
const strengths = [
  {
    icon: HiCodeBracket,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices and modern architecture patterns.",
    color: "text-accent-yellow",
    bg: "bg-accent-yellow/10",
  },
  {
    icon: HiLightBulb,
    title: "Problem Solver",
    description: "Breaking down complex challenges into elegant, efficient solutions that deliver real value.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: HiUsers,
    title: "Team Player",
    description: "Experienced in Agile/Scrum teams, clear communication, and collaborative remote work.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: HiRocketLaunch,
    title: "Fast Delivery",
    description: "50+ projects delivered on time with consistent 5-star ratings and 100% client satisfaction.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
]

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      {/* Floating skill icons in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map(({ Icon, label, x, y, color, delay, duration }) => (
          <motion.div
            key={label}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.18, 0.18, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [0, -18, 0],
            }}
            transition={{
              opacity:  { duration: duration * 2, delay, repeat: Infinity, ease: "easeInOut" },
              scale:    { duration: duration * 2, delay, repeat: Infinity, ease: "easeInOut" },
              y:        { duration, delay, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center border"
              style={{
                backgroundColor: `${color}12`,
                borderColor: `${color}30`,
                boxShadow: `0 0 16px ${color}20`,
              }}
            >
              <Icon style={{ color, fontSize: 22 }} />
            </div>
            <span className="text-[9px] font-mono font-medium" style={{ color: `${color}80` }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio text */}
          <div className="flex flex-col gap-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              {personalInfo.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-text-muted text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Current status badge */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4"
            >
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-text-muted text-sm">
                Currently:{" "}
                <span className="text-text-primary font-medium">
                  Masters Student @ University of Wollongong + Open to Opportunities
                </span>
              </span>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-text-muted hover:text-accent-yellow hover:border-accent-yellow/50 transition-all duration-200 text-sm"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-text-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-200 text-sm"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-text-muted hover:text-accent-yellow hover:border-accent-yellow/50 transition-all duration-200 text-sm"
              >
                <FiMail /> Email
              </a>
            </motion.div>
          </div>

          {/* Right — Education + Achievements */}
          <div className="flex flex-col gap-8">
            {/* Education */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <HiAcademicCap className="text-accent-yellow w-5 h-5" />
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-card border border-border rounded-xl p-5 hover:border-accent-yellow/30 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="font-medium text-text-primary text-sm leading-snug">
                          {edu.degree}
                        </div>
                        <div className="text-accent-yellow text-sm mt-1">{edu.institution}</div>
                        {edu.details && (
                          <div className="text-emerald-400 text-xs mt-1">{edu.details}</div>
                        )}
                        <div className="flex items-center gap-1 text-text-muted text-xs mt-1.5">
                          <HiMapPin className="w-3 h-3" />
                          {edu.location}
                        </div>
                      </div>
                      <span className="text-accent-cyan text-xs font-mono bg-accent-cyan/10 px-2 py-1 rounded-lg whitespace-nowrap">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <span className="text-accent-yellow">🏆</span>
                Achievements
              </h3>
              <div className="flex flex-col gap-3">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-accent-yellow/30 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">
                        {ach.icon === "trophy" ? "🏆" : ach.icon === "medal" ? "🥈" : "⭐"}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-text-primary text-sm">{ach.title}</div>
                      <div className="text-text-muted text-xs mt-0.5">{ach.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* What I bring to the table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="font-heading text-2xl font-semibold text-text-primary mb-8 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent-yellow/30 card-hover group"
              >
                <div
                  className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className={`${s.color} w-7 h-7`} />
                </div>
                <h4 className="font-heading font-semibold text-text-primary mb-2">{s.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
