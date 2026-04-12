"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function CurvedSliderGSAP() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const CARDS = [
    "/images/designImage/1.png",
    "/images/designImage/2.png",
    "/images/designImage/3.png",
    "/images/designImage/4.png",
    "/images/designImage/5.png",
    "/images/designImage/6.png",
    "/images/designImage/7.png",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sliderRef.current) return;

      const totalWidth = sliderRef.current.scrollWidth / 2;

      gsap.to(".slider-track", {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative py-20 bg-white overflow-hidden">
      <div className="curved-swiper">
        <div ref={sliderRef} className="slider-track flex gap-5 w-max">
          {[...CARDS, ...CARDS].map((src, i) => (
            <div key={i} className="w-[250px] shrink-0">
              <img
                src={src}
                className="w-full h-[390px] object-contain rounded-lg"
                alt={`design ${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
