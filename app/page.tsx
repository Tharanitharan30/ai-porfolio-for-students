'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, BarChart3, Zap } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
            G
          </div>
          <span className="text-xl font-bold hidden sm:inline">GenFolio</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20">
        {/* Hero section */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Portfolio Builder</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Build Your Perfect Portfolio with AI
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            GenFolio helps students create stunning, professional portfolios that impress recruiters. Generate content with AI, showcase your projects, and land your dream job.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
            <Link href="/auth/register">
              <Button className="bg-primary hover:bg-primary/90 gap-2 h-12 px-8">
                Start Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" className="h-12 px-8">
              View Demo
            </Button>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-border/50">
          {[
            {
              icon: Sparkles,
              title: 'AI-Powered Content',
              description: 'Let AI help you write compelling portfolio descriptions and project summaries',
            },
            {
              icon: Zap,
              title: 'Instant Generation',
              description: 'Create a professional portfolio in minutes, not hours or days',
            },
            {
              icon: BarChart3,
              title: 'Analytics & Insights',
              description: 'Track who&apos;s viewing your portfolio and get actionable insights',
            },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
