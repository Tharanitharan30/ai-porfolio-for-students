'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { InputWithIcon } from '@/components/ui/input-with-icon'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { AuthDivider } from '@/components/auth-divider'
import { Mail, Lock, Code2 } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard')
    }, 1000)
  }

  return (
    <Card className="w-full border-border/50 shadow-xl hover:shadow-xl">
      <CardHeader className="space-y-1 pb-2">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
            G
          </div>
          <span className="text-lg font-bold">GenFolio</span>
        </div>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to your portfolio builder account</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="form-fields">
          <div className="form-field">
            <Label htmlFor="email">Email</Label>
            <InputWithIcon
              id="email"
              icon={Mail}
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <Label htmlFor="password">Password</Label>
            <InputWithIcon
              id="password"
              icon={Lock}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Checkbox id="remember" className="size-[1.125rem]" />
              <Label htmlFor="remember" className="cursor-pointer font-normal">
                Remember me
              </Label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="shrink-0 text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="h-11 w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <AuthDivider label="Or continue with" />

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2"
            onClick={() => router.push('/dashboard')}
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 gap-2"
            onClick={() => router.push('/dashboard')}
          >
            <Mail className="h-4 w-4" />
            Google
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="font-medium text-primary hover:underline">
            Create one
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
