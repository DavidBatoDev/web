"use client";

import { useState } from "react";
import { travelReqLegend, passportCountries } from "@/data/travelRequirements";

/* ---------- Icons ---------- */

function PassportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M4.5 13c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ---------- Select ---------- */

function FilterSelect({
  icon,
  value,
  onChange,
  options,
  placeholder,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <div className="relative flex min-w-0 flex-1 items-center gap-2 rounded-sm border border-grey/40 bg-white px-3 py-2.5">
      <span className="shrink-0 text-midnight/50">{icon}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-transparent font-body text-b4-mobile text-midnight outline-none md:text-b4-desktop"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none shrink-0 text-midnight/50">
        <ChevronDown />
      </span>
    </div>
  );
}

/* ---------- World Map (SVG placeholder styled to match Sherpa) ---------- */

function WorldMap() {
  return (
    <div className="relative w-full overflow-hidden rounded-sm border border-grey/20 bg-[#cce5f0]" style={{ aspectRatio: "16/7" }}>
      {/* Simplified continent shapes */}
      <svg
        viewBox="0 0 1000 440"
        className="absolute inset-0 size-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* North America */}
        <path
          d="M80 60 L200 55 L230 80 L240 120 L220 160 L200 200 L170 220 L150 240 L120 230 L100 200 L80 180 L70 140 L75 100 Z"
          fill="#22a06b"
          opacity="0.85"
        />
        {/* Central America / Caribbean */}
        <path
          d="M150 240 L185 250 L195 270 L180 280 L160 275 Z"
          fill="#b3d44f"
          opacity="0.85"
        />
        {/* South America */}
        <path
          d="M160 290 L220 280 L260 300 L275 360 L260 410 L230 430 L200 425 L175 400 L155 360 L145 320 Z"
          fill="#22a06b"
          opacity="0.85"
        />
        {/* Europe */}
        <path
          d="M420 50 L490 45 L510 65 L505 100 L485 115 L460 120 L440 110 L420 90 Z"
          fill="#b3d44f"
          opacity="0.85"
        />
        {/* Africa */}
        <path
          d="M430 140 L500 135 L530 160 L540 220 L530 290 L510 330 L480 340 L450 330 L425 300 L415 240 L420 180 Z"
          fill="#f5a623"
          opacity="0.85"
        />
        {/* Russia / Central Asia */}
        <path
          d="M510 40 L700 30 L750 55 L760 90 L730 100 L680 95 L620 100 L570 95 L520 80 Z"
          fill="#b3d44f"
          opacity="0.85"
        />
        {/* Middle East */}
        <path
          d="M520 120 L590 115 L610 140 L600 175 L570 185 L535 175 L515 155 Z"
          fill="#4a90d9"
          opacity="0.85"
        />
        {/* South Asia */}
        <path
          d="M610 130 L680 125 L700 155 L695 195 L670 215 L640 210 L615 185 L605 155 Z"
          fill="#f5a623"
          opacity="0.85"
        />
        {/* Southeast Asia */}
        <path
          d="M700 155 L760 145 L790 165 L795 200 L775 220 L745 225 L715 210 L700 190 Z"
          fill="#22a06b"
          opacity="0.85"
        />
        {/* China / East Asia */}
        <path
          d="M680 80 L780 70 L820 90 L825 140 L800 160 L760 155 L720 145 L690 130 L680 105 Z"
          fill="#b3d44f"
          opacity="0.85"
        />
        {/* Japan */}
        <path
          d="M840 95 L860 90 L870 110 L855 125 L840 115 Z"
          fill="#22a06b"
          opacity="0.85"
        />
        {/* Australia */}
        <path
          d="M750 300 L850 290 L890 310 L895 360 L875 395 L840 405 L800 400 L765 375 L748 340 Z"
          fill="#22a06b"
          opacity="0.85"
        />
        {/* New Zealand */}
        <path
          d="M910 375 L925 365 L935 380 L928 400 L912 395 Z"
          fill="#22a06b"
          opacity="0.85"
        />
      </svg>

      {/* Sherpa attribution */}
      <div className="absolute bottom-2 right-3 flex items-center gap-1">
        <span className="font-body text-[10px] text-midnight/50">powered by</span>
        <span className="font-sans font-bold text-[11px] text-midnight/70">sherpa°</span>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-8 right-3 flex flex-col overflow-hidden rounded border border-grey/30 bg-white shadow-xsmall">
        <button className="flex size-6 items-center justify-center font-body text-sm text-midnight/70 hover:bg-light-grey" aria-label="Zoom in">+</button>
        <div className="h-px w-full bg-grey/20" />
        <button className="flex size-6 items-center justify-center font-body text-sm text-midnight/70 hover:bg-light-grey" aria-label="Zoom out">−</button>
      </div>
    </div>
  );
}

