/*import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Neighborhood Listing Platform!!!
        </h1>
        <p className="text-lg text-gray-600">
          Connecting communities through verified local listings, community sponsors, and voice-assisted access.
        </p>
      </header>

      <section aria-label="Key Features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="border rounded-lg p-6 shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-2">Neighborhood Listings</h2>
          <p className="text-gray-600 text-sm">
            Browse and post community marketplace offers, services, and local events.
          </p>
        </article>

        <article className="border rounded-lg p-6 shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-2">Neighborhood Sponsors</h2>
          <p className="text-gray-600 text-sm">
            Discover local businesses supporting neighborhood development and initiatives.
          </p>
        </article>

        <article className="border rounded-lg p-6 shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-2">Voice Help</h2>
          <p className="text-gray-600 text-sm">
            Access support and navigate listings hands-free using voice command tools.
          </p>
        </article>
      </section>
    </main>
  );
}
*/

import { Property, Sponsor } from "@/types";
import { PropertyCard } from "@/components/PropertyCard";
import { SponsorBanner } from "@/components/SponsorBanner";
import { SearchFilters } from "@/components/SearchFilters";

const sampleProperties: Property[] = [
  {
    id: "prop-101",
    title: "Modern Maple Loft",
    address: "742 Evergreen Terrace, Downtown",
    price: 2200,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 950,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    imageAlt: "Sunlit open-concept apartment living room with modern hardwood flooring",
  },
  {
    id: "prop-102",
    title: "Oak Ridge Family Residence",
    address: "1204 Pinecone Way, Oak Ridge",
    price: 3400,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1850,
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
    imageAlt: "Two-story suburban house with manicured front lawn and double garage",
  },
  {
    id: "prop-103",
    title: "Harbor View Studio",
    address: "88 Pacific Coast Hwy, Westside",
    price: 1850,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 620,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    imageAlt: "Compact studio space featuring a balcony overlooking ocean harbor waters",
  },
];

const sampleSponsor: Sponsor = {
  id: "spon-001",
  businessName: "Green Valley Cleaners",
  tagline: "Eco-friendly dry cleaning serving local residents since 2012.",
  ctaText: "Get 20% Off First Order",
  ctaUrl: "https://example.com/green-valley-cleaners",
  imageUrl: "/sponsor-logo.png",
  imageAlt: "Green Valley Cleaners eco logo",
};

export default function DirectoryPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Neighborhood Listing Platform
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover verified local listings, community sponsors, and neighborhood services.
        </p>
      </header>

      <SponsorBanner sponsor={sampleSponsor} />

      <SearchFilters />

      <section aria-labelledby="listings-heading" className="space-y-4">
        <h2 id="listings-heading" className="text-2xl font-bold tracking-tight">
          Available Listings
        </h2>

        {/* Grid: 1 col on small, 2 cols on medium, 3 cols on large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}