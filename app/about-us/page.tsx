import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";

export const metadata: Metadata = {
  title: "About Us | I'm Here Travels",
  description:
    "Founded in 2023 by Amer and Shawn from the shores of Siargao Island, Philippines. At I'm Here Travels, we create awesome, fun, and unforgettable travel experiences.",
};

/* ---------- Asset URLs (Figma MCP — temporary placeholder images) ---------- */
const HERO_BG =
  "https://www.figma.com/api/mcp/asset/3d7bb065-b974-453b-8942-448b0b3eaa0d";
const MISSION_IMG =
  "https://www.figma.com/api/mcp/asset/0c696073-b0f2-434a-aa8a-7dbd4cd8bf37";
const VISION_IMG =
  "https://www.figma.com/api/mcp/asset/cecf2109-fb59-4ae4-a9fd-0d3cc1487a4c";
const PURPOSE_BG =
  "https://www.figma.com/api/mcp/asset/fc90f7f2-bcc5-47c6-8d80-57c24c313361";
const TEAM_AMER =
  "https://www.figma.com/api/mcp/asset/7d7e77e9-cae6-4f31-91b2-71a9f123c590";
const TEAM_SHAWN =
  "https://www.figma.com/api/mcp/asset/a3255b6c-f8d7-47c6-9b3f-e8524e4cde79";
const TEAM_KRISTOFFER =
  "https://www.figma.com/api/mcp/asset/7b0ff7d9-1139-4423-af90-66ef5c614165";

/* ---------- Decorative stickers (desktop only) ---------- */
const STICKER_GLOBE = "/Stickers/Print/PNG/Globe/Print_Globe_Green.png";
const STICKER_IMHERE = "/Stickers/Print/PNG/ImHere/Print_ImHereCircle_Red.png";
const STICKER_HEART_ORANGE =
  "/Stickers/Print/PNG/Heart-Circle/Print_Heart_Circle_LightOrange.png";
const STICKER_ASTERISK_YELLOW =
  "/Stickers/Print/PNG/Asterisk/Print_Asterisk_Yellow.png";
const STICKER_FLAG_RED = "/Stickers/Print/PNG/Flag/Print_Flag_Red.png";

/* ---------- Team data ---------- */
const team = [
  {
    name: "Amer Asum",
    role: "Founder",
    image: TEAM_AMER,
    bio: "Driven by his passion for travel and with over 8 years of experience in the travel industry, he started I'm Here Travels in January 2023. He's committed to providing top-notch customer service and is always looking for ways to make the experience even better.",
  },
  {
    name: "Shawn Vincent",
    role: "Co-Founder",
    image: TEAM_SHAWN,
    bio: "With over 8 years of experience in the finance industry with major companies. He brings a wealth of knowledge and business acumen to the company. He combines his financial expertise and passion for travel to create a unique and sustainable travel experience.",
  },
  {
    name: "Kristoffer Lagura",
    role: "Marketing Director",
    image: TEAM_KRISTOFFER,
    bio: "A role he has held since its inception, Kristoffer brings to the table a wealth of knowledge, ideas, and strategies. With over 8 years of experience in the hospitality and sales and marketing, he is all about creating a unique and memorable experience for all travellers.",
  },
];

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative h-[260px] overflow-hidden md:h-[360px]">
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="font-display text-h1-mobile text-white md:text-h1-desktop">
          About our community
        </h1>
      </div>
    </section>
  );
}

