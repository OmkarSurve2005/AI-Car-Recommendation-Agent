# This script simulates a car recommendation system.
# In a real-world scenario, this would involve loading a dataset (e.g., from CarDekho/Kaggle),
# training a machine learning model (e.g., a collaborative filtering or content-based recommender),
# and then using that model to generate recommendations.

def get_car_recommendations(budget, mileage, usage):
    """
    Simulates a car recommendation system based on user preferences.

    Args:
        budget (int): User's budget in USD.
        mileage (int): User's preferred mileage (e.g., 15 for 15 kmpl).
        usage (str): User's primary usage ('family' or 'sports').

    Returns:
        list: A list of dictionaries, each representing a recommended car.
    """
    # Simplified hardcoded dataset for demonstration
    cars_data = [
        {"name": "Honda Civic", "price": 25000, "mileage": 18, "type": "family", "reason": "Reliable, good fuel economy, spacious for family use.", "infoUrl": "https://www.honda.com/civic", "imageUrl": "https://cdn.motor1.com/images/mgl/0ANk6/s1/honda-civic.jpg", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.png"},
        {"name": "Toyota Camry", "price": 28000, "mileage": 16, "type": "family", "reason": "Comfortable, excellent resale value, suitable for daily commutes and family trips.", "infoUrl": "https://www.toyota.com/camry/", "imageUrl": "https://toyota.scene7.com/is/image/toyota/CAM_MY24_0016_V001.png", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png"},
        {"name": "BMW 3 Series", "price": 40000, "mileage": 12, "type": "sports", "reason": "Sporty handling, premium features, exhilarating driving experience.", "infoUrl": "https://www.bmwusa.com/vehicles/3-series/sedan/overview.html", "imageUrl": "/placeholder.jpg", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"},
        {"name": "Ford Mustang", "price": 35000, "mileage": 10, "type": "sports", "reason": "Iconic muscle car, powerful engine, head-turning design.", "infoUrl": "https://www.ford.com/cars/mustang/", "imageUrl": "/placeholder.jpg", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg"},
        {"name": "Hyundai Creta", "price": 20000, "mileage": 17, "type": "family", "reason": "Compact SUV, good ground clearance, feature-rich for its price.", "infoUrl": "https://www.hyundai.com/in/en/find-a-car/creta/highlights", "imageUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/144803/creta-exterior-right-front-three-quarter-2.jpeg", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/Hyundai_Motor_Company_logo.svg"},
            {"name": "Porsche 911", "price": 100000, "mileage": 8, "type": "sports", "reason": "High-performance sports car, legendary status, ultimate driving machine.", "infoUrl": "https://www.porsche.com/usa/models/911/", "imageUrl": "/placeholder.jpg", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Porsche_Logo.svg"},
        {"name": "Maruti Swift", "price": 10000, "mileage": 22, "type": "family", "reason": "Economical, easy to drive, perfect for city commuting.", "infoUrl": "https://www.marutisuzuki.com/channels/arena/hatchbacks/swift", "imageUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/141211/swift-exterior-right-front-three-quarter-2.jpeg", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Maruti_Suzuki_logo.svg"},
        {"name": "Tesla Model 3", "price": 45000, "mileage": 25, "type": "family", "reason": "Electric, advanced tech, low running costs, modern family car.", "infoUrl": "https://www.tesla.com/model3", "imageUrl": "https://tesla-cdn.thron.com/delivery/public/image/tesla/1e2b1d8b-2e2c-4e7e-8e2e-2e2e2e2e2e2e/bvlatuR/std/2880x1800/Desktop-Model3", "brandLogoUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg"},
    ]

    recommendations = []
    # First, try strict filtering
    for car in cars_data:
        if car["price"] <= budget and car["mileage"] >= mileage and car["type"] == usage:
            recommendations.append(car)

    # If strict filtering yields results, fill up to 3 with next best matches
    if len(recommendations) < 3:
        # Find more cars of the right type, sorted by price/mileage, not already in recommendations
        more = [car for car in cars_data if car["type"] == usage and car not in recommendations]
        more.sort(key=lambda x: (abs(x["price"] - budget), -x["mileage"]))
        recommendations.extend(more)

    # If still less than 3, fill with any car not already in recommendations
    if len(recommendations) < 3:
        more = [car for car in cars_data if car not in recommendations]
        more.sort(key=lambda x: (abs(x["price"] - budget), -x["mileage"]))
        recommendations.extend(more)

    # Always return exactly 3
    return recommendations[:3]

if __name__ == "__main__":
    # Example usage for testing
    # This part would typically be called by an API endpoint
    # For demonstration, we'll print some example recommendations
    print("Recommendations for Budget: $30000, Mileage: 15 kmpl, Usage: family")
    print(get_car_recommendations(30000, 15, "family"))

    print("\nRecommendations for Budget: $50000, Mileage: 10 kmpl, Usage: sports")
    print(get_car_recommendations(50000, 10, "sports"))
