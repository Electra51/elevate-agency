// import Button from "@/components/common/Button";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-0">
//         <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
//           <div className="hidden shrink-0 self-stretch lg:flex lg:items-start lg:pt-2">
//             <Image
//               src="/images/left.svg"
//               alt=""
//               width={122}
//               height={490}
//               className="h-auto w-full object-contain object-left"
//               priority
//               unoptimized
//             />
//           </div>

//           <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
//             <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
//               <div className="relative aspect-545/329 w-full">
//                 <Image
//                   src="/images/hero-left-img.svg"
//                   alt=""
//                   fill
//                   className="object-contain object-left"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   priority
//                   unoptimized
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
//               <div className="mb-6 w-full max-w-xl lg:mb-8">
//                 <Image
//                   src="/images/hero-text.svg"
//                   alt="EleVate"
//                   width={757}
//                   height={204}
//                   className="h-auto w-full max-w-[min(100%,28rem)] object-contain object-center lg:object-left"
//                   priority
//                   unoptimized
//                 />
//               </div>

//               <p className="mb-8 max-w-md text-balance text-lg font-bold leading-snug text-neutral-900 sm:text-xl lg:mb-10 lg:text-2xl">
//                 Your Digital experiences that move people
//               </p>

//               <Button href="/contact" variant="primary">
//                 Get a Free Strategy Call
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

// // Design tools panel icons (mimics Illustrator-style toolbar)
// const DesignToolsPanel = () => (
//   <div className="flex flex-col items-center gap-[6px] rounded-sm bg-white border border-neutral-200 shadow-sm px-[6px] py-2">
//     {[
//       // T (text)
//       <svg key="t" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <text
//           x="1"
//           y="12"
//           fontSize="13"
//           fontFamily="serif"
//           fontWeight="700"
//           fill="#333"
//         >
//           T
//         </text>
//       </svg>,
//       // Selection arrow
//       <svg key="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <path d="M2 2l10 6-5 1-2 5z" fill="#333" />
//       </svg>,
//       // Pen tool
//       <svg key="pen" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <path
//           d="M2 12L5 9l5-5 2 2-5 5-3 3-2-1z"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//         <circle cx="9" cy="5" r="1.2" fill="#333" />
//       </svg>,
//       // Rectangle
//       <svg key="rect" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <rect
//           x="2"
//           y="3"
//           width="10"
//           height="8"
//           rx="1"
//           stroke="#333"
//           strokeWidth="1.3"
//           fill="none"
//         />
//       </svg>,
//       // Ellipse
//       <svg key="circle" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <ellipse
//           cx="7"
//           cy="7"
//           rx="5"
//           ry="4.5"
//           stroke="#333"
//           strokeWidth="1.3"
//           fill="none"
//         />
//       </svg>,
//       // Brush
//       <svg key="brush" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <path
//           d="M10 2l2 2-7 7H3v-2z"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//         <path d="M3 12c0-1 .5-1.5 1-1" stroke="#333" strokeWidth="1" />
//       </svg>,
//       // Eyedropper
//       <svg key="eye" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <path
//           d="M10 2l2 2-1 1-1-1-5 5v2H3v-2l5-5-1-1z"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//       </svg>,
//       // Grid
//       <svg key="grid" width="14" height="14" viewBox="0 0 14 14" fill="none">
//         <rect
//           x="2"
//           y="2"
//           width="4"
//           height="4"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//         <rect
//           x="8"
//           y="2"
//           width="4"
//           height="4"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//         <rect
//           x="2"
//           y="8"
//           width="4"
//           height="4"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//         <rect
//           x="8"
//           y="8"
//           width="4"
//           height="4"
//           stroke="#333"
//           strokeWidth="1.2"
//           fill="none"
//         />
//       </svg>,
//     ].map((icon, i) => (
//       <div
//         key={i}
//         className="w-7 h-7 flex items-center justify-center rounded-[3px] hover:bg-neutral-100 cursor-pointer transition-colors"
//       >
//         {icon}
//       </div>
//     ))}
//   </div>
// );

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[420px] lg:min-h-[500px]">
      {/* Left ruler SVG */}
      <div className="absolute left-0 top-0 bottom-0 hidden lg:flex flex-col items-center justify-start pt-4 z-10">
        <Image
          src="/images/left.svg"
          alt=""
          width={79}
          height={373}
          className="h-full w-auto object-contain object-top"
          priority
          unoptimized
        />
      </div>

      {/* 65° angle indicator */}
      {/* <div className="absolute left-8 top-1/2 -translate-y-4 hidden lg:flex items-center gap-1 z-10">
        <div className="w-8 h-px bg-neutral-400" />
        <span
          className="text-xs text-neutral-500 tracking-tight"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          65°
        </span>
      </div> */}

      {/* Scroll For More — right edge, rotated */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 z-10">
        <div className="h-16 w-px bg-neutral-400 mb-2" />
        <span
          className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Scroll For More
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-10 py-8 sm:px-12 lg:px-16">
        {/* EleVate heading — full width, centered at top */}
        <div className="flex justify-center mb-2 lg:mb-0 lg:-mb-6 relative z-20">
          <Image
            src="/images/hero-text.svg"
            alt="EleVate"
            width={700}
            height={180}
            className="h-auto w-full max-w-[520px] lg:max-w-[680px] object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Main content row: statue left + text right */}
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 lg:gap-0">
          {/* Left column: design panel + statue */}
          <div className="flex items-end gap-3 lg:gap-4 lg:w-[48%] justify-center lg:justify-start lg:pl-10">
            {/* Design tools panel */}
            {/* <div className="hidden lg:flex self-end mb-4">
              <DesignToolsPanel />
            </div> */}

            {/* Statue image */}
            <div className="relative w-full max-w-[300px] lg:max-w-[340px] aspect-[545/390]">
              <Image
                src="/images/hero-left-img.svg"
                alt="Statue working on laptop"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right column: subtitle + CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[52%] lg:pl-8 lg:pb-12">
            <p
              className="mb-8 max-w-xs text-balance font-black leading-snug text-neutral-900 text-xl sm:text-2xl lg:text-[1.65rem]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your Digital experiences
              <br />
              that move people
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#6200EE] px-6 py-3 text-sm font-semibold text-white tracking-wide hover:bg-[#5300D6] transition-colors shadow-lg shadow-violet-200"
            >
              Get a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
