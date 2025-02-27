// Error logging types
export interface ErrorContext {
  componentStack?: string
  boundaryName?: string
  userId?: string
  url?: string
  additionalData?: Record<string, any>
  errorType?: string
}

// Simple in-memory error store for development
const errorStore: Array<{ error: Error; context: ErrorContext; timestamp: Date }> = []

// Function to capture and log errors
export function captureError(error: Error, context: ErrorContext = {}) {
  // Add current URL to context
  if (typeof window !== "undefined") {
    context.url = window.location.href
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.group("Error captured:")
    console.error(error)
    console.info("Context:", context)
    console.groupEnd()

    // Store in memory for development debugging
    errorStore.push({
      error,
      context,
      timestamp: new Date(),
    })
  }

  // In production, we would send this to an error tracking service
  if (process.env.NODE_ENV === "production") {
    // This is where you would integrate with services like Sentry, LogRocket, etc.
    // Example with a hypothetical error tracking service:
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
      }

      // Send error to backend
      fetch("/api/log-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(errorData),
        // Use keepalive to ensure the request completes even if the page is unloading
        keepalive: true,
      }).catch(console.error)
    } catch (loggingError) {
      // Fallback logging if the error tracking fails
      console.error("Failed to log error:", loggingError)
      console.error("Original error:", error)
    }
  }
}

// Function to get recent errors (for development debugging)
export function getRecentErrors() {
  return errorStore.slice(-20) // Return last 20 errors
}

// Function to clear error store (for development)
export function clearErrorStore() {
  errorStore.length = 0
}

// Helper to create a context object with user info
export function createErrorContext(additionalData?: Record<string, any>): ErrorContext {
  const context: ErrorContext = {
    url: typeof window !== "undefined" ? window.location.href : undefined,
    additionalData,
  }

  // In a real app, you would get the user ID from auth context
  // const { user } = useAuth()
  // if (user?.id) context.userId = user.id

  return context
}

