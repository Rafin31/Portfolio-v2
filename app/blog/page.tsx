import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Dev Blog — Full-Stack Development Insights from Wollongong",
  description:
    "Articles on React, Next.js, Node.js, freelancing in Australia, and web development case studies. Written by a full-stack developer based in Wollongong, NSW.",
  keywords: [
    "web development blog australia",
    "react nextjs tutorials",
    "fullstack developer blog wollongong",
    "web development tips australia",
    "nextjs developer blog",
  ],
  alternates: {
    canonical: "https://asifhossain.dev/blog",
  },
  openGraph: {
    type: "website",
    url: "https://asifhossain.dev/blog",
    title: "Dev Blog | Asif Hossain — Full-Stack Developer Wollongong",
    description:
      "Articles on React, Next.js, web development, and freelancing in Australia.",
  },
}

const CATEGORY_COLORS: Record<string, string> = {
  "Local Tech": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Case Study": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "Web Development": "bg-violet-500/15 text-violet-400 border-violet-500/30",
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
              Articles on full-stack development, web technologies, and
              freelancing in Australia — written by a developer based in
              Wollongong, NSW.
            </p>
          </div>
        </section>

        {/* ── Posts grid ─────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-text-muted text-center py-20">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const colorClass =
                  CATEGORY_COLORS[post.category] ??
                  "bg-slate-500/15 text-slate-400 border-slate-500/30"
                return (
                  <article
                    key={post.slug}
                    className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden card-hover group"
                  >
                    {/* Top accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-accent-yellow to-accent-cyan" />

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

                      {/* Title */}
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
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-accent-yellow text-sm font-medium hover:underline"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
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
