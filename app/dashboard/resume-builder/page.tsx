'use client'

import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'

const templates = [
  {
    id: 1,
    name: 'ATS Resume',
    description: 'Optimized for Applicant Tracking Systems',
    features: ['Clean layout', 'ATS compatible', 'Professional'],
  },
  {
    id: 2,
    name: 'Professional Resume',
    description: 'Classic and elegant design',
    features: ['Modern design', 'Print-friendly', 'Customizable'],
  },
  {
    id: 3,
    name: 'Modern Resume',
    description: 'Contemporary visual design',
    features: ['Creative layout', 'Color options', 'Tech-focused'],
  },
]

export default function ResumeBuilderPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Resume Builder"
        description="Create and customize your professional resume"
      />

      <Tabs defaultValue="templates" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="editor">Editor</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card
                key={template.id}
                className="interactive-card border-border/50 cursor-pointer"
              >
                <CardContent className="pt-6">
                  {/* Preview placeholder */}
                  <div className="h-64 bg-gradient-to-br from-muted/50 to-muted rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-muted-foreground" />
                  </div>

                  <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>

                  <div className="space-y-3 mb-4">
                    {template.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="editor" className="space-y-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Editor */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Resume Editor</CardTitle>
                  <CardDescription>Customize your resume content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Sections */}
                  {['Header', 'Professional Summary', 'Experience', 'Education', 'Skills'].map(
                    (section) => (
                      <div key={section} className="space-y-2">
                        <h4 className="font-semibold text-sm">{section}</h4>
                        <div className="p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                          Click to edit {section.toLowerCase()}
                        </div>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            <div className="space-y-4">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-white dark:bg-slate-100 rounded-lg p-4 text-black text-xs leading-tight space-y-2">
                    <div className="text-center mb-2">
                      <div className="font-bold">John Doe</div>
                      <div className="text-gray-600">john@example.com | (555) 123-4567</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-xs">PROFESSIONAL SUMMARY</div>
                      <div className="text-gray-700">
                        Experienced software engineer with expertise in full-stack development.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download DOCX
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
