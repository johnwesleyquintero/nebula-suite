import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { generateCsrfToken } from "@/lib/csrf"

function generateNonce() {
  // Browser-compatible way to generate a nonce
  const array = new Uint8Array(16)
  if (typeof window !== "undefined" && window.crypto) {
    window.crypto.getRandomValues(array)
  } else {
    // For server-side
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256)
    }
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("")
}

// Define protected routes that require authentication
const protectedRoutes = ["/dashboard", "/upload", "/mapping", "/export", "/analytics", "/settings", "/team", "/help"]

// Define auth routes
const authRoutes = ["/login", "/register", "/reset-password"]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Add Content Security Policy headers
  const nonce = generateNonce()

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://v0.blob.com https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://aybridyinsrebhibkgkh.supabase.co;
    font-src 'self' data:;
    connect-src 'self' https://aybridyinsrebhibkgkh.supabase.co wss://aybridyinsrebhibkgkh.supabase.co;
    frame-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim()

  res.headers.set("Content-Security-Policy", cspHeader)

  // Add other security headers
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("X-Frame-Options", "DENY")
  res.headers.set("X-XSS-Protection", "1; mode=block")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Handle CSRF protection for non-GET requests
  if (req.method !== "GET" && !req.url.includes("/api/auth")) {
    const csrfToken = req.headers.get("x-csrf-token")
    const expectedToken = req.cookies.get("csrf-token")?.value

    if (!csrfToken || !expectedToken || csrfToken !== expectedToken) {
      return new NextResponse(
        JSON.stringify({
          error: "Invalid CSRF token",
          message: "The request failed CSRF validation. Please try again.",
        }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    }
  }

  // Generate new CSRF token for GET requests to pages (not assets or API routes)
  if (req.method === "GET" && !req.url.includes("/_next") && !req.url.includes("/api/")) {
    const csrfToken = generateCsrfToken()
    res.cookies.set("csrf-token", csrfToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    })
  }

  // Check authentication
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const path = req.nextUrl.pathname

  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route))

  // Handle auth routes
  if (!session && isProtectedRoute) {
    const redirectUrl = new URL("/login", req.url)
    redirectUrl.searchParams.set("from", path)
    return NextResponse.redirect(redirectUrl)
  }

  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api/health).*)",
  ],
}

