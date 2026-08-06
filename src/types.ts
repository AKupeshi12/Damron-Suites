export interface Amenity {
  id: string;
  name: string;
  icon: string; // lucide icon name
}

export interface Room {
  id: string;
  name: string;
  type: 'standard' | 'deluxe' | 'executive' | 'ocean_view' | 'penthouse';
  price: number;
  currency: string;
  size: string;
  capacity: string;
  bedType: string;
  description: string;
  longDescription: string;
  images: string[];
  amenities: Amenity[];
  highlights: string[];
  features: {
    airConditioning: boolean;
    wifi: boolean;
    dstv: boolean;
    miniBar: boolean;
    oceanView: boolean;
    balcony: boolean;
    roomService: boolean;
    jacuzzi?: boolean;
  };
  rating: number;
  reviewsCount: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'dining' | 'cocktails' | 'in_room';
  description: string;
  price: string;
  image: string;
  tags?: string[];
}

export interface Landmark {
  id: string;
  name: string;
  category: 'beach' | 'dining' | 'transport' | 'shopping' | 'culture';
  distance: string;
  travelTime: string;
  description: string;
  lat: number; // For interactive map positioning (%)
  lng: number;
}

export interface BookingInquiry {
  roomName: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
  includeBreakfast: boolean;
  airportTransfer: boolean;
  contactName: string;
  contactPhone: string;
}

export interface SearchState {
  checkIn: string;
  checkOut: string;
  guests: number;
  suiteType: string;
}
