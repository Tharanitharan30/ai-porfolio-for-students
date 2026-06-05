'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Award,
  FileText,
  Grid,
  Menu,
  Settings,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const sidebarItems = [
  { icon: Grid, label: 'Dashboard', href: '/dashboard' },
  { icon: BookOpen, label: 'My Portfolios', href: '/portfolios' },
  { icon: Briefcase, label: 'Projects', href: '/projects' },
  { icon: Star, label: 'Skills', href: '/skills' },
  { icon: Award, label: 'Certifications', href: '/certifications' },
  { icon: Users, label: 'Experience', href: '/experience' },
  { icon: FileText, label: 'Resume Builder', href: '/resume-builder' },
  { icon: Sparkles, label: 'AI Assistant', href: '/ai-assistant' },
  { icon: BookOpen, label: 'Templates', href: '/templates' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: FileText, label: 'Export Center', href: '/export-center' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-40"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border p-4 transition-transform duration-300 z-40 flex flex-col md:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 mt-2 md:mt-0">
          <div className="w-8 h-8 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg flex items-center justify-center font-bold text-sm">
            G
          </div>
          <span className="font-bold text-lg hidden sm:inline">GenFolio</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm',
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Admin section */}
        <div className="border-t border-sidebar-border pt-4 mt-4">
          <Link
            href="/admin"
            className={cn(
              'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm',
              pathname === '/admin'
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent'
            )}
          >
            <BarChart3 className="h-4 w-4 flex-shrink-0" />
            <span className="hidden sm:inline">Admin</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
