// "use client";

// import MarqueeBanner from "@/components/common/MarqueeBanner";
// import gsap from "gsap";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { HeroLeftRuler } from "../UIUxpage/HeroLeftRuler";

// export default function Hero() {
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power2.out", duration: 1 },
//       });

//       tl.from(".hero-statue", {
//         x: 120,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       }).from(
//         [".hero-title", ".hero-text"],
//         {
//           y: 30,
//           opacity: 0,
//           duration: 0.9,
//           stagger: 0.15,
//           ease: "power2.out",
//         },
//         "-=0.9",
//       );
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="" ref={heroRef}>
//       <div className="relative overflow-hidden bg-white pt-22">
//         {/* Grid texture */}
//         <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(96,31,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(96,31,249,0.18)_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_80%)]" />

//         {/* Purple glow blob */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-130 h-90 sm:w-200 sm:h-72 md:w-160 md:h-80 lg:w-219 lg:h-71 xl:w-300 xl:h-100 bg-[#4504DF] rounded-[100%] blur-[90px] xl:blur-[110px]  z-0 pointer-events-none" />

//         {/* Left ruler — desktop only
//         <div className="absolute left-0 top-0 bottom-0 hidden xl:flex xl:items-center z-10">
//           <Image
//             src="/images/left.svg"
//             alt=""
//             width={79}
//             height={373}
//             className="h-93.25 w-19.75 object-top"
//             priority
//           />
//         </div> */}
//         {/* Left ruler — desktop only (top/bottom edge fade) */}
//         <div className="absolute left-0 top-0 bottom-0 hidden lg:flex lg:items-center z-10 pointer-events-none">
//           <div
//             className="[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_57%,black_90%,transparent_100%)] mask-[linear-gradient(to_bottom,transparent_0%,black_57%,black_70%,transparent_100%)]"
//             aria-hidden
//           >
//             <HeroLeftRuler />
//           </div>
//         </div>

//         {/* ── Text content ── */}
//         <div className="relative z-20 flex items-center justify-center pointer-events-none">
//           <div className="w-full px-6 sm:px-10 md:px-16 lg:px-28 xl:px-0 xl:max-w-3xl text-center">
//             <h1 className="hero-title text-white font-bold text-[26px] sm:text-[32px] md:text-5xl lg:text-[52px] xl:text-[52px] leading-tight mb-5 lg:mb-7 drop-shadow-md">
//               We Were Tired of Mediocre
//               <br />
//               So We Built Elevate.
//             </h1>

