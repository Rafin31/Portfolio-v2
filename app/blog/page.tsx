import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getAllPosts } from "@/lib/blog"
import { shimmerDataURL } from "@/lib/shimmer"

export const metadata: Metadata = {
  title: "Dev Blog: Full-Stack Development Insights from Wollongong",
  description:
    "Articles on React, Next.js, Node.js, AI development, freelancing in Australia, and web development case studies. Written by a full-stack developer based in Wollongong, NSW.",
  keywords: [
    "web development blog australia",
    "react nextjs tutorials",
    "fullstack developer blog wollongong",
    "web development tips australia",
    "nextjs developer blog",
    "ai web development 2026",
    "website cost australia 2026",
    "small business website australia",
  ],
  alternates: {
    canonical: "https://asifhossain.dev/blog",
  },
  openGraph: {
    type: "website",
    url: "https://asifhossain.dev/blog",
    title: "Dev Blog | Asif Hossain, Full-Stack Developer Wollongong",
    description:
      "Articles on React, Next.js, AI development, and freelancing in Australia.",
  },
}

const CATEGORY_COLORS: Record<string, string> = {
  "Local Tech": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Case Study": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "Web Development": "bg-violet-500/15 text-violet-400 border-violet-500/30",
  "AI Development": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">
        {/* ── Header ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-sm font-medium mb-4">
              Dev Blog
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Insights &amp;{" "}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Articles on full-stack development, AI integration, web
              technologies, and freelancing in Australia. Written by a developer
              based in Wollongong, NSW.
            </p>
          </div>
        </section>

        {/* ── Posts grid ─────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-text-muted text-center py-20">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const colorClass =
                  CATEGORY_COLORS[post.category] ??
                  "bg-slate-500/15 text-slate-400 border-slate-500/30"
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent-yellow/40 hover:shadow-xl hover:shadow-accent-yellow/5 hover:-translate-y-1"
                  >
                    {/* Cover image */}
                    {post.coverImage ? (
                      <div className="relative h-48 overflow-hidden bg-surface flex-shrink-0">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                          placeholder="blur"
                          blurDataURL={shimmerDataURL(360, 192)}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                      </div>
                    ) : (
                      /* Top accent bar when no image */
                      <div className="h-1 w-full bg-gradient-to-r from-accent-yellow to-accent-cyan flex-shrink-0" />
                    )}

                    <div className="flex flex-col flex-1 p-6 gap-4">
                      {/* Category + read time */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}
                        >
                          {post.category}
                        </span>
                        <span className="text-text-muted text-xs">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title — changes colour on hover via parent group */}
                      <h2 className="font-heading text-lg font-semibold text-text-primary leading-snug group-hover:text-accent-yellow transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-text-muted text-sm leading-relaxed flex-1">
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                        <time
                          dateTime={post.date}
                          className="text-text-muted text-xs"
                        >
                          {formatDate(post.date)}
                        </time>
                        <span className="text-accent-yellow text-sm font-medium group-hover:underline">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
          <p className="text-text-muted mb-6">
            Looking to hire a developer or start a project?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
