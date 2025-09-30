"use client"

import type React from "react"
import { useState } from "react"

interface CarPreferenceFormProps {
  onSubmit: (preferences: { budget: number; mileage: number; usage: string }) => void
  loading: boolean
}

export function CarPreferenceForm({ onSubmit, loading }: CarPreferenceFormProps) {
  const [budget, setBudget] = useState<number>(1000000)
  const [mileage, setMileage] = useState<number>(15)
  const [usage, setUsage] = useState<string>("family")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ budget, mileage, usage })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Dream Car</h2>
        <p className="text-gray-600">
          Enter your preferences and let our AI agent find the perfect match for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Budget + Mileage side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Budget (₹)
            </label>
            <input
              id="budget"
              type="number"
              placeholder="500000"
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-2">
              Min. Mileage (kmpl)
            </label>
            <input
              id="mileage"
              type="number"
              placeholder="15"
              value={mileage}
              onChange={e => setMileage(Number(e.target.value))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Usage */}
        <div>
          <label htmlFor="usage" className="block text-sm font-medium text-gray-700 mb-2">
            Usage
          </label>
          <select
            id="usage"
            value={usage}
            onChange={e => setUsage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="family">Family</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          {loading ? "Searching..." : "Get Recommendations"}
        </button>
      </form>
    </div>
  )
}
