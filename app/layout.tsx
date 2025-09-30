import type React from "react"
import "./globals.css"

export const metadata = {
  title: "CarTube - AI Car Recommendation Agent",
  description: "Get personalized car recommendations based on your preferences with AI-powered technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#f9fafc] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
