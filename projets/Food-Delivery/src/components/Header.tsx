// src/components/Header.tsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, Menu, User, Store, UserPlus } from 'lucide-react';

// Define an array of navigation items for easier management
const navItems = [
  { to: "/", label: "Home", icon: <Home className="mr-1" size={18} /> },
  { to: "/restaurants", label: "Restaurants", icon: <Menu className="mr-1" size={18} /> },
  { to: "/cart", label: "Cart", icon: <ShoppingBag className="mr-1" size={18} /> },
  { to: "/profile", label: "Profile", icon: <User className="mr-1" size={18} /> },
  { to: "/user-signup", label: "Sign Up", icon: <UserPlus className="mr-1" size={18} /> },
  { to: "/restaurant-signup", label: "Register Restaurant", icon: <Store className="mr-1" size={18} /> },
];

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand logo and name */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <ShoppingBag className="mr-2" />
          FoodDelivery
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center hover:text-blue-200" aria-label={item.label}>
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
