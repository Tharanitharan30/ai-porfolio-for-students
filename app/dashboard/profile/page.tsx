'use client'

import { Mail, Phone, MapPin, Briefcase, Code2, Globe, Save, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PageHeader } from '@/components/page-header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Your Profile"
        description="Manage your personal information and visibility"
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full bg-primary hover:bg-primary/90"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">Full Stack Developer</p>
                <p className="text-sm text-muted-foreground mt-2">San Francisco, CA</p>

                <div className="flex gap-2 mt-6 w-full">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Globe className="h-4 w-4" />
                    Website
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <Code2 className="h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="form-fields">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-field">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="form-field">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="form-field">
                <Label htmlFor="title">Professional Title</Label>
                <Input id="title" defaultValue="Full Stack Developer" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-field">
                  <Label htmlFor="email">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="form-field">
                  <Label htmlFor="phone">
                    <Phone className="h-4 w-4" />
                    Phone
                  </Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="form-field">
                <Label htmlFor="location">
                  <MapPin className="h-4 w-4" />
                  Location
                </Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>

              <div className="form-field">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Passionate full-stack developer with 5+ years of experience building scalable web applications..."
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent className="form-fields">
              <div className="form-field">
                <Label htmlFor="college">College/University</Label>
                <Input id="college" defaultValue="University of California, Berkeley" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-field">
                  <Label htmlFor="degree">Degree</Label>
                  <Input id="degree" defaultValue="Bachelor's" />
                </div>
                <div className="form-field">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Computer Science" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-field">
                  <Label htmlFor="cgpa">CGPA</Label>
                  <Input id="cgpa" defaultValue="3.8" />
                </div>
                <div className="form-field">
                  <Label htmlFor="graduation">Graduation Year</Label>
                  <Input id="graduation" defaultValue="2019" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="form-fields">
              <div className="form-field">
                <Label htmlFor="linkedin">
                  <Briefcase className="h-4 w-4" />
                  LinkedIn
                </Label>
                <Input id="linkedin" defaultValue="https://linkedin.com/in/johndoe" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="form-field">
                <Label htmlFor="github">
                  <Code2 className="h-4 w-4" />
                  GitHub
                </Label>
                <Input id="github" defaultValue="https://github.com/johndoe" placeholder="https://github.com/..." />
              </div>

              <div className="form-field">
                <Label htmlFor="portfolio">
                  <Globe className="h-4 w-4" />
                  Portfolio URL
                </Label>
                <Input id="portfolio" defaultValue="https://johndoe.com" placeholder="https://..." />
              </div>

              <div className="form-field">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" defaultValue="https://twitter.com/johndoe" placeholder="https://twitter.com/..." />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
            <Button variant="outline">Preview Profile</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
