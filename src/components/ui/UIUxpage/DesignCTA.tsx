"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DesignCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.from(".dcta-heading", {
        y: 60,
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)",
        transformOrigin: "center center",
        duration: 1.2,
      })
        .from(".dcta-copy", { y: 24, opacity: 0 }, "-=0.55")
        .from(
          [".dcta-img-1", ".dcta-img-2", ".dcta-img-3"],
          { y: 34, opacity: 0, stagger: 0.14, duration: 1.05 },
          "-=0.45",
        );
      tl.from(
        ".dcta-line",
        {
          y: 80,
          opacity: 0,
          filter: "blur(8px)",
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
        },
        0,
      );

      // Subtle continuous float to keep the collage alive.
      // gsap.to([".dcta-img-1", ".dcta-img-2", ".dcta-img-3"], {
      //   y: -8,
      //   duration: 2.4,
      //   ease: "sine.inOut",
      //   repeat: -1,
      //   yoyo: true,
      //   stagger: {
      //     each: 0.18,
      //     from: "random",
      //   },
      // });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-16 sm:pt-20 md:pt-16 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-40"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5.25 order-2 lg:order-1 group">
            {/* LEFT — Statue image */}
            <div className="dcta-img-1 w-[56%] sm:w-[54%] md:w-[43%] lg:w-[55%] relative flex items-center justify-center">
              <Image
                src="/images/uiux/business1.png"
                alt="Creative Identity"
                width={520}
                height={520}
                sizes="(max-width: 639px) 48vw, (max-width: 1023px) 38vw, 30vw"
                className="relative z-10 h-auto w-full rounded-tr-[70px] object-contain drop-shadow-2xl transition-all duration-500 ease-out sm:rounded-tr-[90px] lg:rounded-tr-[120px] hover:z-20 hover:scale-103 hover:opacity-100"
              />
            </div>
            <div className="w-[44%] sm:w-[46%] md:w-[34%] lg:w-[45%] space-y-3 sm:space-y-4 lg:space-y-10">
              <div className="dcta-img-2 w-full relative flex items-end justify-center">
                <Image
                  src="/images/uiux/business2.png"
                  alt="Creative Identity"
                  width={520}
                  height={520}
                  sizes="(max-width: 639px) 38vw, (max-width: 1023px) 30vw, 24vw"
                  className="relative z-10 h-auto w-full rounded-tl-[58px] object-contain drop-shadow-2xl transition-all duration-500 ease-out sm:rounded-tl-[75px] lg:rounded-tl-[100px] hover:z-20 hover:scale-103  hover:opacity-100"
                />
              </div>
              <div className="dcta-img-3 w-full relative flex items-end justify-center">
                <Image
                  src="/images/uiux/business3.png"
                  alt="Creative Identity"
                  width={520}
                  height={520}
                  sizes="(max-width: 639px) 38vw, (max-width: 1023px) 30vw, 24vw"
                  className="relative z-10 h-auto w-full rounded-br-[58px] object-contain drop-shadow-2xl transition-all duration-500 ease-out sm:rounded-br-[75px] lg:rounded-br-[100px] hover:z-20 hover:scale-103 hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div className="w-full flex flex-col order-1 lg:order-2 text-center lg:text-left mt-10">
            <div className="dcta-heading font-semibold text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.05]">
              <p className="dcta-line mb-1">Good Design is</p>

              <p className="dcta-line text-primary -mt-2 sm:-mt-3 lg:-mt-2">
                Good{" "}
                <span className="font-signature font-normal dcta-line">
                  Business
                </span>
              </p>
            </div>

            <p className="dcta-copy text-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4 sm:mt-5 lg:mt-2 mb-0 font-medium">
              A confusing website kills your sales. If users can't find what
              they need in 3 seconds, they leave. By making the buying process
              easy and beautiful, our UI/UX solutions directly increase your
              sales, stop customers from leaving, and maximize your ROI. It’s an
              investment, not an expense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
