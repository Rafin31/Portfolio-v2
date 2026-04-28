import Link from "next/link"
import { getAllPosts, type BlogPostMeta } from "@/lib/blog"
import { projects, type Project } from "@/data/portfolio"
import { ArrowUpRight, Clock, Zap } from "lucide-react"

interface Props {
  currentSlug: string
  currentCategory: string
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group p-4 rounded-xl bg-surface border border-border hover:border-accent-yellow/40 transition-all duration-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs px-2 py-0.5 rounded-full bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20">
          {post.category}
        </span>
        <span className="text-xs text-text-muted flex items-center gap-1">
          <Clock size={10} />
          {post.readTime}
        </span>
      </div>
      <h4 className="text-sm font-medium text-text-primary group-hover:text-accent-yellow transition-colors leading-snug line-clamp-2">
        {post.title}
      </h4>
      <p className="text-xs text-text-muted mt-1">{formatDate(post.date)}</p>
    </Link>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 rounded-xl bg-surface border border-border hover:border-accent-cyan/40 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {project.featured && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 font-medium">
            Featured
          </span>
        )}
        {project.ongoing && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            Ongoing
          </span>
        )}
      </div>

      <h4 className="text-sm font-semibold text-text-primary leading-snug mb-1 line-clamp-2">
        {project.title}
      </h4>

      <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-md bg-background border border-border text-text-muted"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="text-xs px-2 py-0.5 rounded-md bg-background border border-border text-text-muted">
            +{project.tech.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:text-accent-cyan/80 transition-colors font-medium"
          >
            Live Demo <ArrowUpRight size={12} />
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-accent-yellow transition-colors ml-auto"
        >
          Details →
        </Link>
      </div>
    </div>
  )
}

export default function BlogSidebar({ currentSlug, currentCategory }: Props) {
  const allPosts = getAllPosts()

  const related = allPosts
    .filter((p) => p.slug !== currentSlug && p.category === currentCategory)
    .slice(0, 3)

  const relatedSlugs = new Set(related.map((p) => p.slug))
  const others = allPosts
    .filter((p) => p.slug !== currentSlug && !relatedSlugs.has(p.slug))
    .slice(0, 3)

  const sidebarProjects = projects.filter((p) => p.featured || p.ongoing)

  return (
    <aside className="space-y-8">
      {/* Related posts */}
      {related.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap size={14} className="text-accent-yellow" />
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Related Posts
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {related.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Other posts */}
      {others.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              More Articles
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {others.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 mt-3 text-xs text-text-muted hover:text-accent-yellow transition-colors"
          >
            View all posts →
          </Link>
        </div>
      )}

      {/* Featured / ongoing projects */}
      {sidebarProjects.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              My Projects
            </h3>
          </div>
          <div className="space-y-3">
            {sidebarProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1 mt-3 text-xs text-text-muted hover:text-accent-cyan transition-colors"
          >
            View all projects →
          </Link>
        </div>
      )}
    </aside>
  )
}
