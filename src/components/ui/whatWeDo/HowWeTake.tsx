"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const img05551 = "/images/what-we-do/precision.png";
const img0111 = "/images/what-we-do/conversion.png";
const img06661 = "/images/what-we-do/data-backed.png";

const cards = [
  {
    title: "Precision Targeting",
    subtitle: "Attract the Right Eyes:",
    description:
      "We don't pay for empty clicks. Through data-backed targeting, we place your brand directly in front of an audience actively looking for exactly what you offer.",
    image: img05551,
    imgContainerClass: "bottom-0 right-0 h-[64%] sm:h-[62%] md:h-[54%]",
    imgClass: "w-full h-full object-contain object-left-bottom",
    desktopOffset: "md:mt-[131px]",
  },
  {
    title: "The Conversion Experience",
    subtitle: "Seamless Conversion Journey:",
    description:
      "Traffic means nothing if your digital storefront creates friction. We engineer intuitive layouts and compelling user experiences that naturally guide visitors straight to the checkout line.",
    image: img0111,
    imgContainerClass: "bottom-0 right-0 h-[85%] sm:h-[68%] md:h-[55%]",
    imgClass: "w-full h-full object-contain object-right-bottom",
    desktopOffset: "md:mt-[66px]",
  },
  {
    title: "Data-Backed Scaling",
    subtitle: "Scale with Data:",
    description:
      "Marketing isn't guesswork. We rigorously analyze user behavior and campaign performance to double down on what works, multiplying your ROI and turning one-time buyers into loyal advocates.",
    image: img06661,
    imgContainerClass: "bottom-0 left-0 right-0 h-[80%] sm:h-[65%] md:h-[57%]",
    imgClass: "w-full h-full object-contain object-right-bottom",
    desktopOffset: "md:mt-0",
  },
];

export default function HowWeTake() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Section header: slides up ──────────────────────────────────
      gsap.from(".ht-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ht-header",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // ── Cards: stagger up + scale in ──────────────────────────────
      gsap.from(".ht-card", {
        y: 70,
        opacity: 0,
        scale: 0.93,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ht-cards",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 md:px-6 lg:px-14 xl:px-16 py-10 sm:py-14 md:py-15 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="ht-header mb-3 sm:mb-0">
        <h2 className="text-[24px] sm:text-[28px] md:text-[40px] font-black text-[#0D0B1A] leading-tight">
          How We Take
        </h2>
        <p className="text-[17px] sm:text-[20px] md:text-[28px] font-semibold text-primary flex items-center gap-2 flex-wrap">
          Your{" "}
          <span className="font-signature text-primary text-[22px] sm:text-[26px] md:text-[55px] leading-none font-normal">
            Brand
          </span>{" "}
          to the Next Level
        </p>
      </div>

      {/* Cards */}
      <div className="ht-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:items-start sm:mt-4 md:mt-0 ">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`ht-card ${card.desktopOffset} relative rounded-[15px] overflow-hidden bg-primary min-h-90 sm:min-h-100 md:min-h-126 p-5 sm:p-6 md:p-7 flex flex-col`}
          >
            {/* Card image — z-0, sits behind all overlays */}
            <div
              className={`absolute z-10 pointer-events-none  ${card.imgContainerClass}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className={card.imgClass}
              />
            </div>

            {/* Purple glow blob — z-1, overlays the image */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-90 sm:w-120 sm:h-72 md:w-160 md:h-80 lg:w-219 lg:h-71 xl:w-206 xl:h-84 bg-primary rounded-[100%] blur-[90px] xl:blur-[60px] opacity-75 z-1 pointer-events-none" /> */}
            {/* Subtle glow behind heading — z-1 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 sm:w-72 h-44 sm:h-52 bg-[#7c5cff]/25 rounded-full blur-3xl pointer-events-none z-1" />

            {/* Grid texture — z-2, sits above glow blobs */}
            <div className="absolute inset-0 z-2 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_70%_70%_at_50%_40%,black_30%,transparent_80%)]" />

            {/* Text content — z-10, always on top */}
            <div className="relative z-10 mb-10">
              <h3 className="text-[36px] sm:text-[22px] md:text-[28px] font-bold text-white leading-tight mt-6 sm:mt-0 mb-2 sm:mb-3 lg:pr-0 xl:pr-9">
                {card.title}
              </h3>
              <p className="hidden sm:flex text-[15px] w-70 sm:w-full sm:text-[16px] md:text-[15px] text-white/80 leading-6">
                <span className="font-semibold text-[16px] text-white">
                  {card.subtitle}
                </span>{" "}
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
