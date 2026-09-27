"use client";

export function SearchFilters() {
  return (
    <form
      aria-label="Filter Property Listings"
      className="bg-gray-50 dark:bg-gray-900 border rounded-xl p-4 sm:p-6 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="neighborhood-select" className="block text-sm font-medium">
            Neighborhood
          </label>
          <select
            id="neighborhood-select"
            name="neighborhood"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <option value="">All Neighborhoods</option>
            <option value="downtown">Downtown</option>
            <option value="westside">Westside</option>
            <option value="oak-ridge">Oak Ridge</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="price-select" className="block text-sm font-medium">
            Max Monthly Price
          </label>
          <select
            id="price-select"
            name="maxPrice"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <option value="">No Limit</option>
            <option value="1500">$1,500</option>
            <option value="2500">$2,500</option>
            <option value="3500">$3,500</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="property-type-select" className="block text-sm font-medium">
            Property Type
          </label>
          <select
            id="property-type-select"
            name="propertyType"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">Single Family House</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-900 text-white text-sm font-semibold rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}