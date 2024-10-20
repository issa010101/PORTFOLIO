// src/components/Footer.tsx
import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright text */}
        <p>&copy; 2024 FoodDelivery. Tous droits réservés.</p>
        {/* Optional additional links */}
        <div className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Politique de confidentialité</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
