"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heading = new SplitType(".ph-heading", { types: "lines,words" });
      const body = new SplitType(".ph-body", { types: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".ph-badge", {
        y: 18,
        opacity: 0,
        duration: 0.5,
      });

      tl.from(
        heading.lines,
        {
          yPercent: 120,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.1",
      );

      tl.from(
        ".ph-artists",
        {
          scale: 0.75,
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "back.out(2.5)",
        },
        "-=0.45",
      );

      tl.from(
        body.lines,
        {
          y: 26,
          opacity: 0,
          stagger: 0.08,
          duration: 0.65,
        },
        "-=0.25",
      );

      return () => {
        heading.revert();
        body.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pb-12 md:pb-17 pt-10 md:pt-12 px-5 sm:px-10 text-center"
    >
      <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <span className="ph-badge mb-7 inline-flex items-center rounded-[13px] border border-black px-4 py-2 text-[16px] font-medium uppercase tracking-wide text-black">
          Our Philosophy (The Mindset)
        </span>

        {/* Heading */}
        <h2 className="ph-heading mt-6 text-[clamp(28px,4vw,54px)] font-bold leading-tight tracking-tight text-[#0D0B1A]">
          <span className="block">Engineers of Growth,</span>
          <span className="block">
            Not Just{" "}
            <span className="ph-artists inline-block font-signature font-normal text-primary text-[clamp(44px,7vw,90px)] leading-[0.75]">
              Artists.
            </span>
          </span>
        </h2>

        {/* Body */}
        <p className="ph-body mx-auto mt-8 max-w-4xl text-[16px] md:text-[17px] lg:text-[25px] leading-relaxed text-black text-center">
          We didn&apos;t start this company to win art awards. We are
          tech-driven problem solvers. We believe every pixel, every line of
          code, and every marketing campaign must have one clear goal: making
          your business more money. If it doesn&apos;t sell, it&apos;s not good
          design.
        </p>
      </div>
    </section>
  );
}
