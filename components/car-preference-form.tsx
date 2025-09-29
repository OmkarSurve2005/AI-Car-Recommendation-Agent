"use client"

import type React from "react"
import { useState } from "react"

interface CarPreferenceFormProps {
  onSubmit: (preferences: { budget: number; mileage: number; usage: string }) => void
  loading: boolean
}

export function CarPreferenceForm({ onSubmit, loading }: CarPreferenceFormProps) {
  const [budget, setBudget] = useState<number>(30000)
  const [mileage, setMileage] = useState<number>(15)
  const [usage, setUsage] = useState<string>("family")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ budget, mileage, usage })
  }

  return (
    <div className="flex justify-center items-start w-full">
      {/* Wider centered card */}
      <div className="w-full max-w-7xl bg-white text-gray-900 border border-gray-200 shadow-2xl rounded-2xl p-12">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-extrabold text-primary mb-4">Find Your Dream Car</h2>
          <p className="text-muted-foreground text-2xl">
            Enter your preferences and let our AI agent find the perfect match for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-10">
          {/* Budget + Mileage side by side, responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="flex flex-col gap-3 md:w-[90%] lg:w-full">
              <label htmlFor="budget" className="text-gray-800 text-xl font-semibold">
                Budget (USD)
              </label>
              <input
                id="budget"
                type="number"
                placeholder="e.g., 30000"
                value={budget}
                onChange={e => setBudget(Number(e.target.value))}
                required
                className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-xl px-8 py-6 text-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-3 md:w-[90%] lg:w-full">
              <label htmlFor="mileage" className="text-gray-800 text-xl font-semibold">
                Min. Mileage (kmpl)
              </label>
              <input
                id="mileage"
                type="number"
                placeholder="e.g., 15"
                value={mileage}
                onChange={e => setMileage(Number(e.target.value))}
                required
                className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-xl px-8 py-6 text-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Usage full width */}
          <div className="flex flex-col gap-3 md:w-[95%] lg:w-full">
            <label htmlFor="usage" className="text-gray-800 text-xl font-semibold">
              Usage
            </label>
            <select
              id="usage"
              value={usage}
              onChange={e => setUsage(e.target.value)}
              className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-xl px-8 py-6 text-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              required
            >
              <option value="family">Family</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200 py-5 text-2xl font-extrabold rounded-xl shadow-xl"
            disabled={loading}
          >
            {loading ? "Searching..." : "Get Recommendations"}
          </button>
        </form>
      </div>
    </div>
  )
}
