import { Room, MenuItem, Landmark } from '../types';

export const OFFICIAL_WHATSAPP_NUMBER = '+265887444100';
export const OFFICIAL_LOCATION_ADDRESS = 'Damron Suites - Mzuzu, G2H4+WR3, Mzuzu, Northern Malawi';

export const ROOMS_DATA: Room[] = [
  {
    id: 'std-01',
    name: 'Standard Suite',
    type: 'standard',
    price: 95000,
    currency: 'MWK',
    size: '32 m²',
    capacity: '2 Guests',
    bedType: 'Queen Size Plush Bed',
    description: 'A serene Mzuzu retreat featuring crisp climate AC, high-speed Wi-Fi, smart DSTV, and a dedicated executive desk.',
    longDescription: 'The Standard Suite at Damron Suites Mzuzu blends modern minimalism with warm Malawian hospitality. Tailored for business executives and leisure guests visiting the Northern Region, this suite features a plush queen bed with high-thread-count cotton linens, a dedicated work area, climate AC, and smart DSTV satellite entertainment.',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      { id: 'ac', name: 'Air Conditioning', icon: 'Wind' },
      { id: 'wifi', name: 'High-Speed Fiber Wi-Fi', icon: 'Wifi' },
      { id: 'dstv', name: 'Smart DSTV & Satellite', icon: 'Tv' },
      { id: 'coffee', name: 'Mzuzu Highland Coffee Station', icon: 'Coffee' },
      { id: 'safe', name: 'In-Room Laptop Safe', icon: 'Shield' }
    ],
    highlights: ['Garden Courtyard View', 'En-Suite Rain Shower', '24/7 Room Service & Security'],
    features: {
      airConditioning: true,
      wifi: true,
      dstv: true,
      miniBar: true,
      oceanView: false,
      balcony: true,
      roomService: true
    },
    rating: 4.8,
    reviewsCount: 56
  },
  {
    id: 'dlx-02',
    name: 'Deluxe Suite',
    type: 'deluxe',
    price: 145000,
    currency: 'MWK',
    size: '48 m²',
    capacity: '2 - 3 Guests',
    bedType: 'King Size Sanctuary Bed',
    description: 'Spacious Mzuzu suite featuring private terrace views over the highland hills, stocked mini bar, and luxury rain shower.',
    longDescription: 'Elevate your stay in Mzuzu with our Deluxe Suite. Featuring floor-to-ceiling glass doors opening onto a sunlit balcony overlooking the highland gardens, this room offers a stocked mini bar, bespoke ambient lighting, dual vanity bathroom, and complimentary Mzuzu organic coffee bar.',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      { id: 'ac', name: 'Climate Control AC', icon: 'Wind' },
      { id: 'wifi', name: 'High-Speed Fiber Wi-Fi', icon: 'Wifi' },
      { id: 'dstv', name: '55" Smart DSTV HD', icon: 'Tv' },
      { id: 'minibar', name: 'Stocked Mini Bar', icon: 'Wine' },
      { id: 'balcony', name: 'Private Highland Terrace', icon: 'Sun' },
      { id: 'shower', name: 'Dual Head Rain Shower', icon: 'ShowerHead' }
    ],
    highlights: ['Private Balcony', 'Highland Panorama', 'Complimentary Full Breakfast'],
    features: {
      airConditioning: true,
      wifi: true,
      dstv: true,
      miniBar: true,
      oceanView: false,
      balcony: true,
      roomService: true
    },
    rating: 4.9,
    reviewsCount: 84
  },
  {
    id: 'exe-03',
    name: 'Executive Suite',
    type: 'executive',
    price: 220000,
    currency: 'MWK',
    size: '65 m²',
    capacity: '2 - 4 Guests',
    bedType: 'Super King Featherbed',
    description: 'The pinnacle of Mzuzu luxury with separate living room, plush seating, deep soaking tub, and VIP concierge.',
    longDescription: 'Designed for corporate leaders, diplomatic visitors, and romantic getaways in Northern Malawi, the Executive Suite at Damron Suites Mzuzu boasts a separate living lounge, plush Italian leather sofas, deep soaking bath, and direct terrace access facing the Mzuzu hills.',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507038772120-7fff76f79d79?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      { id: 'ac', name: 'Zoned Climate AC', icon: 'Wind' },
      { id: 'wifi', name: 'Dedicated Fiber Line', icon: 'Wifi' },
      { id: 'dstv', name: '65" OLED DSTV Premium', icon: 'Tv' },
      { id: 'minibar', name: 'Premium Mini Bar', icon: 'Wine' },
      { id: 'jacuzzi', name: 'Deep Soaking Tub', icon: 'Bath' }
    ],
    highlights: ['Separate Executive Lounge', 'Deep Soaking Tub', 'Priority WhatsApp Concierge'],
    features: {
      airConditioning: true,
      wifi: true,
      dstv: true,
      miniBar: true,
      oceanView: false,
      balcony: true,
      roomService: true,
      jacuzzi: true
    },
    rating: 5.0,
    reviewsCount: 112
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Mzuzu Highland Organic Coffee & Omelette',
    category: 'breakfast',
    description: 'Freshly brewed aromatic Mzuzu highland coffee served with farm-fresh organic eggs, avocado, roasted tomatoes, and sourdough toast.',
    price: 'MWK 15,000',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    tags: ['Mzuzu Local Coffee', 'Fresh']
  },
  {
    id: 'm2',
    name: 'Damron Mzuzu Full Breakfast Feast',
    category: 'breakfast',
    description: 'Grilled pork/beef sausage, bacon, eggs your way, spiced baked beans, sauteed mushrooms, fresh tropical fruit, and juice.',
    price: 'MWK 20,000',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    tags: ['Chef Special']
  },
  {
    id: 'm3',
    name: 'Pan-Seared Lake Malawi Chambo',
    category: 'dining',
    description: 'Freshly caught Lake Malawi Chambo fish served pan-seared with buttered garlic sauce, traditional Malawian Nsima, and savory pumpkin leaf relish (Nkhwani).',
    price: 'MWK 30,000',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    tags: ['Lake Malawi Special', 'Authentic']
  },
  {
    id: 'm4',
    name: 'Aged Beef Tenderloin with Mzuzu Herb Butter',
    category: 'dining',
    description: '250g tender Malawian grass-fed beef fillet, seasoned with local garden herbs, creamy potato puree, and red wine reduction.',
    price: 'MWK 40,000',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tags: ['Signature Steak']
  },
  {
    id: 'm5',
    name: 'Northern Malawi Highlands Sunset Cocktail',
    category: 'cocktails',
    description: 'Handcrafted cocktail infused with local citrus, Malawian gin, elderflower, and fresh mint over crushed ice.',
    price: 'MWK 12,000',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    tags: ['Local Gin Cocktail']
  },
  {
    id: 'm6',
    name: 'Mzuzu Espresso Martini',
    category: 'cocktails',
    description: 'Freshly pulled single-origin Mzuzu Arabica espresso, vodka, and dark coffee liqueur shaken over ice.',
    price: 'MWK 15,000',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    tags: ['Mzuzu Coffee Special']
  },
  {
    id: 'm7',
    name: '24/7 Suite Gourmet Burger & Fries',
    category: 'in_room',
    description: 'Flame-grilled prime beef patty, melted cheddar, caramelized onions, homemade chili mayo, served hot to your suite.',
    price: 'MWK 22,000',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    tags: ['24/7 Room Delivery']
  }
];

