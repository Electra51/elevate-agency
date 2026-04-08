"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const items = [
  "BRANDING",
  "DESIGN",
  "DEVELOPMENT",
  "Growth",
  "BRANDING",
  "DESIGN",
  "DEVELOPMENT",
  "Growth",
];

const Star = () => (
  <svg
    width="37"
    height="35"
    viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0703 0L22.3361 13.1287H36.1404L24.9725 21.2426L29.2382 34.3713L18.0703 26.2574L6.90239 34.3713L11.1682 21.2426L0.000238419 13.1287H13.8045L18.0703 0Z"
      fill="white"
    />
  </svg>
);

export default function MarqueeBanner() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="w-full bg-primary py-3 overflow-hidden border border-primary"
    >
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-7 px-6">
            <span className="text-white text-[20px] sm:text-[24px] md:text-[30px] tracking-widest font-semibold whitespace-nowrap">
              {item}
            </span>
            <Star />
          </div>
        ))}
      </div>
    </div>
  );
}
