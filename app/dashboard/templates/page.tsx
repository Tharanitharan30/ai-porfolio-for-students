'use client'

import { Eye, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const templates = [
  {
    id: 1,
    name: 'Minimalist Developer',
    category: 'Developer',
    image: '🎨',
    description: 'Clean and minimal portfolio for developers',
  },
  {
    id: 2,
    name: 'Creative Designer',
    category: 'Creative',
    image: '✨',
    description: 'Colorful and creative portfolio template',
  },
  {
    id: 3,
    name: 'Professional Corporate',
    category: 'Professional',
    image: '💼',
    description: 'Traditional professional portfolio design',
  },
  {
    id: 4,
    name: 'Research Scholar',
    category: 'Research',
    image: '🔬',
    description: 'Academic and research-focused portfolio',
  },
  {
    id: 5,
    name: 'Startup Founder',
    category: 'Professional',
    image: '🚀',
    description: 'Dynamic portfolio for entrepreneurs',
  },
  {
    id: 6,
    name: 'AI & Tech',
    category: 'Developer',
    image: '🤖',
    description: 'Modern tech-focused portfolio',
  },
]

const categories = ['All', 'Professional', 'Developer', 'Creative', 'Research']

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio Templates</h1>
        <p className="text-muted-foreground mt-2">Choose from our collection of professional templates</p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates
                .filter((t) => category === 'All' || t.category === category)
                .map((template) => (
                  <Card key={template.id} className="border-border/50 hover:border-primary/50 transition-all overflow-hidden">
                    <CardContent className="p-0">
                      {/* Preview */}
                      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
                        {template.image}
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="font-semibold">{template.name}</h3>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {template.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{template.description}</p>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1 gap-2">
                            <Eye className="h-4 w-4" />
                            Preview
                          </Button>
                          <Button size="sm" className="flex-1 gap-2 bg-primary hover:bg-primary/90">
                            <Copy className="h-4 w-4" />
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
