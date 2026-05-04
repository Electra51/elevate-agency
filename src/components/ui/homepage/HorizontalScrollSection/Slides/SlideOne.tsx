"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SlideOne() {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".slide-fb-image", {
        y: -14,
        duration: 2.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Panorama (lg+) text is animated from HorizontalScrollSection with SplitType.
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        gsap.fromTo(
          ".slide-text-block",
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          [".slide-title", ".slide-desc"],
          { scale: 0.82, opacity: 0, transformOrigin: "left center" },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.08,
          },
        );

        gsap.fromTo(
          [".slide-desc-bar", ".slide-desc-text"],
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.22,
          },
        );
      }
    }, slideRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={slideRef}
      className="relative w-screen h-screen bg-linear-to-br from-[#6b37e4] to-[#713FE7] overflow-hidden lg:px-20 xl:px-0"
    >
      {/* VECTOR LINE */}

      <Image
        src="/images/brandingImage/Vector1.svg"
        alt="vector"
        width={1439}
        height={472}
        className="vector-static absolute top-82 xl:top-81 2xl:top-53 right-0 w-[120vw] max-w-none opacity-80"
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 87%) 1px, #00000047 1px), linear-gradient(90deg, rgb(255 255 255 / 78%) 1px, #00000038 1px)",
          backgroundSize: "58px 55px",
        }}
      />
      <div className="statue-image absolute bottom-0 right-0 z-30 h-155.5 w-[min(100%,645px)] xl:w-138.5 xl:h-129.25 2xl:w-172.5 2xl:h-182.5">
        <Image
          src="/images/brandingImage/statue.png"
          alt="statue"
          fill
          sizes="(max-width: 1279px) 645px, (max-width: 1535px) 554px, 645px"
          className="object-contain object-bottom"
          priority
        />
      </div>
      <div className="mx-auto max-w-7xl h-full px-6 lg:px-12">
        {/* LEFT */}

        <div className="slide-text-block flex flex-col justify-center text-white z-10 mt-54">
          <h1 className="slide-title overflow-hidden text-[64px] font-bold leading-14 mb-6 pl-4">
            Digital Presence <br /> & Branding
          </h1>

          <div className="slide-desc flex gap-4 max-w-lg mt-7">
            <div className="slide-desc-bar w-3 bg-[#D9D9D9] mt-2 shrink-0"></div>
            <p className="slide-desc-text overflow-hidden text-lg xl:text-xl text-white">
              We analyze your market, study your competitors, and craft a
              data-backed blueprint tailored specifically to your business
              goals.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="">
          <div className="slide-visual absolute top-64 right-40 xl:right-20 w-153 2xl:w-164.7 2xl:right-36 2xl:top-28 aspect-499/417">
            {/* IMAGE fb */}

            <Image
              src="/images/brandingImage/image1.png"
              alt="fb"
              fill
              sizes="(max-width: 1279px) 499px, 499px"
              priority
              className="slide-fb-image relative z-0 object-contain"
            />

            {/* WHITE BLUR CIRCLE */}
            <div className="absolute top-1/2 left-1/2 2xl:w-94.25 2xl:h-92 xl:w-80.25 xl:h-82 bg-white rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 z-10" />
          </div>

          {/* STEP FLAG */}
          <Image
            src="/images/brandingImage/step1.png"
            alt="step"
            width={39}
            height={80}
            className="step-image absolute top-106 xl:top-69 right-15 xl:right-14 2xl:right-29 2xl:top-36 z-20"
          />

          {/* STATUE — wrapper sized in CSS; Image uses fill to avoid Next.js width/height mismatch warnings */}
        </div>
      </div>
    </div>
  );
}
