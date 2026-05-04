"use client";

import MarqueeBanner from "@/components/common/MarqueeBanner";
import { HeroLeftRuler } from "@/components/ui/UIUxpage/HeroLeftRuler";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      // Statue (cinematic entrance)
      tl.from(".hero-statue", {
        y: 80,
        scale: 0.95,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.4,
      })

        // Titles (kinetic typography style)
        .from(
          [".hero-title", ".hero-signature"],
          {
            y: 40,
            opacity: 0,
            filter: "blur(6px)",
            stagger: 0.15,
            duration: 1,
          },
          "-=1.1",
        )

        // Text card (smooth reveal)
        .from(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
            scale: 0.98,
            filter: "blur(6px)",
            duration: 1,
          },
          "-=0.8",
        )

        // Button (pop effect)
        .from(
          ".hero-btn",
          {
            y: 20,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
          },
          "-=0.6",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="" ref={heroRef}>
        <div className="relative overflow-hidden bg-white pt-22">
          {/* Grid texture */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(96,31,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(96,31,249,0.18)_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_56%_50%_at_50%_50%,black_30%,transparent_80%)]" />

          {/* Purple glow blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-90 sm:w-200 sm:h-72 md:w-160 md:h-80 lg:w-219 lg:h-71 xl:w-300 xl:h-100 bg-[#4504DF] rounded-[100%] blur-[90px] xl:blur-[110px]  z-0 pointer-events-none" />

          {/* Left ruler — desktop only (top/bottom edge fade) */}
          <div className="absolute left-0 top-0 bottom-0 hidden lg:flex lg:items-center z-10 pointer-events-none">
            <div
              className="[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_57%,black_90%,transparent_100%)] mask-[linear-gradient(to_bottom,transparent_0%,black_57%,black_70%,transparent_100%)]"
              aria-hidden
            >
              <HeroLeftRuler />
            </div>
          </div>

          {/* Statue: in-flow so section height follows this + copy above (no min-height on hero shell) */}
          <div
            className="hero-statue relative z-20 mx-0 ml-auto sm:mx-auto max-w-full
                w-88 h-110
                sm:w-125 sm:h-132
                md:w-125 md:h-108
                lg:w-125 lg:h-125
                xl:w-180 xl:h-165"
          >
            <Image
              src="/images/uiux/heroImage.png"
              alt="UI/UX Design"
              fill
              className=" object-contain object-bottom"
              style={{
                zIndex: 999,
              }}
              sizes="(max-width: 639px) 352px, (max-width: 767px) 448px, (max-width: 1023px) 528px, (max-width: 1279px) 500px, 620px"
              priority
            />

            {/* Mobile / tablet: in-flow copy so section height follows content (no min-height on shell) */}
            <div className="absolute left-0 sm:-left-13 top-10 z-20 mx-auto max-w-7xl md:hidden">
              <h1 className="hero-title text-white font-semibold text-[32px] sm:text-[36px] md:text-[60px] leading-[0.95] drop-shadow-md">
                Beyond Beautiful
                <br />
                Screen We
                <br />
                Design for
              </h1>
              <p className="hwdi-sub font-signature text-white text-[46px] sm:text-[56px] md:text-[64px] leading-none -mt-1">
                Conversion
              </p>
            </div>

            {/* Desktop / laptop: overlay (height comes from in-flow statue below) */}
            <div className="pointer-events-none absolute inset-0 z-20 mx-auto hidden max-w-7xl px-4 md:block md:px-12">
              <div className="pointer-events-auto absolute md:-left-25 md:top-31 lg:top-36 lg:-left-42 xl:top-52 xl:-left-34">
                <h1 className="hero-title text-white font-semibold text-[36px] lg:text-[45px] leading-[0.94] drop-shadow-md">
                  Beyond
                  <br />
                  Beautiful
                </h1>
                <p className="hero-signature font-signature text-white text-[54px] xl:text-[60px] leading-none -mt-2">
                  Screens
                </p>
              </div>
              {/* <div className="hero-text -mt-2 w-82.5 rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] p-px xl:w-90">
                <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-5 py-4">
                  <p className="relative z-10 text-[14px] font-medium leading-[1.1] text-[#FDFDFE] xl:text-[15px]">
                    We combine user psychology, hard data, and flawless
                    execution to turn your vision into a high-converting digital
                    asset.
                  </p>
                </div>
              </div> */}
              <div className="pointer-events-auto absolute md:-right-36 md:top-45 lg:-right-64 lg:top-50 xl:-right-63 xl:top-74.5">
                <h2 className="hero-title text-white font-semibold md:text-[35px] xl:text-[45px] leading-[0.95] drop-shadow-md text-center">
                  We Design for
                </h2>
                <p className="hero-signature font-signature text-white text-[54px] xl:text-[60px] leading-none -mt-4 md:pl-10 lg:pl-20">
                  Conversion
                </p>

                <div className="hero-text gradient-border -mt-2 md:w-60 lg:w-80 xl:w-90">
                  <div className="glass-card  px-3 py-2 z-10">
                    <p className="relative z-10 md:text-[12px] lg:text-[14px] font-medium leading-[1.1] tracking-wide text-[#FDFDFE] xl:text-[16px]">
                      {" "}
                      We combine user psychology, hard data, and flawless
                      execution to turn your vision into a high-converting
                      digital asset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MarqueeBanner />
      </section>
    </>
  );
}
