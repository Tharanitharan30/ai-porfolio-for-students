'use client'

import { cn } from '@/lib/utils'

export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'animate-in fade-in duration-300 fill-mode-both motion-reduce:animate-none motion-reduce:opacity-100',
        className
      )}
    >
      {children}
    </div>
  )
}
