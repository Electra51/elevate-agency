// "use client";

// import gsap from "gsap";
// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";

// const slides = [
//   {
//     title: "Digital Presence\n& Branding",
//     desc: "We analyze your market, study your competitors, and craft a data-backed blueprint tailored specifically to your business goals.",
//     gradient: "from-[#6b37e4] to-[#713FE7]",
//     statue: "/images/brandingImage/statue.png",
//     vector: "/images/brandingImage/Vector1.svg",
//     num: "01",
//   },
//   {
//     title: "Discovery &\nStrategy",
//     desc: "First impressions dictate the journey. We build a scroll-stopping digital storefront across your website and social channels to ensure your brand looks the part before anyone even clicks.",
//     gradient: "from-[#713FE7] to-[#370ECD]",
//     statue: "/images/brandingImage/statue2.svg",
//     vector: "/images/brandingImage/Vector2.svg",
//     num: "02",
//   },
//   {
//     title: "Awareness &\nReach",
//     desc: "We don't just chase views; we chase the right eyes. Through highly targeted campaigns, we introduce your brand to an audience that is actually primed to love your product.",
//     gradient: "from-[#4e24e2] to-[#370ECD]",
//     statue: "/images/brandingImage/statue3.svg",
//     vector: "/images/brandingImage/Vector3.svg",
//     num: "03",
//   },
//   {
//     title: "Engagement &\nLead Generation",
//     desc: "Awareness is just the start. We nurture that initial spark, building trust and turning casual scrollers into a solid database of warm, qualified leads.",
//     gradient: "from-[#4d25df] to-[#370ECD]",
//     statue: "/images/brandingImage/statue4.svg",
//     vector: "/images/brandingImage/Vector4.svg",
//     num: "04",
//   },
//   {
//     title: "Conversion &\nSales",
//     desc: "This is where interest converts into income. Using smart retargeting and irresistible offers, we gently guide your warm audience straight to the checkout line.",
//     gradient: "from-[#451bdd] to-[#370ECD]",
//     statue: "/images/brandingImage/statue5.svg",
//     vector: "/images/brandingImage/Vector5.svg",
//     num: "05",
//   },
//   {
//     title: "Analysis &\nScaling",
//     desc: "We don't stop at the first win. We dive into the analytics, eliminate what isn't working, and pour fuel on top-performing campaigns to multiply your ROI.",
//     gradient: "from-[#370ECD] to-[#2b0aa8]",
//     statue: "/images/brandingImage/statue6.svg",
//     vector: "/images/brandingImage/Vector6.svg",
//     num: "06",
//   },
// ];

// function animateSlideIn(slide: HTMLElement) {
//   const num = slide.querySelector(".ms-num");
//   const title = slide.querySelector(".ms-title");
//   const desc = slide.querySelector(".ms-desc");
//   const statue = slide.querySelector(".ms-statue");

//   gsap.killTweensOf([num, title, desc, statue]);

//   gsap
//     .timeline()
//     .fromTo(
//       num,
//       { x: -20, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
//     )
//     .fromTo(
//       title,
//       { y: 28, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
//       "-=0.22",
//     )
//     .fromTo(
//       desc,
//       { y: 18, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
//       "-=0.28",
//     )
//     .fromTo(
//       statue,
//       { y: 45, opacity: 0, scale: 0.93 },
//       { y: 0, opacity: 1, scale: 1, duration: 0.65, ease: "power3.out" },
//       "-=0.38",
//     );
// }

// export default function MobileSlides() {
//   const [current, setCurrent] = useState(0);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const isAnimating = useRef(false);
//   const touchStartX = useRef(0);

//   // Core go-to function — drives everything
//   const goTo = useCallback((next: number) => {
//     if (isAnimating.current) return;
//     if (next < 0 || next >= slides.length) return;
//     isAnimating.current = true;

//     gsap.to(trackRef.current, {
//       x: `-${next * (100 / slides.length)}%`, // ← fixed
//       duration: 0.58,
//       ease: "power3.inOut",
//       onComplete: () => {
//         isAnimating.current = false;
//         const el = slideRefs.current[next];
//         if (el) animateSlideIn(el);
//       },
//     });