/* ---------- Main widget ---------- */

export default function SherpaWidget() {
  const [passport, setPassport] = useState("US");
  const [location, setLocation] = useState("US");
  const [destination, setDestination] = useState("");
  const [vaccinated, setVaccinated] = useState(true);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-6 pb-12 md:px-8 md:pb-16">
      <div className="overflow-hidden rounded-lg border border-grey/20 bg-white shadow-xsmall">

        {/* Filter bar */}
        <div className="flex flex-col gap-3 border-b border-grey/20 p-4 md:flex-row md:items-center md:gap-4 md:p-5">
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:gap-3">
            <FilterSelect
              icon={<PassportIcon />}
              value={passport}
              onChange={setPassport}
              options={passportCountries}
              placeholder="Passport country"
            />
            <FilterSelect
              icon={<LocationIcon />}
              value={location}
              onChange={setLocation}
              options={passportCountries}
              placeholder="Current location"
            />
            <div className="relative flex min-w-0 flex-1 items-center gap-2 rounded-sm border border-grey/40 bg-white px-3 py-2.5">
              <span className="shrink-0 text-midnight/50"><SearchIcon /></span>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Destination"
                className="w-full bg-transparent font-body text-b4-mobile text-midnight outline-none placeholder:text-midnight/40 md:text-b4-desktop"
              />
            </div>
          </div>

          {/* Covid toggle */}
          <div className="flex shrink-0 flex-col gap-1">
            <span className="font-body text-[11px] text-midnight/60">Covid-19 Vaccinated?</span>
            <div className="flex items-center gap-2">
              <span className="font-body text-b4-mobile text-midnight/60">No</span>
              <button
                role="switch"
                aria-checked={vaccinated}
                onClick={() => setVaccinated(!vaccinated)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${
                  vaccinated ? "bg-crimson-red" : "bg-grey/40"
                }`}
              >
                <span
                  className={`inline-block size-4 translate-x-0.5 rounded-full bg-white shadow transition-transform duration-200 ${
                    vaccinated ? "translate-x-4" : ""
                  }`}
                />
              </button>
              <span className="font-body text-b4-mobile text-midnight/60">Yes</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="p-4 md:p-5">
          <WorldMap />
        </div>

        {/* Legend */}
        <div className="border-t border-grey/20 px-4 pb-6 pt-4 md:px-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-sans font-bold text-b4-mobile text-midnight md:text-b4-desktop">
              Map legend
            </span>
            <span className="flex items-center gap-1 font-body text-b4-mobile text-midnight md:text-b4-desktop">
              <PinIcon />
              Current location
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {travelReqLegend.map((item) => (
              <div key={item.id} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="flex size-6 shrink-0 items-center justify-center rounded font-body text-[11px] font-bold text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.count ?? ""}
                  </span>
                  <span className="font-body text-b4-mobile font-bold text-midnight underline md:text-b4-desktop">
                    {item.label}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0 text-midnight/50">
                    <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-body text-[12px] leading-relaxed text-dark-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
