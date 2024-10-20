import * as React from 'react';
import { CreditCard } from 'lucide-react';

// Define payment options with icons
const paymentOptions = [
  { name: 'クレジットカード', icon: <CreditCard size={20} /> },
  { name: 'PayPay', icon: '🅿️' },
  { name: 'LINE Pay', icon: '🟢' },
  { name: 'Suica', icon: '🚃' },
];

interface JapanesePaymentOptionsProps {
  title?: string; // Optional title for customization
}

const JapanesePaymentOptions: React.FC<JapanesePaymentOptionsProps> = ({ title = '支払い方法' }) => {
  return (
    <div className="mt-6">
      {/* Title for payment options */}
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {paymentOptions.map((option, index) => (
          <button 
            key={index} 
            className="flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50"
            aria-label={option.name} // Accessibility feature
          >
            <span className="mr-2">
              {typeof option.icon === 'string' ? option.icon : React.cloneElement(option.icon)}
            </span>
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JapanesePaymentOptions;
