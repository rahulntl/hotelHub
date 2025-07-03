export interface Hotel {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  location: string;
  rating: number;
  priceRange: {
    min: number;
    max: number;
  };
  amenities: string[];
  images: string[];
  contactDetails: {
    phone: string;
    email: string;
    address: string;
  };
  tariffPlans: TariffPlan[];
  featured: boolean;
}

export interface TariffPlan {
  id: string;
  name: string;
  price: number;
  period: 'night' | 'week' | 'month';
  features: string[];
  popular?: boolean;
}