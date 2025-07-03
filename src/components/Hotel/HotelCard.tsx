import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../../types/hotel';
import { Star, MapPin, Wifi, Car, Utensils, Waves } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'free wifi':
        return <Wifi className="h-4 w-4" />;
      case 'restaurant':
        return <Utensils className="h-4 w-4" />;
      case 'pool':
        return <Waves className="h-4 w-4" />;
      case 'parking':
        return <Car className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={hotel.images[0]}
          alt={hotel.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hotel.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">{hotel.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {hotel.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {hotel.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 4).map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
          {hotel.amenities.length > 4 && (
            <div className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700">
              +{hotel.amenities.length - 4} more
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              ${hotel.priceRange.min}
              <span className="text-sm text-gray-500 font-normal"> - ${hotel.priceRange.max}</span>
            </p>
            <p className="text-sm text-gray-500">per night</p>
          </div>
          
          <Link
            to={`/hotel/${hotel.id}`}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;