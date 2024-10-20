import * as React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

// Example restaurant data
const restaurants = [
  {
    id: 1,
    name: 'Pizza Paradise',
    description: 'Delicious pizzas with fresh ingredients.',
    image: 'https://example.com/images/pizza-paradise.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Burger Town',
    description: 'Tasty burgers made to order.',
    image: 'https://example.com/images/burger-town.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Sushi World',
    description: 'Fresh sushi and sashimi.',
    image: 'https://example.com/images/sushi-world.jpg', // Replace with actual image URL
  },
];

const HomePage: React.FC = () => {
  // State to manage the address input
  const [address, setAddress] = React.useState('');

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur FoodDelivery</h1>
      <p className="text-xl mb-8">Découvrez les meilleurs restaurants près de chez vous !</p>
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <label htmlFor="address" className="sr-only">Entrez votre adresse</label>
          <input
            id="address"
            type="text"
            placeholder="Entrez votre adresse"
            value={address}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-full border-2 border-blue-500 focus:outline-none focus:border-blue-600"
          />
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Restaurants à proximité</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{restaurant.name}</h3>
              <p className="text-gray-600">{restaurant.description}</p>
              <Link
                to={`/restaurants/${restaurant.id}`}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Voir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Link
          to="/restaurants"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Voir tous les restaurants
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
