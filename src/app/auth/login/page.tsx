import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/lib/database/server'
import { cookies, headers } from 'next/headers'

import { redirect } from 'next/navigation'

interface LoginPageProps {
  searchParams: { message: string }
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/auth/login?message=Could not authenticate user')
    }

    return redirect('/dashboard')
  }

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/auth/login?message=Could not authenticate user')
    }

    return redirect('/auth/login?message=Check your email to continue sign in process')
  }

  return (
    <div className="flex flex-col w-full gap-8">
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold text-foreground'>Welcome back</h1>
        <span className='text-muted-foreground'>Join the Spotter community</span>
      </div>

      <form
        className="flex flex-col w-full items-center gap-4 text-foreground"
        action={signIn}
      >
        <div className='space-y-2 w-full'>
          <Label htmlFor="email">Email</Label>
          <Input name="email" autoComplete="email" placeholder="you@example.com" required />
        </div>

        <div className='space-y-2 w-full'>
          <Label htmlFor="password">Password</Label>
          <Input type="password" autoComplete="current-password" name="password" placeholder="••••••••" required />
        </div>


        <div className='mt-4 flex flex-col gap-3 w-full'>
          <Button>Entrar</Button>
          <Button variant="ghost" formAction={signUp}>Criar conta</Button>
        </div>

        {searchParams.message && (
        <span className='text-sm text-muted-foreground'>{searchParams.message}</span>
      )}
      </form>
    </div>
  )
}
