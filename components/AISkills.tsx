"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { aiSkills, aiSkillCategories, aiCapabilities, type AISkillCategory } from "@/data/portfolio"
import { FiZap, FiGlobe, FiTerminal, FiCode } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi2"

// ─── Orbital Ring Config ──────────────────────────────────────────────────────
const RINGS = [
  {
    size: 288,
    radius: 134,
    duration: 26,
    dir: 1,
    ringClass: "border-violet-500/20",
    labelClass: "text-violet-300 bg-violet-900/40 border-violet-500/30",
    dotClass: "bg-violet-400",
    dotGlow: "0 0 8px rgba(139,92,246,0.9)",
    labels: ["Claude API", "OpenAI API", "Vercel AI SDK"],
  },
  {
    size: 196,
    radius: 88,
    duration: 18,
    dir: -1,
    ringClass: "border-cyan-500/20",
    labelClass: "text-cyan-300 bg-cyan-900/40 border-cyan-500/30",
    dotClass: "bg-cyan-400",
    dotGlow: "0 0 8px rgba(34,211,238,0.9)",
    labels: ["Copilot", "Cursor IDE", "v0.dev"],
  },
  {
    size: 112,
    radius: 46,
    duration: 11,
    dir: 1,
    ringClass: "border-amber-500/20",
    labelClass: "text-amber-300 bg-amber-900/40 border-amber-500/30",
    dotClass: "bg-amber-400",
    dotGlow: "0 0 8px rgba(245,158,11,0.9)",
    labels: ["RAG", "Prompts"],
  },
]

function getPos(angleDeg: number, radius: number, center: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180)
  return {
    left: center + radius * Math.cos(rad),
    top: center + radius * Math.sin(rad),
  }
}

