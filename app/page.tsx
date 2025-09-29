"use client"

import { useState } from "react"
import Link from "next/link"
import { CarPreferenceForm } from "@/components/car-preference-form"
import { CarRecommendations } from "@/components/car-recommendations"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { MessageCircle, Car, Search } from "lucide-react"

interface Car {
  name: string
  price: number
  mileage: number
  type: string
  reason: string
}

export default function Home() {
  const [recommendations, setRecommendations] = useState<Car[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleGetRecommendations = async (preferences: { budget: number; mileage: number; usage: string }) => {
    setLoading(true)
    setError(null)
    setRecommendations([])

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferences),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch recommendations")
      }

      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (err: any) {
      console.error("[v0] Error fetching recommendations:", err)
      setError(err.message || "An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#e0eafc] via-[#cfdef3] to-[#f9fafc] flex flex-col relative overflow-x-hidden">
      {/* YouTube-style top navbar */}
      <header className="w-full flex items-center justify-between px-4 py-3 bg-white/90 shadow-lg sticky top-0 z-30 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Car className="w-9 h-9 text-primary drop-shadow-md" />
          <span className="text-2xl font-extrabold text-primary tracking-tight font-sans">CarTube</span>
        </div>
        <div className="flex-1 flex justify-center max-w-lg">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-gray-100 shadow-sm transition-all duration-200"
              disabled
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/chatbot" passHref>
            <Button variant="secondary" className="flex items-center gap-2 font-semibold shadow-lg hover:bg-primary/90 hover:text-white transition-all duration-200">
              <MessageCircle className="w-5 h-5" />
              Chat
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content area */}
  <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 flex flex-col md:flex-row gap-10">
        {/* Sidebar (optional, can add filters here) */}
        <aside className="hidden md:block w-72">
          <div className="bg-white/80 rounded-2xl shadow-xl p-6 mb-4 border border-gray-100">
            <h2 className="text-xl font-bold mb-3 text-primary">Find Your Car</h2>
            <CarPreferenceForm onSubmit={handleGetRecommendations} loading={loading} />
          </div>
        </aside>

        {/* Main grid area */}
        <section className="flex-1">
          <div className="block md:hidden mb-6">
            <CarPreferenceForm onSubmit={handleGetRecommendations} loading={loading} />
          </div>
          {error && (
            <div className="text-destructive text-center p-4 rounded-xl bg-destructive/20 border border-destructive mb-6 shadow">
              <p className="font-medium">{"Error: " + error}</p>
              <p className="text-sm mt-1">
                Please ensure your Python environment is set up correctly and the script runs without errors.
              </p>
            </div>
          )}
          {!loading && recommendations.length > 0 ? (
            <div>
              <h1 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">Recommended Cars</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <CarRecommendations recommendations={recommendations} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full opacity-80 mt-20 animate-fade-in-up">
              <Car className="w-24 h-24 text-primary mb-6 drop-shadow-lg" />
              <h2 className="text-3xl font-bold mb-2 text-primary">Start your car search</h2>
              <p className="text-muted-foreground text-center max-w-md text-lg">Enter your preferences to get personalized car recommendations powered by AI.</p>
            </div>
          )}
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full text-center text-xs sm:text-sm text-muted-foreground py-4 border-t bg-white/80 shadow-inner">
        <span>🚗 Powered by AI Car Recommendation Agent &mdash; {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}
