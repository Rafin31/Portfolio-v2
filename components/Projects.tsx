"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence, LayoutGroup } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { projects, projectCategories, type ProjectCategory } from "@/data/portfolio"
import { ikProjectUrl, ikLoader } from "@/lib/imagekit"
import { shimmerDataURL } from "@/lib/shimmer"
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

// Stable float positions per tech tag slot so they don't shift on re-render
const TAG_SLOTS = [
  { top: "12%",  left: "8%"  },
  { top: "68%",  left: "6%"  },
  { top: "14%",  right: "7%" },
  { top: "70%",  right: "6%" },
]

const FLOAT_VARIANTS = [
  { y: [0, -8, 0],  duration: 3.2 },
  { y: [0,  7, 0],  duration: 3.8 },
  { y: [0, -6, 0],  duration: 4.1 },
  { y: [0,  8, 0],  duration: 3.5 },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered,   setHovered]   = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError,  setImgError]  = useState(false)
  const router = useRouter()
  const num = String(project.id).padStart(2, "0")

  // Show up to 4 floating tech tags (corner positions)
  const floatingTags = project.tech.slice(0, 4)

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
      onClick={() => router.push(`/projects/${project.slug}`)}
      whileHover={{ y: -4 }}
      className={`group relative bg-card border rounded-2xl overflow-hidden flex flex-col transition-colors duration-300 cursor-pointer ${
        hovered
          ? "border-accent-yellow/50 shadow-2xl shadow-accent-yellow/10"
          : "border-border"
      }`}
    >
      {/* ── Browser chrome ─────────────────────────────────── */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-accent-yellow/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <div className="flex-1 mx-3 h-5 bg-background/60 rounded-md" />
        <span className="text-text-muted font-mono text-[10px] opacity-50">{num}</span>
      </div>

      {/* ── Rich preview area ──────────────────────────────── */}
      {/* gradient = letterbox colour when object-contain leaves space */}
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>

        {/* Shimmer skeleton — visible while image is fetching */}
        {project.imagekitFolder && !imgLoaded && !imgError && (
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(90deg,rgba(9,9,15,0.85) 25%,rgba(30,30,58,0.9) 50%,rgba(9,9,15,0.85) 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.8s ease-in-out infinite",
            }}
          />
        )}

        {/* Real screenshot — fades in once loaded */}
        {project.imagekitFolder && !imgError && (
          <Image
            loader={ikLoader}
            src={ikProjectUrl(project.imagekitFolder, "snapshot1")}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className={`object-contain transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        {/* Bottom vignette keeps text/tags readable over any background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Dot-grid pattern (replaces plain line grid) */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Stronger overlay when showing a real screenshot so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background: project.imagekitFolder && !imgError
              ? "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)"
              : "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Animated glow orb — top-left */}
        <motion.div
          className="absolute w-32 h-32 rounded-full blur-3xl bg-white/20"
          style={{ top: "-20%", left: "-8%" }}
          animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated glow orb — bottom-right */}
        <motion.div
          className="absolute w-24 h-24 rounded-full blur-2xl bg-white/15"
          style={{ bottom: "-15%", right: "5%" }}
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        {/* Floating tech tags */}
        {floatingTags.map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-[10px] bg-black/70 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-[3px] text-white font-mono whitespace-nowrap select-none"
            style={TAG_SLOTS[i]}
            animate={{ y: FLOAT_VARIANTS[i].y }}
            transition={{
              duration: FLOAT_VARIANTS[i].duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            {tech}
          </motion.div>
        ))}

        {/* Large faded number watermark */}
        <div className="absolute -bottom-3 -right-1 font-heading font-black text-[6rem] text-white/[0.07] select-none leading-none pointer-events-none">
          {num}
        </div>

        {/* Center: title + highlight — always wrapped in a dark pill for readability */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
          <div className="bg-black/55 backdrop-blur-sm rounded-xl px-3 py-2 max-w-[190px]">
            <div className="font-heading font-bold text-sm text-white leading-snug">
              {project.title}
            </div>
          </div>
          {project.highlight && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20"
            >
              <HiSparkles className="w-3 h-3 text-accent-yellow" />
              {project.highlight}
            </motion.div>
          )}
        </div>

        {/* Hover overlay with links */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/65 backdrop-blur-[3px] flex items-center justify-center gap-3 z-20"
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
        <div className="flex items-start justify-between gap-2">
          <span className={`font-heading font-semibold text-sm leading-snug transition-colors duration-300 ${hovered ? "text-accent-yellow" : "text-text-primary"}`}>
            {project.title}
          </span>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.25 }}
          >
            <HiArrowUpRight className="w-4 h-4 text-accent-yellow flex-shrink-0" />
          </motion.div>
        </div>

        <p className="text-text-muted text-xs leading-relaxed flex-1">{project.description}</p>

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

        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-yellow transition-colors font-medium"
            >
              <FiGithub className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-cyan transition-colors font-medium"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          </div>
          <span className="flex items-center gap-1 text-accent-yellow text-xs font-semibold">
            Details
            <HiArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
