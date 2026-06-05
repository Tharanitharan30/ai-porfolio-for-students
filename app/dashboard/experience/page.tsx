'use client'

import { Plus, Trash2, Edit, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    id: 1,
    position: 'Senior Software Engineer',
    company: 'Tech Company Inc',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Led development of scalable web applications using React and Node.js',
    current: true,
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    description: 'Built and maintained multiple production applications for Fortune 500 clients',
    current: false,
  },
  {
    id: 3,
    position: 'Junior Web Developer',
    company: 'Startup Hub',
    startDate: 'Jan 2020',
    endDate: 'May 2020',
    description: 'Developed responsive web interfaces and integrated backend APIs',
    current: false,
  },
]

export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
          <p className="text-muted-foreground mt-2">Showcase your professional journey</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="h-4 w-4" />
          Add Experience
        </Button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-16 h-12 w-0.5 bg-border"></div>
            )}

            <Card className="border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background dark:border-card"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{exp.position}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {exp.startDate} — {exp.endDate}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
