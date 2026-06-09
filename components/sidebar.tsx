'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
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
  { icon: BookOpen, label: 'My Portfolios', href: '/dashboard/portfolios' },
  { icon: Briefcase, label: 'Projects', href: '/dashboard/projects' },
  { icon: Star, label: 'Skills', href: '/dashboard/skills' },
  { icon: Award, label: 'Certifications', href: '/dashboard/certifications' },
  { icon: Users, label: 'Experience', href: '/dashboard/experience' },
  { icon: FileText, label: 'Resume Builder', href: '/dashboard/resume-builder' },
  { icon: Sparkles, label: 'AI Assistant', href: '/dashboard/ai-assistant' },
  { icon: BookOpen, label: 'Templates', href: '/dashboard/templates' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: FileText, label: 'Export Center', href: '/dashboard/export-center' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
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
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0">
            <Image src="/genfolio.jpeg" alt="GenFolio Logo" fill className="object-cover" />
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
                  'flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ease-out',
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:translate-x-0.5 motion-reduce:hover:translate-x-0'
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
            href="/dashboard/admin"
            className={cn(
              'flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ease-out',
              pathname === '/dashboard/admin'
                ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                : 'text-sidebar-foreground hover:bg-sidebar-accent hover:translate-x-0.5 motion-reduce:hover:translate-x-0'
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
