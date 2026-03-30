"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { experiences } from "@/data/portfolio"
import { HiBriefcase, HiMapPin, HiCalendar, HiCheckCircle } from "react-icons/hi2"

function TypeBadge({ type }: { type: string }) {
  const colours: Record<string, string> = {
    Contract:   "bg-accent-yellow/15 text-accent-yellow border-accent-yellow/30",
    Freelance:  "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
    "Part-time":"bg-purple-400/15 text-purple-400 border-purple-400/30",
  }
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colours[type] || "bg-border text-text-muted border-border"}`}>
      {type}
    </span>
  )
}

// Animated timeline line that draws itself on scroll
function AnimatedLine() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden">
      {/* Static dim track */}
      <div className="absolute inset-0 bg-border/40 rounded-full" />
      {/* Animated glowing fill */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute inset-0 rounded-full"
        // Gradient from amber to cyan
        // Tailwind can't do dynamic gradients so use inline style
        // eslint-disable-next-line react/forbid-dom-props
        {...{
          style: {
            scaleY,
            originY: 0,
            background: "linear-gradient(180deg, #f59e0b, #22d3ee)",
            boxShadow: "0 0 8px rgba(245,158,11,0.6)",
          },
        }}
      />
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden">

      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating glow orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-accent-yellow/6 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent-cyan/6 rounded-full blur-3xl pointer-events-none"
      />

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
          <AnimatedLine />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.18, ease: "easeOut" }}
                  className={`relative flex items-start gap-0 md:gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <ExperienceCard exp={exp} isLeft={isLeft} index={i} />
                  </div>

                  {/* Pulsing center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    <span className="absolute inline-flex w-5 h-5 rounded-full bg-accent-yellow/40 animate-ping" />
                    <span className="relative w-5 h-5 rounded-full bg-accent-yellow border-4 border-surface shadow-[0_0_16px_rgba(245,158,11,0.8)]" />
                  </div>

                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>

          {/* End dot */}
          <div className="hidden md:flex absolute left-1/2 -bottom-2 -translate-x-1/2 z-10">
            <span className="absolute inline-flex w-4 h-4 rounded-full bg-accent-cyan/40 animate-ping" />
            <span className="relative w-4 h-4 rounded-full bg-accent-cyan border-4 border-surface shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  exp,
  isLeft,
  index,
}: {
  exp: (typeof experiences)[0]
  isLeft: boolean
  index: number
}) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative bg-card border border-border rounded-2xl p-6 group overflow-hidden
        hover:border-accent-yellow/40 hover:shadow-2xl hover:shadow-accent-yellow/10
        transition-colors duration-300 ${isLeft ? "md:text-right" : "md:text-left"}`}
    >
      {/* Glowing corner accent on hover */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-yellow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated top border line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isCardInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className={`absolute top-0 h-0.5 w-full left-0 origin-left`}
        style={{ background: "linear-gradient(90deg, #f59e0b, #22d3ee, transparent)" }}
      />

      {/* Header */}
      <div className={`flex flex-wrap items-start gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="w-10 h-10 bg-accent-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors"
        >
          <HiBriefcase className="text-accent-yellow w-5 h-5" />
        </motion.div>
        <div className="flex-1">
          <h3 className="font-heading font-bold text-text-primary text-lg leading-tight">
            {exp.role}
          </h3>
          <div className="text-accent-yellow font-medium text-sm mt-0.5">{exp.company}</div>
        </div>
      </div>

      {/* Meta */}
      <div className={`flex flex-wrap gap-3 mb-4 text-xs text-text-muted ${isLeft ? "md:justify-end" : "justify-start"}`}>
        <span className="flex items-center gap-1"><HiMapPin className="w-3.5 h-3.5" />{exp.location}</span>
        <span className="flex items-center gap-1"><HiCalendar className="w-3.5 h-3.5" />{exp.duration}</span>
        <TypeBadge type={exp.type} />
      </div>

      {/* Bullet points */}
      <ul className={`flex flex-col gap-2 mb-4 ${isLeft ? "md:items-end" : "items-start"}`}>
        {exp.description.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
            animate={isCardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.07 + 0.3 }}
            className={`flex items-start gap-2 text-text-muted text-sm leading-relaxed ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}
          >
            <HiCheckCircle className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
            <span className={isLeft ? "md:text-right" : "text-left"}>{point}</span>
          </motion.li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "justify-start"}`}>
        {exp.tech.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isCardInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.04 + 0.5 }}
            className="text-xs px-2.5 py-1 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 rounded-lg hover:bg-accent-cyan/20 transition-colors duration-200"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
