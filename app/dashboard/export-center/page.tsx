'use client'

import { Download, Share2, FileCode, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageHeader } from '@/components/page-header'

const exportOptions = [
  {
    icon: FileText,
    title: 'PDF Export',
    description: 'Download your portfolio as a PDF file for sharing and printing',
    action: 'Export to PDF',
    color: 'text-red-600',
  },
  {
    icon: FileCode,
    title: 'HTML Export',
    description: 'Get your complete portfolio as a standalone HTML website',
    action: 'Export to HTML',
    color: 'text-blue-600',
  },
  {
    icon: Share2,
    title: 'Shareable Link',
    description: 'Get a unique link to share your portfolio with anyone',
    action: 'Generate Link',
    color: 'text-green-600',
  },
  {
    icon: Download,
    title: 'Resume Export',
    description: 'Download your resume in multiple formats',
    action: 'Export Resume',
    color: 'text-purple-600',
  },
]

export default function ExportCenterPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Export Center"
        description="Export and share your portfolio in different formats"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {exportOptions.map((option) => {
          const Icon = option.icon
          return (
            <Card key={option.title} className="interactive-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className={`h-8 w-8 ${option.color}`} />
                </div>
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Exports */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Recent Exports</CardTitle>
          <CardDescription>Your export history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { type: 'PDF', name: 'Portfolio_2024.pdf', date: '2 days ago' },
              { type: 'HTML', name: 'portfolio-website.zip', date: '1 week ago' },
              { type: 'Resume', name: 'Resume_John_Doe.pdf', date: '2 weeks ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.type} • {item.date}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
