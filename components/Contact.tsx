"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { personalInfo } from "@/data/portfolio"
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi"
import { HiCheckCircle, HiXCircle } from "react-icons/hi2"

// Contact info cards
const contactCards = [
  {
    icon: FiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-accent-yellow",
    bg: "bg-accent-yellow/10",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
]

// Form field type
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// Toast notification component
function Toast({
  type,
  message,
  onClose,
}: {
  type: "success" | "error"
  message: string
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.9 }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border ${
        type === "success"
          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
          : "bg-red-500/10 border-red-500/30 text-red-400"
      }`}
    >
      {type === "success" ? (
        <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <HiXCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 opacity-60 hover:opacity-100 transition-opacity text-lg leading-none"
      >
        ×
      </button>
    </motion.div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null)

  // Simple form validation
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address"
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required"
    if (!form.message.trim()) {
      newErrors.message = "Message is required"
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setToast({ type: "success", message: "Message sent! I'll get back to you soon." })
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json()
        setToast({ type: "error", message: data.error || "Failed to send. Please try again." })
      }
    } catch {
      setToast({ type: "error", message: "Network error. Please check your connection." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-accent-cyan/4 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-3">
            Let&apos;s talk
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary section-title-underline">
            Get In Touch
          </h2>
          <p className="text-text-muted mt-6 text-base max-w-xl">
            I&apos;m always open to new opportunities, interesting projects, and collaborations.
            Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact info */}
          <div className="flex flex-col gap-6">
            {/* Info cards */}
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-accent-yellow/40 transition-all duration-300 group card-hover"
              >
                <div
                  className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <card.icon className={`${card.color} w-5 h-5`} />
                </div>
                <div>
                  <div className="text-text-muted text-xs mb-1">{card.label}</div>
                  <div className="text-text-primary font-medium text-sm">{card.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-5"
            >
              <div className="text-text-muted text-xs mb-4">Connect with me</div>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-text-muted hover:text-accent-yellow hover:border-accent-yellow/40 transition-all duration-200 text-sm font-medium"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200 text-sm font-medium"
                >
                  <FiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-medium text-sm">
                Available for freelance &amp; full-time opportunities
              </span>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8 flex flex-col gap-5"
              noValidate
            >
              <h3 className="font-heading font-semibold text-text-primary text-lg">
                Send a Message
              </h3>

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-text-muted text-xs mb-2 block" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Asif Hossain"
                    className={`form-input ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-text-muted text-xs mb-2 block" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-text-muted text-xs mb-2 block" htmlFor="subject">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Hire Me / Hello"
                  className={`form-input ${errors.subject ? "border-red-500 focus:border-red-500" : ""}`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-text-muted text-xs mb-2 block" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`form-input resize-none ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  loading
                    ? "bg-accent-yellow/50 text-background cursor-not-allowed"
                    : "bg-accent-yellow text-background hover:bg-amber-400 hover:scale-[1.02] glow-yellow-sm"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
      )}
    </section>
  )
}
