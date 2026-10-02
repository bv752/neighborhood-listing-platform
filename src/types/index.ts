export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  imageAlt: string;
}

export interface Sponsor {
  id: string;
  businessName: string;
  tagline: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl: string;
  imageAlt: string;
}