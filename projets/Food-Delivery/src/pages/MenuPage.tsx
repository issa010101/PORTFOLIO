import * as React from 'react';
import { useParams } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const MenuPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Example menu items (replace with real data)
  const menu = [
    { id: 1, name: "Burger Classique", description: "Bœuf, cheddar, salade, tomate, oignon", price: 9.99 },
    { id: 2, name: "Pizza Margherita", description: "Sauce tomate, mozzarella, basilic", price: 11.99 },
    { id: 3, name: "Salade César", description: "Laitue romaine, parmesan, croûtons, sauce césar", price: 8.99 },
  ];

  // Function to handle adding items to the cart
  const handleAddToCart = (item: { name: string, price: number }) => {
    // Here you can implement your cart logic, e.g., updating state or sending a request to your backend
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Menu du restaurant {id}</h1>
      <div className="space-y-6">
        {menu.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center transition-transform transform hover:scale-105">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-blue-600 font-semibold mt-2">{item.price.toFixed(2)} €</p>
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
              onClick={() => handleAddToCart(item)} // Add item to cart on click
              aria-label={`Add ${item.name} to cart`}
            >
              <PlusCircle size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
