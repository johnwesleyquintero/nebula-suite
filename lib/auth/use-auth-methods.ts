"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase/config"
import { displayError } from "@/lib/error-handling"

export function useAuthMethods() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push("/dashboard")
      toast.success("Welcome back!")
      return data
    } catch (error) {
      displayError(error, "Sign in failed")
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      toast.success("Check your email", {
        description: "We've sent you a verification link",
      })
      return data
    } catch (error) {
      displayError(error, "Sign up failed")
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (error) {
      displayError(error, "Google sign in failed")
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      router.push("/login")
      toast.success("Signed out successfully")
    } catch (error) {
      displayError(error, "Sign out failed")
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      toast.success("Check your email", {
        description: "We've sent you password reset instructions",
      })
    } catch (error) {
      displayError(error, "Password reset failed")
    } finally {
      setIsLoading(false)
    }
  }

  const updatePassword = async (password: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.updateUser({
        password,
      })

      if (error) throw error

      toast.success("Password updated", {
        description: "Your password has been successfully changed",
      })
      router.push("/dashboard")
    } catch (error) {
      displayError(error, "Password update failed")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
    resetPassword,
    updatePassword,
  }
}

