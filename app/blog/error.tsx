"use client"

import { useEffect } from "react"
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function BlogError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[Blog Error]", error)
  }, [error])

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-5xl mb-6 select-none">📄</div>
        <h1 className="font-heading text-2xl font-bold text-text-primary mb-3">
          Couldn&apos;t load this page
        </h1>
        <p className="text-text-muted text-sm leading-relaxed mb-8">
          There was a problem loading the blog content. This is usually
          temporary. Try again or head back to the blog index.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-accent-yellow text-background font-semibold rounded-xl text-sm hover:bg-amber-400 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/blog"
            className="px-5 py-2.5 bg-surface border border-border text-text-primary font-semibold rounded-xl text-sm hover:border-accent-cyan/50 transition-colors"
          >
            ← All Posts
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-surface border border-border text-text-muted font-medium rounded-xl text-sm hover:border-border/80 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}
