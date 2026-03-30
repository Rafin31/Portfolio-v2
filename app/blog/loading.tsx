export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      {/* Header skeleton */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="h-6 w-24 bg-card rounded-full mx-auto mb-4 animate-pulse" />
        <div className="h-12 w-80 bg-card rounded-xl mx-auto mb-3 animate-pulse" />
        <div className="h-5 w-96 bg-card rounded-lg mx-auto animate-pulse" />
      </section>

      {/* Cards skeleton */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-accent-yellow/30 to-accent-cyan/30" />
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="h-5 w-20 bg-surface rounded-full animate-pulse" />
                  <div className="h-4 w-16 bg-surface rounded animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-full bg-surface rounded animate-pulse" />
                  <div className="h-5 w-4/5 bg-surface rounded animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-surface rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-surface rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-surface rounded animate-pulse" />
                </div>
                <div className="flex justify-between pt-2 border-t border-border mt-auto">
                  <div className="h-4 w-24 bg-surface rounded animate-pulse" />
                  <div className="h-4 w-14 bg-surface rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
