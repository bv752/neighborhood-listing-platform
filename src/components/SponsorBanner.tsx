import { Sponsor } from "@/types";

export function SponsorBanner({ sponsor }: { sponsor: Sponsor }) {
  return (
    <aside
      aria-label="Sponsored Content"
      className="border-2 border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold uppercase tracking-wider bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 px-2 py-1 rounded">
          Sponsored
        </span>
        <div>
          <h2 className="font-semibold text-base">{sponsor.businessName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{sponsor.tagline}</p>
        </div>
      </div>
      <a
        href={sponsor.ctaUrl}
        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors shrink-0"
        aria-label={`Visit ${sponsor.businessName} - ${sponsor.ctaText}`}
      >
        {sponsor.ctaText}
      </a>
    </aside>
  );
}