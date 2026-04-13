import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import { faqsHero, faqCategories, faqsCta, faqsMetadata } from "@/data/faqs";

export const metadata: Metadata = faqsMetadata;

/* ---------- Icon ---------- */

function ChevronDown() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative h-65 overflow-hidden md:h-90">
      <Image
        src={faqsHero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="font-display text-h1-mobile text-white md:text-h1-desktop">
          {faqsHero.title}
        </h1>
      </div>
    </section>
  );
}

function FAQCategories() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <div className="flex flex-col gap-12 md:gap-16">
        {faqCategories.map((cat) => (
          <section key={cat.heading}>
            <h2 className="mb-8 text-center font-sans text-h4-mobile text-midnight md:text-h4-desktop">
              {cat.heading}
            </h2>
            <div className="rounded-lg bg-white px-6 py-4 md:px-10 md:py-6">
              <dl>
                {cat.items.map((item, i) => (
                  <div key={i}>
                    <details className="group py-5" open={i === 0}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-h6-mobile text-midnight md:text-h6-desktop">
                        <span>{item.q}</span>
                        <span className="ml-auto shrink-0 transition-transform duration-300 group-open:rotate-180">
                          <ChevronDown />
                        </span>
                      </summary>
                      {/* Animated answer — grid-rows trick for smooth slide open/close */}
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-open:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="pt-4 pb-1 font-body text-b2-mobile text-midnight md:text-b2-desktop opacity-0 translate-y-1 transition-[opacity,transform] duration-400 delay-75 ease-out group-open:opacity-100 group-open:translate-y-0">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </details>
                    {i < cat.items.length - 1 && (
                      <div className="h-px w-full bg-[#d7d6db]" />
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-16 md:px-8 md:pb-24">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-white px-8 py-16 text-center md:py-20">
        <h2 className="font-display text-h2-mobile text-midnight md:text-h2-desktop">
          {faqsCta.heading}
        </h2>
        <p className="font-body text-b2-mobile text-dark-gray md:text-b2-desktop">
          {faqsCta.body}
        </p>
        <Link
          href={faqsCta.button.href}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-crimson-red px-8 py-3 font-body font-bold text-b2-mobile text-white transition-colors hover:bg-light-red md:px-10 md:text-b2-desktop"
        >
          {faqsCta.button.label}
        </Link>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-light-grey">
        <Hero />
        <FAQCategories />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
