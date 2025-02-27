"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Error</h1>
      <p className="text-muted-foreground">Something went wrong</p>
      <Button onClick={() => reset()} className="mt-4">
        Try again
      </Button>
    </div>
  )
}

