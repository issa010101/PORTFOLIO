import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RestaurantListPage from './pages/RestaurantListPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import UserProfilePage from './pages/UserProfilePage';
import RestaurantSignupPage from './pages/RestaurantSignupPage';
import UserSignupPage from './pages/UserSignupPage';
import RestaurantDashboard from './pages/RestaurantDashboard';
import RestaurantSubscriptionPage from './pages/RestaurantSubscriptionPage';
import PromotionsPage from './pages/PromotionsPage';
import UserPremiumPage from './pages/UserPremiumPage';
import NotFoundPage from './pages/NotFoundPage'; // Include this page for handling 404s
import './styles/japaneseTheme.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 japanese-theme">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantListPage />} />
            <Route path="/restaurant/:id" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/restaurant-signup" element={<RestaurantSignupPage />} />
            <Route path="/user-signup" element={<UserSignupPage />} />
            <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
            <Route path="/restaurant-subscription" element={<RestaurantSubscriptionPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/premium" element={<UserPremiumPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
