"use client"

import { useState } from "react"
import Image from "next/image"
import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi"
import { shimmerDataURL } from "@/lib/shimmer"
import { ikProjectUrl } from "@/lib/imagekit"

// Stop probing after this many snapshots even if they keep existing
const MAX_SNAPSHOTS = 20

interface Props {
  /** ImageKit subfolder name — viewer auto-discovers all snapshotN files */
  folder?: string
  /** Explicit image URLs (for Unsplash or any static list) */
  images?: string[]
  alt: string
  credit?: string
}

function Shimmer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(90deg,#0f0f1a 25%,#1e1e3a 50%,#0f0f1a 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.8s ease-in-out infinite",
      }}
    />
  )
}

function ImageFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-card gap-3">
      <FiImage className="w-10 h-10 text-text-muted/30" />
      <span className="text-text-muted/40 text-xs font-mono">Image unavailable</span>
    </div>
  )
}

export default function ImageViewer({ folder, images: staticImages, alt, credit }: Props) {
  // ── Dynamic discovery (folder mode) ─────────────────────────────────────────
  const [discovered, setDiscovered]   = useState<string[]>([])
  const [probeIndex, setProbeIndex]   = useState(0)           // next snapshot to probe
  const [probeDone,  setProbeDone]    = useState(!folder)     // done immediately for static

  // URL currently being probed (rendered as a hidden <img> to test existence)
  const probeUrl =
    folder && !probeDone && probeIndex < MAX_SNAPSHOTS
      ? ikProjectUrl(folder, `snapshot${probeIndex + 1}`)
      : null

  function onProbeLoad() {
    // This snapshot exists — add it and probe the next one
    setDiscovered(prev => [...prev, ikProjectUrl(folder!, `snapshot${probeIndex + 1}`)])
    if (probeIndex + 1 < MAX_SNAPSHOTS) {
      setProbeIndex(i => i + 1)
    } else {
      setProbeDone(true)
    }
  }
  function onProbeError() {
    // This snapshot doesn't exist — stop probing
    setProbeDone(true)
  }

  // ── Resolve image list ───────────────────────────────────────────────────────
  const images = folder ? discovered : (staticImages ?? [])
  const total  = images.length

  // ── Gallery state ────────────────────────────────────────────────────────────
  const [current, setCurrent] = useState(0)
  const [loaded,  setLoaded]  = useState<Record<number, boolean>>({})
  const [errors,  setErrors]  = useState<Record<number, boolean>>({})

  const blur = shimmerDataURL(1400, 788)

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  // ── Loading state for folder with no images found yet ────────────────────────
  const isLoading = folder && !probeDone && discovered.length === 0

  return (
    <div className="w-full">
      {/* Hidden probe element — tests whether the next snapshot URL exists */}
      {probeUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={probeUrl}
          src={probeUrl}
          alt=""
          style={{ position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
          onLoad={onProbeLoad}
          onError={onProbeError}
        />
      )}

      {/* ── Main viewer ── */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40 bg-card">

        {/* Shimmer while the first image is still being discovered */}
        {isLoading && <Shimmer />}

        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 10 : 0,
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            {errors[i] ? (
              <ImageFallback />
            ) : (
              <>
                {!loaded[i] && <Shimmer />}
                <Image
                  src={src}
                  alt={`${alt}${total > 1 ? ` — ${i + 1} of ${total}` : ""}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1000px"
                  className={`object-contain transition-opacity duration-700 ${loaded[i] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setLoaded(p => ({ ...p, [i]: true }))}
                  onError={() => setErrors(p => ({ ...p, [i]: true }))}
                  placeholder="blur"
                  blurDataURL={blur}
                  priority={i === 0}
                />
              </>
            )}
          </div>
        ))}

        {/* Navigation — only when multiple images exist */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 text-white/70 text-xs font-mono select-none">
              {current + 1} / {total}
            </div>
          </>
        )}

        {credit && (
          <span className="absolute bottom-2 left-3 z-20 text-[10px] text-white/30 select-none">
            {credit}
          </span>
        )}
      </div>

      {/* ── Thumbnails ── */}
      {total > 1 && (
        <div className="flex gap-2.5 mt-4 justify-center flex-wrap">
          {images.map((src, i) => (
            <button
              key={`thumb-${i}`}
              onClick={() => setCurrent(i)}
              aria-label={`View screenshot ${i + 1}`}
              className={`relative h-14 w-24 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-200 bg-card ${
                i === current
                  ? "border-accent-yellow scale-105 shadow-lg shadow-accent-yellow/20"
                  : "border-border opacity-50 hover:opacity-80"
              }`}
            >
              {!errors[i] ? (
                <Image src={src} alt="" fill sizes="96px" className="object-contain" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiImage className="w-4 h-4 text-text-muted/30" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* ── Dot indicators ── */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-5 h-2 bg-accent-yellow" : "w-2 h-2 bg-border hover:bg-text-muted"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
