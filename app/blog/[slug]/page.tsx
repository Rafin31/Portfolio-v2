import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { getPostBySlug, getAllSlugs } from "@/lib/blog"
import { shimmerDataURL } from "@/lib/shimmer"

const BASE_URL = "https://asifhossain.dev"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: BASE_URL }],
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/profile.jpg", width: 400, height: 400 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/profile.jpg"],
      creator: "@Rafin31",
    },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Asif Hossain",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Asif Hossain",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    image: `${BASE_URL}/profile.jpg`,
    keywords: post.keywords.join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent-yellow transition-colors text-sm mb-10"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow text-xs font-medium">
                {post.category}
              </span>
              <span className="text-text-muted text-xs">{post.readTime}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-text-muted text-lg leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>By {post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            {/* Cover image */}
            {post.coverImage && (
              <div className="relative mt-8 rounded-2xl overflow-hidden aspect-[16/7]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  placeholder="blur"
                  blurDataURL={shimmerDataURL(768, 336)}
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-accent-yellow/40 via-accent-cyan/40 to-transparent mb-10" />

          {/* MDX Content */}
          <div className="mdx-content">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12" />

          {/* CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-text-primary mb-2">
              Need a Full-Stack Developer?
            </h2>
            <p className="text-text-muted mb-6">
              Based in Wollongong, NSW. Available for projects across Australia
              and globally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/hire-me"
                className="px-6 py-3 bg-accent-yellow text-background font-semibold rounded-xl hover:bg-amber-400 transition-colors glow-yellow-sm"
              >
                View Services
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 bg-surface border border-border text-text-primary font-semibold rounded-xl hover:border-accent-cyan/50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
