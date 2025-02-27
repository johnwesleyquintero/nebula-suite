import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { ErrorBoundary } from "@/components/error-boundary"
import { SkipLink } from "@/components/skip-link"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/lib/constants"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: "/manifest.json",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/android-chrome-192x192.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ErrorBoundary
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="text-center">
                <h1 className="text-xl font-bold">Something went wrong</h1>
                <p className="text-muted-foreground">Please refresh the page to try again</p>
              </div>
            </div>
          }
        >
          <Providers>
            <SkipLink />
            <div className="relative flex min-h-screen flex-col">{children}</div>
            <Toaster position="bottom-right" closeButton richColors expand />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}



import './globals.css'