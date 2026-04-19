"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for clean sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      //  About Us (bottom → up)
      tl.from(".g-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

        //  Description (left → right)
        .from(
          ".g-desc",
          {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )

        //  Expectations (draw feel)
        .from(
          ".g-sign",
          {
            x: -120,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.7",
        );

      // SVG LINE DRAW ANIMATION
      gsap.utils.toArray(".g-line").forEach((line: any) => {
        const length = line?.getTotalLength();

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(line, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        });
      });

      // Number + badge animation
      gsap.from(".g-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".g-item",
          start: "top 85%",
        },
      });

      gsap.from(".g-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".g-badge",
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="about-bg relative overflow-hidden text-center z-0 gradient-bg"
      style={{
        backgroundImage: "url('/images/about-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",

        marginTop: "-566px",
        paddingTop: "320px",
        minHeight: "1100px",
        width: "100%",
      }}

      //  className="gradient-bg"
      //   style={{
      //     backgroundColor: "#ffffff",
      //     backgroundImage: `repeating-linear-gradient(
      //     to right,
      //     rgb(255 254 254 / 0%),
      //     rgb(219 219 219 / 55%) 54%,
      //     rgb(255 255 255 / 5%) 103%
      //   )`,
      //     backgroundSize: "59px 2%",
      //   }}
    >
      <img
        src="./images/about.png"
        className="absolute xl:bottom-0 xl:right-0 2xl:bottom-0 2xl:right-0 z-20"
      />

      {/* ABOUT */}
      <div className="xl:mt-43 2xl:mt-43">
        <h2 className="g-title text-3xl md:text-[45px] font-semibold text-primary mb-3">
          About Us
        </h2>

        <p className="g-desc xl:max-w-178 2xl:max-w-187.5 mx-auto text-base md:text-[28px] font-medium text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] leading-none tracking-wide">
          We bring your ideas to life. Driven by creativity and a sharp eye for
          design, we deliver stunning results that exceed .
        </p>

        <p className="g-sign font-signature text-[100px] font-medium text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] -mt-8">
          Expectations
        </p>
      </div>

      <div className="relative z-10 mx-auto pl-10 pb-32 text-left text-white max-w-205.75 -mt-5.5">
        {/* ITEM 1 */}
        <div className="g-item relative">
          <div className="absolute top-3.25 left-6.25 flex items-start gap-1">
            <h3 className="text-[56px] font-bold leading-none">05</h3>
            <span className="text-[15px] font-semibold tracking-widest text-white -mt-2">
              Year
            </span>
          </div>

          <div>
            <svg
              width="30"
              height="100"
              viewBox="0 0 30 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="g-line" d="M0.5 0V99H29.5" stroke="white" />
            </svg>
            <span className="g-badge absolute -bottom-3 left-5 inline-block text-[12px] px-4 py-1 rounded-[15px] bg-white text-primary font-semibold shadow-[0px_4px_3.1px_rgba(0,0,0,0.25)]">
              Experience
            </span>
          </div>
        </div>
        {/* ITEM 2 */}
        <div className="absolute top-22 left-48">
          <div className="g-item relative">
            <div className=" absolute top-3.25 left-6.25 flex items-start gap-1">
              <h3 className="text-[56px] font-bold leading-none">17</h3>
              <span className="text-[15px] font-semibold tracking-widest text-white -mt-2">
                Countries
              </span>
            </div>

            <div>
              <svg
                width="30"
                height="100"
                viewBox="0 0 30 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="g-line" d="M0.5 0V99H29.5" stroke="white" />
              </svg>
              <span className="g-badge absolute -bottom-3 left-5 inline-block text-[12px] px-4 py-1 rounded-[15px] bg-white text-primary font-semibold shadow-[0px_4px_3.1px_rgba(0,0,0,0.25)] text-nowrap">
                Work Across
              </span>
            </div>
          </div>
        </div>

        {/* ITEM 3 */}

        <div className="g-item absolute top-44 left-88">
          <div className="relative">
            <div className="absolute top-3.25 left-6.25 flex items-start gap-1">
              <h3 className="text-[56px] font-bold leading-none">50</h3>
              <span className="text-[15px] font-semibold tracking-widest text-white -mt-2">
                Projects
              </span>
            </div>

            <div>
              <svg
                width="30"
                height="100"
                viewBox="0 0 30 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="g-line" d="M0.5 0V99H29.5" stroke="white" />
              </svg>
              <span className="g-badge absolute -bottom-3 left-5 inline-block text-[12px] px-4 py-1 rounded-[15px] bg-white text-primary font-semibold shadow-[0px_4px_3.1px_rgba(0,0,0,0.25)]">
                Over
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* glow */}
      <div className="absolute inset-0 z-2 pointer-events-none bg-[radial-gradient(ellipse_65%_45%_at_50%_85%,rgba(109,40,217,0.38)_0%,transparent_72%)]" />
    </section>
  );
}
