export default function PostLoading() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link skeleton */}
        <div className="h-4 w-24 bg-card rounded animate-pulse mb-10" />

        {/* Header skeleton */}
        <header className="mb-10">
          <div className="flex gap-3 mb-4">
            <div className="h-6 w-20 bg-card rounded-full animate-pulse" />
            <div className="h-6 w-16 bg-card rounded-full animate-pulse" />
          </div>
          <div className="space-y-3 mb-6">
            <div className="h-9 w-full bg-card rounded-xl animate-pulse" />
            <div className="h-9 w-5/6 bg-card rounded-xl animate-pulse" />
          </div>
          <div className="h-6 w-full bg-card rounded-lg animate-pulse mb-3" />
          <div className="h-6 w-4/5 bg-card rounded-lg animate-pulse" />
          <div className="flex gap-4 mt-6">
            <div className="h-4 w-24 bg-card rounded animate-pulse" />
            <div className="h-4 w-4 bg-card rounded animate-pulse" />
            <div className="h-4 w-32 bg-card rounded animate-pulse" />
          </div>
        </header>

        {/* Divider */}
        <div className="h-px bg-card mb-10" />

        {/* Content skeleton */}
        <div className="space-y-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-card rounded animate-pulse"
              style={{ width: `${75 + Math.random() * 25}%` }}
            />
          ))}
          <div className="h-4 bg-card rounded animate-pulse w-full mt-8" />
          <div className="h-4 bg-card rounded animate-pulse w-11/12" />
          <div className="h-4 bg-card rounded animate-pulse w-4/5" />
        </div>
      </article>
    </main>
  )
}
