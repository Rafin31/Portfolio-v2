import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { projects } from "@/data/portfolio"

const BASE_URL = "https://asifhossain.dev"

// Customer-intent posts get higher priority (they drive conversions)
const HIGH_PRIORITY_SLUGS = new Set([
  "website-cost-australia-2026",
  "do-i-need-a-website-for-my-small-business",
  "fullstack-developer-wollongong-nsw",
])

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_SLUGS.has(post.slug) ? 0.9 : 0.7,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/hire-me`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,  // hire page is the highest-intent conversion page
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogEntries,
    ...projectEntries,
  ]
}
