import { createClient as createServerClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

// Mock Supabase server client for v0 environment
export const createClient = () => {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    const cookieStore = cookies()

    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Handle cookie errors
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: "", ...options })
          } catch (error) {
            // Handle cookie errors
          }
        },
      },
    })
  } else {
    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: null }),
          }),
        }),
        insert: async () => ({ error: null }),
        update: async () => ({ error: null }),
      }),
    }
  }
}

