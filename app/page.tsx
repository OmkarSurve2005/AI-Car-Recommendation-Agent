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
  imageUrl?: string
  brandLogoUrl?: string
  infoUrl?: string
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
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">CarTube</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/chatbot" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Find Your Car</h2>
              <CarPreferenceForm onSubmit={handleGetRecommendations} loading={loading} />
            </div>
          </div>

          {/* Results section */}
          <div className="lg:col-span-2">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                <p className="font-medium">Error: {error}</p>
                <p className="text-sm mt-1">
                  Please ensure your Python environment is set up correctly and the script runs without errors.
                </p>
              </div>
            )}

            {!loading && recommendations.length > 0 ? (
              <CarRecommendations recommendations={recommendations} />
            ) : (
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start your car search</h2>
                <p className="text-gray-600">Enter your preferences to get personalized car recommendations powered by AI.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>🚗 Powered by AI Car Recommendation Agent &mdash; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
