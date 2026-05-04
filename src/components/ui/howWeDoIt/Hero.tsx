// "use client";

// import gsap from "gsap";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export default function HowWeDoItHero() {
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power2.out", duration: 1 },
//       });

//       tl.from(".hwdi-statue", {
//         x: -120,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//       })
//         .from(
//           [".hwdi-title", ".hwdi-sub", ".hwdi-box"],
//           {
//             x: 100,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.12,
//           },
//           "-=1",
//         )
//         .to(".hwdi-box", { opacity: 1, duration: 0.2 });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative overflow-hidden bg-white h-150 sm:h-160 md:h-170 lg:h-195.25"
//     >
//       {/* Grid texture — centre visible, edges fade */}
//       <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(96,31,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(96,31,249,0.18)_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_80%)]" />

//       {/* Central purple glow blob */}
//       <div
//         className="absolute top-1/2 left-1/2
//           -translate-x-1/2 -translate-y-1/2
//           w-120 h-80
//           sm:w-160 sm:h-95
//           lg:w-219 lg:h-96
//           2xl:w-275 2xl:h-96
//           bg-[#4504DF] rounded-[100%] blur-[90px] opacity-80
//           z-10 pointer-events-none"
//       />

//       {/* Left ruler */}
//       <div className="absolute left-0 top-0 bottom-0 hidden xl:flex xl:items-center z-10">
//         <Image
//           src="/images/left.svg"
//           alt=""
//           width={79}
//           height={373}
//           className="h-93.25 w-19.75 object-top"
//           priority
//         />
//       </div>

//       <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-12 relative z-10">
//         {/* Main heading (center-top) */}
//         <div className="absolute z-20 top-8 sm:top-10 md:top-44 left-1/2 -translate-x-1/2 text-center">
//           <h1 className="hwdi-title text-white font-semibold text-[52px] sm:text-[70px] md:text-[80px] lg:text-[64px] xl:text-[72px] leading-[0.95] drop-shadow-md whitespace-nowrap">
//             We Don&apos;t Rely on
//           </h1>
//           <p className="hwdi-sub font-signature text-white text-[42px] sm:text-[54px] md:text-[62px] lg:text-[56px] leading-none lg:text-right lg:-mt-2 lg:pr-2">
//             Magic.
//           </p>
//         </div>

//         {/* Left supporting copy */}
//         <div className="absolute z-20 left-4 sm:left-8 md:left-10 lg:left-57 xl:left-12 top-[39%] sm:top-[38%] md:top-[40%] lg:top-[43%]">
//           <h2 className="hwdi-title text-white font-semibold text-[26px] sm:text-[34px] md:text-[40px] lg:text-[50px] leading-[0.95] drop-shadow-md">
//             We Rely
//             <br />
//             on
//           </h2>
//           <p className="hwdi-sub font-signature text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-white -mt-2 sm:-mt-3">
//             Method.
//           </p>
//         </div>

//         {/* Frosted description card (desktop/laptop only like reference) */}
//         <div className="hwdi-box hidden lg:block absolute z-20 top-[49%] right-6 xl:right-10 p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] w-82.5 xl:w-90">
//           <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-5 py-4">
//             <p className="relative z-10 text-[14px] xl:text-[15px] font-medium text-[#FDFDFE] leading-[1.1]">
//               We combine user psychology, hard data, and flawless execution to
//               turn your vision into a high-converting digital asset.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Hero statue — same positioning as UIUxpage */}
//       <div className="hwdi-statue absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-84 sm:w-111.75 md:w-lg lg:w-142.75 h-74 sm:h-94 md:h-108 lg:h-142.75">
//         <Image
//           src="/images/how-we-do-it/hero.png"
//           alt="Hero figure"
//           fill
//           sizes="(max-width: 639px) 336px, (max-width: 767px) 447px, (max-width: 1023px) 512px, 571px"
//           priority
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { HeroLeftRuler } from "../UIUxpage/HeroLeftRuler";

export default function HowWeDoItHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1 },
      });

      tl.from(".hwdi-statue", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          [".hwdi-title", ".hwdi-sub", ".hwdi-box"],
          {
            x: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          "-=1",
        )
        .to(".hwdi-box", { opacity: 1, duration: 0.2 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white h-132 sm:h-154 md:h-130 lg:h-147 xl:h-187"
    >
      {/* Grid texture — centre visible, edges fade */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(96,31,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(96,31,249,0.18)_1px,transparent_1px)] bg-size-[45px_45px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_80%)]" />

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

      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main heading (center-top) */}
        <div className="absolute z-10 top-28 sm:top-38 md:top-36 lg:top-34 xl:top-40 left-1/2 -translate-x-1/2 text-center sm:text-end md:text-end">
          <h1 className="hwdi-title text-white font-semibold text-[39px] sm:text-[44px] md:text-[50px] lg:text-[64px] xl:text-[72px] leading-[0.95] drop-shadow-md whitespace-nowrap">
            We Don&apos;t Rely on
          </h1>
          <p className="hwdi-sub font-signature text-white text-[42px] sm:text-[54px] md:text-[62px] lg:text-[56px] leading-none lg:text-right lg:-mt-2 lg:pr-2">
            Magic.
          </p>
        </div>

        {/* Left supporting copy */}
        <div className="absolute z-20 left-15 sm:left-14 md:left-39 lg:left-57 xl:left-45 top-[55%] sm:top-[54%] md:top-[56%] lg:top-[51%]">
          <h2 className="hwdi-title text-white font-semibold text-[26px] sm:text-[34px] md:text-[40px] lg:text-[50px] leading-[0.95] drop-shadow-md">
            We Rely
          </h2>
          <h2 className="hwdi-title text-white font-semibold text-[26px] sm:text-[34px] md:text-[40px] lg:text-[50px] leading-[0.95] drop-shadow-md">
            on{" "}
            <span className="hwdi-sub font-signature font-normal text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-white -mt-2 sm:-mt-3">
              Method.
            </span>
          </h2>
        </div>

        {/* Frosted description card (desktop/laptop only like reference) */}
        <div className="hwdi-box hidden md:block absolute z-20 xl:top-[49%] right-6 md:right-10 md:top-[60%] lg:right-19 lg:top-[56%] xl:right-10 p-px rounded-xl bg-[linear-gradient(to_right,#FDFDFE_0%,#601FF9_100%)] w-82.5 md:w-67 xl:w-90">
          <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(8deg,#ffffffad_-49%,#601FF9_100%)] px-5 py-4">
            <p className="relative z-10 text-[14px] xl:text-[15px] font-medium text-[#FDFDFE] leading-[1.1]">
              We combine user psychology, hard data, and flawless execution to
              turn your vision into a high-converting digital asset.
            </p>
          </div>
        </div>
      </div>

      {/* Hero statue — same positioning as UIUxpage */}
      <div className="hwdi-statue md:z-20 absolute bottom-0 left-1/2 -translate-x-1/2 w-84 sm:w-111.75 md:w-92 md:h-84 lg:w-118.75 lg:h-108.75 xl:w-142.75 h-85 sm:h-112 xl:h-142.75">
        <Image
          src="/images/how-we-do-it/hero.png"
          alt="Hero figure"
          fill
          sizes="(max-width: 639px) 336px, (max-width: 767px) 447px, (max-width: 1023px) 512px, 571px"
          priority
        />
      </div>
    </section>
  );
}
