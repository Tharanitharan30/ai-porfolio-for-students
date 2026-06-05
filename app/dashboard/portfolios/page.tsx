'use client'

import { Plus, Edit, Trash2, Eye, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const portfolios = [
  {
    id: 1,
    title: 'Software Engineer Portfolio',
    views: 1250,
    status: 'Published',
    updated: '2 days ago',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    views: 890,
    status: 'Published',
    updated: '1 week ago',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    views: 0,
    status: 'Draft',
    updated: '3 days ago',
  },
  {
    id: 4,
    title: 'Data Science Resume',
    views: 540,
    status: 'Published',
    updated: '2 weeks ago',
  },
]

export default function PortfoliosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Portfolios</h1>
          <p className="text-muted-foreground mt-2">Manage and create your portfolio websites</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="h-4 w-4" />
          New Portfolio
        </Button>
      </div>

      <div className="grid gap-4">
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id} className="border-border/50 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold truncate">{portfolio.title}</h3>
                    <Badge
                      className={
                        portfolio.status === 'Published'
                          ? 'bg-green-600/20 text-green-700 dark:text-green-400 border-green-600/30'
                          : 'bg-yellow-600/20 text-yellow-700 dark:text-yellow-400 border-yellow-600/30'
                      }
                    >
                      {portfolio.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {portfolio.views.toLocaleString()} views • Updated {portfolio.updated}
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button variant="outline" size="sm" className="gap-2 flex-1 md:flex-initial">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 flex-1 md:flex-initial">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 md:flex-initial">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 md:flex-initial">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
