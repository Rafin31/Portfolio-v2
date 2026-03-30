// Generates a dark animated shimmer SVG used as blur placeholder for Next.js Image
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#141428" offset="20%" />
      <stop stop-color="#1e1e3a" offset="50%" />
      <stop stop-color="#141428" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#141428" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.4s" repeatCount="indefinite" />
</svg>`

function toBase64(str: string): string {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str)
}

export function shimmerDataURL(w = 1200, h = 675): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`
}
