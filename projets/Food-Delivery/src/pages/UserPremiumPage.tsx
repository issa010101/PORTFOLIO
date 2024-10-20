import * as React from 'react';
import { Star, Truck, Gift } from 'lucide-react';

const UserPremiumPage: React.FC = () => {
  const handlePremiumMembership = () => {
    // Handle the premium membership action here
    console.log("User opted for premium membership!");
    // You can add navigation or an API call as needed
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">プレミアム会員サービス</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">特典</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Truck className="text-blue-500 mr-3" size={24} aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold">無料配達</h3>
              <p>月に10回まで配達料金が無料になります。</p>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="text-yellow-500 mr-3" size={24} aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold">優先サポート</h3>
              <p>24時間年中無休のカスタマーサポートをご利用いただけます。</p>
            </div>
          </div>
          <div className="flex items-center">
            <Gift className="text-red-500 mr-3" size={24} aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold">特別オファー</h3>
              <p>プレミアム会員限定の割引やプロモーションにアクセスできます。</p>
            </div>
          </div>
        </div>
        <button 
          className="mt-6 bg-gold text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          onClick={handlePremiumMembership} // Added event handler
        >
          プレミアム会員になる（月額¥980）
        </button>
      </div>
    </div>
  );
};

export default UserPremiumPage;
