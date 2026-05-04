"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { HeroLeftRuler } from "../UIUxpage/HeroLeftRuler";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  //smooth animation using gsap
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 1,
        },
      });

      // LEFT → Statue
      tl.from(".hero-statue", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })

        .from(
          [".hero-title", ".hero-text", ".hero-btn"],
          {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=1",
        )
        .to(".hero-btn", {
          opacity: 1,
          duration: 0.2,
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="hero relative overflow-hidden bg-white">
      {/* Left ruler — desktop only (top/bottom edge fade) */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:flex lg:items-center z-10 pointer-events-none">
        <div
          className="[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_57%,black_90%,transparent_100%)] mask-[linear-gradient(to_bottom,transparent_0%,black_57%,black_70%,transparent_100%)]"
          aria-hidden
        >
          <HeroLeftRuler />
        </div>
      </div>

      {/* rightside scroll for more  */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10">
        <div className="hidden lg:flex flex-col items-center justify-center gap-2">
          <div className="h-64 w-0.5 bg-black mb-2" />
          <span
            className="text-[14px] tracking-[0.1rem] text-black font-semibold"
            style={{
              writingMode: "sideways-lr",
            }}
          >
            Scroll For More
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl h-full px-6 lg:px-12 pt-12 md:pt-0">
        {/* elevate text Logo */}
        <div className="flex flex-col justify-end items-center sm:items-end md:items-end pt-18 sm:pt-27.5 md:pt-32 lg:pt-38.5 pr-0 md:pr-10 lg:pr-27 xl:pr-45 2xl:pr-0">
          <Image
            src="/images/hero-text.svg"
            alt="Elevate"
            width={700}
            height={180}
            className="hero-title w-86 sm:w-125 md:w-138 z-20 lg:w-189.25 object-contain"
            priority
          />
          {/* text and button content */}
          <div className="flex flex-col items-center lg:items-end sm:items-end md:items-end lg:text-right gap-2 mt-7 mb-10 md:mb-2 md:mt-10 lg:mt-12 relative z-20">
            <p className="hero-text font-black text-black text-[24px] sm:text-3xl md:text-[32px] lg:text-[48px] leading-tight">
              Your Digital experiences
            </p>
            <p className="hero-text font-black text-black text-[24px] sm:text-3xl md:text-[32px] lg:text-[48px] leading-tight">
              that move people
            </p>
            <Link
              href="/contact"
              className="hero-btn mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary hover:bg-linear-to-r hover:from-[#601FF9] hover:to-[#9000FF]  duration-300 text-[14px] sm:text-[16px] transition shadow-lg shadow-violet-200 tracking-wide mr-47! sm:mr-26! md:mr-26! text-nowrap"
            >
              Get a Free Strategy Call
            </Link>
          </div>
        </div>

        {/* left statue */}
        <div className="hero-statue absolute z-10 bottom-0 w-[90%] sm:w-111.75 md:w-109.5 lg:w-136.25 h-68 sm:h-80 lg:h-88.25 xl:h-92.25">
          <Image
            src="/images/hero-left-img.png"
            alt="Statue"
            fill
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 545px"
            className="object-fit object-bottom mt-3.5"
            priority
          />
        </div>
      </div>
    </section>
  );
}
