"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SlideOne from "./Slides/SlideOne";
import SlideThree from "./Slides/SlideThree";
import SlideTwo from "./Slides/SlideTwo";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const slider = sliderRef.current;

      if (!section || !slider) return;

      const totalWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(slider, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth - viewportWidth}`, // ✅ FIXED
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      ScrollTrigger.refresh(); // ✅ VERY IMPORTANT
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div ref={sliderRef} className="flex w-max">
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </div>
    </section>
  );
}
