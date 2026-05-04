// "use client";

// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";

// export default function Preloader() {
//   const [visible, setVisible] = useState(false);

//   const overlayRef = useRef<HTMLDivElement>(null);
//   const curtainRef = useRef<HTMLDivElement>(null);
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<SVGSVGElement>(null);
//   const progressFillRef = useRef<HTMLDivElement>(null);

//   // Detect first session visit
//   useEffect(() => {
//     if (sessionStorage.getItem("preloader-seen")) return;
//     sessionStorage.setItem("preloader-seen", "1");
//     setVisible(true);
//   }, []);

//   // Run animation only once visible is set true
//   useEffect(() => {
//     if (!visible) return;

//     const svg = logoRef.current;
//     const paths = svg ? [...svg.querySelectorAll<SVGPathElement>("path")] : [];
//     if (!svg || paths.length === 0) return;

//     // ── Prepare each path for stroke-draw animation ──────────────────
//     paths.forEach((path) => {
//       const len = path.getTotalLength();
//       gsap.set(path, {
//         attr: {
//           fill: "transparent",
//           stroke: "rgba(255,255,255,0.85)",
//           strokeWidth: 0.35,
//         },
//         strokeDasharray: len,
//         strokeDashoffset: len,
//       });
//     });

//     gsap.set(svg, { opacity: 0, scale: 0.88 });
//     gsap.set(wrapRef.current, { opacity: 1 });

//     // ── Main GSAP timeline ────────────────────────────────────────────
//     const tl = gsap.timeline({
//       defaults: { ease: "power2.inOut" },
//     });

//     // 1. Logo fades + scales into view
//     tl.to(svg, { opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" });

//     // 2. Draw each path one after another (slight stagger overlap)
//     const drawDuration = 0.85;
//     const staggerOffset = 0.42;
//     paths.forEach((path, i) => {
//       tl.to(
//         path,
//         { strokeDashoffset: 0, duration: drawDuration },
//         `<+=${i * staggerOffset}`,
//       );
//     });

//     // 2b. Progress bar fills during the draw phase (synced timing)
//     const drawStart = 0.55; // when drawing begins
//     const drawEnd =
//       drawStart + drawDuration + (paths.length - 1) * staggerOffset;
//     tl.fromTo(
//       progressFillRef.current,
//       { width: "0%" },
//       { width: "100%", duration: drawEnd - drawStart, ease: "none" },
//       drawStart,
//     );

//     // 3. Fill paths with solid white, fade out stroke
//     tl.to(paths, {
//       attr: { fill: "white", strokeWidth: 0 },
//       duration: 0.4,
//       stagger: 0.07,
//     });

//     // 4. Subtle logo pulse
//     tl.to(svg, { scale: 1.06, duration: 0.25, ease: "power1.out" }).to(svg, {
//       scale: 1,
//       duration: 0.2,
//       ease: "power1.in",
//     });

//     // 5. Hold
//     tl.to({}, { duration: 0.55 });

//     // ── Exit sequence ─────────────────────────────────────────────────
//     // Fade wrap content upward
//     tl.to(wrapRef.current, {
//       opacity: 0,
//       y: -18,
//       duration: 0.32,
//       ease: "power2.in",
//     });

//     // White curtain sweeps upward from bottom
//     tl.fromTo(
//       curtainRef.current,
//       { scaleY: 0, transformOrigin: "bottom" },
//       { scaleY: 1, duration: 0.42, ease: "power3.inOut" },
//       "-=0.08",
//     );

//     // Entire overlay slides off the top
//     tl.to(
//       overlayRef.current,
//       {
//         y: "-100%",
//         duration: 0.58,
//         ease: "power3.inOut",
//         onComplete: () => setVisible(false),
//       },
//       "-=0.18",
//     );
//   }, [visible]);

//   if (!visible) return null;

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-9999 bg-primary flex flex-col items-center justify-center overflow-hidden"
//     >
//       {/* Subtle white grid — same as hero sections */}
//       <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[52px_52px]" />

//       {/* Ambient glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[480px] bg-secondary/50 rounded-full blur-[150px] pointer-events-none" />

