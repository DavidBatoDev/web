import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import {
  travelReqMetadata,
  travelReqHero,
  travelReqBreadcrumbs,
  travelReqWidgetImage,
} from "@/data/travelRequirements";

export const metadata: Metadata = travelReqMetadata;

/* ---------- Icons ---------- */

function ChevronRightSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Sections ---------- */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-7xl px-4 py-3 md:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1">
        {travelReqBreadcrumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <span className="text-midnight/40">
                <ChevronRightSmall />
              </span>
            )}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="font-body text-b4-mobile text-midnight underline transition-colors hover:text-crimson-red md:text-b4-desktop"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="font-body text-b4-mobile text-midnight md:text-b4-desktop">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function TitleSection() {
  return (
    <div className="bg-white py-10 text-center md:py-12">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h1 className="mb-4 font-display text-h1-mobile text-midnight md:text-h1-desktop">
          {travelReqHero.title}
        </h1>
        <p className="font-body text-b2-mobile text-dark-gray md:text-b2-desktop">
          {travelReqHero.subtitle}
        </p>
      </div>
    </div>
  );
}

function WidgetSection() {
  return (
    <div className="bg-white pb-12 md:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={travelReqWidgetImage}
            alt="Interactive travel and visa requirements map powered by Sherpa"
            width={1200}
            height={790}
            className="w-full h-auto"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function TravelRequirementsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-light-grey">
        <Breadcrumbs />
        <TitleSection />
        <WidgetSection />
      </main>
      <Footer />
    </>
  );
}
