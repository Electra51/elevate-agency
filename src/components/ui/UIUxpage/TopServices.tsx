"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function TopServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".ts-header", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray<HTMLElement>(".ts-card").forEach((card) => {
        const media = card.querySelector(".ts-media");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        });

        tl.from(card, {
          y: 32,
          opacity: 0,
          duration: 0.9,
        });

        if (media) {
          tl.from(
            media,
            {
              y: 26,
              opacity: 0,
              duration: 0.9,
            },
            "-=0.55",
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="ts-header flex flex-col items-center justify-center text-center mb-10 sm:mb-14 md:mb-14 lg:mb-22">
          <div className="text-[34px] sm:text-[44px] md:text-[56px] text-primary flex justify-center items-center gap-1.5">
            <p>Our</p>{" "}
            <p className="font-signature sm:text-[46px] md:text-[58px]">
              Expertise
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-8 lg:gap-14">
          {/* ── CARD 1 · THE BRAIN ─────────────────────────────────── */}
          <div className="ts-card relative rounded-[15px] bg-[#CECECE]/15 grid grid-cols-1 md:grid-cols-2">
            {/* Text — left */}
            <div className="relative z-10 flex flex-col justify-center px-5 pt-7 pb-3 sm:px-8 sm:pt-10 sm:pb-4 md:px-6 md:py-10 lg:px-16 lg:py-14">
              <span className="mb-4 sm:mb-5 inline-flex w-fit items-center rounded-[11px] md:rounded-[11px] lg:rounded-[13px] border border-primary px-3 py-1 text-[12px] sm:text-[13px] md:text-[12px] lg:text-[13px] font-medium uppercase tracking-widest text-primary">
                (The Brain)
              </span>
              <h3 className="text-[26px] sm:text-[34px] md:text-[34px] lg:text-[40px] font-semibold leading-[96%] tracking-wide mb-4 sm:mb-6">
                UX Research &amp;
                <br />
                Strategy
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[14px] lg:text-[17px] max-w-lg md:max-w-lg lg:max-w-md font-medium pr-1 md:pr-3">
                We don&apos;t guess what your users want. We study their
                behavior and map out a smooth, frustration-free journey from the
                first click to the final checkout.
              </p>
            </div>

            {/* Image — right on desktop, below text on mobile */}
            <div className="ts-media relative h-52 sm:h-80 md:h-auto">
              <Image
                src="/images/uiux/the-brain.png"
                alt="The Brain"
                width={560}
                height={460}
                className="absolute bottom-0 right-0 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* ── CARD 2 · THE BLUEPRINT ─────────────────────────────── */}
          <div className="ts-card relative rounded-[15px] bg-[#CECECE]/15 grid grid-cols-1 md:grid-cols-2 mt-12">
            {/* Image — left on desktop, below text on mobile (order-2) */}
            <div className="ts-media order-2 md:order-1 relative h-68 sm:h-120 md:h-auto">
              <Image
                src="/images/uiux/the-blueprint.png"
                alt="The Blueprint"
                width={560}
                height={460}
                className="absolute bottom-0 left-0 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Text — right on desktop (order-1 on mobile = shown first) */}
            <div className="order-1 md:order-2 relative z-10 flex flex-col justify-end  px-5 pt-7 pb-3 sm:px-8 sm:pt-10 sm:pb-4 md:px-6 md:py-10 lg:px-16 lg:py-14 md:items-end">
              <span className="mb-4 sm:mb-5 inline-flex w-fit items-center rounded-[11px] md:rounded-[11px] lg:rounded-[13px] border border-primary px-3 py-1 text-[12px] sm:text-[13px] md:text-[12px] lg:text-[13px] font-medium uppercase tracking-widest text-primary">
                (The Blueprint)
              </span>
              <h3 className="text-[26px] sm:text-[34px] md:text-[34px] lg:text-[40px]  font-semibold leading-[96%] tracking-wide mb-4 sm:mb-6 md:text-right">
                Wireframing &amp;
                <br />
                Prototyping
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[14px] lg:text-[17px] max-w-lg md:max-w-lg lg:max-w-md font-medium pr-1 md:pr-3 md:text-right">
                We build the skeleton first. We test layouts and logic to ensure
                the website or app makes perfect sense before we even touch the
                colors.
              </p>
            </div>
          </div>

          {/* ── CARD 3 · THE LOCK ──────────────────────────────────── */}
          <div className="ts-card relative rounded-[15px] bg-[#CECECE]/15 grid grid-cols-1 md:grid-cols-2 mt-12">
            {/* Text — left */}
            <div className="relative z-10 flex flex-col justify-center  px-5 pt-7 pb-3 sm:px-8 sm:pt-10 sm:pb-4 md:px-6 md:py-10 lg:px-16 lg:py-14">
              <span className="mb-4 sm:mb-5 inline-flex w-fit items-center rounded-[11px] md:rounded-[11px] lg:rounded-[13px] border border-primary px-3 py-1 text-[12px] sm:text-[13px] md:text-[12px] lg:text-[13px] font-medium uppercase tracking-widest text-primary">
                (THE LOCK)
              </span>
              <h3 className="text-[26px] sm:text-[34px] md:text-[34px] lg:text-[40px]  font-semibold leading-[96%] tracking-wide mb-4 sm:mb-6">
                Premium UI
                <br />
                Design
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[14px] lg:text-[17px] max-w-lg md:max-w-lg lg:max-w-md  font-medium pr-1 md:pr-3">
                Once the logic is perfect, we bring it to life. We design
                modern, pixel-perfect interfaces that instantly build trust and
                make your brand look like an industry leader.
              </p>
            </div>

            {/* Image — right on desktop, below text on mobile */}
            <div className="ts-media relative h-68 sm:h-120 md:h-auto">
              <Image
                src="/images/uiux/the-lock.png"
                alt="The Lock"
                width={560}
                height={460}
                className="absolute bottom-0 right-0 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
