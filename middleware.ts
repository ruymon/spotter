import { createSupabaseMiddlewareClient } from '@/lib/database/middleware'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const { supabase, response } = createSupabaseMiddlewareClient(request)
    await supabase.auth.getSession()
    return response
  } catch (e) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
