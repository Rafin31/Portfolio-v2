import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  description: string
  keywords: string[]
  readTime: string
  category: string
  author: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

function parsePostFile(
  slug: string,
  filePath: string
): BlogPostMeta & { content: string } | null {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)
    return {
      slug,
      title: typeof data.title === "string" ? data.title : slug,
      date: typeof data.date === "string" ? data.date : new Date().toISOString(),
      description: typeof data.description === "string" ? data.description : "",
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      readTime: typeof data.readTime === "string" ? data.readTime : "5 min read",
      category: typeof data.category === "string" ? data.category : "Development",
      author: typeof data.author === "string" ? data.author : "Asif Hossain",
      content,
    }
  } catch (err) {
    console.error(`[blog] Failed to parse post "${slug}":`, err)
    return null
  }
}

export function getAllPosts(): BlogPostMeta[] {
  try {
    if (!fs.existsSync(postsDirectory)) return []

    const fileNames = fs.readdirSync(postsDirectory)
    const posts: BlogPostMeta[] = []

    for (const fileName of fileNames) {
      if (!fileName.endsWith(".mdx")) continue
      const slug = fileName.replace(/\.mdx$/, "")
      const filePath = path.join(postsDirectory, fileName)
      const post = parsePostFile(slug, filePath)
      if (post) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { content: _content, ...meta } = post
        posts.push(meta)
      }
    }

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (err) {
    console.error("[blog] Failed to read posts directory:", err)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Sanitize slug to prevent path traversal
    const safeSlug = path.basename(slug)
    const filePath = path.join(postsDirectory, `${safeSlug}.mdx`)

    if (!fs.existsSync(filePath)) return null

    return parsePostFile(safeSlug, filePath) ?? null
  } catch (err) {
    console.error(`[blog] Failed to get post "${slug}":`, err)
    return null
  }
}

export function getAllSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) return []
    return fs
      .readdirSync(postsDirectory)
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""))
  } catch (err) {
    console.error("[blog] Failed to list slugs:", err)
    return []
  }
}
