'use client'

import { useRouter } from 'next/navigation'
import { ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/page-header'

const stats = [
  {
    label: 'Total Portfolios',
    value: '12',
    change: '+2 this month',
    isPositive: true,
    icon: '📁',
  },
  {
    label: 'Projects Added',
    value: '48',
    change: '+8 this month',
    isPositive: true,
    icon: '🚀',
  },
  {
    label: 'Certifications',
    value: '7',
    change: '+1 this month',
    isPositive: true,
    icon: '🏆',
  },
  {
    label: 'Portfolio Views',
    value: '3.2K',
    change: '+25% from last month',
    isPositive: true,
    icon: '👁️',
  },
]

const activities = [
  {
    activity: 'Updated portfolio "Software Engineer"',
    date: '2 hours ago',
    status: 'completed',
  },
  {
    activity: 'Added new project "AI Portfolio Builder"',
    date: '1 day ago',
    status: 'completed',
  },
  {
    activity: 'Generated resume with AI',
    date: '3 days ago',
    status: 'completed',
  },
  {
    activity: 'Published portfolio to web',
    date: '1 week ago',
    status: 'completed',
  },
  {
    activity: 'Created new certification entry',
    date: '2 weeks ago',
    status: 'completed',
  },
]

const suggestions = [
  { id: 1, title: 'Complete Your Profile', description: 'Add more details to make your profile stand out' },
  { id: 2, title: 'Add More Certifications', description: 'Showcase your achievements and credentials' },
  { id: 3, title: 'Improve Portfolio Score', description: 'Update your portfolio to increase visibility' },
]

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="space-y-8">
      <PageHeader
        title="Welcome back, John!"
        description="Here's what's happening with your portfolios."
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Button type="button" className="gap-2" onClick={() => router.push('/dashboard/portfolios')}>
          <Plus className="h-4 w-4" />
          Create Portfolio
        </Button>
        <Button type="button" className="gap-2" onClick={() => router.push('/dashboard/projects')}>
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
        <Button type="button" className="gap-2" onClick={() => router.push('/dashboard/resume-builder')}>
          <Plus className="h-4 w-4" />
          Generate Resume
        </Button>
        <Button type="button" className="gap-2" onClick={() => router.push('/dashboard/templates')}>
          <Plus className="h-4 w-4" />
          Generate Website
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <span className="text-2xl">{stat.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                {stat.isPositive ? (
                  <ArrowUpRight className="h-3 w-3 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-600" />
                )}
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts and Analytics */}
        <div className="lg:col-span-2 space-y-4">
          {/* Portfolio Views Chart */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Portfolio Views</CardTitle>
              <CardDescription>Last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-end justify-around p-6">
                {[20, 35, 25, 45, 35, 50, 40].map((height, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-t opacity-70 hover:opacity-100 transition-opacity w-10"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Visitor Analytics */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Visitor Analytics</CardTitle>
              <CardDescription>Monthly breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Direct', value: 450, percentage: 45 },
                  { name: 'Search Engines', value: 250, percentage: 25 },
                  { name: 'Social Media', value: 200, percentage: 20 },
                  { name: 'Referrals', value: 100, percentage: 10 },
                ].map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Upcoming Suggestions</CardTitle>
              <CardDescription>Improve your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer border border-primary/20"
                >
                  <h4 className="font-semibold text-sm">{suggestion.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{suggestion.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest portfolio updates</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50">
                <TableHead>Activity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity, i) => (
                <TableRow key={i} className="border-border/50">
                  <TableCell className="font-medium">{activity.activity}</TableCell>
                  <TableCell className="text-muted-foreground">{activity.date}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-600/20 text-green-700 dark:text-green-400 border-green-600/30">
                      {activity.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
