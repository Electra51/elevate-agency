"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Promises = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // ── "Why Are We" — slides up + fades ──────────────────────────
      tl.from(".pm-why", {
        y: 50,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      })

        // ── "Different?" — dramatic scale bloom ───────────────────────
        .from(
          ".pm-different",
          {
            scale: 0.6,
            opacity: 0,
            duration: 1.05,
            ease: "expo.out",
          },
          "-=0.5",
        )

        // ── Body copy — fades up gently ───────────────────────────────
        .from(
          ".pm-body",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.55",
        )

        // ── "Promises" signature — sweeps in from below ───────────────
        .from(
          ".pm-sign",
          {
            y: 40,
            opacity: 0,
            skewX: 4,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.45",
        );

      // ── Background vector: slow parallax drift ───────────────────
      gsap.to(".pm-bg", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      {/* Background decorative vector */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        src="https://www.figma.com/api/mcp/asset/4815a07b-d671-4e92-85b8-e4d6d56ca3a7"
        alt=""
        aria-hidden="true"
        className="pm-bg absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
      /> */}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 flex flex-col items-center justify-center text-center z-10">
        {/* "Why Are We" */}
        <h2
          className="pm-why font-signature text-transparent bg-clip-text bg-linear-to-b from-primary to-white/80 leading-none tracking-wide relative z-30
            text-[38px] sm:text-[52px] md:text-[70px] lg:text-[100px] xl:text-[120px]
            -mb-1 sm:-mb-3 md:-mb-6 lg:-mb-10"
        >
          Why Are We
        </h2>

        {/* "Different?" */}
        <h1
          className="pm-different font-clash font-black text-transparent bg-clip-text bg-linear-to-b from-primary to-white/80 leading-none tracking-tighter relative z-20
            text-[56px] sm:text-[80px] md:text-[110px] lg:text-[160px] xl:text-[220px]"
        >
          Different?
        </h1>

        {/* Body copy */}
        <p
          className="pm-body relative z-10 text-black font-medium leading-5 sm:leading-8 mt-4 sm:mt-6
            text-[14px] sm:text-[16px] md:text-[20px] lg:text-[27px]
            max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
        >
          We engineer your zero-to-scale journey. We don&apos;t chase vanity
          metrics; we build a predictable revenue engine. By analyzing your
          market and buyer psychology, we create a transparent roadmap from
          absolute zero to consistent sales — no guesswork, no false
        </p>

        {/* "Promises" */}
        <p
          className="pm-sign font-signature text-primary leading-none
            text-[44px] sm:text-[58px] md:text-[75px] lg:text-[100px] pb-14"
        >
          Promises
        </p>
      </div>
    </div>
  );
};

export default Promises;
