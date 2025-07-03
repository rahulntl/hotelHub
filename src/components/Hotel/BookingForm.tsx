import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Hotel, TariffPlan } from '../../types/hotel';
import { sendWhatsAppMessage, calculateNights, BookingDetails } from '../../utils/whatsapp';
import { Calendar, Users, User, Mail, Phone, MessageCircle, CreditCard } from 'lucide-react';

interface BookingFormProps {
  hotel: Hotel;
}

const BookingForm: React.FC<BookingFormProps> = ({ hotel }) => {
  const { user, isAuthenticated } = useAuth0();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedPlan, setSelectedPlan] = useState<TariffPlan | null>(null);
  const [customerName, setCustomerName] = useState(user?.name || '');
  const [customerEmail, setCustomerEmail] = useState(user?.email || '');
  const [customerPhone, setCustomerPhone] = useState('');

  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = selectedPlan ? selectedPlan.price * nights : 0;

  const handleWhatsAppBooking = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }

    const bookingDetails: BookingDetails = {
      hotelName: hotel.title,
      checkIn,
      checkOut,
      guests: `${guests} Guest${guests !== '1' ? 's' : ''}`,
      selectedPlan: selectedPlan?.name,
      customerName: customerName || undefined,
      customerEmail: customerEmail || undefined,
      customerPhone: customerPhone || undefined,
    };

    sendWhatsAppMessage(bookingDetails);
  };

  const handleDirectBooking = () => {
    // This would integrate with a payment processor
    alert('Direct booking feature coming soon! For now, please use WhatsApp booking.');
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Book Your Stay</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 inline mr-1" />
            Check-in Date
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="h-4 w-4 inline mr-1" />
            Check-out Date
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || tomorrow}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="h-4 w-4 inline mr-1" />
            Number of Guests
          </label>
          <select 
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6+ Guests</option>
          </select>
        </div>

        {/* Room/Plan Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Room Type
          </label>
          <div className="space-y-2">
            {hotel.tariffPlans.map((plan) => (
              <label
                key={plan.id}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedPlan?.id === plan.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan?.id === plan.id}
                    onChange={() => setSelectedPlan(plan)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{plan.name}</div>
                    <div className="text-sm text-gray-500">
                      {plan.features.slice(0, 2).join(', ')}
                      {plan.features.length > 2 && '...'}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${plan.price}</div>
                  <div className="text-sm text-gray-500">per {plan.period}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Customer Information */}
        <div className="border-t pt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <User className="h-4 w-4 inline mr-1" />
                Full Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Mail className="h-4 w-4 inline mr-1" />
                Email Address
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Phone className="h-4 w-4 inline mr-1" />
                Phone Number
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      {checkIn && checkOut && selectedPlan && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Booking Summary</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Room Type:</span>
              <span>{selectedPlan.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{nights} night{nights !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex justify-between">
              <span>Rate:</span>
              <span>${selectedPlan.price} per {selectedPlan.period}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        <button
          onClick={handleWhatsAppBooking}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Book via WhatsApp</span>
        </button>
        
        <button
          onClick={handleDirectBooking}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <CreditCard className="h-5 w-5" />
          <span>Book & Pay Online</span>
        </button>
      </div>
      
      <p className="text-xs text-gray-500 mt-3 text-center">
        WhatsApp booking connects you directly with our team for personalized service
      </p>
    </div>
  );
};

export default BookingForm;