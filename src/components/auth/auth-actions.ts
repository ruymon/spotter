"use server"

import { createSupabaseServerClient } from "@/lib/database/server"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import { Login } from "./AuthLoginForm"

export const signIn = async ({ email, password }: Login) => {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error(error);
    return redirect('/auth/login?message=Could not authenticate user')
  }

  return redirect('/dashboard')
}

export const signUp = async ({ email, password }: Login) => {
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
    return redirect('/auth/login?message=Could not authenticate user')
  }

  return redirect('/auth/login?message=Check your email to continue sign in process')
}