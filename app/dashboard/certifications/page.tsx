'use client'

import { Plus, ExternalLink, Trash2, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    url: 'https://example.com',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'January 2024',
    url: 'https://example.com',
  },
  {
    id: 3,
    name: 'Certified Kubernetes Administrator',
    issuer: 'Linux Foundation',
    date: 'November 2023',
    url: 'https://example.com',
  },
  {
    id: 4,
    name: 'Full Stack Web Development',
    issuer: 'Udacity',
    date: 'August 2023',
    url: null,
  },
]

export default function CertificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
          <p className="text-muted-foreground mt-2">Display your credentials and achievements</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="h-4 w-4" />
          Add Certification
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <Card key={cert.id} className="border-border/50 hover:border-primary/50 transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                {cert.url && (
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </Button>
                )}
                <Button variant="outline" size="sm" className="flex-1">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
