"use client"

import { useEffect } from "react"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

// global-error must include its own <html> and <body> tags
// It wraps the root layout and is only triggered for truly fatal errors
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[Global Error]", error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#09090f",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "480px" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚡</div>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Critical error
          </h1>
          <p
            style={{
              color: "#94a3b8",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            The application encountered a fatal error and could not recover.
            Please refresh the page.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.75rem 2rem",
              background: "#f59e0b",
              color: "#09090f",
              fontWeight: 700,
              border: "none",
              borderRadius: "0.75rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  )
}
