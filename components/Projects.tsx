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

  const filtered = (
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))
  ).slice().sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.id - a.id
  })

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
  const [hovered,     setHovered]     = useState(false)
  const [imgLoaded,   setImgLoaded]   = useState(false)
  const [imgError,    setImgError]    = useState(false)
  const [navigating,  setNavigating]  = useState(false)
  const router = useRouter()
  const num = String(project.id).padStart(2, "0")

  const floatingTags = project.tech.slice(0, 4)

  function handleClick() {
    setNavigating(true)
    router.push(`/projects/${project.slug}`)
  }

  // ── FEATURED card (full-width landscape) ──────────────────
  if (project.featured) {
    return (
      <motion.article
        layout
        layoutId={`project-card-${project.id}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.99 }}
        className={`group relative col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col bg-card rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300
          ${hovered ? "border-accent-yellow/60 shadow-2xl shadow-accent-yellow/10" : "border-accent-yellow/25 shadow-lg shadow-accent-yellow/5"}`}
      >
        {navigating && (
          <div className="absolute inset-0 z-50 bg-background/70 backdrop-blur-sm flex items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-accent-yellow/30 border-t-accent-yellow animate-spin" />
              <span className="text-xs text-accent-yellow font-mono">Loading...</span>
            </div>
          </div>
        )}

        {/* Browser chrome — same as regular cards */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-accent-yellow/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="flex-1 mx-3 h-5 bg-background/60 rounded-md" />
          <span className="text-text-muted font-mono text-[10px] opacity-50">{num}</span>
        </div>

        {/* Body: image left + content right */}
        <div className="flex flex-col md:flex-row flex-1 min-h-[340px]">

        {/* Left: screenshot panel */}
        <div className={`relative md:w-[58%] flex-shrink-0 bg-gradient-to-br ${project.gradient} overflow-hidden aspect-[16/10] md:aspect-auto`}>
          {project.imagekitFolder && !imgLoaded && !imgError && (
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(90deg,rgba(9,9,15,0.85) 25%,rgba(30,30,58,0.9) 50%,rgba(9,9,15,0.85) 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.8s ease-in-out infinite" }} />
          )}
          {project.imagekitFolder && !imgError && (
            <Image
              loader={ikLoader}
              src={ikProjectUrl(project.imagekitFolder, "snapshot1")}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className={`object-cover object-top transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 pointer-events-none hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <motion.div className="absolute w-48 h-48 rounded-full blur-3xl bg-white/10" style={{ top: "-10%", left: "-5%" }} animate={{ x: [0, 15, 0], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          {floatingTags.map((tech, i) => (
            <motion.div key={tech} className="absolute text-[10px] bg-black/70 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-[3px] text-white font-mono whitespace-nowrap select-none" style={TAG_SLOTS[i]} animate={{ y: FLOAT_VARIANTS[i].y }} transition={{ duration: FLOAT_VARIANTS[i].duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}>
              {tech}
            </motion.div>
          ))}
          <div className="absolute -bottom-4 -right-2 font-heading font-black text-[8rem] text-white/[0.06] select-none leading-none pointer-events-none">{num}</div>
        </div>

        {/* Right: content panel */}
        <div className="flex flex-col justify-center gap-5 p-7 md:p-10 flex-1">
          {/* Badges */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-background bg-accent-yellow rounded-full px-3 py-1">
              <HiSparkles className="w-3 h-3" /> Featured
            </span>
            {project.ongoing && (
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-green-400 border border-green-400/30 bg-green-400/5 rounded-full px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Ongoing
              </span>
            )}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-3">
            <h3 className={`font-heading font-bold text-xl sm:text-2xl leading-tight transition-colors duration-300 ${hovered ? "text-accent-yellow" : "text-text-primary"}`}>
              {project.title}
            </h3>
            <motion.div animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }} transition={{ duration: 0.25 }}>
              <HiArrowUpRight className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-1" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-text-muted text-sm leading-relaxed">{project.longDescription}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 bg-surface text-text-muted border border-border/60 rounded-md font-mono">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-1 border-t border-border">
            <a href={project.github} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-text-muted text-sm hover:text-accent-yellow transition-colors font-medium">
              <FiGithub className="w-4 h-4" /> Source
            </a>
            <a href={project.demo} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-4 py-2 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors">
              <FiExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
            <span className="ml-auto flex items-center gap-1 text-accent-yellow text-sm font-semibold">
              Details <HiArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
        </div>{/* end body flex row */}
      </motion.article>
    )
  }

  // ── REGULAR card (original design) ─────────────────────────
  return (
    <motion.article
      layout
      layoutId={`project-card-${project.id}`}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ opacity: { duration: 0.25 }, scale: { duration: 0.25 }, layout: { duration: 0.4, ease: "easeInOut" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative bg-card border rounded-2xl overflow-hidden flex flex-col transition-colors duration-300 cursor-pointer ${hovered ? "border-accent-yellow/50 shadow-2xl shadow-accent-yellow/10" : "border-border"}`}
    >
      {navigating && (
        <div className="absolute inset-0 z-50 bg-background/70 backdrop-blur-sm flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-accent-yellow/30 border-t-accent-yellow animate-spin" />
            <span className="text-xs text-accent-yellow font-mono">Loading...</span>
          </div>
        </div>
      )}

      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-accent-yellow/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <div className="flex-1 mx-3 h-5 bg-background/60 rounded-md" />
        <span className="text-text-muted font-mono text-[10px] opacity-50">{num}</span>
      </div>

      {/* Preview area */}
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        {project.imagekitFolder && !imgLoaded && !imgError && (
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(90deg,rgba(9,9,15,0.85) 25%,rgba(30,30,58,0.9) 50%,rgba(9,9,15,0.85) 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.8s ease-in-out infinite" }} />
        )}
        {project.imagekitFolder && !imgError && (
          <Image loader={ikLoader} src={ikProjectUrl(project.imagekitFolder, "snapshot1")} alt={`${project.title} screenshot`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" className={`object-contain transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`} onLoad={() => setImgLoaded(true)} onError={() => setImgError(true)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="absolute inset-0" style={{ background: project.imagekitFolder && !imgError ? "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)" : "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 100%)" }} />
        <motion.div className="absolute w-32 h-32 rounded-full blur-3xl bg-white/20" style={{ top: "-20%", left: "-8%" }} animate={{ x: [0, 12, 0], y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute w-24 h-24 rounded-full blur-2xl bg-white/15" style={{ bottom: "-15%", right: "5%" }} animate={{ x: [0, -10, 0], y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
        {floatingTags.map((tech, i) => (
          <motion.div key={tech} className="absolute text-[10px] bg-black/70 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-[3px] text-white font-mono whitespace-nowrap select-none" style={TAG_SLOTS[i]} animate={{ y: FLOAT_VARIANTS[i].y }} transition={{ duration: FLOAT_VARIANTS[i].duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}>
            {tech}
          </motion.div>
        ))}
        <div className="absolute -bottom-3 -right-1 font-heading font-black text-[6rem] text-white/[0.07] select-none leading-none pointer-events-none">{num}</div>
        {project.ongoing && (
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-green-400/40 rounded-full px-2.5 py-1 text-[10px] font-medium text-green-400">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" /></span>
            Ongoing
          </div>
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
          <div className="bg-black/55 backdrop-blur-sm rounded-xl px-3 py-2 max-w-[190px]">
            <div className="font-heading font-bold text-sm text-white leading-snug">{project.title}</div>
          </div>
          {project.highlight && (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }} className="mt-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20">
              <HiSparkles className="w-3 h-3 text-accent-yellow" />
              {project.highlight}
            </motion.div>
          )}
        </div>
        <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.2 }} className="absolute inset-0 bg-black/65 backdrop-blur-[3px] flex items-center justify-center gap-3 z-20">
          <a href={project.github} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors">
            <FiGithub className="w-4 h-4" /> GitHub
          </a>
          <a href={project.demo} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-4 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors">
            <FiExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <span className={`font-heading font-semibold text-sm leading-snug transition-colors duration-300 ${hovered ? "text-accent-yellow" : "text-text-primary"}`}>{project.title}</span>
          <motion.div animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.3 }} transition={{ duration: 0.25 }}>
            <HiArrowUpRight className="w-4 h-4 text-accent-yellow flex-shrink-0" />
          </motion.div>
        </div>
        <p className="text-text-muted text-xs leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-surface text-text-muted border border-border/60 rounded-md font-mono">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-md font-mono">+{project.tech.length - 4} more</span>
          )}
        </div>
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border">
          <div className="flex items-center gap-3">
            <a href={project.github} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-yellow transition-colors font-medium">
              <FiGithub className="w-3.5 h-3.5" /> Source
            </a>
            <a href={project.demo} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-text-muted text-xs hover:text-accent-cyan transition-colors font-medium">
              <FiExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
          </div>
          <span className="flex items-center gap-1 text-accent-yellow text-xs font-semibold">Details <HiArrowUpRight className="w-3 h-3" /></span>
        </div>
      </div>
    </motion.article>
  )
}
