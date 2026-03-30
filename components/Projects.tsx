"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, LayoutGroup } from "framer-motion"
import { projects, projectCategories, type ProjectCategory } from "@/data/portfolio"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { HiSparkles, HiArrowUpRight } from "react-icons/hi2"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-cyan/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-yellow/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Projects
          </h2>
          <p className="text-text-muted mt-5 text-base max-w-xl">
            A selection of real-world projects, from enterprise systems to blockchain platforms.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? "text-background font-semibold"
                  : "bg-card border border-border text-text-muted hover:text-text-primary hover:border-accent-yellow/30"
              }`}
            >
              {/* Active background pill */}
              {activeFilter === cat.id && (
                <motion.span
                  layoutId="filterPill"
                  className="absolute inset-0 bg-accent-yellow rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">
                {cat.label}
                <span className={`ml-2 text-xs ${activeFilter === cat.id ? "opacity-70" : "opacity-50"}`}>
                  ({cat.id === "all" ? projects.length : projects.filter((p) => p.category.includes(cat.id)).length})
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <LayoutGroup>
          <motion.div
            layout
            transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="sync">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  const [hovered, setHovered] = useState(false)

  // Format project number as 01, 02, etc.
  const num = String(project.id).padStart(2, "0")

  return (
    <motion.article
      layout
      layoutId={`project-card-${project.id}`}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        layout: { duration: 0.4, ease: "easeInOut" },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      className={`group relative bg-card border rounded-2xl overflow-hidden flex flex-col transition-colors transition-shadow duration-300 ${
        hovered
          ? "border-accent-yellow/50 shadow-2xl shadow-accent-yellow/10"
          : "border-border"
      }`}
    >
      {/* ── Browser chrome header ─────────────────────────── */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border flex-shrink-0">
        {/* Traffic-light dots */}
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-accent-yellow/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        {/* Empty URL bar */}
        <div className="flex-1 mx-3 h-5 bg-background/60 rounded-md" />
        {/* Project number */}
        <span className="text-text-muted font-mono text-[10px] opacity-50">{num}</span>
      </div>

      {/* ── Gradient screenshot area ───────────────────────── */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        {/* Animated grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Large faded project number */}
        <div className="absolute -bottom-4 -right-2 font-heading font-bold text-8xl text-white/10 select-none leading-none">
          {num}
        </div>

        {/* Project title centred */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="font-heading font-bold text-lg text-white drop-shadow-lg leading-snug">
            {project.title}
          </div>
          {project.highlight && (
            <div className="mt-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20">
              <HiSparkles className="w-3 h-3 text-accent-yellow" />
              {project.highlight}
            </div>
          )}
        </div>

        {/* Hover overlay with links */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center gap-3"
        >
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.demo}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </motion.div>
      </div>

      {/* ── Card body ─────────────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-heading font-semibold text-sm leading-snug transition-colors duration-300 ${hovered ? "text-accent-yellow" : "text-text-primary"}`}>
            {project.title}
          </h3>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.25 }}
          >
            <HiArrowUpRight className="w-4 h-4 text-accent-yellow flex-shrink-0" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-text-muted text-xs leading-relaxed flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 bg-surface text-text-muted border border-border/60 rounded-md font-mono"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-md font-mono">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Bottom links */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border">
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-yellow transition-colors font-medium"
          >
            <FiGithub className="w-3.5 h-3.5" />
            Source Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-cyan transition-colors font-medium"
          >
            Live Demo
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
