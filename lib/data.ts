export interface Room {
  id: string
  type: 'Single' | 'Double' | 'Triple'
  price: number
  available: number
  total: number
  amenities: string[]
  description: string
  image: string
}

export interface Facility {
  id: string
  name: string
  icon: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export const rooms: Room[] = [
  {
    id: '1',
    type: 'Single',
    price: 8000,
    available: 5,
    total: 10,
    amenities: ['AC', 'WiFi', 'Attached Bathroom', 'Study Table', 'Wardrobe'],
    description: 'Private single occupancy room with all modern amenities. Perfect for students who prefer privacy and quiet study environment.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    type: 'Double',
    price: 5500,
    available: 8,
    total: 15,
    amenities: ['AC', 'WiFi', 'Attached Bathroom', 'Study Table', 'Wardrobe', 'Shared Space'],
    description: 'Comfortable double sharing room with spacious layout. Great for friends or roommates looking for affordable accommodation.',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    type: 'Triple',
    price: 4000,
    available: 12,
    total: 20,
    amenities: ['Non-AC', 'WiFi', 'Common Bathroom', 'Study Table', 'Wardrobe', 'Shared Space'],
    description: 'Economical triple sharing room ideal for budget-conscious students. Includes all essential facilities for comfortable living.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  },
]

export const facilities: Facility[] = [
  {
    id: '1',
    name: 'Mess Facility',
    icon: '🍽️',
    description: 'Nutritious and delicious meals served three times a day with vegetarian and non-vegetarian options.',
  },
  {
    id: '2',
    name: '24×7 Security',
    icon: '🔒',
    description: 'Round-the-clock security with CCTV surveillance and dedicated security personnel for your safety.',
  },
  {
    id: '3',
    name: 'Study Rooms',
    icon: '📚',
    description: 'Well-lit and quiet study rooms equipped with tables, chairs, and WiFi for focused learning.',
  },
  {
    id: '4',
    name: 'High-speed Internet',
    icon: '📶',
    description: 'Uninterrupted high-speed WiFi connectivity throughout the hostel premises.',
  },
  {
    id: '5',
    name: 'Fully Furnished',
    icon: '🛏️',
    description: 'All rooms come with beds, study tables, chairs, wardrobes, and other essential furniture.',
  },
  {
    id: '6',
    name: 'Laundry Service',
    icon: '👕',
    description: 'Regular laundry service available at affordable rates to keep your clothes clean and fresh.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Engineering Student',
    content: 'Boys Stay Hostel has been my home for 2 years. The facilities are excellent, food is great, and the community is amazing. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Amit Sharma',
    role: 'Medical Student',
    content: 'The study rooms and WiFi are perfect for my needs. The security is top-notch, and I feel safe here. Great value for money!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Business Student',
    content: 'Clean rooms, good food, and friendly staff. The location is convenient, and the hostel management is very responsive to our needs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
]

