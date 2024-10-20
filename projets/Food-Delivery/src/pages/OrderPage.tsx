import * as React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OrderDetails {
  orderNumber: string;
  restaurant: string;
  total: number;
  deliveryAddress: string;
}

const OrderPage: React.FC<OrderDetails> = ({ orderNumber, restaurant, total, deliveryAddress }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <CheckCircle className="mx-auto text-green-500 animate-bounce" size={64} />
      </div>
      <h1 className="text-3xl font-bold mb-4">Commande confirmée !</h1>
      <p className="text-xl mb-8">Merci pour votre commande. Elle sera livrée dans 30-45 minutes.</p>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Détails de la commande</h2>
        <p className="mb-2"><strong>Numéro de commande:</strong> {orderNumber}</p>
        <p className="mb-2"><strong>Restaurant:</strong> {restaurant}</p>
        <p className="mb-2"><strong>Total:</strong> {total.toFixed(2)} €</p>
        <p className="mb-2"><strong>Adresse de livraison:</strong> {deliveryAddress}</p>
      </div>
      <div className="mt-6">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Continuer vos commandes
        </Link>
      </div>
    </div>
  );
};

// Default export with example data (you can replace this with actual data)
export default function App() {
  return (
    <OrderPage 
      orderNumber="#12345" 
      restaurant="Le Gourmet" 
      total={29.97} 
      deliveryAddress="123 Rue de la Paix, 75000 Paris" 
    />
  );
}
