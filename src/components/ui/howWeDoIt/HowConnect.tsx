"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HowConnect() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // 1. Background orb — scale up from center
      tl.from(".hc-orb", {
        scale: 0.3,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
      })

        // 2. Heading — each word pops from center scale
        .from(
          ".hc-title",
          {
            scale: 0.75,
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          "-=0.7",
        )

        // 3. Paragraph fades up
        .from(
          ".hc-para",
          {
            y: 22,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35",
        )

        // 4. CTA input box rises and snaps into place
        .from(
          ".hc-cta",
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "back.out(1.6)",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mt-8 flex items-center justify-center overflow-hidden px-4 py-16 sm:mt-10 sm:px-6 sm:py-20 md:py-28 lg:py-36"
    >
      {/* BIG SEMI CIRCLE BACKGROUND */}
      <div className="hc-orb pointer-events-none absolute left-1/2  top-0 h-120 w-120 -translate-x-1/2 rounded-full bg-linear-to-b from-[#9000FF]/30 via-[#FCFFAA]/43 to-[#FCFFAA]/10 sm:top-[-10%] sm:h-144 sm:w-xl md:top-[-5%] md:h-176 md:w-176 lg:top-0 lg:h-248 lg:w-248" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-3xl text-center">
        <h2 className="hc-title text-[23px] font-black leading-[1.1] tracking-tight text-[#0D0B1A] sm:text-[38px] md:text-[46px] lg:text-[54px]">
          Transform Your Brand-
          <br />
          Let's Connect
        </h2>

        <p className="hc-para mx-auto mt-4 px-20 md:px-0 max-w-2xl text-[14px] leading-relaxed font-medium text-gray-500 sm:mt-5 sm:text-[15px] md:mt-6 md:text-[17px] lg:text-[18px]">
          Discover how we can help you transform your brand
          <br className="hidden md:block" />
          into a powerful force that resonates with your audience.
        </p>

        {/* INPUT CTA */}
        <div className="hc-cta relative z-50 mx-auto mt-8 flex w-full max-w-sm md:max-w-xl flex-col gap-2 rounded-[15px] bg-[#601FF9] p-2 shadow-xl sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:p-1.5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-[14px] font-medium text-white placeholder-white/70 outline-none sm:rounded-full sm:px-5 sm:py-2.5 sm:text-[15px] md:px-6 md:text-[16px]"
          />
          <button className="flex w-full items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-[13px] font-medium tracking-wide text-[#601FF9] shadow transition-colors hover:bg-gray-100 sm:w-auto sm:rounded-[15px] sm:px-6 sm:py-2.5 md:px-7 md:text-[14px]">
            Submit <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
