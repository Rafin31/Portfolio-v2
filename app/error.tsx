"use client"

import { useEffect } from "react"
import Link from "next/link"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to an error reporting service in production
    console.error("[App Error]", error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Icon */}
        <div className="text-6xl mb-6 select-none">⚠️</div>

        {/* Heading */}
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-text-muted text-base leading-relaxed mb-4">
          An unexpected error occurred. You can try again or go back to the
          home page.
        </p>

        {/* Error detail (dev-friendly, non-scary) */}
        {error.message && (
          <p className="text-xs text-text-muted/60 font-mono bg-card border border-border rounded-lg px-4 py-3 mb-8 break-words">
            {error.message}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors glow-yellow-sm"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/50 transition-colors"
          >
            ← Home
          </Link>
        </div>
      </div>
    </main>
  )
}
