import * as React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

// Sample restaurant data
const restaurants = [
  { id: 1, name: "Le Gourmet", cuisine: "Française", rating: 4.5, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 2, name: "Sushi Master", cuisine: "Japonaise", rating: 4.3, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  { id: 3, name: "Pizza Perfection", cuisine: "Italienne", rating: 4.7, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  // Add more restaurants if needed
];

const RestaurantListPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Restaurants à proximité</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurant/${restaurant.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            aria-label={`Détails de ${restaurant.name}`} // Accessibility improvement
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                // Set a default image if the restaurant image fails to load
                e.currentTarget.src = "https://via.placeholder.com/500"; // Placeholder image
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
              <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={18} />
                <span>{restaurant.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListPage;
