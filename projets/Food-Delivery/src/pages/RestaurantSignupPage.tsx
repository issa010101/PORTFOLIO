import React, { useState } from 'react'; // Ensure this line is correct
import { Store } from 'lucide-react';

const RestaurantSignupPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    restaurantName: string;
    email: string;
    phone: string;
    address: string;
    cuisine: string;
  }>({
    restaurantName: '',
    email: '',
    phone: '',
    address: '',
    cuisine: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value })); // No type error here
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    const { restaurantName, email, phone, address, cuisine } = formData;
    if (!restaurantName || !email || !phone || !address || !cuisine) {
      setError('Tous les champs sont requis.');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess('Inscription réussie! Vous pouvez maintenant vous connecter.');
      // Reset form
      setFormData({ restaurantName: '', email: '', phone: '', address: '', cuisine: '' });
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Inscription Restaurant</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Store className="text-blue-500 mr-2" size={32} />
          <h2 className="text-2xl font-semibold">Rejoignez FoodDelivery</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="restaurantName" className="block mb-1 font-medium">Nom du restaurant</label>
            <input
              type="text"
              id="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Téléphone</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 font-medium">Adresse</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="cuisine" className="block mb-1 font-medium">Type de cuisine</label>
            <input
              type="text"
              id="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:border-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Inscription...' : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantSignupPage;
