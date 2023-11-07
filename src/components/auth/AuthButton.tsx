import { createClient } from '@/lib/database/server'
import { cookies } from 'next/headers'
import Link from 'next/link'

export async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <Link
      href="/dashboard"
      className="text-sm font-medium py-1.5 px-3 rounded hover:bg-primary-foreground hover:text-primary transition-colors text-muted-foreground"
    >
      Dashboard
    </Link>
  ) : (
    <Link
      href="/auth/login"
      className="text-sm font-medium py-1.5 px-3 rounded hover:bg-primary-foreground hover:text-primary transition-colors text-muted-foreground"
    >
      Entrar
    </Link>
  )
}
