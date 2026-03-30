"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const mouse = { x: -100, y: -100 }
    const ring  = { x: -100, y: -100 }
    let hovered = false

    const dot  = dotRef.current
    const ring_ = ringRef.current
    if (!dot || !ring_) return

    // Move dot instantly
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      dot.style.opacity = "1"
      ring_.style.opacity = "1"
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`

      // Check if hovering interactive element
      const target = e.target as HTMLElement
      hovered = !!target.closest("a, button, [role='button'], input, textarea, select")

      if (hovered) {
        dot.style.opacity = "0"
        ring_.style.width  = "48px"
        ring_.style.height = "48px"
        ring_.style.marginLeft = "-24px"
        ring_.style.marginTop  = "-24px"
        ring_.style.borderColor = "#22d3ee"
        ring_.style.backgroundColor = "rgba(34,211,238,0.08)"
      } else {
        dot.style.opacity = "1"
        ring_.style.width  = "34px"
        ring_.style.height = "34px"
        ring_.style.marginLeft = "-17px"
        ring_.style.marginTop  = "-17px"
        ring_.style.borderColor = "#f59e0b"
        ring_.style.backgroundColor = "transparent"
      }
    }

    const onLeave = () => {
      dot.style.opacity  = "0"
      ring_.style.opacity = "0"
    }
    const onEnter = () => {
      dot.style.opacity  = "1"
      ring_.style.opacity = "1"
    }

    const onDown = () => { dot.style.transform += " scale(0.5)" }
    const onUp   = () => {}

    document.addEventListener("mousemove",  onMove)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mousedown",  onDown)
    document.addEventListener("mouseup",    onUp)

    // Smooth lagging ring via RAF
    let raf: number
    const animate = () => {
      ring.x += (mouse.x - ring.x) * 0.1
      ring.y += (mouse.y - ring.y) * 0.1
      ring_.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove",  onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown",  onDown)
      document.removeEventListener("mouseup",    onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Outer lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2"
        style={{
          width: 34,
          height: 34,
          marginLeft: -17,
          marginTop: -17,
          borderColor: "#f59e0b",
          opacity: 0,
          transition: "width 0.2s ease, height 0.2s ease, margin 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent-yellow"
        style={{
          width: 7,
          height: 7,
          marginLeft: -3.5,
          marginTop: -3.5,
          opacity: 0,
          transition: "opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  )
}
