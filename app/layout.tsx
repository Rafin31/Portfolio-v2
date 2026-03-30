// Root layout — sets up fonts, metadata, and global styles
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

// Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Space Grotesk for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Asif Hossain | Full-Stack Developer",
  description:
    "Full-Stack Developer & Software Engineer specialising in React.js, Next.js, Node.js and cloud-based solutions. 50+ projects, 3+ years experience, 100% client satisfaction.",
  keywords: [
    "Asif Hossain",
    "Full-Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Asif Hossain" }],
  openGraph: {
    title: "Asif Hossain | Full-Stack Developer",
    description: "Building scalable web applications with modern technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
