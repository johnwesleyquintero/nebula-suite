/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0.blob.com",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "aybridyinsrebhibkgkh.supabase.co",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "@radix-ui/react-dropdown-menu", "@radix-ui/react-dialog"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
}

module.exports = nextConfig

