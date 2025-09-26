"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    <Card className="w-full max-w-md bg-card text-foreground border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-primary text-balance">Find Your Dream Car</CardTitle>
        <CardDescription className="text-muted-foreground text-pretty">
          Enter your preferences and let our AI agent find the perfect match for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="budget" className="text-foreground text-sm font-medium">
              Budget (USD)
            </Label>
            <Input
              id="budget"
              type="number"
              placeholder="e.g., 30000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              required
              className="bg-input text-foreground border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mileage" className="text-foreground text-sm font-medium">
              Min. Mileage (kmpl)
            </Label>
            <Input
              id="mileage"
              type="number"
              placeholder="e.g., 15"
              value={mileage}
              onChange={(e) => setMileage(Number(e.target.value))}
              required
              className="bg-input text-foreground border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="usage" className="text-foreground text-sm font-medium">
              Usage
            </Label>
            <Select value={usage} onValueChange={setUsage}>
              <SelectTrigger
                id="usage"
                className="bg-input text-foreground border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                <SelectValue placeholder="Select usage type" />
              </SelectTrigger>
              <SelectContent className="bg-card text-foreground border-border">
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 py-2 text-lg font-semibold rounded-md"
            disabled={loading}
          >
            {loading ? "Searching..." : "Get Recommendations"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
