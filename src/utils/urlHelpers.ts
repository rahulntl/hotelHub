// URL helper functions for SEO-friendly hotel URLs
export const createHotelSlug = (hotelName: string): string => {
  return hotelName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/-+/g, '_') // Replace hyphens with underscores
    .replace(/_+/g, '_') // Replace multiple underscores with single underscore
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
};

export const findHotelBySlug = (hotels: any[], slug: string) => {
  return hotels.find(hotel => createHotelSlug(hotel.title) === slug);
};

export const getHotelUrl = (hotel: any): string => {
  return `/hotel/${createHotelSlug(hotel.title)}`;
};