export const LANDMARKS: Landmark[] = [
  {
    id: 'l1',
    name: 'Reserve Bank of Malawi (Mzuzu Branch)',
    category: 'dining',
    distance: '1.2 km',
    travelTime: '3 min drive / 12 min walk',
    description: 'Prominent financial landmark located nearby in Mzuzu CBD.',
    lat: 42,
    lng: 38
  },
  {
    id: 'l2',
    name: 'National Bank of Malawi (Mzuzu)',
    category: 'dining',
    distance: '1.5 km',
    travelTime: '4 min drive',
    description: 'Major banking branch and financial center in central Mzuzu.',
    lat: 38,
    lng: 50
  },
  {
    id: 'l3',
    name: 'Shoprite Mall Mzuzu',
    category: 'shopping',
    distance: '800 meters',
    travelTime: '2 min drive / 8 min walk',
    description: 'Main retail hub featuring supermarkets, pharmacies, cafes, and ATMs.',
    lat: 55,
    lng: 62
  },
  {
    id: 'l4',
    name: 'Mzuzu Town Center CBD',
    category: 'dining',
    distance: '1.0 km',
    travelTime: '3 min drive',
    description: 'The vibrant heart of Mzuzu commercial district and local crafts market.',
    lat: 48,
    lng: 45
  },
  {
    id: 'l5',
    name: 'Mzuzu University (MZUNI)',
    category: 'culture',
    distance: '4.5 km',
    travelTime: '8 min drive',
    description: 'Prestigious public university campus in Northern Malawi.',
    lat: 25,
    lng: 78
  },
  {
    id: 'l6',
    name: 'Mzuzu Central Hospital',
    category: 'transport',
    distance: '2.8 km',
    travelTime: '5 min drive',
    description: 'Primary referral healthcare medical facility in the Northern Region.',
    lat: 68,
    lng: 30
  },
  {
    id: 'l7',
    name: 'Mzuzu Airport (ZZU)',
    category: 'transport',
    distance: '3.2 km',
    travelTime: '6 min drive',
    description: 'Regional airstrip offering seamless connectivity to Lilongwe and Blantyre.',
    lat: 78,
    lng: 22
  }
];

export const GALLERY_HIGHLIGHTS = [
  {
    title: 'Main Executive Living Lounge',
    subtitle: 'Crisp light aesthetics & plush seating',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    span: 'col-span-12 md:col-span-8'
  },
  {
    title: 'Master Bedroom Suite',
    subtitle: 'Egyptian cotton linens & Mzuzu climate control',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4'
  },
  {
    title: 'Luxury En-Suite Bathroom',
    subtitle: 'Backlit halo mirror & rain shower head',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    span: 'col-span-12 md:col-span-4'
  },
  {
    title: 'Highland Garden Terrace',
    subtitle: 'Relaxation lounge in cool Mzuzu climate',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    span: 'col-span-12 md:col-span-8'
  }
];

