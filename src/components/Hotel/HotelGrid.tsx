import React from 'react';
import { Hotel } from '../../types/hotel';
import HotelCard from './HotelCard';

interface HotelGridProps {
  hotels: Hotel[];
}

const HotelGrid: React.FC<HotelGridProps> = ({ hotels }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelGrid;