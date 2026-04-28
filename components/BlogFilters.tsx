"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

interface Props {
  categories: string[]
  activeCategory: string
}

export default function BlogFilters({ categories, activeCategory }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setCategory = useCallback(
    (cat: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (cat === "All") {
        params.delete("category")
      } else {
        params.set("category", cat)
      }
      params.delete("page")
      router.push(`/blog?${params.toString()}`, { scroll: false })
    },
    [router, searchParams]
  )

  const all = ["All", ...categories]

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {all.map((cat) => {
        const isActive = cat === activeCategory
        return (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              isActive
                ? "bg-accent-yellow text-background border-accent-yellow"
                : "bg-surface border-border text-text-muted hover:border-accent-yellow/40 hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}
