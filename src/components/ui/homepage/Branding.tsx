// "use client";

// import gsap from "gsap";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const Branding = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".branding-text", {
//         x: -60,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       gsap.from(".branding-desc", {
//         x: -40,
//         opacity: 0,
//         duration: 0.8,
//         delay: 0.2,
//         ease: "power3.out",
//       });

//       gsap.from(".branding-img", {
//         x: 80,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".branding-step", {
//         scale: 0,
//         opacity: 0,
//         duration: 0.6,
//         delay: 0.4,
//         ease: "back.out(1.7)",
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="w-full bg-gradient-to-r from-[#5B2EFF] to-[#7B4BFF] relative overflow-hidden"
//     >
//       {/* GRID BACKGROUND */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
//         {/* LEFT CONTENT */}
//         <div className="z-10">
//           <h2 className="branding-text text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
//             Digital Presence <br /> & Branding
//           </h2>

//           <div className="branding-desc mt-6 flex items-start gap-4">
//             <div className="w-1 bg-white h-full mt-1" />
//             <p className="text-white/90 text-base md:text-lg max-w-md leading-relaxed">
//               We analyze your market, study your competitors, and craft a
//               data-backed blueprint tailored specifically to your business
//               goals.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT IMAGE SECTION */}
//         <div className="relative flex justify-center md:justify-end">
//           {/* MAIN STATUE IMAGE */}
//           <div className="branding-img relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[480px]">
//             <Image
//               src="/images/brandingImage/statue.svg"
//               alt="Statue"
//               width={500}
//               height={500}
//               className="object-contain"
//               priority
//             />
//           </div>
//           <div className="absolute top-0 left-0 w-full z-0">
//             <Image
//               src="/images/brandingImage/Vector.svg"
//               alt="line"
//               width={1200}
//               height={200}
//               className="w-full object-cover"
//             />
//           </div>

//           {/* FLOATING IMAGE (image1) */}
//           <div className="branding-img absolute top-10 right-10 w-24 sm:w-28 md:w-32">
//             <Image
//               src="/images/brandingImage/image1.png"
//               alt="UI"
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>

//           {/* STEP ICON */}
//           <div className="branding-step absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
//             <Image
//               src="/images/brandingImage/step1.png"
//               alt="Step"
//               width={50}
//               height={50}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Branding;

"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Branding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".brand-text", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".brand-statue", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".brand-card", {
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".brand-step", {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-[#5D1DF5] to-[#8B2CFF] py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="brand-text text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Digital Presence <br /> & Branding
          </h2>

          <div className="mt-6 flex gap-4">
            <div className="w-1 bg-white" />
            <p className="text-lg md:text-xl max-w-lg">
              We analyze your market, study your competitors, and craft a
              data-backed blueprint tailored specifically to your business
              goals.
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Background Image (image1) */}
          <div className="brand-card absolute bottom-0 right-0 w-72 md:w-96 lg:w-[450px] opacity-90">
            <Image
              src="/images/brandingImage/image1.png"
              alt="branding"
              width={500}
              height={400}
              className="w-full object-contain"
            />
          </div>

          {/* Statue */}
          <div className="brand-statue relative z-10 w-60 md:w-80 lg:w-[420px]">
            <Image
              src="/images/brandingImage/statue.svg"
              alt="statue"
              width={400}
              height={500}
              className="w-full object-contain"
            />
          </div>

          {/* Step Icon */}
          <div className="brand-step absolute top-10 right-10 w-12 md:w-14">
            <Image
              src="/images/brandingImage/step1.png"
              alt="step"
              width={60}
              height={60}
              className="w-full"
            />
          </div>

          {/* Vector Line (custom) */}
          <svg
            className="absolute bottom-10 left-0 w-full h-66 opacity-40"
            viewBox="0 0 600 120"
            fill="none"
          >
            <path
              d="M0 100 Q 200 20 400 80 T 600 40"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Branding;
