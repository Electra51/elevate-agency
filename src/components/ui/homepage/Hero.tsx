"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

      //yoyo:true
      // gsap.to(".hero-statue", {
      //   y: 10,
      //   duration: 2.5,
      //   ease: "sine.inOut",
      //   repeat: -1,
      //   yoyo: true,
      // });

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
          marginRight: "104px",
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white h-161.25"
    >
      {/* leftside ruler */}
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

      {/* rightside scroll for more  */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10">
        <div className="hidden lg:flex flex-col items-center  justify-center gap-2">
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

      <div className="mx-auto max-w-7xl h-full px-6 lg:px-12">
        {/* elevate text Logo */}
        <div className="flex flex-col justify-end pt-19.5  pr-10 lg:pr-45 xl:pr-0">
          <Image
            src="/images/hero-text.svg"
            alt="Elevate"
            width={700}
            height={180}
            className="hero-title w-65 sm:w-95 lg:w-189.25 object-contain ml-auto"
            priority
          />
          {/* text and button content */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-2 mt-12 relative z-10">
            <p className="hero-text font-black text-black text-lg sm:text-2xl lg:text-[48px] leading-tight">
              Your Digital experiences
            </p>
            <p className="hero-text font-black text-black text-lg sm:text-2xl lg:text-[48px] leading-tight">
              that move people
            </p>
            <Link
              href="/contact"
              className="hero-btn mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary hover:bg-linear-to-r hover:from-[#601FF9] hover:to-[#9000FF]  duration-300 text-[16px] transition shadow-lg shadow-violet-200 tracking-wide"
            >
              Get a Free Strategy Call
            </Link>
          </div>
        </div>

        {/* left statue */}
        <div className="hero-statue absolute bottom-0 z-0 w-65 sm:w-[320px] lg:w-136.25 h-65 sm:h-80 lg:h-82.25">
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
