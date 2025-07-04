import React, { useState } from 'react';
import { hotels } from '../data/hotels';
import HotelGrid from '../components/Hotel/HotelGrid';
import HotelFilters from '../components/Hotel/HotelFilters';

const Hotels: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [minRating, setMinRating] = useState(0);

  const locations = Array.from(new Set(hotels.map(hotel => hotel.location)));

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !selectedLocation || hotel.location === selectedLocation;
    
    const matchesPrice = hotel.priceRange.min >= priceRange[0] || hotel.priceRange.max <= priceRange[1];
    
    const matchesRating = hotel.rating >= minRating;
    
    return matchesSearch && matchesLocation && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Hotels</h1>
          <p className="text-gray-600">Discover {hotels.length} exceptional hotels worldwide</p>
        </div>
        
        <HotelFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minRating={minRating}
          onRatingChange={setMinRating}
          locations={locations}
        />
        
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredHotels.length} hotel{filteredHotels.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <HotelGrid hotels={filteredHotels} />
      </div>
    </div>
  );
};

export default Hotels;