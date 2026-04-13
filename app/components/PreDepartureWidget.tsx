"use client";

import { useState } from "react";

/* ---------- Icons ---------- */

function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2.5 14c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function SyringeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M11 2l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M9.5 3.5l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M10 5L6 9l-2 4 4-2 4-4-2-2z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M3 13l1.5-1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M14 8.5L9 5V2.5a1 1 0 0 0-2 0V5L2 8.5v1.5l5-1.5V11l-1.5 1V13L8 12l2.5 1v-1l-1.5-1v-2.5l5 1.5V8.5z" fill="currentColor" />
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

/* ---------- Compact select pill ---------- */

function PillSelect({
  icon,
  value,
  onChange,
  options,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  label: string;
}) {
  return (
    <div className="relative inline-flex items-center gap-1.5 rounded border border-grey/30 bg-white px-3 py-2 text-midnight">
      <span className="shrink-0">{icon}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="appearance-none bg-transparent font-body text-b4-mobile font-medium text-midnight outline-none md:text-b4-desktop"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none shrink-0 text-midnight/60">
        <ChevronDown />
      </span>
    </div>
  );
}

/* ---------- Constants ---------- */

const passportOptions = [
  { value: "AUS", label: "AUS" },
  { value: "CAN", label: "CAN" },
  { value: "GBR", label: "GBR" },
  { value: "NZL", label: "NZL" },
  { value: "PHL", label: "PHL" },
  { value: "SGP", label: "SGP" },
  { value: "USA", label: "USA" },
];

const covidOptions = [
  { value: "vaccinated", label: "COVID-19 Vaccinated" },
  { value: "not-vaccinated", label: "Not Vaccinated" },
];

const tripTypeOptions = [
  { value: "round", label: "Round Trip" },
  { value: "one-way", label: "One Way" },
];

/* ---------- Widget ---------- */

export default function PreDepartureWidget() {
  const [passport, setPassport] = useState("CAN");
  const [covid, setCovid] = useState("vaccinated");
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="overflow-hidden rounded-md border border-grey/20 bg-white">
      {/* Inner container */}
      <div className="p-5 md:p-6">
        <p className="mb-4 font-body text-b2-mobile font-semibold text-midnight md:text-b2-desktop">
          Travel and visa requirements
        </p>

        {/* Row 1: passport + covid */}
        <div className="mb-3 flex flex-wrap gap-2">
          <PillSelect
            icon={<PersonIcon />}
            value={passport}
            onChange={setPassport}
            options={passportOptions}
            label="Passport country"
          />
          <PillSelect
            icon={<SyringeIcon />}
            value={covid}
            onChange={setCovid}
            options={covidOptions}
            label="COVID-19 vaccination status"
          />
        </div>

        {/* Row 2: trip type */}
        <div className="mb-5">
          <PillSelect
            icon={<PlaneIcon />}
            value={tripType}
            onChange={setTripType}
            options={tripTypeOptions}
            label="Trip type"
          />
        </div>

        {/* Where from */}
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Where from?"
          className="mb-3 w-full rounded border border-grey/30 px-4 py-3 font-body text-b4-mobile text-midnight placeholder:text-dark-gray/50 outline-none transition-colors focus:border-midnight md:text-b4-desktop"
        />

        {/* Where to */}
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Where to?"
          className="mb-3 w-full rounded border border-grey/30 px-4 py-3 font-body text-b4-mobile text-midnight placeholder:text-dark-gray/50 outline-none transition-colors focus:border-midnight md:text-b4-desktop"
        />

        {/* Dates */}
        <div className="mb-4 flex gap-3">
          <div className="flex flex-1 items-center gap-3 rounded border border-grey/30 px-4 py-3">
            <span className="shrink-0 font-body text-b4-mobile text-dark-gray/70 md:text-b4-desktop">
              Depart
            </span>
            <input
              type="date"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className="flex-1 bg-transparent font-body text-b4-mobile font-medium text-midnight outline-none md:text-b4-desktop"
            />
          </div>
          {tripType === "round" && (
            <div className="flex flex-1 items-center gap-3 rounded border border-grey/30 px-4 py-3">
              <span className="shrink-0 font-body text-b4-mobile text-dark-gray/70 md:text-b4-desktop">
                Return
              </span>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="flex-1 bg-transparent font-body text-b4-mobile font-medium text-midnight outline-none md:text-b4-desktop"
              />
            </div>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          className="w-full rounded bg-midnight py-4 font-body text-b4-mobile font-semibold text-white transition-colors hover:bg-midnight/80 md:text-b4-desktop"
        >
          See requirements
        </button>
      </div>

      {/* Attribution */}
      <div className="flex justify-end border-t border-grey/10 px-5 py-2">
        <span className="font-body text-[11px] text-dark-gray/50">
          by{" "}
          <span className="font-sans font-bold text-dark-gray/70">sherpa°</span>
        </span>
      </div>
    </div>
  );
}