function IntroText() {
  return (
    /* full-width so absolutely-positioned stickers can sit at the real edges */
    <section className="relative w-full">
      {/* ── Red ImHere sticker — RIGHT (half off-screen) ── */}
      <div
        className="pointer-events-none absolute -right-16 top-8 hidden size-65 rotate-15 lg:block"
        aria-hidden="true"
      >
        <Image
          src={STICKER_IMHERE}
          alt=""
          width={260}
          height={260}
          className="object-contain"
        />
      </div>

      {/* ── Green Globe sticker — LEFT ── */}
      <div
        className="pointer-events-none absolute -left-8 bottom-0 hidden size-[260px] -rotate-[20deg] lg:block"
        aria-hidden="true"
      >
        <Image
          src={STICKER_GLOBE}
          alt=""
          width={260}
          height={260}
          className="object-contain"
        />
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-12 text-center md:py-16">
        <p className="font-body text-b2-desktop text-midnight md:text-b1">
          Founded in 2023 by Amer and Shawn from the shores of Siargao Island,
          Philippines. At I&apos;m Here Travels, we&apos;re more than just a
          travel company. We create awesome, fun, and unforgettable travel
          experiences like no other!
        </p>
        <p className="mt-6 font-body text-b2-desktop text-midnight md:text-b1">
          We like to blend good vibes with a deep sense of responsibility to the
          community. Every adventure goes beyond exploration; it&apos;s a shared
          experience that leaves a positive impact wherever you go.
        </p>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    /* full-width outer wrapper for sticker positioning */
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {/* Text — left on desktop */}
          <div className="flex flex-col gap-6 md:flex-1">
            <h2 className="font-display text-h1-mobile text-midnight md:text-h1-desktop">
              Our Mission
            </h2>
            <p className="font-body text-b2-desktop text-midnight md:text-b1">
              Our mission is to create unique, fun, and unforgettable travel
              experiences. Working with local communities, we aim to leave a
              trail of meaningful connections and a positive impact wherever we
              go.
            </p>
          </div>

          {/* Image — right on desktop, top on mobile */}
          <div className="relative aspect-3/4 w-full md:order-last md:aspect-auto md:h-140 md:w-120 md:flex-none lg:w-150">
            {/* Clipped image */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                src={MISSION_IMG}
                alt="Local community travel experience"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            {/* ── Orange Heart sticker — on top of photo, bottom-right ── */}
            <div
              className="pointer-events-none absolute -bottom-10 -right-10 hidden size-50 rotate-12 lg:block"
              aria-hidden="true"
            >
              <Image
                src={STICKER_HEART_ORANGE}
                alt=""
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 md:px-8 md:pb-24">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        {/* Image — left on desktop, top on mobile */}
        <div className="relative aspect-3/4 w-full md:aspect-auto md:h-140 md:w-120 md:flex-none lg:w-150">
          {/* Clipped image */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              src={VISION_IMG}
              alt="Vibrant travel community"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </div>

          {/* ── Yellow Asterisk sticker — on top of photo, bottom-left ── */}
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 hidden size-55 -rotate-12 lg:block"
            aria-hidden="true"
          >
            <Image
              src={STICKER_ASTERISK_YELLOW}
              alt=""
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>

        {/* Text — right on desktop */}
        <div className="flex flex-col gap-6 md:flex-1">
          <h2 className="font-display text-h1-mobile text-midnight md:text-h1-desktop">
            Our Vision
          </h2>
          <p className="font-body text-b2-desktop text-midnight md:text-b1">
            We envision a vibrant, inclusive, and responsible travel community.
            A world where travel is not only for new experiences but also a
            positive impact for the places and people it touches.
          </p>
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section className="relative h-100 md:h-150 lg:h-180">
      {/* Background — clipped to section bounds */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={PURPOSE_BG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-white">
        <h2 className="font-display text-h1-mobile md:text-h1-desktop">
          Our Purpose
        </h2>
        <p className="max-w-md font-body text-b2-desktop md:text-b1">
          We connect people with places and create a positive impact together
          here for the community.
        </p>
      </div>

      {/* ── Red Flag sticker — RIGHT ── */}
      <div
        className="pointer-events-none absolute -right-4 bottom-10 hidden size-52 rotate-10 lg:block"
        aria-hidden="true"
      >
        <Image
          src={STICKER_FLAG_RED}
          alt=""
          width={208}
          height={208}
          className="object-contain"
        />
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <h2 className="mb-12 text-center font-display text-h1-mobile text-midnight md:text-h1-desktop">
        Meet our team
      </h2>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {team.map((member) => (
          <li
            key={member.name}
            className="flex flex-col gap-6 rounded-lg bg-white p-8 md:p-10"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative size-35 shrink-0 overflow-hidden rounded-full md:size-45">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-sans font-bold text-h6-mobile text-midnight md:text-h6-desktop">
                  {member.name}
                </p>
                <p className="font-body text-b2-mobile text-dark-gray md:text-b2-desktop">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="font-body text-b2-mobile text-midnight md:text-b2-desktop">
              {member.bio}
            </p>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white px-8 py-12 text-center md:py-16">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-h2-mobile text-midnight md:text-h2-desktop">
            Ready to explore with us?
          </h2>
          <p className="font-body text-b2-mobile text-dark-gray md:text-b2-desktop">
            We&apos;ve got your back!
          </p>
        </div>
        <Link
          href="#contact"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-crimson-red px-8 py-3 font-body font-bold text-b2-mobile text-white transition-colors hover:bg-light-red md:px-10 md:text-b2-desktop"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export default function AboutPage() {
  return (
    <>
      <Header />
      {/* overflow-x-clip prevents horizontal scroll from stickers peeking out */}
      <main className="flex-1 overflow-x-clip bg-light-grey">
        <Hero />
        <IntroText />
        <MissionSection />
        <VisionSection />
        <PurposeSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
