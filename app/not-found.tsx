import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-xl mx-auto">
          {/* 404 */}
          <div className="font-heading text-[9rem] sm:text-[12rem] font-black leading-none gradient-text select-none mb-2">
            404
          </div>

          {/* Heading */}
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            This page doesn&apos;t exist yet
          </h1>

          {/* Sub-message */}
          <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-10">
            The URL you followed might be wrong, the page may have moved, or
            it&apos;s still in the works. Check back soon — new content is
            added regularly.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors glow-yellow-sm"
            >
              ← Back to Home
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/50 transition-colors"
            >
              Read the Blog
            </Link>
            <Link
              href="/hire-me"
              className="px-6 py-3 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-yellow/50 transition-colors"
            >
              Hire Me
            </Link>
          </div>

          {/* Hint */}
          <p className="text-text-muted text-sm mt-10 opacity-50">
            asifhossain.dev
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
