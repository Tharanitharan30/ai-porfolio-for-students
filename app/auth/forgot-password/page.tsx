'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InputWithIcon } from '@/components/ui/input-with-icon'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
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
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your email to receive a password reset link</CardDescription>
      </CardHeader>

      <CardContent>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="form-fields">
            <div className="form-field">
              <Label htmlFor="email">Email Address</Label>
              <InputWithIcon
                id="email"
                icon={Mail}
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <Button type="submit" className="h-11 w-full" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>

            <Link
              href="/auth/login"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </form>
        ) : (
          <div className="form-fields text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-semibold">Check your email</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We&apos;ve sent a password reset link to your email. Please check your inbox and follow the instructions.
            </p>
            <Link
              href="/auth/login"
              className="inline-block text-sm font-medium text-primary hover:underline"
            >
              Back to login
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