function Ring({ r }: { r: (typeof RINGS)[number] }) {
  const c = r.size / 2
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 rounded-full border ${r.ringClass}`}
      style={{
        width: r.size,
        height: r.size,
        marginLeft: -(r.size / 2),
        marginTop: -(r.size / 2),
      }}
      animate={{ rotate: r.dir * 360 }}
      transition={{ duration: r.duration, repeat: Infinity, ease: "linear" }}
    >
      {r.labels.map((label, i) => {
        const pos = getPos((i / r.labels.length) * 360, r.radius, c)
        return (
          <div
            key={label}
            className="absolute"
            style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              className="flex items-center gap-1.5"
              animate={{ rotate: -r.dir * 360 }}
              transition={{ duration: r.duration, repeat: Infinity, ease: "linear" }}
            >
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${r.dotClass}`}
                style={{ boxShadow: r.dotGlow }}
              />
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap select-none ${r.labelClass}`}
              >
                {label}
              </span>
            </motion.div>
          </div>
        )
      })}
    </motion.div>
  )
}

// ─── Color map (all classes must be in component files for Tailwind purge) ────
const CAT_COLORS: Record<AISkillCategory, { tab: string; hover: string }> = {
  tools: {
    tab: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    hover: "hover:border-violet-400 hover:text-violet-300",
  },
  apis: {
    tab: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    hover: "hover:border-cyan-400 hover:text-cyan-300",
  },
  techniques: {
    tab: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    hover: "hover:border-amber-400 hover:text-amber-300",
  },
}

const CAP_STYLES = {
  violet: {
    border: "border-violet-500/20 hover:border-violet-400/60",
    icon: "text-violet-400 bg-violet-500/10",
    title: "group-hover:text-violet-300",
    glow: "hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)]",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/60",
    icon: "text-cyan-400 bg-cyan-500/10",
    title: "group-hover:text-cyan-300",
    glow: "hover:shadow-[0_4px_30px_rgba(34,211,238,0.15)]",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-400/60",
    icon: "text-amber-400 bg-amber-500/10",
    title: "group-hover:text-amber-300",
    glow: "hover:shadow-[0_4px_30px_rgba(245,158,11,0.15)]",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-400/60",
    icon: "text-emerald-400 bg-emerald-500/10",
    title: "group-hover:text-emerald-300",
    glow: "hover:shadow-[0_4px_30px_rgba(52,211,153,0.15)]",
  },
}

const CAP_ICONS = [FiGlobe, FiTerminal, FiZap, FiCode]

const WORKFLOW = ["Idea", "Prompt", "Generate", "Review", "Refine", "Ship"]

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AISkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTab, setActiveTab] = useState<AISkillCategory>("tools")

  return (
    <section id="ai" className="py-24 bg-surface relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiSparkles className="text-violet-400 w-5 h-5" />
            </motion.div>
            <p className="text-violet-400 font-mono text-sm tracking-widest uppercase">
              AI-Powered Development
            </p>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Building with AI
          </h2>
          <p className="text-text-muted mt-6 max-w-2xl text-base leading-relaxed">
            I don&apos;t just use AI I build with it. From integrating LLM APIs to vibe-coding full
            features in minutes, AI is central to how I develop modern web applications.
          </p>
        </motion.div>

        {/* ── Orbital + Skill Tabs ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT: Orbital */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-[320px] h-[320px]">
              {/* Background glow behind rings */}
              <div className="absolute inset-0 rounded-full bg-violet-600/8 blur-2xl" />

              {/* Rings */}
              {RINGS.map((ring, i) => (
                <Ring key={i} r={ring} />
              ))}

              {/* Center orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Pulse rings */}
                {[0, 1, 2].map((j) => (
                  <motion.div
                    key={j}
                    className="absolute inset-0 rounded-full border border-violet-500/30"
                    style={{ width: 80, height: 80 }}
                    animate={{ scale: [1, 3.2], opacity: [0.5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: j * 1,
                    }}
                  />
                ))}

                {/* The orb */}
                <motion.div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #0891b2 100%)",
                    boxShadow: "0 0 40px rgba(124,58,237,0.6), 0 0 80px rgba(124,58,237,0.2)",
                  }}
                  animate={{ scale: [1, 1.07, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Inner rotating gradient ring */}
                  <motion.div
                    className="absolute inset-1 rounded-full opacity-40"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #7c3aed, #22d3ee, #f59e0b, #7c3aed)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <HiSparkles className="w-9 h-9 text-white relative z-10" />
                </motion.div>
              </div>

              {/* Floating particles */}
              {[
                { x: 20, y: 30, delay: 0, color: "bg-violet-400" },
                { x: 280, y: 60, delay: 1, color: "bg-cyan-400" },
                { x: 40, y: 270, delay: 2, color: "bg-amber-400" },
                { x: 260, y: 260, delay: 0.5, color: "bg-violet-400" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1.5 h-1.5 rounded-full ${p.color} opacity-60`}
                  style={{ left: p.x, top: p.y }}
                  animate={{ y: [-4, 4, -4], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: p.delay }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Skill tabs + pills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              My AI toolkit spans frontier models, developer tools, APIs, and production techniques everything needed to ship intelligent features fast.
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {aiSkillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                    activeTab === cat.id
                      ? `${CAT_COLORS[cat.id].tab} scale-105 shadow-lg`
                      : "border-border text-text-muted hover:border-border/80 hover:text-text-primary bg-card"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skill pills */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {aiSkills[activeTab].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className={`bg-card border border-border rounded-xl px-3 py-2.5 text-sm font-medium
                      text-text-muted cursor-default transition-all duration-200 group text-center
                      ${CAT_COLORS[activeTab].hover} hover:scale-105 hover:shadow-lg`}
                  >
                    <span className="group-hover:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Capability Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {aiCapabilities.map((cap, i) => {
            const Icon = CAP_ICONS[i]
            const styles = CAP_STYLES[cap.color]
            return (
              <motion.div
                key={cap.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-card border rounded-2xl p-6 cursor-default transition-all duration-300 group ${styles.border} ${styles.glow}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${styles.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-heading font-semibold text-base text-text-primary mb-2 transition-colors duration-200 ${styles.title}`}>
                  {cap.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Workflow Pipeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Subtle shimmer bg */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.05) 30%, rgba(34,211,238,0.05) 70%, transparent 100%)",
            }}
          />

          <p className="text-text-muted text-xs text-center mb-7 font-mono uppercase tracking-widest">
            My AI Dev Workflow
          </p>

          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-2">
            {WORKFLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, hsl(${260 + i * 20}, 80%, 60%) 0%, hsl(${260 + i * 20 + 30}, 70%, 50%) 100%)`,
                      boxShadow: `0 0 12px hsla(${260 + i * 20}, 80%, 60%, 0.4)`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-text-primary text-sm font-medium">{step}</span>
                </motion.div>

                {i < WORKFLOW.length - 1 && (
                  <motion.div
                    className="w-6 h-px hidden sm:block"
                    style={{
                      background: `linear-gradient(90deg, hsl(${260 + i * 20}, 60%, 50%), hsl(${260 + i * 20 + 30}, 60%, 50%))`,
                    }}
                    animate={{ scaleX: [0.4, 1, 0.4], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
