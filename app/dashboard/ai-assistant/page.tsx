'use client'

import { useState } from 'react'
import { Send, Copy, RotateCw, Save, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

export default function AIAssistantPage() {
  const [activeTab, setActiveTab] = useState('about')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setOutput(
        'John is a passionate full-stack developer with 5+ years of experience building scalable web applications. He specializes in React, Node.js, and cloud technologies. Throughout his career, John has successfully led cross-functional teams and delivered multiple high-impact projects. He is driven by a passion for clean code, user experience, and continuous learning.'
      )
      setIsGenerating(false)
    }, 1500)
  }

  const tabs = [
    { value: 'about', label: 'Generate About Me' },
    { value: 'project', label: 'Project Description' },
    { value: 'resume', label: 'Resume Summary' },
    { value: 'improve', label: 'Improve Content' },
  ]

  return (
    <div className="space-y-6">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both motion-reduce:animate-none">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="h-5 w-5 text-primary" />
          <h1 className="page-title">AI Assistant</h1>
        </div>
        <p className="page-description">Use AI to generate and improve your portfolio content</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-xs">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Input side */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Input</CardTitle>
                  <CardDescription>Provide details for AI to generate content</CardDescription>
                </CardHeader>
                <CardContent className="form-fields">
                  <div className="form-field">
                    <Label htmlFor="ai-details">Details</Label>
                    <Textarea
                      id="ai-details"
                      placeholder="Enter your information, key points, or content to improve..."
                      className="min-h-64 resize-none"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full h-11 gap-2"
                    onClick={handleGenerate}
                    disabled={!input || isGenerating}
                  >
                    <Sparkles className="h-4 w-4" />
                    {isGenerating ? 'Generating...' : 'Generate with AI'}
                  </Button>
                </CardContent>
              </Card>

              {/* Output side */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Generated Content</CardTitle>
                  <CardDescription>AI-generated output for your portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {output ? (
                    <>
                      <div className="p-4 bg-muted/50 rounded-lg border border-border/50 min-h-64">
                        <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                          {output}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2"
                          onClick={() => navigator.clipboard.writeText(output)}
                        >
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 gap-2">
                          <RotateCw className="h-4 w-4" />
                          Regenerate
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                        >
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="h-64 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground text-center">
                        Generate content to see AI-powered results here
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Tips */}
      <Card className="border-border/50 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Tips for Better Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Be specific about your skills, achievements, and experiences</li>
            <li>• Provide quantifiable metrics when possible (e.g., impact numbers)</li>
            <li>• Include keywords relevant to your industry and target role</li>
            <li>• Mention technologies, tools, and frameworks you&apos;ve worked with</li>
            <li>• Highlight unique accomplishments and challenges you&apos;ve overcome</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