//     setCurrent(next);
//   }, []);

//   // First-slide entrance on mount
//   useEffect(() => {
//     gsap.set(trackRef.current, { x: 0 });
//     const el = slideRefs.current[0];
//     if (el) animateSlideIn(el);
//   }, []);

//   // Touch swipe
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };
//   const onTouchEnd = (e: React.TouchEvent) => {
//     const delta = touchStartX.current - e.changedTouches[0].clientX;
//     if (Math.abs(delta) > 50) {
//       delta > 0 ? goTo(current + 1) : goTo(current - 1);
//     }
//   };

//   return (
//     /* Outer wrapper — clips the track, overlays controls */
//     <div
//       className="relative w-full overflow-hidden"
//       onTouchStart={onTouchStart}
//       onTouchEnd={onTouchEnd}
//     >
//       {/* ── Sliding track ─────────────────────────────────────── */}
//       <div
//         ref={trackRef}
//         className="flex will-change-transform"
//         style={{ width: `${slides.length * 100}%` }}
//       >
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             ref={(el) => {
//               slideRefs.current[i] = el;
//             }}
//             className={`relative flex flex-col overflow-hidden bg-linear-to-br ${slide.gradient}`}
//             // style={{ width: `${100 / slides.length}%`, minHeight: "92vh" }}
//           >
//             {/* Grid texture */}
//             <div
//               className="absolute inset-0 pointer-events-none opacity-[0.06]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgb(255 255 255 / 87%) 1px, #00000047 1px), linear-gradient(90deg, rgb(255 255 255 / 78%) 1px, #00000038 1px)",
//                 backgroundSize: "58px 55px",
//               }}
//             />

//             {/* Decorative vector */}
//             <div className="absolute bottom-[34%] left-0 w-full pointer-events-none opacity-50">
//               <Image
//                 src={slide.vector}
//                 alt=""
//                 width={800}
//                 height={200}
//                 className="w-full h-auto"
//               />
//             </div>

//             {/* Text content */}
//             <div className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-14">
//               <span className="ms-num font-clash font-black text-white/20 text-[52px] sm:text-[90px] leading-none select-none -mb-3">
//                 {slide.num}
//               </span>
//               <h2 className="ms-title text-white font-bold leading-tight text-[30px] sm:text-[40px] md:text-[48px] whitespace-pre-line mt-2">
//                 {slide.title}
//               </h2>
//               <div className="ms-desc flex gap-3 mt-5 max-w-md">
//                 <div className="w-0.75 shrink-0 bg-white/60 rounded-full mt-1" />
//                 <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
//                   {slide.desc}
//                 </p>
//               </div>
//             </div>

//             {/* Statue — extra bottom padding so controls overlay doesn't cover it */}
//             <div
//               className="ms-statue relative w-full mt-auto"
//               style={{
//                 height: "44vw",
//                 maxHeight: 300,
//                 minHeight: 180,
//                 paddingBottom: "72px",
//               }}
//             >
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-full bg-white/15 rounded-full blur-3xl pointer-events-none" />
//               <Image
//                 src={slide.statue}
//                 alt={slide.title}
//                 fill
//                 sizes="100vw"
//                 className="object-contain object-bottom"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── Controls — fixed overlay at bottom, OUTSIDE the track ── */}
//       <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 sm:py-7">
//         {/* Prev */}
//         <button
//           onClick={() => goTo(current - 1)}
//           disabled={current === 0}
//           aria-label="Previous slide"
//           className="flex items-center justify-center w-11 h-11 rounded-full border border-white/35 bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/25 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed"
//         >
//           <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//             <path
//               d="M11 4L6 9L11 14"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>

//         {/* Dots */}
//         <div className="flex items-center gap-2">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => goTo(idx)}
//               aria-label={`Slide ${idx + 1}`}
//               className="rounded-full bg-white transition-all duration-300"
//               style={{
//                 width: idx === current ? 22 : 6,
//                 height: 6,
//                 opacity: idx === current ? 1 : 0.35,
//               }}
//             />
//           ))}
//         </div>

//         {/* Next */}
//         <button
//           onClick={() => goTo(current + 1)}
//           disabled={current === slides.length - 1}
//           aria-label="Next slide"
//           className="flex items-center justify-center w-11 h-11 rounded-full border border-white/35 bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/25 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed"
//         >
//           <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//             <path
//               d="M7 4L12 9L7 14"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import gsap from "gsap";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Digital Presence\n& Branding",
    desc: "We analyze your market, study your competitors, and craft a data-backed blueprint tailored specifically to your business goals.",
    gradient: "from-[#6b37e4] to-[#713FE7]",
    statue: "/images/brandingImage/statue.png",
    vector: "/images/brandingImage/Vector1.svg",
    num: "01",
  },
  {
    title: "Discovery &\nStrategy",
    desc: "First impressions dictate the journey. We build a scroll-stopping digital storefront across your website and social channels to ensure your brand looks the part before anyone even clicks.",
    gradient: "from-[#713FE7] to-[#370ECD]",
    statue: "/images/brandingImage/statue2.svg",
    vector: "/images/brandingImage/Vector2.svg",
    num: "02",
  },
  {
    title: "Awareness &\nReach",
    desc: "We don't just chase views; we chase the right eyes. Through highly targeted campaigns, we introduce your brand to an audience that is actually primed to love your product.",
    gradient: "from-[#4e24e2] to-[#370ECD]",
    statue: "/images/brandingImage/statue3.svg",
    vector: "/images/brandingImage/Vector3.svg",
    num: "03",
  },
  {
    title: "Engagement &\nLead Generation",
    desc: "Awareness is just the start. We nurture that initial spark, building trust and turning casual scrollers into a solid database of warm, qualified leads.",
    gradient: "from-[#4d25df] to-[#370ECD]",
    statue: "/images/brandingImage/statue4.svg",
    vector: "/images/brandingImage/Vector4.svg",
    num: "04",
  },
  {
    title: "Conversion &\nSales",
    desc: "This is where interest converts into income. Using smart retargeting and irresistible offers, we gently guide your warm audience straight to the checkout line.",
    gradient: "from-[#451bdd] to-[#370ECD]",
    statue: "/images/brandingImage/statue5.svg",
    vector: "/images/brandingImage/Vector5.svg",
    num: "05",
  },
  {
    title: "Analysis &\nScaling",
    desc: "We don't stop at the first win. We dive into the analytics, eliminate what isn't working, and pour fuel on top-performing campaigns to multiply your ROI.",
    gradient: "from-[#370ECD] to-[#2b0aa8]",
    statue: "/images/brandingImage/statue6.svg",
    vector: "/images/brandingImage/Vector6.svg",
    num: "06",
  },
];

