import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import {
  contactMetadata,
  contactHero,
  contactForm,
  contactLinks,
  contactFaqCta,
} from "@/data/contactUs";
import ContactForm from "./ContactForm";

export const metadata: Metadata = contactMetadata;

/* ---------- Icons ---------- */

function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9l11 7.5L25 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M7.5 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap = {
  email: EmailIcon,
};

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative h-65 overflow-hidden md:h-90">
      <Image
        src={contactHero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="font-display text-h1-mobile text-white md:text-h1-desktop">
          {contactHero.title}
        </h1>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {/* Form */}
        <div className="flex-1 rounded-lg bg-white p-8 md:p-10">
          <h2 className="mb-6 font-sans font-bold text-h5-mobile text-midnight md:text-h5-desktop">
            {contactForm.heading}
          </h2>
          <ContactForm />
        </div>

        {/* Get in touch */}
        <div className="rounded-lg bg-white p-8 md:w-96 md:shrink-0 md:p-10">
          <h2 className="mb-6 font-sans font-bold text-h5-mobile text-midnight md:text-h5-desktop">
            {contactLinks.heading}
          </h2>
          <div className="flex flex-col gap-3">
            {contactLinks.items.map((item) => {
              const Icon = iconMap[item.type];
              return (
                <Link
                  key={item.type}
                  href={item.href}
                  className="flex h-16 items-center justify-between rounded-sm border-[1.5px] border-midnight px-6 py-3 text-midnight transition-opacity hover:opacity-80"
                >
                  <span className="flex items-center gap-3">
                    <Icon />
                    <span className="font-body text-b2-mobile md:text-b2-desktop">
                      {item.label}
                    </span>
                  </span>
                  <ChevronRightIcon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqCtaSection() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white px-8 py-16 text-center md:py-20">
        <h2 className="font-display text-h2-mobile text-midnight md:text-h2-desktop">
          {contactFaqCta.heading}
        </h2>
        <p className="font-body text-b2-mobile text-dark-gray md:text-b2-desktop">
          {contactFaqCta.body}
        </p>
        <Link
          href={contactFaqCta.button.href}
          className="inline-flex items-center justify-center rounded-full bg-crimson-red px-8 py-3 font-body font-bold text-b2-mobile text-white transition-colors hover:bg-light-red md:px-10 md:text-b2-desktop"
        >
          {contactFaqCta.button.label}
        </Link>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-light-grey">
        <Hero />
        <ContactSection />
        <FaqCtaSection />
      </main>
      <Footer />
    </>
  );
}