//       {/* Content wrapper */}
//       <div
//         ref={wrapRef}
//         className="relative flex flex-col items-center gap-9"
//         style={{ opacity: 0 }}
//       >
//         {/* ── Logo SVG ── */}
//         <svg
//           ref={logoRef}
//           width="240"
//           height="124"
//           viewBox="0 0 70 36"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]"
//         >
//           <path d="M55.5173 2.13402C51.5252 2.13402 48.5234 3.15464 46.5119 5.19588C44.5314 7.26804 43.5411 10.1289 43.5411 13.7784C43.5411 17.4588 44.6552 20.2732 46.8833 22.2217C49.1424 24.1701 52.0049 25.1443 55.4708 25.1443C62.4956 25.1443 65.8687 21.6186 65.5902 14.567H52.5V12.7577C52.5 9.7268 52.8868 7.43815 53.6605 5.89175C54.4341 4.34536 55.7803 3.57217 57.6989 3.57217C61.2887 3.57217 68.8859 10.732 70 14.567V13.9639C69.412 11.7371 63.9346 5.2268 62.3873 3.98969C60.8709 2.75258 58.5809 2.13402 55.5173 2.13402ZM52.5464 15.4948H57.3276V17.768C57.3276 20.2732 57.1729 21.9742 56.8634 22.8711C56.5849 23.799 55.9969 24.2629 55.0995 24.2629C54.233 24.2629 53.5831 23.768 53.1499 22.7784C52.7476 21.8196 52.5464 20.1495 52.5464 17.768V15.4948Z" />
//           <path d="M14.6684 0C12.7498 0 10.9549 0.247425 9.28382 0.742271C7.61273 1.23712 6.25111 2.08763 5.19894 3.29382C4.76569 3.81959 4.40981 4.45361 4.1313 5.19588C3.88373 5.96907 3.75995 6.81959 3.75995 7.74742C3.75995 8.58248 3.86826 9.3866 4.08488 10.1598C4.48718 11.5515 5.22989 12.8041 6.313 13.9175C7.39611 15.0619 8.64943 16.0515 10.0729 16.8866C11.5274 17.7216 12.9819 18.4021 14.4363 18.9278C15.9218 19.4536 17.2524 19.8247 18.4284 20.0412C17.5619 20.1959 16.6645 20.366 15.7361 20.5515C14.8386 20.768 14.0186 21.0773 13.2759 21.4794C12.5332 21.8814 11.9452 22.4536 11.5119 23.1959C8.78868 23.2887 6.57604 23.6598 4.87401 24.3093C3.17197 24.9588 1.93413 25.7474 1.16048 26.6753C0.386826 27.634 0 28.5773 0 29.5052C0 30.5567 0.433245 31.4536 1.29973 32.1959C2.16622 32.9691 3.35765 33.3557 4.87401 33.3557C5.77144 33.3557 6.69982 33.1392 7.65915 32.7062C8.64943 32.3041 9.42308 31.8402 9.98011 31.3144C10.3515 30.9433 10.5371 30.6649 10.5371 30.4794C10.5371 30.3247 10.4288 30.2474 10.2122 30.2474C10.0265 30.2474 9.85632 30.2938 9.70159 30.3866C8.92794 30.8505 8.13882 31.1753 7.33422 31.3608C6.56057 31.5773 5.78691 31.6856 5.01326 31.6856C4.05394 31.6856 3.28028 31.4227 2.69231 30.8969C2.13528 30.4021 1.85676 29.799 1.85676 29.0876C1.85676 28.4381 2.16622 27.7423 2.78515 27C3.40407 26.2887 4.39434 25.6701 5.75597 25.1443C7.1176 24.6186 8.91247 24.2784 11.1406 24.1237C10.9859 24.6804 10.9085 25.2371 10.9085 25.7938C10.9085 27.433 11.2953 28.8402 12.069 30.0155C12.8426 31.2217 13.8484 32.2268 15.0862 33.0309C16.355 33.8351 17.7166 34.4227 19.1711 34.7938C20.6565 35.1959 22.111 35.3969 23.5345 35.3969C25.8245 35.3969 27.6194 34.933 28.9191 34.0052C30.2498 33.0773 30.9151 31.9794 30.9151 30.7113C30.9151 29.5979 30.3272 28.4691 29.1512 27.3247C27.9752 26.2113 26.103 25.268 23.5345 24.4948C20.966 23.7217 17.5928 23.2887 13.4151 23.1959C13.9722 22.5464 14.8077 22.0052 15.9218 21.5722C17.0358 21.1701 18.4593 20.9691 20.1923 20.9691C20.9041 20.9691 21.6777 21 22.5133 21.0619C23.3488 21.1546 24.2462 21.2938 25.2056 21.4794H25.3913C26.2268 21.4794 26.6446 21.1856 26.6446 20.5979C26.6446 20.1031 26.4125 19.5773 25.9483 19.0206C25.515 18.4639 25.1282 18.1856 24.7878 18.1856H24.0915C22.5442 18.1856 20.8731 18.0464 19.0783 17.768C17.3143 17.4897 15.5813 17.0258 13.8793 16.3763C12.1773 15.7268 10.6454 14.8608 9.28382 13.7784C7.92219 12.6959 6.90097 11.3351 6.22016 9.69588C5.81786 8.70619 5.61671 7.82474 5.61671 7.05155C5.61671 6 5.95712 5.18041 6.63793 4.59278C7.34969 4.00515 8.2626 3.58763 9.37666 3.34021C10.4907 3.09278 11.6667 2.96907 12.9045 2.96907C14.1733 2.96907 15.4111 3.04639 16.618 3.20103C17.8559 3.3866 18.8926 3.58763 19.7281 3.80413C21.9562 4.36083 23.9832 5.14949 25.809 6.1701C27.6348 7.22165 28.9501 8.22681 29.7546 9.18557C30.4664 10.0206 30.8223 10.7938 30.8223 11.5052C30.8223 12.2474 30.4664 12.8196 29.7546 13.2216C29.0429 13.6546 28.13 13.8711 27.0159 13.8711C25.5615 13.8711 23.9058 13.4536 22.0491 12.6186C20.1923 11.8144 18.4593 10.4845 16.8501 8.62887C16.5716 8.28866 16.3395 8.11856 16.1539 8.11856C15.9991 8.11856 15.9218 8.21134 15.9218 8.39691C15.9218 8.58247 15.9991 8.81443 16.1539 9.09278C16.3086 9.40206 16.5561 9.75773 16.8966 10.1598C17.8559 11.2423 18.9854 12.1701 20.2851 12.9433C21.6158 13.7165 22.9775 14.3196 24.37 14.7526C25.7626 15.1856 27.0314 15.4021 28.1764 15.4021H28.2692C29.8165 15.4021 30.9925 14.9536 31.7971 14.0567C32.6326 13.1907 33.0504 12.1392 33.0504 10.9021C33.0504 10.1289 32.8957 9.34021 32.5862 8.53609C32.2768 7.73196 31.7971 6.95876 31.1472 6.21649C30.1879 5.10309 28.8572 4.06701 27.1552 3.10825C25.4531 2.18042 23.519 1.43814 21.3528 0.881443C19.2175 0.293816 16.9894 0 14.6684 0ZM12.9045 24.0773H13.0438C16.6026 24.0773 19.4341 24.3557 21.5385 24.9124C23.6737 25.4691 25.2056 26.1649 26.134 27C27.0933 27.8351 27.573 28.6701 27.573 29.5052C27.573 30.4021 27.1088 31.1753 26.1804 31.8247C25.252 32.5052 24.0296 32.8454 22.5133 32.8454C21.4611 32.8454 20.3625 32.6753 19.2175 32.3351C18.0725 32.0258 16.9894 31.5464 15.9682 30.8969C14.9779 30.2784 14.1578 29.5206 13.508 28.6237C12.889 27.7268 12.5796 26.7062 12.5796 25.5619C12.5796 25.0052 12.6879 24.5103 12.9045 24.0773Z" />
//           <path d="M36.0212 1.20619C34.6905 1.20619 33.7312 1.6701 33.1432 2.59794C32.5862 3.49485 32.3077 4.62371 32.3077 5.98454C32.3077 7.46907 32.5862 9.23196 33.1432 11.2732C33.7003 13.3144 34.4275 15.4639 35.3249 17.7216C36.2533 19.9794 37.2591 22.1753 38.3422 24.3093C39.4253 26.4742 40.5084 28.4381 41.5915 30.201C42.6746 31.9639 43.6649 33.3711 44.5623 34.4227C45.4907 35.4742 46.218 36 46.744 36C47.0844 36 47.363 35.799 47.5796 35.3969C47.7962 35.0258 47.9664 34.5619 48.0902 34.0052C48.214 33.4794 48.2759 33 48.2759 32.567C48.2759 31.732 48.0592 30.634 47.626 29.2732C47.2237 27.9433 46.6357 26.4433 45.8621 24.7732C45.1194 23.134 44.2219 21.4639 43.1698 19.7629C42.1485 18.0928 41.019 16.4845 39.7812 14.9381C38.5743 13.3918 37.29 12.0619 35.9284 10.9485C35.7427 10.1134 35.588 9.29382 35.4642 8.48969C35.3714 7.7165 35.3249 6.97423 35.3249 6.26288C35.3249 5.0567 35.4951 4.1598 35.8355 3.57217C36.176 2.98454 36.6866 2.69072 37.3674 2.69072C38.2029 2.69072 39.023 3.06186 39.8276 3.80413C40.6631 4.54639 41.4368 5.47423 42.1485 6.58763C42.8913 7.73196 43.5256 8.90722 44.0517 10.1134L44.748 9.74227C43.5102 7.1134 42.164 5.02577 40.7096 3.47938C39.2551 1.96392 37.6923 1.20619 36.0212 1.20619ZM36.3462 12.5258C37.4293 13.6082 38.4814 14.8454 39.5027 16.2371C40.5239 17.6598 41.4677 19.1289 42.3342 20.6443C43.2317 22.1598 44.0208 23.6289 44.7016 25.0515C45.3824 26.4742 45.9085 27.7423 46.2799 28.8557C46.6512 30 46.8369 30.8814 46.8369 31.5C46.8369 31.8093 46.7905 32.0103 46.6976 32.1031C46.6357 32.1959 46.5738 32.2423 46.5119 32.2423C46.2644 32.2423 45.8311 31.8402 45.2122 31.0361C44.6242 30.2629 43.9279 29.2113 43.1233 27.8814C42.3187 26.5515 41.4987 25.0361 40.6631 23.3351C39.8276 21.634 39.023 19.8557 38.2493 18C37.5066 16.1443 36.8722 14.3196 36.3462 12.5258Z" />
//         </svg>

