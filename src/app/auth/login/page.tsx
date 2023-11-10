import { AuthLoginForm } from '@/components/auth/AuthLoginForm';
import { createSupabaseServerClient } from '@/lib/database/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface LoginPageProps {
  searchParams: { message: string }
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const message = searchParams.message;

  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }


  return <AuthLoginForm message={message}/>
}
