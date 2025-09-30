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
  const [showComparison, setShowComparison] = useState(false)

  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="w-full max-w-md bg-white text-gray-900 border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-primary mb-2">No Recommendations</h2>
        <p className="text-muted-foreground text-center">No cars match your criteria. Try adjusting your preferences!</p>
      </div>
    )
  }

  // Comparison view component
  const ComparisonView = () => {
    const comparedCars = recommendations.filter((_, index) => compare.includes(index))

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Compare Cars</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparedCars.map((car, index) => {
                const carRating = (Math.random() * 1 + 4).toFixed(1)
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <img
                      src={car.imageUrl || "/placeholder.jpg"}
                      alt={car.name}
                      className="w-full h-32 object-cover rounded mb-3"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.jpg"
                      }}
                    />
                    <h4 className="font-semibold text-gray-900 mb-2">{car.name}</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Price:</strong> ₹{car.price.toLocaleString()}</p>
                      <p><strong>Mileage:</strong> {car.mileage} kmpl</p>
                      <p><strong>Type:</strong> {car.type}</p>
                      <p><strong>Rating:</strong> ⭐ {carRating}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header with Compare Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Top 3 Recommendations</h2>
        {compare.length > 1 && (
          <button
            onClick={() => setShowComparison(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            Compare ({compare.length})
          </button>
        )}
      </div>

      {/* Recommendations */}
      {recommendations.map((car, index) => {
        const rating = (Math.random() * 1 + 4).toFixed(1)
        const isEco = car.name.toLowerCase().includes("tesla") || car.reason.toLowerCase().includes("electric")
        const isChecked = compare.includes(index)

        return (
          <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${isChecked ? 'ring-2 ring-blue-500' : ''}`}>
            <div className="md:flex">
              {/* Car Image */}
              <div className="md:w-64 h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={car.imageUrl || "/placeholder.jpg"}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.jpg"
                  }}
                />
              </div>

              {/* Car Details */}
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm text-gray-600">{rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-2">
                  {car.type === "family" ? "Family Car" : "Sports Car"}
                </p>

                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-lg font-semibold text-blue-600">₹{car.price.toLocaleString()}</span>
                  <span className="text-gray-600">{car.mileage} kmpl</span>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Why this car?</strong> {car.reason}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {
                        if (isChecked) {
                          setCompare(prev => prev.filter(i => i !== index))
                        } else {
                          if (compare.length < 3) {
                            setCompare(prev => [...prev, index])
                          }
                        }
                      }}
                      className="mr-2 w-4 h-4 text-blue-600"
                    />
                    <label className="text-sm text-gray-600">
                      {isChecked ? "Remove from Compare" : "Add to Compare"}
                    </label>
                  </div>
                  <a
                    href={car.infoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Comparison Modal */}
      {showComparison && <ComparisonView />}
    </div>
  )
}