//         {/* Tagline */}
//         <p
//           className="text-white/45 text-[11px] tracking-[0.4em] uppercase"
//           style={{ opacity: 0 }}
//         >
//           Building brands that dominate
//         </p>

//         {/* Progress bar */}
//         <div className="w-50 sm:w-70 h-px bg-white/15 relative overflow-hidden rounded-full">
//           <div
//             ref={progressFillRef}
//             className="absolute inset-y-0 left-0 bg-white rounded-full"
//             style={{
//               width: "0%",
//               boxShadow: "0 0 10px 1px rgba(255,255,255,0.55)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Exit curtain — sweeps upward to reveal page */}
//       <div
//         ref={curtainRef}
//         className="absolute inset-0 bg-white origin-bottom scale-y-0 pointer-events-none"
//       />
//     </div>
//   );
// }

"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const progressWrapRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("preloader-seen")) return;
    sessionStorage.setItem("preloader-seen", "1");
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const svg = logoRef.current;
    const paths = svg ? [...svg.querySelectorAll<SVGPathElement>("path")] : [];
    if (!svg || paths.length === 0) return;

    // ── Path draw setup ──────────────────────────────────────────────
    paths.forEach((path) => {
      const len = path.getTotalLength();
      gsap.set(path, {
        attr: {
          fill: "transparent",
          stroke: "rgba(167,139,250,0.9)",
          strokeWidth: 0.4,
        },
        strokeDasharray: len,
        strokeDashoffset: len,
      });
    });

    gsap.set(svg, { opacity: 0, scale: 0.82, filter: "blur(8px)" });
    gsap.set(wrapRef.current, { opacity: 1 });
    gsap.set(taglineRef.current, { opacity: 0, y: 12 });
    gsap.set(progressWrapRef.current, { opacity: 0, y: 8 });

    // ── Orb float animation (looping) ───────────────────────────────
    gsap.to(orb1Ref.current, {
      y: -28,
      x: 14,
      duration: 5.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(orb2Ref.current, {
      y: 22,
      x: -18,
      duration: 7,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.2,
    });
    gsap.to(orb3Ref.current, {
      y: -18,
      x: 20,
      duration: 6.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.6,
    });

    // ── Counter animation ────────────────────────────────────────────
    const drawDuration = 0.85;
    const staggerOffset = 0.42;
    const drawEnd = 0.55 + drawDuration + (paths.length - 1) * staggerOffset;
    const totalDuration = drawEnd + 1.6; // approximate total before exit

    let countObj = { val: 0 };
    gsap.to(countObj, {
      val: 100,
      duration: totalDuration * 0.85,
      ease: "power1.inOut",
      delay: 0.3,
      onUpdate: () => {
        setCount(Math.floor(countObj.val));
      },
    });

    // ── Scanline sweep ────────────────────────────────────────────────
    gsap.fromTo(
      scanlineRef.current,
      { top: "-2px", opacity: 0.6 },
      {
        top: "100%",
        opacity: 0,
        duration: 1.8,
        ease: "power1.inOut",
        delay: 0.4,
        repeat: 2,
        repeatDelay: 0.2,
      },
    );

    // ── Main timeline ─────────────────────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // Logo appears with blur clear
    tl.to(svg, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power3.out",
    });

    // Draw paths with violet stroke
    paths.forEach((path, i) => {
      tl.to(
        path,
        { strokeDashoffset: 0, duration: drawDuration },
        `<+=${i * staggerOffset}`,
      );
    });

    // Progress bar fill (synced)
    tl.fromTo(
      progressFillRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: drawEnd - 0.55,
        ease: "power1.inOut",
      },
      0.55,
    );

    // Show progress wrap
    tl.to(progressWrapRef.current, { opacity: 1, y: 0, duration: 0.35 }, 0.4);

    // Fill paths → glowing white
    tl.to(paths, {
      attr: { fill: "rgba(255,255,255,0.97)", strokeWidth: 0 },
      duration: 0.45,
      stagger: 0.07,
    });

    // Add glow to logo
    tl.to(
      svg,
      {
        filter:
          "drop-shadow(0 0 18px rgba(167,139,250,0.7)) drop-shadow(0 0 40px rgba(124,58,237,0.45))",
        duration: 0.4,
      },
      "-=0.2",
    );

    // Tagline reveal
    tl.to(
      taglineRef.current,
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
      "-=0.2",
    );

    // Subtle pulse
    tl.to(svg, { scale: 1.05, duration: 0.22, ease: "power1.out" }).to(svg, {
      scale: 1,
      duration: 0.18,
      ease: "power1.in",
    });

    // Hold
    tl.to({}, { duration: 0.55 });

    // ── Exit ──────────────────────────────────────────────────────────
    // Everything fades up
    tl.to(wrapRef.current, {
      opacity: 0,
      y: -22,
      duration: 0.35,
      ease: "power2.in",
    });

    // Purple curtain sweeps up from bottom
    tl.fromTo(
      curtainRef.current,
      { scaleY: 0, transformOrigin: "bottom" },
      { scaleY: 1, duration: 0.48, ease: "power3.inOut" },
      "-=0.1",
    );

    // Entire overlay slides off top
    tl.to(
      overlayRef.current,
      {
        y: "-100%",
        duration: 0.62,
        ease: "expo.inOut",
        onComplete: () => setVisible(false),
      },
      "-=0.22",
    );
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0d0618 0%, #1a0533 40%, #2d1060 70%, #1a0533 100%)",
      }}
    >
      {/* ── Fine grid overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Noise grain ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── Scanline sweep ── */}
      <div
        ref={scanlineRef}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(88,28,220,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb3Ref}
        style={{
          position: "absolute",
          top: "55%",
          left: "55%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,130,250,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Decorative corner brackets ── */}
      {/* Top-left */}
      <div
        style={{
          position: "absolute",
          top: 28,
          left: 28,
          pointerEvents: "none",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M0 18 L0 0 L18 0"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      {/* Top-right */}
      <div
        style={{
          position: "absolute",
          top: 28,
          right: 28,
          pointerEvents: "none",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M36 18 L36 0 L18 0"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      {/* Bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 28,
          pointerEvents: "none",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M0 18 L0 36 L18 36"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      {/* Bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 28,
          pointerEvents: "none",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M36 18 L36 36 L18 36"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ── Counter — top right ── */}
      <div
        style={{
          position: "absolute",
          top: 32,
          right: 72,
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          color: "rgba(167,139,250,0.55)",
        }}
      >
        <span ref={counterRef}>{count}</span>
        <span style={{ opacity: 0.4 }}>%</span>
      </div>

      {/* ── Small brand label — top left ── */}
      <div
        style={{
          position: "absolute",
          top: 34,
          left: 72,
          fontFamily: "'Courier New', monospace",
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "rgba(167,139,250,0.4)",
          textTransform: "uppercase",
        }}
      >
        EleVate Studio
      </div>

      {/* ── Main content ── */}
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          opacity: 0,
        }}
      >
        {/* Logo */}
        <svg
          ref={logoRef}
          width="260"
          height="134"
          viewBox="0 0 70 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M55.5173 2.13402C51.5252 2.13402 48.5234 3.15464 46.5119 5.19588C44.5314 7.26804 43.5411 10.1289 43.5411 13.7784C43.5411 17.4588 44.6552 20.2732 46.8833 22.2217C49.1424 24.1701 52.0049 25.1443 55.4708 25.1443C62.4956 25.1443 65.8687 21.6186 65.5902 14.567H52.5V12.7577C52.5 9.7268 52.8868 7.43815 53.6605 5.89175C54.4341 4.34536 55.7803 3.57217 57.6989 3.57217C61.2887 3.57217 68.8859 10.732 70 14.567V13.9639C69.412 11.7371 63.9346 5.2268 62.3873 3.98969C60.8709 2.75258 58.5809 2.13402 55.5173 2.13402ZM52.5464 15.4948H57.3276V17.768C57.3276 20.2732 57.1729 21.9742 56.8634 22.8711C56.5849 23.799 55.9969 24.2629 55.0995 24.2629C54.233 24.2629 53.5831 23.768 53.1499 22.7784C52.7476 21.8196 52.5464 20.1495 52.5464 17.768V15.4948Z" />
          <path d="M14.6684 0C12.7498 0 10.9549 0.247425 9.28382 0.742271C7.61273 1.23712 6.25111 2.08763 5.19894 3.29382C4.76569 3.81959 4.40981 4.45361 4.1313 5.19588C3.88373 5.96907 3.75995 6.81959 3.75995 7.74742C3.75995 8.58248 3.86826 9.3866 4.08488 10.1598C4.48718 11.5515 5.22989 12.8041 6.313 13.9175C7.39611 15.0619 8.64943 16.0515 10.0729 16.8866C11.5274 17.7216 12.9819 18.4021 14.4363 18.9278C15.9218 19.4536 17.2524 19.8247 18.4284 20.0412C17.5619 20.1959 16.6645 20.366 15.7361 20.5515C14.8386 20.768 14.0186 21.0773 13.2759 21.4794C12.5332 21.8814 11.9452 22.4536 11.5119 23.1959C8.78868 23.2887 6.57604 23.6598 4.87401 24.3093C3.17197 24.9588 1.93413 25.7474 1.16048 26.6753C0.386826 27.634 0 28.5773 0 29.5052C0 30.5567 0.433245 31.4536 1.29973 32.1959C2.16622 32.9691 3.35765 33.3557 4.87401 33.3557C5.77144 33.3557 6.69982 33.1392 7.65915 32.7062C8.64943 32.3041 9.42308 31.8402 9.98011 31.3144C10.3515 30.9433 10.5371 30.6649 10.5371 30.4794C10.5371 30.3247 10.4288 30.2474 10.2122 30.2474C10.0265 30.2474 9.85632 30.2938 9.70159 30.3866C8.92794 30.8505 8.13882 31.1753 7.33422 31.3608C6.56057 31.5773 5.78691 31.6856 5.01326 31.6856C4.05394 31.6856 3.28028 31.4227 2.69231 30.8969C2.13528 30.4021 1.85676 29.799 1.85676 29.0876C1.85676 28.4381 2.16622 27.7423 2.78515 27C3.40407 26.2887 4.39434 25.6701 5.75597 25.1443C7.1176 24.6186 8.91247 24.2784 11.1406 24.1237C10.9859 24.6804 10.9085 25.2371 10.9085 25.7938C10.9085 27.433 11.2953 28.8402 12.069 30.0155C12.8426 31.2217 13.8484 32.2268 15.0862 33.0309C16.355 33.8351 17.7166 34.4227 19.1711 34.7938C20.6565 35.1959 22.111 35.3969 23.5345 35.3969C25.8245 35.3969 27.6194 34.933 28.9191 34.0052C30.2498 33.0773 30.9151 31.9794 30.9151 30.7113C30.9151 29.5979 30.3272 28.4691 29.1512 27.3247C27.9752 26.2113 26.103 25.268 23.5345 24.4948C20.966 23.7217 17.5928 23.2887 13.4151 23.1959C13.9722 22.5464 14.8077 22.0052 15.9218 21.5722C17.0358 21.1701 18.4593 20.9691 20.1923 20.9691C20.9041 20.9691 21.6777 21 22.5133 21.0619C23.3488 21.1546 24.2462 21.2938 25.2056 21.4794H25.3913C26.2268 21.4794 26.6446 21.1856 26.6446 20.5979C26.6446 20.1031 26.4125 19.5773 25.9483 19.0206C25.515 18.4639 25.1282 18.1856 24.7878 18.1856H24.0915C22.5442 18.1856 20.8731 18.0464 19.0783 17.768C17.3143 17.4897 15.5813 17.0258 13.8793 16.3763C12.1773 15.7268 10.6454 14.8608 9.28382 13.7784C7.92219 12.6959 6.90097 11.3351 6.22016 9.69588C5.81786 8.70619 5.61671 7.82474 5.61671 7.05155C5.61671 6 5.95712 5.18041 6.63793 4.59278C7.34969 4.00515 8.2626 3.58763 9.37666 3.34021C10.4907 3.09278 11.6667 2.96907 12.9045 2.96907C14.1733 2.96907 15.4111 3.04639 16.618 3.20103C17.8559 3.3866 18.8926 3.58763 19.7281 3.80413C21.9562 4.36083 23.9832 5.14949 25.809 6.1701C27.6348 7.22165 28.9501 8.22681 29.7546 9.18557C30.4664 10.0206 30.8223 10.7938 30.8223 11.5052C30.8223 12.2474 30.4664 12.8196 29.7546 13.2216C29.0429 13.6546 28.13 13.8711 27.0159 13.8711C25.5615 13.8711 23.9058 13.4536 22.0491 12.6186C20.1923 11.8144 18.4593 10.4845 16.8501 8.62887C16.5716 8.28866 16.3395 8.11856 16.1539 8.11856C15.9991 8.11856 15.9218 8.21134 15.9218 8.39691C15.9218 8.58247 15.9991 8.81443 16.1539 9.09278C16.3086 9.40206 16.5561 9.75773 16.8966 10.1598C17.8559 11.2423 18.9854 12.1701 20.2851 12.9433C21.6158 13.7165 22.9775 14.3196 24.37 14.7526C25.7626 15.1856 27.0314 15.4021 28.1764 15.4021H28.2692C29.8165 15.4021 30.9925 14.9536 31.7971 14.0567C32.6326 13.1907 33.0504 12.1392 33.0504 10.9021C33.0504 10.1289 32.8957 9.34021 32.5862 8.53609C32.2768 7.73196 31.7971 6.95876 31.1472 6.21649C30.1879 5.10309 28.8572 4.06701 27.1552 3.10825C25.4531 2.18042 23.519 1.43814 21.3528 0.881443C19.2175 0.293816 16.9894 0 14.6684 0ZM12.9045 24.0773H13.0438C16.6026 24.0773 19.4341 24.3557 21.5385 24.9124C23.6737 25.4691 25.2056 26.1649 26.134 27C27.0933 27.8351 27.573 28.6701 27.573 29.5052C27.573 30.4021 27.1088 31.1753 26.1804 31.8247C25.252 32.5052 24.0296 32.8454 22.5133 32.8454C21.4611 32.8454 20.3625 32.6753 19.2175 32.3351C18.0725 32.0258 16.9894 31.5464 15.9682 30.8969C14.9779 30.2784 14.1578 29.5206 13.508 28.6237C12.889 27.7268 12.5796 26.7062 12.5796 25.5619C12.5796 25.0052 12.6879 24.5103 12.9045 24.0773Z" />
          <path d="M36.0212 1.20619C34.6905 1.20619 33.7312 1.6701 33.1432 2.59794C32.5862 3.49485 32.3077 4.62371 32.3077 5.98454C32.3077 7.46907 32.5862 9.23196 33.1432 11.2732C33.7003 13.3144 34.4275 15.4639 35.3249 17.7216C36.2533 19.9794 37.2591 22.1753 38.3422 24.3093C39.4253 26.4742 40.5084 28.4381 41.5915 30.201C42.6746 31.9639 43.6649 33.3711 44.5623 34.4227C45.4907 35.4742 46.218 36 46.744 36C47.0844 36 47.363 35.799 47.5796 35.3969C47.7962 35.0258 47.9664 34.5619 48.0902 34.0052C48.214 33.4794 48.2759 33 48.2759 32.567C48.2759 31.732 48.0592 30.634 47.626 29.2732C47.2237 27.9433 46.6357 26.4433 45.8621 24.7732C45.1194 23.134 44.2219 21.4639 43.1698 19.7629C42.1485 18.0928 41.019 16.4845 39.7812 14.9381C38.5743 13.3918 37.29 12.0619 35.9284 10.9485C35.7427 10.1134 35.588 9.29382 35.4642 8.48969C35.3714 7.7165 35.3249 6.97423 35.3249 6.26288C35.3249 5.0567 35.4951 4.1598 35.8355 3.57217C36.176 2.98454 36.6866 2.69072 37.3674 2.69072C38.2029 2.69072 39.023 3.06186 39.8276 3.80413C40.6631 4.54639 41.4368 5.47423 42.1485 6.58763C42.8913 7.73196 43.5256 8.90722 44.0517 10.1134L44.748 9.74227C43.5102 7.1134 42.164 5.02577 40.7096 3.47938C39.2551 1.96392 37.6923 1.20619 36.0212 1.20619ZM36.3462 12.5258C37.4293 13.6082 38.4814 14.8454 39.5027 16.2371C40.5239 17.6598 41.4677 19.1289 42.3342 20.6443C43.2317 22.1598 44.0208 23.6289 44.7016 25.0515C45.3824 26.4742 45.9085 27.7423 46.2799 28.8557C46.6512 30 46.8369 30.8814 46.8369 31.5C46.8369 31.8093 46.7905 32.0103 46.6976 32.1031C46.6357 32.1959 46.5738 32.2423 46.5119 32.2423C46.2644 32.2423 45.8311 31.8402 45.2122 31.0361C44.6242 30.2629 43.9279 29.2113 43.1233 27.8814C42.3187 26.5515 41.4987 25.0361 40.6631 23.3351C39.8276 21.634 39.023 19.8557 38.2493 18C37.5066 16.1443 36.8722 14.3196 36.3462 12.5258Z" />
        </svg>

        {/* Tagline */}
        <p
          ref={taglineRef}
          style={{
            color: "rgba(196,181,253,0.65)",
            fontSize: 10,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            fontFamily: "'Courier New', monospace",
          }}
          className="px-5 text-center"
        >
          Your Digital Experiences That Move People
        </p>

        {/* Progress bar */}
        <div
          ref={progressWrapRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            width: 240,
          }}
        >
          {/* Bar track */}
          <div
            style={{
              width: "100%",
              height: 1,
              background: "rgba(167,139,250,0.15)",
              borderRadius: 999,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glowing fill */}
            <div
              ref={progressFillRef}
              style={{
                position: "absolute",
                inset: "0 auto 0 0",
                width: "0%",
                background:
                  "linear-gradient(90deg, rgba(124,58,237,0.8), rgba(196,130,250,1))",
                borderRadius: 999,
                boxShadow: "0 0 12px 2px rgba(167,139,250,0.7)",
              }}
            />
          </div>

          {/* Loading label */}
          <span
            style={{
              color: "rgba(167,139,250,0.35)",
              fontSize: 9,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontFamily: "'Courier New', monospace",
            }}
          >
            Loading
          </span>
        </div>
      </div>

      {/* ── Exit curtain: deep purple sweeps up then page reveals ── */}
      <div
        ref={curtainRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #1a0533 0%, #4c1d95 100%)",
          transformOrigin: "bottom",
          transform: "scaleY(0)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
