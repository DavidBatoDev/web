/**
 * Tours registry.
 *
 * Source of truth for every tour the site can render. The dynamic route
 * `app/tours/[slug]/page.tsx` looks up tours here by slug, and
 * `generateStaticParams` uses `getAllTourSlugs()` to prerender each page.
 *
 * To add a new tour:
 *   1. Create `data/<slug>.ts` exporting a `Tour` object (see `philippine-sunrise.ts`).
 *   2. Import it here and add it to the `tours` map keyed by its slug.
 *   3. Drop image assets in `public/tours/<slug>/`.
 */
import type { Tour } from "@/types/tour";
import { philippineSunrise } from "./philippine-sunrise";

// Slug → Tour. Keys must match each tour's `slug` field; the dynamic
// route segment `[slug]` is matched against these keys.
export const tours: Record<string, Tour> = {
  [philippineSunrise.slug]: philippineSunrise,
};

// Returns undefined for unknown slugs so the page can call `notFound()`.
export function getTourBySlug(slug: string): Tour | undefined {
  return tours[slug];
}

// Used by `generateStaticParams` to prerender every tour page at build time.
export function getAllTourSlugs(): string[] {
  return Object.keys(tours);
}

// Used by the `/tours` listing page to render the tour card grid.
export function getAllTours(): Tour[] {
  return Object.values(tours);
}
