import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface Car {
  name: string
  price: number
  mileage: number
  type: string
  reason: string
}

interface CarRecommendationsProps {
  recommendations: Car[]
}

export function CarRecommendations({ recommendations }: CarRecommendationsProps) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <Card className="w-full max-w-md bg-card text-foreground border-border shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">No Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No cars match your criteria. Try adjusting your preferences!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 w-full max-w-md">
      <h2 className="text-3xl font-bold text-primary text-center text-balance">Top 3 Recommendations</h2>
      {recommendations.map((car, index) => (
        <Card
          key={index}
          className="bg-card text-foreground border-border shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent">{car.name}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {car.type === "family" ? "Family Car" : "Sports Car"}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <p className="text-foreground">
              <span className="font-medium text-primary">Price:</span> ${car.price.toLocaleString()}
            </p>
            <p className="text-foreground">
              <span className="font-medium text-primary">Mileage:</span> {car.mileage} kmpl
            </p>
            <p className="text-foreground">
              <span className="font-medium text-primary">Reason:</span> {car.reason}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
