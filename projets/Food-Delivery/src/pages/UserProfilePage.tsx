import * as React from 'react';
import { User, MapPin, Clock, Settings } from 'lucide-react';

const UserProfilePage: React.FC<{ user: { name: string; email: string; address: string; memberSince: string } }> = ({ user }) => {
  const handleEditProfile = () => {
    // Implement edit profile functionality here
    console.log("Edit profile clicked!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profil Utilisateur</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
            <User size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="text-blue-500 mr-2" aria-hidden="true" />
            <span>{user.address}</span>
          </div>
          <div className="flex items-center">
            <Clock className="text-blue-500 mr-2" aria-hidden="true" />
            <span>Membre depuis: {user.memberSince}</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Paramètres</h3>
          <button 
            className="flex items-center text-blue-500 hover:text-blue-600"
            onClick={handleEditProfile} // Added event handler for edit profile
          >
            <Settings className="mr-2" aria-hidden="true" />
            Modifier le profil
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage with user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: "123 Rue de la Paix, 75000 Paris",
  memberSince: "Janvier 2024",
};

export default function App() {
  return <UserProfilePage user={userData} />;
}
