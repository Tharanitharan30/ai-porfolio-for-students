'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description="Track your portfolio performance and visitor insights"
      />

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,281</div>
            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CV Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600 mt-1">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Recruiter Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-green-600 mt-1">+20% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="devices">Devices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Monthly Views</CardTitle>
              <CardDescription>Portfolio views over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-end justify-around p-6">
                {[2000, 3000, 2500, 4000, 3500, 4500, 5000].map((height, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-t opacity-70 hover:opacity-100 transition-opacity w-10"
                    style={{ height: `${(height / 5000) * 100}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Top Performing Projects</CardTitle>
              <CardDescription>Most viewed projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'AI Portfolio Builder', views: 2300 },
                { name: 'E-commerce Platform', views: 1800 },
                { name: 'Task Management App', views: 1200 },
              ].map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-muted-foreground">{project.views} views</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${(project.views / 2300) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { source: 'Google Search', visitors: 2845, percentage: 45 },
                { source: 'LinkedIn', visitors: 1250, percentage: 20 },
                { source: 'Direct', visitors: 1200, percentage: 19 },
                { source: 'GitHub', visitors: 630, percentage: 10 },
                { source: 'Social Media', visitors: 390, percentage: 6 },
              ].map((item) => (
                <div key={item.source} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.source}</span>
                    <span className="font-semibold">{item.visitors}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>Visits by device type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { device: 'Desktop', visitors: 4200, percentage: 62 },
                { device: 'Mobile', visitors: 2100, percentage: 31 },
                { device: 'Tablet', visitors: 490, percentage: 7 },
              ].map((item) => (
                <div key={item.device} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.device}</span>
                    <span className="font-semibold">{item.visitors}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
