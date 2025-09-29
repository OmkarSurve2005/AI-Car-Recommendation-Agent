import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Star } from "lucide-react"

interface Car {
  name: string
  price: number
  mileage: number
  type: string
  reason: string
  imageUrl?: string // Optional image URL
  brandLogoUrl?: string // Optional brand logo
  infoUrl?: string // Optional link for 'Learn More'
}

interface CarRecommendationsProps {
  recommendations: Car[]
}

export function CarRecommendations({ recommendations }: CarRecommendationsProps) {
  const [compare, setCompare] = useState<number[]>([])
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="w-full max-w-md bg-white text-gray-900 border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-primary mb-2">No Recommendations</h2>
        <p className="text-muted-foreground text-center">No cars match your criteria. Try adjusting your preferences!</p>
      </div>
    )
  }

  return (
  <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      <h2 className="text-4xl font-extrabold text-primary text-center text-balance mb-6 tracking-tight">Top 3 Recommendations</h2>
      {recommendations.map((car, index) => {
        // Demo: random rating between 4.0 and 5.0
        const rating = (Math.random() * 1 + 4).toFixed(1)
        // Demo: match score (random for now, can be improved)
        const matchScore = Math.floor(Math.random() * 21) + 80 // 80-100
        const isEco = car.name.toLowerCase().includes("tesla") || car.reason.toLowerCase().includes("electric")
        return (
          <div
            key={index}
            className={`relative bg-white text-gray-900 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group animate-fade-in-up flex flex-col md:flex-row items-stretch min-h-[340px] md:min-h-[240px] rounded-2xl w-full md:w-[800px] lg:w-[1000px] mx-auto ${index === 0 ? "ring-2 ring-accent scale-[1.03]" : ""}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Car image (placeholder if missing) */}
            <div className="relative w-full md:w-80 h-56 md:h-auto bg-gray-100 flex items-center justify-center md:rounded-l-2xl overflow-hidden group/image">
              <Image
                src={car.imageUrl || "/placeholder-logo.png"}
                alt={car.name}
                fill
                className="object-contain md:object-cover md:rounded-l-2xl transition-transform duration-300 group-hover/image:scale-105"
                sizes="(max-width: 600px) 100vw, 320px"
                priority={index === 0}
              />
              {/* Accent bar for Best Match */}
              {index === 0 && (
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary animate-pulse" />
              )}
              {/* Eco badge */}
              {isEco && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Eco Friendly</span>
              )}
              {/* Brand logo */}
              {car.brandLogoUrl && (
                <div className="absolute bottom-3 right-3 bg-white/90 rounded-full p-1.5 shadow-lg">
                  <Image src={car.brandLogoUrl} alt="Brand Logo" width={36} height={36} className="object-contain" />
                </div>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-extrabold text-primary flex items-center gap-2 m-0">
                    {car.name}
                  </h3>
                  <span className="ml-2 flex items-center gap-1 text-yellow-500 font-bold text-lg">
                    <Star className="w-5 h-5 text-yellow-500" />
                    {rating}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground flex items-center gap-2 mb-2">
                  {car.type === "family" ? "Family Car" : "Sports Car"}
                </p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500" style={{ width: `${matchScore}%` }} />
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <p className="text-lg text-foreground m-0">
                    <span className="font-semibold text-primary">Price:</span> ${car.price.toLocaleString()}
                  </p>
                  <p className="text-lg text-foreground m-0">
                    <span className="font-semibold text-primary">Mileage:</span> {car.mileage} kmpl
                  </p>
                </div>
                <p className="text-base text-foreground mb-2">
                  <span className="font-semibold text-primary">Reason:</span> {car.reason}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={compare.includes(index)}
                    onChange={() => setCompare((prev) => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index])}
                    className="accent-accent w-5 h-5"
                    id={`compare-${index}`}
                  />
                  <label htmlFor={`compare-${index}`} className="text-sm text-muted-foreground cursor-pointer select-none">
                    Compare
                  </label>
                </div>
                <Link
                  href={car.infoUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-white font-bold shadow-lg hover:from-primary hover:to-accent transition-all duration-200 text-base tracking-wide"
                >
                  Learn More
                </Link>
              </div>
            </div>
            </div>
        )
      })}
    </div>
  )
}
