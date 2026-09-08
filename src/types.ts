export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  periodDescription: string;
  badge?: string;
  popular?: boolean;
  bestValue?: boolean;
  features: string[];
  whatsappMessage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
  image: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  tags: string[];
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'equipment' | 'training' | 'facilities';
  imageUrl: string;
  caption: string;
}