//             <div className="hero-text p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] max-w-xs sm:max-w-sm md:max-w-md mx-auto pointer-events-auto">
//               <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-2.5 md:px-3.5 lg:px-5 py-2 md:py-3.5 lg:py-4">
//                 <p className="relative z-10 text-[13px] sm:text-sm md:text-base font-medium text-[#FDFDFE] text-center leading-relaxed px-1 xl:px-0.5">
//                   We saw too many businesses burning money on dead-end websites
//                   and random &ldquo;boosting&rdquo; agencies that delivered zero
//                   results. We decided it was time to build a digital partner
//                   that actually cares about your profit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Statue image ── */}
//         <div
//           className="hero-statue absolute z-20 bottom-0 right-0
//           w-36 h-60
//           sm:w-55 sm:h-74
//           md:w-67 md:h-90
//           lg:w-90 lg:h-125
//           xl:w-105 xl:h-145"
//         >
//           <Image
//             src="/images/ourstory/heroImage.png"
//             alt="Statue"
//             fill
//             className="object-contain object-bottom"
//             priority
//           />
//         </div>
//       </div>
//       <MarqueeBanner />
//     </section>
//   );
// }

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
          {/* Mobile / tablet: in-flow copy so section height follows content (no min-height on shell) */}
          <div className="absolute left-10 sm:left-19 top-35 sm:top-37 z-20 mx-auto max-w-7xl md:hidden">
            <p className="hero-title text-[35px] font-semibold text-white leading-10.5">
              We Were Tired <br />
              of Mediocre
              <br />
              So We Built
              <br />
              Elevate.{" "}
            </p>

            <div className="hidden sm:flex mt-8 mr-3.25 md:mr-0 hero-text z-99 p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] max-w-xs sm:max-w-xs mx-auto pointer-events-auto">
              <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-2.5 md:px-3.5 lg:px-5 py-2 md:py-3.5 lg:py-4">
                <p className="relative z-10 text-[13px] sm:text-sm md:text-[14px] lg:text-base font-medium text-[#FDFDFE] text-center leading-relaxed px-1 xl:px-0.5">
                  We saw too many businesses burning money on dead-end websites
                  and random &ldquo;boosting&rdquo; agencies that delivered zero
                  results. We decided it was time to build a digital partner
                  that actually cares about your profit.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden mt-11.25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9 md:flex  items-center justify-center pointer-events-none">
            <div className="w-full px-2 sm:px-2 xl:px-0 lg:max-w-6xl xl:max-w-3xl text-center">
              <h1 className="hero-title text-white font-bold text-[26px] sm:text-[42px] md:text-4xl lg:text-[45px] xl:text-[45px] 2xl:text-[52px] tracking-wide mb-5 lg:mb-7 drop-shadow-md">
                <span className="text-nowrap">We Were Tired of Mediocre</span>{" "}
                <br />
                So We Built Elevate.
              </h1>

              <div className="hero-text p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] max-w-xs sm:max-w-sm md:max-w-md mx-auto pointer-events-auto">
                <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-2.5 md:px-3.5 lg:px-5 py-2 md:py-3.5 lg:py-4">
                  <p className="relative z-10 text-[13px] sm:text-sm md:text-[14px] lg:text-base font-medium text-[#FDFDFE] text-center leading-relaxed px-1 xl:px-0.5">
                    We saw too many businesses burning money on dead-end
                    websites and random &ldquo;boosting&rdquo; agencies that
                    delivered zero results. We decided it was time to build a
                    digital partner that actually cares about your profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Statue: in-flow so section height follows this + copy above (no min-height on hero shell) */}
          <div className="">
            <div
              className="hero-statue relative mx-0 ml-auto max-w-full
                w-70 h-110
                sm:w-98 sm:h-132
                md:w-80 md:h-108
                lg:w-92.75 lg:h-125
                xl:w-100.75 xl:h-165
                2xl:w-100.75 2x:h-195"
            >
              <Image
                src="/images/ourstory/heroImage.png"
                alt="Statue"
                fill
                className=" object-contain object-bottom absolute bottom-0 right-0"
                // style={{
                //   zIndex: 999,
                // }}
                sizes="(max-width: 639px) 352px, (max-width: 767px) 448px, (max-width: 1023px) 528px, (max-width: 1279px) 500px, 620px"
                priority
              />

              {/* Desktop / laptop: overlay (height comes from in-flow statue below) */}
              {/* <div className="pointer-events-none absolute inset-0 z-20 mx-auto hidden max-w-7xl px-4 md:block md:px-12">
              <div className="relative z-20 flex items-center justify-center pointer-events-none">
                <div className="w-full px-6 sm:px-10 md:px-16 lg:px-28 xl:px-0 xl:max-w-3xl text-center">
                  <h1 className="hero-title text-white font-bold text-[26px] sm:text-[32px] md:text-5xl lg:text-[52px] xl:text-[52px] leading-tight mb-5 lg:mb-7 drop-shadow-md">
                    We Were Tired of Mediocre <br />
                    So We Built Elevate.
                  </h1>

                  <div className="hero-text p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] max-w-xs sm:max-w-sm md:max-w-md mx-auto pointer-events-auto">
                    <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-2.5 md:px-3.5 lg:px-5 py-2 md:py-3.5 lg:py-4">
                      <p className="relative z-10 text-[13px] sm:text-sm md:text-base font-medium text-[#FDFDFE] text-center leading-relaxed px-1 xl:px-0.5">
                        We saw too many businesses burning money on dead-end
                        websites and random &ldquo;boosting&rdquo; agencies that
                        delivered zero results. We decided it was time to build
                        a digital partner that actually cares about your profit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-text -mt-2 w-82.5 rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] p-px xl:w-90">
                <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-5 py-4">
                  <p className="relative z-10 text-[14px] font-medium leading-[1.1] text-[#FDFDFE] xl:text-[15px]">
                    We combine user psychology, hard data, and flawless
                    execution to turn your vision into a high-converting digital
                    asset.
                  </p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <MarqueeBanner />
      </section>
    </>
  );
}
