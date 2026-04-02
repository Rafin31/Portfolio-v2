const IK_ORIGIN = "https://ik.imagekit.io/zqm3n6ufa"
const IK_ROOT   = "Portfolio%20Projects%20Images" // pre-encoded — has spaces

/**
 * Build a URL for a project snapshot stored in ImageKit.
 *   folder   — the subfolder name exactly as it appears in ImageKit
 *              e.g. "Assert", "PocketClass", "Medical Management System"
 *   snapshot — file name without extension, e.g. "snapshot1" (default)
 */
export function ikProjectUrl(folder: string, snapshot = "snapshot1"): string {
  const encodedFolder = encodeURIComponent(folder)
  return `${IK_ORIGIN}/${IK_ROOT}/${encodedFolder}/${snapshot}`
}

/**
 * Custom loader for next/image.
 * Tells ImageKit to resize + convert to the optimal format on their CDN
 * instead of routing through Next.js's own /‌_next/image endpoint.
 *
 * Usage:  <Image loader={ikLoader} src={ikProjectUrl("Assert")} … />
 */
export function ikLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}): string {
  const q = quality ?? 80
  const sep = src.includes("?") ? "&" : "?"
  return `${src}${sep}tr=w-${width},q-${q},f-auto`
}
