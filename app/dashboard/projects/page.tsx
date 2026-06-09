'use client'

import { useRouter } from 'next/navigation'
import { Plus, ExternalLink, Trash2, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { PageHeader } from '@/components/page-header'

const projects = [
  {
    id: 1,
    name: 'AI Portfolio Builder',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'Completed',
    updated: '2 days ago',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    technologies: ['Node.js', 'MongoDB', 'React'],
    status: 'In Progress',
    updated: '5 days ago',
    github: 'https://github.com',
    live: null,
  },
  {
    id: 3,
    name: 'Task Management App',
    technologies: ['Vue.js', 'Firebase'],
    status: 'Completed',
    updated: '3 weeks ago',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 4,
    name: 'Machine Learning Model',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    status: 'Completed',
    updated: '1 month ago',
    github: 'https://github.com',
    live: null,
  },
]

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Showcase your best work and achievements"
      >
        <Button type="button" className="gap-2" onClick={() => router.push('/dashboard/ai-assistant')}>
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </PageHeader>

      <Input placeholder="Search projects..." className="max-w-md" />

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="interactive-card border-border/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge
                    className={
                      project.status === 'Completed'
                        ? 'bg-green-600/20 text-green-700 dark:text-green-400 border-green-600/30'
                        : 'bg-blue-600/20 text-blue-700 dark:text-blue-400 border-blue-600/30'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Updated {project.updated}</p>
                <div className="flex items-center gap-2 pt-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      GitHub
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
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
