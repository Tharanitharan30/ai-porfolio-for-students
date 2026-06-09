'use client'

import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PageHeader } from '@/components/page-header'

const technicalSkills = [
  { name: 'React', proficiency: 95, category: 'Frontend' },
  { name: 'TypeScript', proficiency: 90, category: 'Languages' },
  { name: 'Node.js', proficiency: 85, category: 'Backend' },
  { name: 'Python', proficiency: 80, category: 'Languages' },
  { name: 'MongoDB', proficiency: 85, category: 'Databases' },
  { name: 'Next.js', proficiency: 90, category: 'Frontend' },
]

const softSkills = [
  'Communication',
  'Problem Solving',
  'Team Leadership',
  'Project Management',
  'Adaptability',
  'Creativity',
]

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Skills"
        description="Manage your technical and soft skills"
      >
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Skill
        </Button>
      </PageHeader>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-4">
          <div className="grid gap-4">
            {technicalSkills.map((skill) => (
              <Card key={skill.name} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-semibold">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="soft" className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-4 py-3 bg-card border border-border/50 rounded-lg"
              >
                <span className="font-medium">{skill}</span>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90 gap-2 mt-4">
            <Plus className="h-4 w-4" />
            Add Soft Skill
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
