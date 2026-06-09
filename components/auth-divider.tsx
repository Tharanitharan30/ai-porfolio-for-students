export function AuthDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="shrink-0 text-sm text-muted-foreground">{label}</span>
      <div className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
