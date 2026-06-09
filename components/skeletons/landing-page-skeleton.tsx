import { Skeleton } from '@/components/ui/skeleton'

export function LandingPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <Skeleton className="size-10 rounded-lg" />
          <Skeleton className="h-6 w-24 hidden sm:block" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-28" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-8 text-center">
        <Skeleton className="h-8 w-56 mx-auto rounded-full" />
        <Skeleton className="h-14 w-full max-w-2xl mx-auto" />
        <Skeleton className="h-14 w-full max-w-xl mx-auto" />
        <div className="flex justify-center gap-4 pt-4">
          <Skeleton className="h-12 w-36" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-6 pt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/50 bg-card p-6 space-y-3">
            <Skeleton className="size-10 rounded-lg" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        ))}
      </div>
    </div>
  )
}
