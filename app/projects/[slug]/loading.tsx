export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="bg-card pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-28 bg-surface rounded animate-pulse mb-8" />
          <div className="flex gap-2 mb-5">
            <div className="h-6 w-20 bg-surface rounded-full animate-pulse" />
            <div className="h-6 w-16 bg-surface rounded-full animate-pulse" />
          </div>
          <div className="h-12 w-3/4 bg-surface rounded-xl animate-pulse mb-3" />
          <div className="h-12 w-1/2 bg-surface rounded-xl animate-pulse mb-6" />
          <div className="h-5 w-full max-w-xl bg-surface rounded animate-pulse mb-2" />
          <div className="h-5 w-2/3 bg-surface rounded animate-pulse mb-8" />
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-surface rounded-xl animate-pulse" />
            <div className="h-10 w-28 bg-surface rounded-xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Cover image skeleton */}
        <div className="w-full aspect-video bg-card rounded-2xl animate-pulse -mt-6 mb-14 border border-border" />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <div className="h-8 w-32 bg-card rounded animate-pulse mb-6" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-4 bg-card rounded animate-pulse" style={{ width: `${80 + Math.random() * 20}%` }} />
                ))}
              </div>
            </div>
            <div>
              <div className="h-8 w-36 bg-card rounded animate-pulse mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 h-28 animate-pulse" />
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 h-40 animate-pulse" />
            <div className="bg-card border border-border rounded-2xl p-6 h-28 animate-pulse" />
            <div className="bg-card border border-border rounded-2xl p-6 h-24 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  )
}
