# This script simulates a car recommendation system.
# In a real-world scenario, this would involve loading a dataset (e.g., from CarDekho/Kaggle),
# training a machine learning model (e.g., a collaborative filtering or content-based recommender),
# and then using that model to generate recommendations.

def get_car_recommendations(budget, mileage, usage):
    """
    Simulates a car recommendation system based on user preferences.

    Args:
        budget (int): User's budget in Indian Rupees.
        mileage (int): User's preferred mileage (e.g., 15 for 15 kmpl).
        usage (str): User's primary usage ('family' or 'sports').

    Returns:
        list: A list of dictionaries, each representing a recommended car.
    """
    # Expanded car dataset with accurate car images and brand logos
    cars_data = [
        # Family Cars (Budget-friendly)
        {"name": "Honda Civic", "price": 2000000, "mileage": 18, "type": "family", "reason": "Reliable, good fuel economy, spacious for family use.", "infoUrl": "https://www.honda.com/civic", "imageUrl": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Toyota Camry", "price": 2200000, "mileage": 16, "type": "family", "reason": "Comfortable, excellent resale value, suitable for daily commutes and family trips.", "infoUrl": "https://www.toyota.com/camry/", "imageUrl": "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Hyundai Creta", "price": 1500000, "mileage": 17, "type": "family", "reason": "Compact SUV, good ground clearance, feature-rich for its price.", "infoUrl": "https://www.hyundai.com/in/en/find-a-car/creta/highlights", "imageUrl": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Maruti Swift", "price": 800000, "mileage": 22, "type": "family", "reason": "Economical, easy to drive, perfect for city commuting.", "infoUrl": "https://www.marutisuzuki.com/channels/arena/hatchbacks/swift", "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Volkswagen Polo", "price": 1200000, "mileage": 20, "type": "family", "reason": "German engineering, solid build quality, efficient for city driving.", "infoUrl": "https://www.vw.com/models/polo", "imageUrl": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Skoda Rapid", "price": 1400000, "mileage": 19, "type": "family", "reason": "Spacious sedan, comfortable ride, good value for money.", "infoUrl": "https://www.skoda-auto.com/models/rapid", "imageUrl": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},

        # Sports Cars
        {"name": "BMW 3 Series", "price": 3200000, "mileage": 12, "type": "sports", "reason": "Sporty handling, premium features, exhilarating driving experience.", "infoUrl": "https://www.bmwusa.com/vehicles/3-series/sedan/overview.html", "imageUrl": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Ford Mustang", "price": 2800000, "mileage": 10, "type": "sports", "reason": "Iconic muscle car, powerful engine, head-turning design.", "infoUrl": "https://www.ford.com/cars/mustang/", "imageUrl": "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Porsche 911", "price": 8000000, "mileage": 8, "type": "sports", "reason": "High-performance sports car, legendary status, ultimate driving machine.", "infoUrl": "https://www.porsche.com/usa/models/911/", "imageUrl": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Audi TT", "price": 3600000, "mileage": 14, "type": "sports", "reason": "Stylish coupe, quattro all-wheel drive, premium interior.", "infoUrl": "https://www.audi.com/tt", "imageUrl": "https://images.unsplash.com/photo-1606016159991-0d2d8c838692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Mazda MX-5", "price": 2400000, "mileage": 15, "type": "sports", "reason": "Lightweight convertible, engaging handling, pure driving joy.", "infoUrl": "https://www.mazda.com/mx-5", "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Chevrolet Camaro", "price": 3000000, "mileage": 11, "type": "sports", "reason": "American muscle, powerful V8 engine, aggressive styling.", "infoUrl": "https://www.chevrolet.com/camaro", "imageUrl": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},

        # Electric/Hybrid Cars
        {"name": "Tesla Model 3", "price": 3600000, "mileage": 25, "type": "family", "reason": "Electric, advanced tech, low running costs, modern family car.", "infoUrl": "https://www.tesla.com/model3", "imageUrl": "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Nissan Leaf", "price": 2500000, "mileage": 30, "type": "family", "reason": "Affordable electric, zero emissions, smooth and quiet ride.", "infoUrl": "https://www.nissan.com/vehicles/electric-cars/leaf.html", "imageUrl": "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Toyota Prius", "price": 2100000, "mileage": 24, "type": "family", "reason": "Hybrid efficiency, proven reliability, eco-friendly choice.", "infoUrl": "https://www.toyota.com/prius/", "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},

        # Luxury SUVs
        {"name": "Mercedes GLE", "price": 5200000, "mileage": 13, "type": "family", "reason": "Luxury SUV, advanced safety features, comfortable for long drives.", "infoUrl": "https://www.mercedes-benz.com/gle", "imageUrl": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Audi Q5", "price": 4400000, "mileage": 14, "type": "family", "reason": "Premium SUV, quattro technology, refined interior.", "infoUrl": "https://www.audi.com/q5", "imageUrl": "https://images.unsplash.com/photo-1606016159991-0d2d8c838692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "BMW X3", "price": 3800000, "mileage": 15, "type": "family", "reason": "Compact luxury SUV, sporty dynamics, premium comfort.", "infoUrl": "https://www.bmw.com/x3", "imageUrl": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},

        # Budget Cars
        {"name": "Renault Kwid", "price": 600000, "mileage": 25, "type": "family", "reason": "Most affordable, compact design, surprisingly spacious.", "infoUrl": "https://www.renault.com/kwid", "imageUrl": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Datsun Redi-GO", "price": 500000, "mileage": 26, "type": "family", "reason": "Ultra-budget friendly, easy maintenance, perfect first car.", "infoUrl": "https://www.datsun.com/redi-go", "imageUrl": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Tata Nano", "price": 400000, "mileage": 28, "type": "family", "reason": "Cheapest car in the world, incredibly fuel efficient, perfect for tight budgets.", "infoUrl": "https://www.tatamotors.com/nano", "imageUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
        {"name": "Mahindra KUV100", "price": 900000, "mileage": 23, "type": "family", "reason": "Compact SUV, rugged design, excellent for rough roads.", "infoUrl": "https://www.mahindra.com/kuv100", "imageUrl": "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", "brandLogoUrl": "/placeholder.jpg"},
    ]

    # Clear, step-by-step recommendation algorithm
    recommendations = []

    # Step 1: Filter by budget first (most important)
    budget_cars = [car for car in cars_data if car["price"] <= budget]

    if len(budget_cars) == 0:
        # If no cars within budget, return cheapest cars available
        recommendations = sorted(cars_data, key=lambda x: x["price"])[:3]
    else:
        # Step 2: From budget cars, filter by type
        type_cars = [car for car in budget_cars if car["type"] == usage]

        if len(type_cars) == 0:
            # No cars of preferred type within budget, use all budget cars
            type_cars = budget_cars

        # Step 3: From type cars, filter by mileage
        mileage_cars = [car for car in type_cars if car["mileage"] >= mileage]

        if len(mileage_cars) >= 3:
            # We have enough cars meeting all criteria
            mileage_cars.sort(key=lambda x: x["price"] / x["mileage"])
            recommendations = mileage_cars[:3]
        elif len(mileage_cars) > 0:
            # We have some cars meeting mileage but not enough
            mileage_cars.sort(key=lambda x: x["price"] / x["mileage"])
            recommendations = mileage_cars

            # Fill remaining slots with other type cars that meet mileage
            remaining_slots = 3 - len(recommendations)
            other_mileage_cars = [car for car in budget_cars if car["mileage"] >= mileage and car not in mileage_cars]
            other_mileage_cars.sort(key=lambda x: x["price"] / x["mileage"])
            recommendations.extend(other_mileage_cars[:remaining_slots])
        else:
            # No cars meet mileage requirement
            # Return best value cars from type matches
            type_cars.sort(key=lambda x: x["price"] / x["mileage"])
            recommendations = type_cars[:3]

    return recommendations

if __name__ == "__main__":
    # Example usage for testing
    # This part would typically be called by an API endpoint
    # For demonstration, we'll print some example recommendations
    print("Recommendations for Budget: $30000, Mileage: 15 kmpl, Usage: family")
    print(get_car_recommendations(30000, 15, "family"))

    print("\nRecommendations for Budget: $50000, Mileage: 10 kmpl, Usage: sports")
    print(get_car_recommendations(50000, 10, "sports"))
