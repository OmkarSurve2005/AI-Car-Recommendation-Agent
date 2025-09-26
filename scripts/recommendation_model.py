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
        {"name": "Honda Civic", "price": 25000, "mileage": 18, "type": "family", "reason": "Reliable, good fuel economy, spacious for family use."},
        {"name": "Toyota Camry", "price": 28000, "mileage": 16, "type": "family", "reason": "Comfortable, excellent resale value, suitable for daily commutes and family trips."},
        {"name": "BMW 3 Series", "price": 40000, "mileage": 12, "type": "sports", "reason": "Sporty handling, premium features, exhilarating driving experience."},
        {"name": "Ford Mustang", "price": 35000, "mileage": 10, "type": "sports", "reason": "Iconic muscle car, powerful engine, head-turning design."},
        {"name": "Hyundai Creta", "price": 20000, "mileage": 17, "type": "family", "reason": "Compact SUV, good ground clearance, feature-rich for its price."},
        {"name": "Porsche 911", "price": 100000, "mileage": 8, "type": "sports", "reason": "High-performance sports car, legendary status, ultimate driving machine."},
        {"name": "Maruti Swift", "price": 10000, "mileage": 22, "type": "family", "reason": "Economical, easy to drive, perfect for city commuting."},
        {"name": "Tesla Model 3", "price": 45000, "mileage": 25, "type": "family", "reason": "Electric, advanced tech, low running costs, modern family car."},
    ]

    recommendations = []
    for car in cars_data:
        # Basic filtering logic
        if car["price"] <= budget and car["mileage"] >= mileage:
            if usage == "family" and car["type"] == "family":
                recommendations.append(car)
            elif usage == "sports" and car["type"] == "sports":
                recommendations.append(car)

    # Sort by price (cheapest first) and then by mileage (highest first)
    recommendations.sort(key=lambda x: (x["price"], -x["mileage"]))

    # Return top 3 recommendations
    return recommendations[:3]

if __name__ == "__main__":
    # Example usage for testing
    # This part would typically be called by an API endpoint
    # For demonstration, we'll print some example recommendations
    print("Recommendations for Budget: $30000, Mileage: 15 kmpl, Usage: family")
    print(get_car_recommendations(30000, 15, "family"))

    print("\nRecommendations for Budget: $50000, Mileage: 10 kmpl, Usage: sports")
    print(get_car_recommendations(50000, 10, "sports"))
