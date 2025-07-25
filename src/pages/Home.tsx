import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hotels } from '../data/hotels';
import HotelGrid from '../components/Hotel/HotelGrid';
import { Search, Star, MapPin, Calendar, Users } from 'lucide-react';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const featuredHotels = hotels.filter(hotel => hotel.featured);
  const allHotels = hotels.slice(0, 6); // Show first 6 hotels

  const filteredHotels = allHotels.filter(hotel =>
    hotel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://www.nainitalhotels.in/nainital.jpg)'
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-4">
            Find Your Perfect Stay in Nainital
          </h1>
          <p className="text-xl mb-8">
            We are delighted to have you as our guest and thank you for choosing us for your stay in this serene paradise. Nestled amidst the breathtaking hills and overlooking the tranquil Naini Lake, our hotel is dedicated to making your visit a memorable one.
          </p>
          
          {/* Search Bar */}
          {/*<div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div className="relative">
                <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div className="relative">
                <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div className="relative">
                <Users className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none">
                  <option>2 Guests</option>
                  <option>1 Guest</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Search Hotels
            </button>
          </div>*/}
        </div>
      </div>

      {/* Featured Hotels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Hotels</h2>
          <p className="text-xl text-gray-600">Discover our most popular destinations</p>
        </div>
        
        <HotelGrid hotels={featuredHotels} />
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-lg">Hotels In Nainital</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* All Hotels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Hotels</h2>
            <p className="text-xl text-gray-600">Explore our complete collection</p>
          </div>
          <Link
            to="/hotels"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            View All Hotels
          </Link>
        </div>
        
        <HotelGrid hotels={filteredHotels} />
      </div>

      {/* Newsletter */}
     
    </div>
  );
};

export default Home;