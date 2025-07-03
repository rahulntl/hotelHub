import React from 'react';
import { Check, Star, MessageCircle } from 'lucide-react';
import { TariffPlan } from '../../types/hotel';
import { sendWhatsAppMessage } from '../../utils/whatsapp';

interface TariffPlansProps {
  plans: TariffPlan[];
  hotelName?: string;
}

const TariffPlans: React.FC<TariffPlansProps> = ({ plans, hotelName }) => {
  const handleQuickInquiry = (plan: TariffPlan) => {
    const bookingDetails = {
      hotelName: hotelName || 'Selected Hotel',
      checkIn: '',
      checkOut: '',
      guests: '2 Guests',
      selectedPlan: plan.name,
    };

    sendWhatsAppMessage(bookingDetails);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Pricing Plans</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-xl border-2 p-6 relative ${
              plan.popular
                ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                : 'border-gray-200 bg-white'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gray-900">
                ₹{plan.price}
                <span className="text-sm text-gray-500 font-normal">/{plan.period}</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2">
              <button
                onClick={() => handleQuickInquiry(plan)}
                className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 bg-green-600 text-white hover:bg-green-700 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Quick Inquiry</span>
              </button>
              
              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TariffPlans;