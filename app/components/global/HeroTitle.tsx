"use client";

import { motion, type Variants } from "framer-motion";

type HeroTitleProps = {
  text: string;
  className?: string;
};

export default function HeroTitle({ text, className = "" }: HeroTitleProps) {
  const lines = text.split("\n");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  const word: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={container}
      aria-label={text.replace(/\n/g, " ")}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((w, wi) => (
            <span key={wi} className="inline-block overflow-hidden align-baseline">
              <motion.span variants={word} className="inline-block will-change-transform">
                {w}
                {wi < line.split(" ").length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
