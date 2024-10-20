import * as React from 'react';
import { Megaphone, Tag } from 'lucide-react';

// Sample promotions data (this can be fetched from an API)
const promotions = [
  {
    id: 1,
    title: "トップバナー広告",
    description: "アプリのトップページに1週間表示されます。注目度抜群！",
    buttonText: "申し込む",
    icon: <Megaphone className="text-blue-500 mr-3 mt-1" size={24} />,
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 2,
    title: "期間限定オファー",
    description: "特別割引やセットメニューを提供し、新規顧客を獲得しましょう。",
    buttonText: "作成する",
    icon: <Tag className="text-green-500 mr-3 mt-1" size={24} />,
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
];

const PromotionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">プロモーションと広告</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">レストラン向けプロモーション</h2>
        <div className="space-y-4">
          {promotions.map((promotion) => (
            <div key={promotion.id} className="flex items-start">
              {promotion.icon}
              <div>
                <h3 className="text-lg font-semibold">{promotion.title}</h3>
                <p>{promotion.description}</p>
                <button
                  className={`mt-2 ${promotion.buttonColor} text-white px-4 py-2 rounded-md transition duration-300`}
                  aria-label={promotion.buttonText} // Accessibility for screen readers
                >
                  {promotion.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
