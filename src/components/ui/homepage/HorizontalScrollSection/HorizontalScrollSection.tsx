"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import SlideFive from "./Slides/SlideFive";
import SlideFour from "./Slides/SlideFour";
import SlideOne from "./Slides/SlideOne";
import SlideSix from "./Slides/SlideSix";
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
      const scrollDistance = totalWidth - viewportWidth;

      // Horizontal scroll
      const horizontalAnim = gsap.to(slider, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Scoped slides (IMPORTANT FIX)
      const slides = gsap.utils.toArray<HTMLElement>(".w-screen", section);

      slides.forEach((slide) => {
        const title = slide.querySelector(".slide-title");
        const desc = slide.querySelector(".slide-desc");
        const visual = slide.querySelector(".slide-visual");
        const step = slide.querySelector(".step-image");
        const statue = slide.querySelector(".statue-image");
        const line = slide.querySelector(
          ".vector-line",
        ) as SVGPathElement | null;
        const path = slide.querySelector(
          "path.vector-line",
        ) as SVGPathElement | null;

        //  Skip invalid slides completely
        if (!title || !desc) return;

        // ---------------------------
        //  SVG line animation
        // ---------------------------
        if (line) {
          const length = line.getTotalLength?.() ?? 0;

          gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: -length,
          });

          gsap.to(line, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          });
        }

        if (path) {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "left center",
              end: "right center",
              scrub: 1.5,
            },
          });
        }

        // ---------------------------
        //  Step animation
        // ---------------------------
        if (step) {
          gsap.set(step, { y: 120, opacity: 0, rotate: -10 });

          gsap.to(step, {
            y: 0,
            opacity: 1,
            rotate: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "left center",
              end: "center center",
              scrub: 1,
            },
          });

          gsap.to(step, {
            y: -100,
            opacity: 0,
            rotate: 10,
            ease: "power2.in",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "center center",
              end: "right center",
              scrub: 1,
            },
          });
        }

        // ---------------------------
        //  Visual + statue timeline
        // ---------------------------
        if (visual && statue) {
          gsap.set([visual, statue], {
            opacity: 0,
            y: 100,
            scale: 0.9,
          });

          const tlVisual = gsap.timeline({
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "left center",
              end: "right center",
              scrub: 1.2,
            },
          });

          tlVisual
            .to([visual, statue], {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "power3.out",
              duration: 0.6,
              stagger: 0.1,
            })
            .to({}, { duration: 0.3 }) // hold
            .to([visual, statue], {
              opacity: 0,
              y: 150,
              scale: 0.9,
              ease: "power2.inOut",
              duration: 0.6,
              stagger: 0.1,
            });
        }

        // ---------------------------
        //  Text animation
        // ---------------------------
        gsap.set([title, desc], { y: 100, opacity: 0 });

        const tlText = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            containerAnimation: horizontalAnim,
            start: "left center",
            end: "right center",
            scrub: 1,
          },
        });

        tlText
          .to(title, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power4.out",
          })
          .to(
            desc,
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.3",
          )
          .to(
            [title, desc],
            {
              y: -80,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            "+=0.2",
          );

        // ---------------------------
        //  Visual scale animation
        // ---------------------------
        if (visual) {
          gsap.set(visual, { scale: 0.85, opacity: 0 });

          gsap.to(visual, {
            scale: 1,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "left center",
              end: "center center",
              scrub: 1,
            },
          });

          gsap.to(visual, {
            scale: 0.85,
            opacity: 0,
            ease: "power2.in",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalAnim,
              start: "center center",
              end: "right center",
              scrub: 1,
            },
          });
        }
      });

      //  Safe refresh
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90%] overflow-hidden mt-18"
    >
      <div ref={sliderRef} className="flex w-max will-change-transform">
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
        <SlideFive />
        <SlideSix />
      </div>
    </section>
  );
}
