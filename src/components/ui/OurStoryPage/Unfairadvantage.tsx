"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

const imgRectangle70 = "/images/ourstory/advantage.png";

export default function UnfairAdvantage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headingSplit = new SplitType(".ua-heading", {
        types: "lines,words",
      });
      const bodySplit = new SplitType(".ua-body", { types: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".ua-image",
        {
          opacity: 0,
          y: 30,
          scale: 0.96,
          clipPath: "inset(0 0 100% 0 round 15px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          clipPath: "inset(0 0 0% 0 round 15px)",
          duration: 1.05,
        },
      )
        .from(
          headingSplit.lines,
          {
            yPercent: 110,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=0.55",
        )
        .from(
          ".ua-sign",
          {
            y: 16,
            scale: 0.8,
            opacity: 0,
            duration: 0.62,
            ease: "back.out(1.9)",
          },
          "-=0.42",
        )
        .from(
          bodySplit.lines,
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.62,
            ease: "power2.out",
          },
          "-=0.3",
        );

      return () => {
        headingSplit.revert();
        bodySplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pb-10 md:pb-20 pt-10 md:pt-12  px-5 sm:px-10 lg:px-[6%]"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 justify-center items-center">
        {/* Left — image card from Figma */}
        <div className="ua-image relative rounded-[15px] overflow-hidden min-h-125">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgRectangle70}
            alt="If you don't get noticed"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right — text content */}
        <div>
          <h2 className="ua-heading text-[clamp(28px,4vw,60px)] md:text-center text-left font-bold leading-tight tracking-tight text-black">
            Your Unfair Digital
          </h2>
          <span className="ua-sign block font-signature font-normal text-primary text-[clamp(44px,6vw,90px)] leading-none mb-6">
            Advantage.
          </span>
          <p className="ua-body text-[17px] lg:text-[22px] xl:text-[25px] leading-relaxed text-black">
            <span className="font-bold text-[#303439]">
              Our mission is simple:
            </span>{" "}
            transform everyday businesses into premium, untouchable brands. We
            treat your investment like our own. No fake promises, no hidden
            costs. Just transparent communication, hard data, and flawless
            execution.
          </p>
        </div>
      </div>
    </section>
  );
}
