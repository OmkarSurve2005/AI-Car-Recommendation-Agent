"use client"

import { useState } from "react"
import Link from "next/link" // Import Link for navigation
import { CarPreferenceForm } from "@/components/car-preference-form"
import { CarRecommendations } from "@/components/car-recommendations"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button" // Import Button component

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
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animate-glow-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 animate-glow-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000 animate-glow-pulse"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 p-8 rounded-lg shadow-2xl bg-card/80 backdrop-blur-sm border border-border">
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {" "}
          {/* Added flex and gap for theme toggle and chatbot link */}
          <ThemeToggle />
          <Link href="/chatbot" passHref>
            <Button variant="outline" className="text-primary-foreground hover:bg-primary/20 bg-transparent">
              Chat
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4 text-balance text-center">AI Car Recommendation Agent</h1>
        <CarPreferenceForm onSubmit={handleGetRecommendations} loading={loading} />
        {error && (
          <div className="text-destructive text-center p-4 rounded-md bg-destructive/20 border border-destructive">
            <p className="font-medium">{"Error: " + error}</p>
            <p className="text-sm mt-1">
              Please ensure your Python environment is set up correctly and the script runs without errors.
            </p>
          </div>
        )}
        {!loading && recommendations.length > 0 && <CarRecommendations recommendations={recommendations} />}
      </div>
    </main>
  )
}
