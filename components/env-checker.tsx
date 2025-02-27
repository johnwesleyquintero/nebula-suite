"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EnvChecker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment Variables</CardTitle>
        <CardDescription>Current environment configuration</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">NEXT_PUBLIC_VERCEL_ENV:</span>{" "}
            <code className="rounded bg-muted px-2 py-1">{process.env.NEXT_PUBLIC_VERCEL_ENV || "not set"}</code>
          </p>
          <p className="text-sm text-muted-foreground">
            {process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
              ? "Running in preview mode with mock authentication"
              : "Running in production mode with real authentication"}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

