import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import CustomCursor from "@/components/CustomCursor"
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

const BASE_URL = "https://asifhossain.dev"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090f",
}

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Website Developer Wollongong | Asif Hossain | Web Developer NSW Australia",
    template: "%s | Asif Hossain – Website Developer Wollongong",
  },
  description:
    "Professional website developer in Wollongong, NSW. Asif Hossain builds websites and web apps for Australian businesses. React, Next.js, Node.js expert. 50+ projects delivered, 100% client satisfaction.",
  keywords: [
    // Customer-facing (what people actually search)
    "website developer wollongong",
    "web developer wollongong",
    "website developer australia",
    "web developer australia",
    "website design wollongong",
    "website developer nsw",
    "hire website developer wollongong",
    "small business website developer australia",
    "website developer near me wollongong",
    "affordable website developer wollongong",
    "professional web developer wollongong nsw",
    "business website developer australia",
    "website builder wollongong",
    "web design wollongong",
    "website developer illawarra",
    // Technical / professional
    "Asif Hossain",
    "Full-Stack Developer Australia",
    "React developer Wollongong",
    "Next.js Developer Australia",
    "Node.js Developer",
    "MERN Stack Developer",
    "Freelance Web Developer Australia",
    "TypeScript Developer",
    "Web Developer Wollongong",
  ],
  authors: [{ name: "Asif Hossain", url: BASE_URL }],
  creator: "Asif Hossain",
  publisher: "Asif Hossain",
  category: "technology",

  // ── Canonical URL ─────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Website Developer Wollongong | Asif Hossain | Web Developer NSW",
    description:
      "Professional website developer in Wollongong, NSW. Building websites and web apps for Australian businesses. 50+ projects, 5-star rated.",
    siteName: "Asif Hossain – Website Developer Wollongong",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Asif Hossain, Website Developer Wollongong NSW",
      },
    ],
    locale: "en_AU",
  },

  // ── Twitter / X ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Website Developer Wollongong | Asif Hossain",
    description:
      "Professional website developer based in Wollongong, NSW. Websites and web apps for Australian businesses.",
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

// ── JSON-LD: Person ────────────────────────────────────────────────────────
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asif Hossain",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  jobTitle: "Website Developer",
  description:
    "Professional website developer and web designer based in Wollongong, NSW, Australia. Building websites and web applications for Australian businesses.",
  email: "contact@asifhossain.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wollongong",
    addressRegion: "NSW",
    postalCode: "2500",
    addressCountry: "AU",
  },
  sameAs: [
    "https://github.com/Rafin31",
    "https://www.linkedin.com/in/asif-hossain-6982b81ba/",
    "https://www.fiverr.com/rafin_31",
  ],
  knowsAbout: [
    "Website Development", "Web Design", "React.js", "Next.js",
    "Node.js", "TypeScript", "JavaScript", "MongoDB", "PostgreSQL",
    "TailwindCSS", "AWS", "E-Commerce Development",
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

// ── JSON-LD: LocalBusiness (critical for "website developer wollongong") ──
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  name: "Asif Hossain – Website Developer Wollongong",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  description:
    "Professional website developer and web designer based in Wollongong, NSW. Building custom websites, e-commerce stores, and web applications for Australian businesses.",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wollongong",
    addressLocality: "Wollongong",
    addressRegion: "NSW",
    postalCode: "2500",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.4278,
    longitude: 150.8931,
  },
  areaServed: [
    { "@type": "City", "name": "Wollongong" },
    { "@type": "City", "name": "Sydney" },
    { "@type": "City", "name": "Melbourne" },
    { "@type": "State", "name": "New South Wales" },
    { "@type": "Country", "name": "Australia" },
  ],
  serviceType: [
    "Website Development",
    "Web Design",
    "E-Commerce Development",
    "Web Application Development",
    "React Development",
    "Next.js Development",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "React and Next.js Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Redesign and Modernisation" } },
    ],
  },
}

// ── JSON-LD: WebSite with SearchAction ────────────────────────────────────
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Asif Hossain – Website Developer Wollongong",
  url: BASE_URL,
  description: "Portfolio and blog of Asif Hossain, professional website developer in Wollongong, NSW.",
  inLanguage: "en-AU",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-text-primary antialiased`}
      >
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
