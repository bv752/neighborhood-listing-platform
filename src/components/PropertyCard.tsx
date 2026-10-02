import { Property } from "@/types";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="border rounded-xl overflow-hidden bg-card shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800">
        {/* Replace with next/image in production */}
        <img
          src={property.imageUrl}
          alt={property.imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">{property.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{property.address}</p>
          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
            ${property.price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/mo</span>
          </p>
        </div>

        <ul className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 border-t border-b py-2 my-2">
          <li><strong className="font-semibold text-foreground">{property.bedrooms}</strong> beds</li>
          <li aria-hidden="true">•</li>
          <li><strong className="font-semibold text-foreground">{property.bathrooms}</strong> baths</li>
          <li aria-hidden="true">•</li>
          <li><strong className="font-semibold text-foreground">{property.squareFeet.toLocaleString()}</strong> sqft</li>
        </ul>

        <a
          href={`/listings/${property.id}`}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          aria-label={`View details for ${property.title} at ${property.address}`}
        >
          View Listing Details
        </a>
      </div>
    </article>
  );
}