import * as React from 'react';
import { CreditCard, Award, Zap } from 'lucide-react';

// Define an interface for subscription plans
interface SubscriptionPlan {
  name: string;
  price: string;
  features: string[];
}

// Subscription plans data
const subscriptionPlans: SubscriptionPlan[] = [
  { name: 'Basic', price: '¥10,000', features: ['Listing de base', 'Support par email'] },
  { name: 'Pro', price: '¥30,000', features: ['Listing prioritaire', 'Support 24/7', 'Analyses de base'] },
  { name: 'Premium', price: '¥50,000', features: ['Listing en vedette', 'Support dédié', 'Analyses avancées', 'Publicité incluse'] },
];

const RestaurantSubscriptionPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">プレミアムプラン</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">
              {plan.price}<span className="text-sm font-normal">/月</span>
            </p>
            <ul className="mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <Zap className="text-yellow-500 mr-2" size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
              選択する
            </button>
            {/* Icons for payment and recommendation */}
            <div className="flex items-center mt-4">
              <CreditCard className="text-gray-500 mr-2" size={20} aria-hidden="true" />
              <span>Mode de paiement accepté</span>
            </div>
            <div className="flex items-center mt-2">
              <Award className="text-gray-500 mr-2" size={20} aria-hidden="true" />
              <span>Meilleur choix pour votre restaurant</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantSubscriptionPage;
