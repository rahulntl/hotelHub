import { Hotel } from '../types/hotel';

export const hotels: Hotel[] = [
  {
    id: '1',
    title: 'Grand Ocean Resort',
    description: 'Experience luxury at its finest with our oceanfront resort featuring world-class amenities, pristine beaches, and exceptional service. Our resort offers an unforgettable escape with stunning ocean views, multiple dining options, and a full-service spa.',
    shortDescription: 'Luxury oceanfront resort with world-class amenities',
    location: 'Maldives',
    rating: 4.8,
    priceRange: { min: 299, max: 899 },
    amenities: ['Free WiFi', 'Ocean View', 'Spa', 'Restaurant', 'Pool', 'Gym', 'Room Service', 'Concierge'],
    images: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    contactDetails: {
      phone: '+1 (555) 123-4567',
      email: 'info@grandoceanresort.com',
      address: '123 Ocean Drive, Maldives'
    },
    tariffPlans: [
      {
        id: '1',
        name: 'Standard Ocean View',
        price: 299,
        period: 'night',
        features: ['Ocean View', 'Free WiFi', 'Breakfast Included', 'Pool Access']
      },
      {
        id: '2',
        name: 'Premium Suite',
        price: 549,
        period: 'night',
        features: ['Ocean View', 'Free WiFi', 'Breakfast Included', 'Pool Access', 'Spa Access', 'Butler Service'],
        popular: true
      },
      {
        id: '3',
        name: 'Royal Villa',
        price: 899,
        period: 'night',
        features: ['Ocean View', 'Free WiFi', 'All Meals Included', 'Private Pool', 'Spa Access', 'Butler Service', 'Airport Transfer']
      }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Mountain Peak Lodge',
    description: 'Nestled in the heart of the mountains, our lodge offers a perfect blend of rustic charm and modern comfort. Enjoy breathtaking mountain views, cozy fireplaces, and access to hiking trails right from your doorstep.',
    shortDescription: 'Rustic mountain lodge with breathtaking views',
    location: 'Swiss Alps',
    rating: 4.6,
    priceRange: { min: 199, max: 499 },
    amenities: ['Free WiFi', 'Mountain View', 'Fireplace', 'Restaurant', 'Ski Access', 'Hiking Trails', 'Spa'],
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1134174/pexels-photo-1134174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    contactDetails: {
      phone: '+41 (0) 123-456-789',
      email: 'info@mountainpeaklodge.com',
      address: '456 Alpine Road, Swiss Alps'
    },
    tariffPlans: [
      {
        id: '1',
        name: 'Cozy Mountain Room',
        price: 199,
        period: 'night',
        features: ['Mountain View', 'Free WiFi', 'Breakfast Included', 'Fireplace']
      },
      {
        id: '2',
        name: 'Alpine Suite',
        price: 349,
        period: 'night',
        features: ['Mountain View', 'Free WiFi', 'Breakfast Included', 'Fireplace', 'Ski Equipment', 'Spa Access'],
        popular: true
      },
      {
        id: '3',
        name: 'Presidential Chalet',
        price: 499,
        period: 'night',
        features: ['Mountain View', 'Free WiFi', 'All Meals Included', 'Private Fireplace', 'Ski Equipment', 'Spa Access', 'Guide Service']
      }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'City Center Plaza',
    description: 'Located in the heart of downtown, our modern hotel offers easy access to shopping, dining, and entertainment. Perfect for business travelers and city explorers alike.',
    shortDescription: 'Modern downtown hotel with city convenience',
    location: 'New York City',
    rating: 4.4,
    priceRange: { min: 149, max: 399 },
    amenities: ['Free WiFi', 'Business Center', 'Gym', 'Restaurant', 'Bar', 'Room Service', 'Concierge'],
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    contactDetails: {
      phone: '+1 (555) 987-6543',
      email: 'info@citycenterplaza.com',
      address: '789 Broadway, New York, NY 10001'
    },
    tariffPlans: [
      {
        id: '1',
        name: 'Standard City Room',
        price: 149,
        period: 'night',
        features: ['City View', 'Free WiFi', 'Business Center Access', 'Gym Access']
      },
      {
        id: '2',
        name: 'Executive Suite',
        price: 279,
        period: 'night',
        features: ['City View', 'Free WiFi', 'Business Center Access', 'Gym Access', 'Breakfast Included', 'Lounge Access'],
        popular: true
      },
      {
        id: '3',
        name: 'Penthouse Suite',
        price: 399,
        period: 'night',
        features: ['Panoramic City View', 'Free WiFi', 'Business Center Access', 'Gym Access', 'All Meals Included', 'Butler Service']
      }
    ],
    featured: false
  },
  {
    id: '4',
    title: 'Tropical Paradise Resort',
    description: 'Escape to paradise with our beachfront resort featuring crystal-clear waters, white sand beaches, and tropical gardens. Perfect for romantic getaways and family vacations.',
    shortDescription: 'Beachfront paradise with tropical gardens',
    location: 'Bali, Indonesia',
    rating: 4.9,
    priceRange: { min: 229, max: 699 },
    amenities: ['Free WiFi', 'Beach Access', 'Pool', 'Spa', 'Restaurant', 'Bar', 'Water Sports', 'Kids Club'],
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    contactDetails: {
      phone: '+62 (361) 123-4567',
      email: 'info@tropicalparadise.com',
      address: '321 Beach Road, Bali, Indonesia'
    },
    tariffPlans: [
      {
        id: '1',
        name: 'Garden View Room',
        price: 229,
        period: 'night',
        features: ['Garden View', 'Free WiFi', 'Beach Access', 'Pool Access', 'Breakfast Included']
      },
      {
        id: '2',
        name: 'Ocean View Suite',
        price: 399,
        period: 'night',
        features: ['Ocean View', 'Free WiFi', 'Beach Access', 'Pool Access', 'Breakfast Included', 'Spa Access', 'Water Sports'],
        popular: true
      },
      {
        id: '3',
        name: 'Beachfront Villa',
        price: 699,
        period: 'night',
        features: ['Beachfront', 'Free WiFi', 'Private Beach Access', 'Private Pool', 'All Meals Included', 'Spa Access', 'Water Sports', 'Butler Service']
      }
    ],
    featured: true
  }
];