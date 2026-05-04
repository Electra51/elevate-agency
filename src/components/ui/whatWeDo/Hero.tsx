"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { HeroLeftRuler } from "../UIUxpage/HeroLeftRuler";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Text items: stagger up from below ─────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".wd-hero-sub", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".wd-hero-title",
          { y: 40, opacity: 0, duration: 0.75, ease: "power3.out" },
          "-=0.45",
        )
        .from(
          ".wd-hero-badge",
          {
            scale: 0.82,
            opacity: 0,
            duration: 0.55,
            ease: "back.out(1.6)",
          },
          "-=0.4",
        )
        .from(
          ".wd-hero-revenue",
          { y: 36, opacity: 0, duration: 0.75, ease: "power3.out" },
          "-=0.35",
        )
        .from(
          ".wd-hero-desc",
          { y: 24, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4",
        )
        // ── Image: slides in from right ───────────────────────────────
        .from(
          ".wd-hero-img",
          {
            x: 80,
            opacity: 0,
            scale: 0.94,
            duration: 0.95,
            ease: "power3.out",
          },
          0.15,
        )
        // ── Glow: blooms in ───────────────────────────────────────────
        .from(
          ".wd-hero-glow",
          {
            scale: 0.3,
            opacity: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          0.1,
        );

      // ── After entrance: gentle floating loop on the image ─────────
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(imgRef.current, {
            y: -14,
            duration: 2.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1.2,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white pt-22"
    >
      {/* Left ruler — desktop only (top/bottom edge fade) */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:flex lg:items-center z-20 pointer-events-none">
        <div
          className="[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_57%,black_90%,transparent_100%)] mask-[linear-gradient(to_bottom,transparent_0%,black_57%,black_70%,transparent_100%)]"
          aria-hidden
        >
          <HeroLeftRuler />
        </div>
      </div>
      <div className="relative max-w-310 mx-auto pt-0 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-10">
        <div className="absolute top-12 left-6 sm:top-16 sm:left-6 md:top-20 md:left-8 lg:top-20 lg:left-13 xl:top-24 xl:left-0 z-20">
          <div className="flex-1 sm:text-start md:text-center lg:pt-0 xl:pt-16 -ml-2">
            <h2 className="wd-hero-sub text-[24px] sm:text-[24px] md:text-[36px] lg:text-[48px] font-semibold text-white sm:text-black leading-tight text-nowrap">
              Not Just Beautiful Design.
            </h2>

            <h1 className="wd-hero-title text-[34px] sm:text-[44px] md:text-[56px] lg:text-[65px] font-semibold leading-tight text-white sm:text-black text-start md:text-center mt-1">
              We Build
            </h1>

            <div className="wd-hero-badge w-fit sm:mr-auto md:mx-auto bg-primary text-white px-2 sm:px-4 sm:-mt-1 md:-mt-3 text-[21px] sm:text-[21px] md:text-[22px] lg:text-[27px] font-semibold text-start md:text-center">
              Digital Experiences
            </div>

            <h2 className="wd-hero-revenue mt-2 sm:mt-0 text-[27px] sm:text-[32px] md:text-[44px] lg:text-[56px] font-semibold text-start md:text-center text-white sm:text-black leading-tight">
              That Drive{" "}
              <span className="text-white sm:text-primary font-signature italic font-normal">
                Revenue.
              </span>
            </h2>

            <p className="wd-hero-desc text-black text-[15px] sm:text-[16px] leading-5.5 md:text-[17px] lg:text-lg font-medium text-start md:text-center sm:max-w-100 md:max-w-130 lg:max-w-162 sm:px-0 md:px-4 mt-5 sm:mt-5 md:mt-4 lg:mt-7 hidden sm:flex">
              Is your brand just surviving online, or is it dominating? Anyone
              can build a pretty website or a nice logo. We engineer digital
              ecosystems based on user psychology that stop the scroll and turn
              casual visitors into loyal customers.
            </p>
          </div>
        </div>
        {/* ── LEFT — Text ─────────────────────────────────────────── */}

        {/* ── RIGHT — Image ───────────────────────────────────────── */}

        {/* <div className="relative flex justify-start items-end">
          <div className="wd-hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-90 sm:w-120 sm:h-72 md:w-160 md:h-80 lg:w-219 lg:h-71 xl:w-206 xl:h-84 bg-[#4504DF] rounded-[100%] blur-[90px] xl:blur-[60px] opacity-75 z-0 pointer-events-none" />

          <img
            ref={imgRef}
            src="/images/what-we-do/hero-img.png"
            alt="statue"
            className="wd-hero-img relative z-10 max-w-full
                w-88 h-110
                sm:w-125 sm:h-132
                md:w-125 md:h-108
                lg:w-125 lg:h-125
                xl:w-180 xl:h-165 lg:absolute lg:right-0 lg:-top-22"
          />
        </div> */}

        <div
          className="hero-statue relative z-10 mx-0 ml-auto max-w-full
                        w-88 h-110
                        sm:w-125 sm:h-132
                        md:w-125 md:h-108
                        lg:w-125 lg:h-125
                        xl:w-180 xl:h-155"
        >
          <div className="wd-hero-glow absolute top-[31%] left-[56%] -translate-x-1/2 -translate-y-1/2 w-130 h-90 sm:w-120 sm:h-72 md:w-114.75 md:h-80 lg:w-114.75 lg:h-71 xl:w-114.75 xl:h-114.75 bg-[#4504DF] rounded-[100%] blur-[90px] xl:blur-[80px] z-0 pointer-events-none" />
          <Image
            src="/images/what-we-do/hero-img.png"
            alt="statue"
            fill
            className="object-contain object-bottom ml-7"
            style={{
              zIndex: 999,
            }}
            sizes="(max-width: 639px) 352px, (max-width: 767px) 448px, (max-width: 1023px) 528px, (max-width: 1279px) 500px, 620px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