function animateSlideIn(slide: HTMLElement) {
  const num = slide.querySelector(".ms-num");
  const title = slide.querySelector(".ms-title");
  const desc = slide.querySelector(".ms-desc");
  const statue = slide.querySelector(".ms-statue");

  gsap.killTweensOf([num, title, desc, statue]);

  gsap
    .timeline()
    .fromTo(
      num,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
    )
    .fromTo(
      title,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.22",
    )
    .fromTo(
      desc,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
      "-=0.28",
    )
    .fromTo(
      statue,
      { y: 45, opacity: 0, scale: 0.93 },
      { y: 0, opacity: 1, scale: 1, duration: 0.65, ease: "power3.out" },
      "-=0.38",
    );
}

export default function MobileSlides() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);
  const touchStartX = useRef(0);

  const goTo = useCallback((next: number) => {
    if (isAnimating.current) return;
    if (next < 0 || next >= slides.length) return;
    isAnimating.current = true;

    const containerWidth = containerRef.current?.offsetWidth ?? 0;

    gsap.to(trackRef.current, {
      x: -(next * containerWidth),
      duration: 0.58,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.current = false;
        const el = slideRefs.current[next];
        if (el) animateSlideIn(el);
      },
    });

    setCurrent(next);
  }, []);

  // First-slide entrance on mount
  useEffect(() => {
    gsap.set(trackRef.current, { x: 0 });
    const el = slideRefs.current[0];
    if (el) animateSlideIn(el);
  }, []);

  // Recalculate position on resize
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      gsap.set(trackRef.current, { x: -(current * containerWidth) });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goTo(current + 1) : goTo(current - 1);
    }
  };

  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Sliding track — natural pixel offset ── */}
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className={`relative flex flex-col overflow-hidden bg-linear-to-br ${slide.gradient}`}
            style={{
              width: `${100 / slides.length}%`,
              // minHeight: "92vh",
            }}
          >
            {/* Grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(255 255 255 / 87%) 1px, #00000047 1px), linear-gradient(90deg, rgb(255 255 255 / 78%) 1px, #00000038 1px)",
                backgroundSize: "58px 55px",
              }}
            />

            {/* Decorative vector */}
            {/* <div className="absolute bottom-[34%] left-0 w-full pointer-events-none opacity-50">
              <Image
                src={slide.vector}
                alt=""
                width={800}
                height={200}
                className="w-full h-auto"
              />
            </div> */}

            {/* Text content */}
            <div className="relative z-10 px-6 sm:px-10 pt-10 sm:pt-14">
              <span className="ms-num font-clash font-black text-white/20 text-[52px] sm:text-[90px] leading-none select-none -mb-3">
                {slide.num}
              </span>
              <h2 className="ms-title text-white font-bold leading-tight text-[30px] sm:text-[40px] md:text-[48px] whitespace-pre-line mt-2">
                {slide.title}
              </h2>
              <div className="ms-desc flex gap-3 mt-5 max-w-md">
                <div className="w-0.75 shrink-0 bg-white/60 rounded-full mt-1" />
                <p className="text-white/85 text-[14px] sm:text-[15px] leading-relaxed">
                  {slide.desc}
                </p>
              </div>
            </div>

            {/* Statue */}
            <div
              className="ms-statue relative w-full mt-auto"
              style={{
                height: "44vw",
                maxHeight: 300,
                minHeight: 180,
                paddingBottom: "80px",
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-full bg-white/15 rounded-full blur-3xl pointer-events-none" />
              <Image
                src={slide.statue}
                alt={slide.title}
                fill
                sizes="(max-width: 640px) 65vw, (max-width: 1024px) 45vw, 33vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Controls overlay ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6">
        {/* Prev arrow */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={isFirst}
          aria-label="Previous slide"
          className="group relative flex items-center gap-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {/* Arrow pill */}
          <span
            className={`
              flex items-center justify-center
              w-10 h-10 rounded-full
              border border-white/30
              bg-white/10 backdrop-blur-md
              transition-all duration-300
              group-hover:bg-white/25 group-hover:border-white/60 group-hover:scale-110
              group-active:scale-95
            `}
          >
            {/* Left chevron */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8L10 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {/* Label — hidden on xs, shown on sm+ */}
          <span className="hidden sm:block text-white/60 text-[11px] tracking-widest uppercase font-mono transition-all duration-300 group-hover:text-white/90">
            Prev
          </span>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.75">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="rounded-full bg-white transition-all duration-300 hover:opacity-80"
              style={{
                width: idx === current ? 20 : 5,
                height: 5,
                opacity: idx === current ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={isLast}
          aria-label="Next slide"
          className="group relative flex items-center gap-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {/* Label */}
          <span className="hidden sm:block text-white/60 text-[11px] tracking-widest uppercase font-mono transition-all duration-300 group-hover:text-white/90">
            Next
          </span>
          {/* Arrow pill */}
          <span
            className={`
              flex items-center justify-center
              w-10 h-10 rounded-full
              border border-white/30
              bg-white/10 backdrop-blur-md
              transition-all duration-300
              group-hover:bg-white/25 group-hover:border-white/60 group-hover:scale-110
              group-active:scale-95
            `}
          >
            {/* Right chevron — animated on hover */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
