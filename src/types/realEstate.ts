export interface ImageMetadata {
  id: string;
  url: string;
  thumbnailUrl?: string;
  altText: string;
  caption?: string;
  width: number;
  height: number;
  mimeType: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';
  sizeInBytes: number;
  isPrimary: boolean;
  orderIndex?: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateOrProvince: string;
  postalCode: string;
  country: string;
  neighborhood?: string;
  coordinates: Coordinates;
  formattedAddress: string;
}

export interface PriceDetails {
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | string;
  listingType: 'sale' | 'rent' | 'lease';
  rentalFrequency?: 'monthly' | 'weekly' | 'annually';
  originalAmount?: number;
  pricePerSquareFoot?: number;
  estimatedMonthlyHoaFee?: number;
  annualPropertyTax?: number;
}

export interface PropertyFeatures {
  propertyType: 'single_family' | 'condo' | 'townhouse' | 'multi_family' | 'commercial' | 'land';
  bedrooms: number;
  bathrooms: number;
  halfBathrooms?: number;
  squareFootage: number;
  lotSizeSquareFeet?: number;
  yearBuilt: number;
  hasGarage: boolean;
  garageCapacity?: number;
  hasSwimmingPool: boolean;
  hasCentralAirConditioning: boolean;
  hasHeating: boolean;
  isFurnished: boolean;
  petFriendly?: boolean;
  amenities: string[];
}

export interface Sponsor {
  id: string;
  name: string;
  companyName: string;
  licenseNumber: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'verified_partner';
  email: string;
  phoneNumber: string;
  websiteUrl?: string;
  logo: ImageMetadata;
  avatarImage?: ImageMetadata;
  bio?: string;
  isVerified: boolean;
  rating?: number;
  reviewCount?: number;
  activeListingsCount: number;
  joinedDate: string;
  socialProfiles?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Property {
  id: string;
  title: string;
  slug?: string;
  description: string;
  status: 'active' | 'pending' | 'sold' | 'rented' | 'off_market';
  price: PriceDetails;
  location: Location;
  features: PropertyFeatures;
  primaryImage: ImageMetadata;
  gallery: ImageMetadata[];
  virtualTourUrl?: string;
  sponsorId: string;
  sponsor: Sponsor;
  isFeatured: boolean;
  listingDate: string;
  updatedDate: string;
  mlsNumber?: string;
  tags?: string[];
}
