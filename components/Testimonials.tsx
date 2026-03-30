"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { testimonials } from "@/data/portfolio"
import { HiStar } from "react-icons/hi2"
import { FiMessageSquare } from "react-icons/fi"

// Star rating display
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <HiStar
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-accent-yellow" : "text-border"}`}
        />
      ))}
    </div>
  )
}

// Individual review card
function ReviewCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="relative flex-shrink-0 w-80 bg-card border border-border rounded-2xl p-5 mx-3 hover:border-accent-yellow/40 transition-colors duration-300 group">
      {/* Quote icon watermark */}
      <div className="absolute top-4 right-4 text-accent-yellow/10">
        <FiMessageSquare className="w-10 h-10" />
      </div>

      {/* Stars */}
      <Stars rating={t.rating} />

      {/* Quote text */}
      <p className="mt-3 text-text-muted text-sm leading-relaxed line-clamp-4 group-hover:text-text-primary transition-colors duration-300">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center flex-shrink-0 shadow-md`}
        >
          <span className="text-white font-bold text-xs font-heading">{t.initials}</span>
        </div>
        <div className="min-w-0">
          <div className="font-heading font-semibold text-text-primary text-sm truncate">
            {t.name}
          </div>
          <div className="text-text-muted text-xs truncate">
            {t.role}, {t.company}
          </div>
        </div>
      </div>
    </div>
  )
}

// One infinite-scrolling row. Duplicates cards for seamless loop.
// direction: "left" = normal marquee, "right" = reverse marquee
function MarqueeRow({
  items,
  direction = "left",
}: {
  items: (typeof testimonials)
  direction?: "left" | "right"
}) {
  // Duplicate so the seam is invisible
  const doubled = [...items, ...items]

  return (
    <div
      className="marquee-wrapper overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className={`marquee-track marquee-track--${direction}`}>
        {doubled.map((t, i) => (
          <ReviewCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const row2 = [...testimonials].reverse()

  return (
    <section id="testimonials" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-accent-yellow/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-48 bg-accent-cyan/4 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            Client feedback
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary">
            What Clients Say
          </h2>
          <p className="text-text-muted mt-4 text-base max-w-xl mx-auto">
            Real feedback from 50+ projects — consistently rated 5 stars on Fiverr and direct contracts.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-10 mt-8">
            {[
              { value: "50+", label: "Reviews" },
              { value: "5.0 ★", label: "Avg Rating" },
              { value: "100%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading font-bold text-2xl text-accent-yellow">{s.value}</div>
                <div className="text-text-muted text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full-width marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col gap-5"
      >
        {/* Row 1 — scrolls right to left */}
        <MarqueeRow items={testimonials} direction="left" />
        {/* Row 2 — scrolls left to right */}
        <MarqueeRow items={row2} direction="right" />
      </motion.div>

      {/* Fiverr CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center"
      >
        <a
          href="https://www.fiverr.com/rafin_31"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-accent-yellow/40 text-accent-yellow rounded-xl hover:bg-accent-yellow/10 transition-all duration-200 text-sm font-medium"
        >
          View All Reviews on Fiverr →
        </a>
      </motion.div>
    </section>
  )
}
