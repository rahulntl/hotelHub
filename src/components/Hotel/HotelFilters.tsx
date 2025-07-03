import React from 'react';
import { Search, Filter, Star, MapPin, IndianRupee } from 'lucide-react';

interface HotelFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  minRating: number;
  onRatingChange: (value: number) => void;
  locations: string[];
}

const HotelFilters: React.FC<HotelFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onRatingChange,
  locations
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Filter Hotels</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Location */}
        <div className="relative">
          <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        
        {/* Price Range */}
        <div className="relative">
          <IndianRupee className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
          <select
            value={`${priceRange[0]}-${priceRange[1]}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-').map(Number);
              onPriceRangeChange([min, max]);
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value="0-1000">All Prices</option>
            <option value="0-1000">Under ₹1000</option>
            <option value="1000-2000">₹1000 - ₹2000</option>
            <option value="2000-3000">₹2000 - ₹3000</option>
            <option value="3000-10000">₹3000+</option>
          </select>
        </div>
        
        {/* Rating */}
        <div className="relative">
          <Star className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
          <select
            value={minRating}
            onChange={(e) => onRatingChange(Number(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value={0}>All Ratings</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
            <option value={4.8}>4.8+ Stars</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HotelFilters;