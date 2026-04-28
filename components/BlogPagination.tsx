"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  currentPage: number
  totalPages: number
}

export default function BlogPagination({ currentPage, totalPages }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goTo = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString())
      if (page === 1) {
        params.delete("page")
      } else {
        params.set("page", String(page))
      }
      router.push(`/blog?${params.toString()}`, { scroll: true })
    },
    [router, searchParams]
  )

  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-border text-text-muted hover:border-accent-yellow/40 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goTo(p)}
          className={`w-9 h-9 rounded-lg border text-sm font-medium transition-all duration-200 ${
            p === currentPage
              ? "bg-accent-yellow text-background border-accent-yellow"
              : "border-border text-text-muted hover:border-accent-yellow/40 hover:text-text-primary"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-border text-text-muted hover:border-accent-yellow/40 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
