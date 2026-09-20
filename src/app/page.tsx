import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Neighborhood Listing Platform
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