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
import { Mail, Lock, User } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')

  const getPasswordStrength = (pass: string) => {
    if (!pass) return { strength: 0, label: '', color: '' }
    let strength = 0
    if (pass.length >= 8) strength++
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++
    if (/[0-9]/.test(pass)) strength++
    if (/[^a-zA-Z0-9]/.test(pass)) strength++
    return {
      strength: strength,
      label: ['Weak', 'Fair', 'Good', 'Strong'][strength - 1] || 'Very Weak',
      color: ['bg-destructive', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'][strength - 1] || 'bg-muted',
    }
  }

  const pwStrength = getPasswordStrength(password)

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
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription>Join us and start building your portfolio</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="form-fields">
          <div className="form-field">
            <Label htmlFor="name">Full Name</Label>
            <InputWithIcon id="name" icon={User} placeholder="John Doe" required />
          </div>

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
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password && (
              <div className="flex items-center gap-2 pt-1">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full transition-all ${pwStrength.color}`}
                    style={{ width: `${(pwStrength.strength / 4) * 100}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{pwStrength.label}</span>
              </div>
            )}
          </div>

          <div className="form-field">
            <Label htmlFor="confirm">Confirm Password</Label>
            <InputWithIcon
              id="confirm"
              icon={Lock}
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-start gap-3 pt-1">
            <Checkbox id="terms" className="mt-1 size-[1.125rem]" />
            <Label htmlFor="terms" className="cursor-pointer text-sm font-normal leading-relaxed">
              I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and{' '}
              <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
            </Label>
          </div>

          <Button type="submit" className="h-11 w-full" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <AuthDivider label="Or sign up with" />

        <Button
          type="button"
          variant="outline"
          className="h-11 w-full gap-2"
          onClick={() => router.push('/dashboard')}
        >
          <Mail className="h-4 w-4" />
          Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
