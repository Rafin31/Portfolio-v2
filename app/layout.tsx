import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const BASE_URL = "https://chat-with-asif-hossain.vercel.app"

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Asif Hossain | Full-Stack Developer — React, Next.js, Node.js",
    template: "%s | Asif Hossain",
  },
  description:
    "Asif Hossain is a Full-Stack Developer based in Wollongong, Australia. Specialising in React.js, Next.js, Node.js, TypeScript and MongoDB. 50+ projects delivered with 100% client satisfaction.",
  keywords: [
    "Asif Hossain",
    "Full-Stack Developer Australia",
    "React.js Developer Wollongong",
    "Next.js Developer Australia",
    "Node.js Developer",
    "MERN Stack Developer",
    "Software Engineer NSW",
    "Freelance Web Developer Australia",
    "TypeScript Developer",
    "MongoDB Developer",
    "Web Developer Wollongong",
    "Portfolio",
    "Hire Full-Stack Developer",
  ],
  authors: [{ name: "Asif Hossain", url: BASE_URL }],
  creator: "Asif Hossain",
  publisher: "Asif Hossain",
  category: "technology",

  // ── Canonical URL ─────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (Facebook, LinkedIn previews) ──────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Asif Hossain | Full-Stack Developer — React, Next.js, Node.js",
    description:
      "Full-Stack Developer based in Australia. Building scalable web applications with React.js, Next.js, Node.js and more. 50+ projects, 5-star rated.",
    siteName: "Asif Hossain Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Asif Hossain — Full-Stack Developer",
      },
    ],
    locale: "en_AU",
  },

  // ── Twitter / X card ──────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Asif Hossain | Full-Stack Developer",
    description:
      "Full-Stack Developer based in Australia. React.js, Next.js, Node.js. 50+ projects delivered.",
    images: ["/profile.jpg"],
    creator: "@Rafin31",
  },

  // ── Robots ────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
}

// ── JSON-LD Structured Data (helps Google understand who you are) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asif Hossain",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer specialising in React.js, Next.js, Node.js and cloud-based solutions. Based in Wollongong, Australia.",
  email: "asifhossain976@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wollongong",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  sameAs: [
    "https://github.com/Rafin31",
    "https://www.linkedin.com/in/asif-hossain-6982b81ba/",
    "https://www.fiverr.com/rafin_31",
  ],
  knowsAbout: [
    "React.js", "Next.js", "Node.js", "TypeScript", "JavaScript",
    "MongoDB", "PostgreSQL", "TailwindCSS", "AWS", "Docker",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Wollongong",
      url: "https://www.uow.edu.au",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "American International University – Bangladesh",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
