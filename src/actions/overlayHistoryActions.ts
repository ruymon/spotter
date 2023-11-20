"use server"

import { createSupabaseServerClient } from "@/lib/database/server"
import { cookies } from "next/headers"

export async function deleteOverlay(id: string) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { error } = await supabase.from('overlays').delete().match({ id })

  if (error) {
    throw error
  }
}
