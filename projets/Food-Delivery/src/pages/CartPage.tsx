import * as React from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  // Example cart items (replace with real state in production)
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: "Burger Classique", quantity: 2, price: 9.99 },
    { id: 2, name: "Pizza Margherita", quantity: 1, price: 11.99 },
  ]);

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Handle item removal
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Votre panier</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantité: {item.quantity}</p>
                  <p className="text-blue-600 font-semibold">{(item.price * item.quantity).toFixed(2)} €</p>
                </div>
                <button 
                  className="text-red-500 hover:text-red-600" 
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => removeItem(item.id)} // Remove item on click
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-md p-4">
            <p className="text-xl font-semibold">Total: {total.toFixed(2)} €</p>
            <button 
              className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 flex items-center justify-center w-full"
              aria-label="Proceed to checkout"
            >
              <ShoppingBag className="mr-2" size={24} />
              Passer la commande
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
