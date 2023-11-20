"use server"

import { Login } from "@/components/auth/AuthLoginForm"
import { ERROR_MESSAGES } from "@/constants/errors"
import { createSupabaseServerClient } from "@/lib/database/server"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export async function signIn({ email, password}: Login) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error(error);
    return redirect(`/auth/login?message=${ERROR_MESSAGES.AUTH.COULD_NOT_AUTHENTICATE_USER}`)
  }

  return redirect('/dashboard')
}

export async function signUp({email, password}: Login) {
  const origin = headers().get('origin')

  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    return redirect(`/auth/login?message=${ERROR_MESSAGES.AUTH.COULD_NOT_AUTHENTICATE_USER}`)
  }

  return redirect(`/auth/login?message=${ERROR_MESSAGES.AUTH.CHECK_YOUR_EMAIL}`)
}