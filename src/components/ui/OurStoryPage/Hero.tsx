"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 1,
        },
      });

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
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white h-166 sm:h-186 md:h-152 lg:h-195.25"
    >
      {/* ── Layer 1: Grid texture ── */}
      {/* ── Layer 1: Grid texture — center visible, edges fade ── */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(96,31,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(96,31,249,0.18)_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_80%)]" />

      {/* ── Layer 2: Center blur glow #4504DF ── */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] sm:w-[640px] sm:h-[380px] lg:w-[820px] lg:h-[420px] bg-[#4504DF] rounded-full blur-[160px] opacity-40 z-0 pointer-events-none" /> */}

      <div
        className="absolute top-1/2 left-1/2 
-translate-x-1/2 -translate-y-1/2 
w-120 h-80 
sm:w-160 sm:h-95 
lg:w-219 lg:h-96 
2xl:w-275 2xl:h-96 
bg-[#4504DF]
rounded-[100%] 
blur-[90px] 
opacity-80
z-10 pointer-events-none"
      />
      {/* ── Left ruler ── */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:flex lg:items-center z-10">
        <Image
          src="/images/left.svg"
          alt=""
          width={79}
          height={373}
          className="h-93.25 w-19.75 object-top"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl h-full px-6 lg:px-12 relative z-10">
        {/* ── Text content: title + description box ── */}
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 sm:px-10 md:px-16 lg:px-24">
          {/* Heading */}
          <h1 className="hero-title text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight text-center mb-5 lg:mb-7 drop-shadow-md">
            We Were Tired of Mediocre
            <br />
            So We Built Elevate.
          </h1>

          {/* ── Description box ──
              Border  : p-px wrapper with left→right gradient #FDFDFE → #601FF9
              Fill    : inner bg linear-gradient 15deg #FFFFFF → #601FF9
              Texture : inner grid overlay
          ── */}
          <div className="hero-text p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] max-w-sm mx-auto lg:mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-5 py-4">
              {/* linear-gradient(8deg, #ffffffad -49%, #601ff9 100%) */}
              {/* Inner grid texture layer */}
              <div className="absolute inset-0 rounded-xl" />
              <p className="relative z-10 text-[13px] sm:text-base font-medium text-[#FDFDFE] text-center leading-4 px-2">
                We saw too many businesses burning money on dead-end websites
                and random &ldquo;boosting&rdquo; agencies that delivered zero
                results. We decided it was time to build a digital partner that
                actually cares about your profit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-7xl h-full px-6 lg:px-12 relative z-10">
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6 sm:px-10 md:px-16 lg:px-24">
   
          <h1 className="hero-title text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight text-center mb-5 lg:mb-7 drop-shadow-md">
            We Were Tired of Mediocre
            <br />
            So We Built Elevate.
          </h1>

        
          <div className="hero-text p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] max-w-[340px] mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(15deg,#FFFFFF_0%,#601FF9_100%)] px-5 py-4">
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

              <p className="relative z-10 text-[13px] sm:text-sm text-gray-700 text-center leading-relaxed">
                We saw too many businesses burning money on dead-end websites
                and random “boosting” agencies that delivered zero results. We
                decided it was time to build a digital partner that actually
                cares about your profit.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* ── Statue ── */}
      <div className="hero-statue absolute z-10 bottom-0 right-0 w-78 sm:w-111.75 md:w-109.5 lg:w-100.75 h-65 sm:h-80 lg:h-137.25">
        <Image
          src="/images/ourstory/heroImage.png"
          alt="Statue"
          fill
          priority
        />
      </div>
    </section>
  );
}
