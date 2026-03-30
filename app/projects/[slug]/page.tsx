import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { projects } from "@/data/portfolio"
import { getProjectDetail } from "@/data/projectDetails"
import { shimmerDataURL } from "@/lib/shimmer"
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi2"

const BASE_URL = "https://asifhossain.dev"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  const detail = getProjectDetail(params.slug)
  return {
    title: project.title,
    description: detail?.overview.slice(0, 155) ?? project.longDescription.slice(0, 155),
    alternates: { canonical: `${BASE_URL}/projects/${params.slug}` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/projects/${params.slug}`,
      title: `${project.title} | Asif Hossain`,
      description: project.longDescription,
      images: detail?.coverImage
        ? [{ url: detail.coverImage, width: 1400, alt: detail.imageAlt }]
        : [{ url: "/profile.jpg", width: 400 }],
    },
  }
}

const CATEGORY_LABEL: Record<string, string> = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  blockchain: "Blockchain",
  freelance: "Freelance",
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const detail = getProjectDetail(params.slug)

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: detail?.overview ?? project.longDescription,
    applicationCategory: "WebApplication",
    programmingLanguage: project.tech,
    author: { "@type": "Person", name: "Asif Hossain", url: BASE_URL },
    url: project.demo !== "#" ? project.demo : undefined,
  }

  const blur = shimmerDataURL(1400, 788)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={`relative bg-gradient-to-br ${project.gradient} pt-28 pb-16 overflow-hidden`}>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(0,0,0,0.45) 100%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium"
              >
                {CATEGORY_LABEL[cat] ?? cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg max-w-3xl">
            {project.title}
          </h1>

          {/* Highlight badge */}
          {project.highlight && (
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white mb-6">
              <HiSparkles className="w-4 h-4 text-accent-yellow" />
              {project.highlight}
            </div>
          )}

          {/* Short description */}
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/25 backdrop-blur-sm rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                View Source
              </a>
            )}
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-yellow text-background rounded-xl text-sm font-semibold hover:bg-amber-400 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <main className="bg-background pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cover image */}
          {detail?.coverImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/40 -mt-6 mb-14 border border-border">
              <Image
                src={detail.coverImage}
                alt={detail.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1000px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={blur}
                priority
              />
              {/* Credit overlay */}
              <span className="absolute bottom-2 right-3 text-[10px] text-white/40 select-none">
                {detail.imageCredit}
              </span>
            </div>
          )}

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Left column ─────────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-12">

              {/* Overview */}
              <section>
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 section-title-underline">
                  Overview
                </h2>
                <p className="text-text-muted leading-relaxed text-base mt-6">
                  {detail?.overview ?? project.longDescription}
                </p>
              </section>

              {/* Features */}
              {detail?.features && detail.features.length > 0 && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-text-primary mb-6 section-title-underline">
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    {detail.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-card border border-border rounded-xl p-5 card-hover flex flex-col gap-3"
                      >
                        <div className="text-2xl">{feature.icon}</div>
                        <h3 className="font-heading text-sm font-semibold text-text-primary">
                          {feature.title}
                        </h3>
                        <p className="text-text-muted text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Challenge */}
              {detail?.challenge && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 section-title-underline">
                    The Challenge
                  </h2>
                  <p className="text-text-muted leading-relaxed text-base mt-6 border-l-2 border-accent-cyan/50 pl-5">
                    {detail.challenge}
                  </p>
                </section>
              )}

              {/* Outcome */}
              {detail?.outcome && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-text-primary mb-4 section-title-underline">
                    Outcome
                  </h2>
                  <p className="text-text-muted leading-relaxed text-base mt-6 border-l-2 border-accent-yellow/50 pl-5">
                    {detail.outcome}
                  </p>
                </section>
              )}
            </div>

            {/* ── Right column ────────────────────────────────── */}
            <aside className="flex flex-col gap-6 lg:pt-2">

              {/* Tech stack */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-surface text-accent-cyan border border-accent-cyan/20 rounded-full font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3">
                <h3 className="font-heading text-sm font-semibold text-text-primary mb-1 uppercase tracking-wider">
                  Links
                </h3>
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-accent-yellow transition-colors text-sm"
                  >
                    <FiGithub className="w-4 h-4 shrink-0" />
                    View Source Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-text-muted/40 text-sm cursor-not-allowed">
                    <FiGithub className="w-4 h-4 shrink-0" />
                    Private Repository
                  </span>
                )}
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors text-sm"
                  >
                    <FiExternalLink className="w-4 h-4 shrink-0" />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Categories */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-heading text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-3 py-1 bg-surface text-accent-yellow border border-accent-yellow/20 rounded-full capitalize"
                    >
                      {CATEGORY_LABEL[cat] ?? cat}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-gradient-to-br from-card via-surface to-card border border-border rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-3 relative z-10">
              Interested in working together?
            </h2>
            <p className="text-text-muted mb-8 relative z-10 max-w-md mx-auto">
              I build projects like this for clients across Australia and globally. Get in touch to discuss your idea.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/hire-me"
                className="px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors glow-yellow-sm"
              >
                View Services
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/50 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/#projects"
                className="px-6 py-3 bg-surface border border-border text-text-muted font-medium rounded-xl hover:border-border/80 transition-colors"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
