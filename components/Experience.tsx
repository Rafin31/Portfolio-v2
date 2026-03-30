"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experiences } from "@/data/portfolio"
import { HiBriefcase, HiMapPin, HiCalendar, HiCheckCircle } from "react-icons/hi2"

// Badge colour based on job type
function TypeBadge({ type }: { type: string }) {
  const colours: Record<string, string> = {
    Contract: "bg-accent-yellow/15 text-accent-yellow border-accent-yellow/30",
    Freelance: "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
    "Part-time": "bg-purple-400/15 text-purple-400 border-purple-400/30",
  }
  const cls = colours[type] || "bg-border text-text-muted border-border"
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${cls}`}>
      {type}
    </span>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-cyan/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            Career journey
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-connector rounded-full" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className={`relative flex items-start gap-0 md:gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Card — takes half width on desktop */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <ExperienceCard exp={exp} isLeft={isLeft} />
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-accent-yellow border-4 border-surface z-10 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>

          {/* End dot */}
          <div className="hidden md:flex absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-cyan border-4 border-surface z-10 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  exp,
  isLeft,
}: {
  exp: (typeof experiences)[0]
  isLeft: boolean
}) {
  return (
    <div
      className={`bg-card border border-border rounded-2xl p-6 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-yellow/5 group ${
        isLeft ? "md:text-right" : "md:text-left"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-wrap items-start gap-3 mb-4 ${
          isLeft ? "md:flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`w-10 h-10 bg-accent-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors`}
        >
          <HiBriefcase className="text-accent-yellow w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-text-primary text-lg leading-tight">
            {exp.role}
          </h3>
          <div className="text-accent-yellow font-medium text-sm mt-0.5">{exp.company}</div>
        </div>
      </div>

      {/* Meta */}
      <div
        className={`flex flex-wrap gap-3 mb-4 text-xs text-text-muted ${
          isLeft ? "md:justify-end" : "justify-start"
        }`}
      >
        <span className="flex items-center gap-1">
          <HiMapPin className="w-3.5 h-3.5" />
          {exp.location}
        </span>
        <span className="flex items-center gap-1">
          <HiCalendar className="w-3.5 h-3.5" />
          {exp.duration}
        </span>
        <TypeBadge type={exp.type} />
      </div>

      {/* Bullet points */}
      <ul className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : "items-start"}`}>
        {exp.description.map((point, i) => (
          <li key={i} className={`flex items-start gap-2 text-text-muted text-sm leading-relaxed ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}>
            <HiCheckCircle className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
            <span className={isLeft ? "md:text-right" : "text-left"}>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "justify-start"}`}>
        {exp.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
