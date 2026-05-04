"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { devGalleryColumns } from "@/data/travelWithDev";

// seq 2, 5, 7, 11 → door slides right; everything else → door slides down
const DOOR_RIGHT = new Set([2, 5, 7, 11]);

export default function TripMomentsGallery() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex gap-2 sm:gap-2.5">
      {/* Sentinel at 45% height — fires when middle row enters viewport */}
      <div
        ref={triggerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0"
        style={{ top: "45%", height: 1 }}
      />

      {devGalleryColumns.map((col, ci) => (
        <div key={ci} className="flex flex-1 flex-col gap-2 sm:gap-2.5">
          {col.map((item, ii) => {
            const doorAnim = DOOR_RIGHT.has(item.seq)
              ? "gallery-door-right"
              : "gallery-door-down";

            return (
              <div
                key={`${ci}-${ii}`}
                className={[
                  "relative w-full overflow-hidden rounded-md",
                  item.size === "tall" ? "aspect-308/397" : "aspect-308/199",
                ].join(" ")}
              >
                {item.type === "photo" && item.src && (
                  <Image
                    src={item.src}
                    alt={item.alt ?? "Trip moment"}
                    fill
                    sizes="(max-width: 640px) 25vw, 300px"
                    className="object-cover"
                  />
                )}

                {item.type === "video" && item.src && (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}

                {item.type === "placeholder" && (
                  <div className="absolute inset-0 bg-grey/15" />
                )}

                {/* Sliding-door overlay — covers image until user scrolls here */}
                <div
                  className="absolute inset-0 bg-light-grey"
                  style={
                    started
                      ? { animation: `${doorAnim} 13s ease-in-out infinite` }
                      : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
