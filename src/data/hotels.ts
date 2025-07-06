import { Hotel } from '../types/hotel';

export const hotels: Hotel[] = [
  {
    id: '1',
    title: 'Naini RR Residency',
    description: 'Naini R.R. Residency is a budget-friendly hotel situated in the Mallital‑Sherwani area of Nainital, just behind the Employment Office and a short 10-minute walk from Naini Lake . It sits near the Cheena Baba Mandir, making it especially convenient if you're visiting the temple and exploring the lakefront, For travelers seeking easy access to Naini Lake and Cheena Baba Mandir, with free parking and a central location, Naini R.R. Residency offers good value.',
    shortDescription: 'Naini RR Residency with world-class amenities',
    location: 'Cheena Baba, Nainital',
    rating: 4.8,
    priceRange: { min: 1500, max: 3500 },
    amenities: ['Free WiFi', 'Restaurant', 'Room Service'],
    images: [
      'https://gos3.ibcdn.com/4fb501a4c7e911edbb3a0a58a9feac02.jpg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room1.jpeg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room2.jpeg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room3.jpeg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room4.jpeg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room5.jpeg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room6.jpeg',
      'https://www.nainitalhotels.in/naini-r-r-residency-room7.jpeg'
    ],
    contactDetails: {
      phone: '(+91) 8476023501',
      email: 'maanandahotels@gmail.com',
      address: 'Cheena Baba, Mallital, Nainital'
    },
    tariffPlans: [
      {
        id: '1',
        name: '2 Bedroom',
        price: 2500,
        period: 'night',
        features: [ 'Free WiFi', 'Breakfast Included', 'Room Service']
      },
      {
        id: '2',
        name: '4 Bedroom',
        price: 3500,
        period: 'night',
        features: ['Free WiFi', 'Room Service', 'All Meals Included' ],
        popular: true
      },
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Jagati Niwas',
    description: 'If you are after a budget-friendly, central lakeside stay in Nainital with clean rooms, and friendly service, Jagati Niwas is an excellent pick.',
    shortDescription: 'Rustic mountain lodge with breathtaking views',
    location: 'Upper Mall Road',
    rating: 4.6,
    priceRange: { min: 2000, max: 4000 },
    amenities: ['Free WiFi', 'Mountain View', 'Fireplace'],
    images: [
      'https://www.nainitalhotels.in/jagati-niwas-1.jpeg',
      'https://www.nainitalhotels.in/jagati-niwas-2.jpeg',
      'https://www.nainitalhotels.in/jagati-niwas-3.jpeg',
      'https://www.nainitalhotels.in/jagati-niwas-4.jpeg',
      'https://www.nainitalhotels.in/jagati-niwas-5.jpeg',
      'https://www.nainitalhotels.in/jagati-niwas-6.jpeg'
    ],
    contactDetails: {
      phone: '(+91) 8476023501',
      email: 'maanandahotels@gmail.com',
      address: 'Jagati Niwas, Mall Road Nainital'
    },
    tariffPlans: [
      {
        id: '1',
        name: '2 Bedroom',
        price: 2500,
        period: 'night',
        features: ['Mountain View', 'Free WiFi','Fireplace']
      },
      {
        id: '2',
        name: '3 Bedroom',
        price: 3000,
        period: 'night',
        features: ['Mountain View', 'Free WiFi', 'Fireplace'],
        popular: true
      },
      {
        id: '3',
        name: '4 Bedroom',
        price: 4000,
        period: 'night',
        features: ['Mountain View', 'Free WiFi', 'Guide Service', 'Fireplace']
      }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'KGN Guest House',
    description: 'Situated on Nainital Road, Sherwani, approximately 1.8km from Nainital Lake and a 5-minute drive from the lakeside and Mall Road, Close to attractions like Cave Garden and High Court',
    shortDescription: 'Modern downtown hotel with city convenience',
    location: 'Sherwani Mallital, Nainital',
    rating: 4.4,
    priceRange: { min: 800, max: 2500 },
    amenities: ['Free WiFi', 'Room Service', 'Parking'],
    images: [
      'https://www.nainitalhotels.in/kgn-guest-house-1.jpeg',
      'https://www.nainitalhotels.in/kgn-guest-house-2.jpeg',
      'https://www.nainitalhotels.in/kgn-guest-house-3.jpeg',
      'https://www.nainitalhotels.in/kgn-guest-house-4.jpeg',
      'https://www.nainitalhotels.in/kgn-guest-house-6.jpeg',
      'https://www.nainitalhotels.in/kgn-guest-house-6.jpeg'
    ],
    contactDetails: {
      phone: '(+91) 8476023501',
      email: 'maanandahotels@gmail.com',
      address: 'KGN Guest House, Mallital, Nainital'
    },
    tariffPlans: [
      {
        id: '1',
        name: '2 Bedroom',
        price: 1500,
        period: 'night',
        features: ['City View', 'Free WiFi']
      },
      {
        id: '2',
        name: '3 Bedroom',
        price: 2000,
        period: 'night',
        features: ['City View', 'Free WiFi'],
        popular: true
      },
      {
        id: '3',
        name: '4 Bedroom',
        price: 2500,
        period: 'night',
        features: ['City View', 'Free WiFi'],
      }
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Baba Neem Karoli Guest House',
    description: 'A budget-friendly hotel in Nainital, located away from the city rush — ideal for both bachelors and families seeking a peaceful stay.',
    shortDescription: 'A budget-friendly hotel in Nainital',
    location: 'Mallital Nainital',
    rating: 4.9,
    priceRange: { min: 1200, max: 1500 },
    amenities: ['Free WiFi', 'Parking'],
    images: [
      'https://www.nainitalhotels.in/nainital-hotel.jpeg',
    ],
    contactDetails: {
      phone: '(+91) 8476023501',
      email: 'maanandahotels@gmail.com',
      address: 'Baba Neem karoli Guest House, Mallital, Nainital'
    },
    tariffPlans: [
      {
        id: '1',
        name: '2 Bedroom',
        price: 1500,
        period: 'night',
        features: ['Free WiFi', 'Parking'],
        popular: true
      }
    ],
    featured: false
  }
];