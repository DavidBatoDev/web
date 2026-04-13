"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Item = { q: string; a: string };

type FaqAccordionProps = {
  items: Item[];
  defaultOpen?: number | null;
};

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

export default function FaqAccordion({ items, defaultOpen = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <dl>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <div className="py-2">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left font-sans text-h6-mobile text-midnight md:text-h6-desktop"
              >
                <span>{item.q}</span>
                <motion.span
                  className="ml-auto shrink-0"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.25, ease: "easeOut" },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: -6 }}
                      animate={{ y: 0 }}
                      exit={{ y: -6 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="pt-2 pb-4 font-body text-b2-mobile text-midnight md:text-b2-desktop"
                    >
                      {item.a}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {i < items.length - 1 && <div className="h-px w-full bg-[#d7d6db]" />}
          </div>
        );
      })}
    </dl>
  );
}
