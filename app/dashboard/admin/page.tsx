'use client'

import { ArrowUpRight, Users, FileText, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/page-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

const adminStats = [
  { label: 'Total Users', value: '1,234', change: '+125 this month', icon: Users },
  { label: 'Total Portfolios', value: '4,567', change: '+340 this month', icon: FileText },
  { label: 'Total Exports', value: '8,234', change: '+560 this month', icon: Download },
  { label: 'Active Users', value: '456', change: '+45 this month', icon: Users },
]

const recentUsers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'Active', joined: '2 days ago' },
  { id: 2, name: 'Mike Chen', email: 'mike@example.com', status: 'Active', joined: '5 days ago' },
  { id: 3, name: 'Emma Davis', email: 'emma@example.com', status: 'Active', joined: '1 week ago' },
  { id: 4, name: 'James Wilson', email: 'james@example.com', status: 'Inactive', joined: '2 weeks ago' },
]

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Admin Dashboard"
        description="Manage the GenFolio platform"
      />

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-3 w-3" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="templates">Template Management</TabsTrigger>
        </TabsList>

        {/* User Management */}
        <TabsContent value="users" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Latest registered users on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border/50">
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id} className="border-border/50">
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              user.status === 'Active'
                                ? 'bg-green-600/20 text-green-700 dark:text-green-400 border-green-600/30'
                                : 'bg-gray-600/20 text-gray-700 dark:text-gray-400 border-gray-600/30'
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{user.joined}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Template Management */}
        <TabsContent value="templates" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Portfolio Templates</CardTitle>
              <CardDescription>Manage available templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Minimalist Developer', 'Creative Designer', 'Professional Corporate', 'Research Scholar'].map(
                  (template) => (
                    <div key={template} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{template}</p>
                        <p className="text-sm text-muted-foreground">1,234 uses</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Analytics Overview */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Platform Analytics</CardTitle>
          <CardDescription>Overall platform performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">User Growth</h4>
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-end justify-around p-4">
                {[50, 75, 100, 120, 150, 180, 200].map((height, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-t opacity-70 hover:opacity-100 transition-opacity w-8"
                    style={{ height: `${(height / 200) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Usage Metrics</h4>
              {[
                { label: 'Avg Portfolio Views/User', value: '24.5' },
                { label: 'Avg Projects/Portfolio', value: '4.2' },
                { label: 'Export Rate', value: '68%' },
                { label: 'Monthly Active Users', value: '78%' },
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                  <span className="text-sm">{metric.label}</span>
                  <span className="font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
