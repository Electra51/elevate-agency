"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function DeepDive() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineWrapRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const positionTimelineLine = () => {
    //   if (
    //     !timelineWrapRef.current ||
    //     !firstDotRef.current ||
    //     !lastDotRef.current ||
    //     !timelineLineRef.current
    //   )
    //     return;

    //   const wrapRect = timelineWrapRef.current.getBoundingClientRect();
    //   const firstRect = firstDotRef.current.getBoundingClientRect();
    //   const lastRect = lastDotRef.current.getBoundingClientRect();

    //   const top = firstRect.top - wrapRect.top + firstRect.height / 2;
    //   const height =
    //     lastRect.top +
    //     lastRect.height / 2 -
    //     (firstRect.top + firstRect.height / 2);

    //   timelineLineRef.current.style.top = `${top}px`;
    //   timelineLineRef.current.style.height = `${Math.max(height, 0)}px`;
    // };
    const positionTimelineLine = () => {
      if (
        !timelineWrapRef.current ||
        !firstDotRef.current ||
        !lastDotRef.current ||
        !timelineLineRef.current
      )
        return;

      const wrapRect = timelineWrapRef.current.getBoundingClientRect();
      const firstRect = firstDotRef.current.getBoundingClientRect();
      const lastRect = lastDotRef.current.getBoundingClientRect();

      const top = firstRect.top - wrapRect.top + firstRect.height / 2;
      const height =
        lastRect.top +
        lastRect.height / 2 -
        (firstRect.top + firstRect.height / 2); // ← fixed

      timelineLineRef.current.style.top = `${top}px`;
      timelineLineRef.current.style.height = `${Math.max(height, 0)}px`;
    };
    const rafReposition = () =>
      window.requestAnimationFrame(positionTimelineLine);

    positionTimelineLine();
    rafReposition();
    window.addEventListener("resize", positionTimelineLine);
    window.addEventListener("load", rafReposition);

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refresh", positionTimelineLine);

    const resizeObserver = new ResizeObserver(() => {
      positionTimelineLine();
      ScrollTrigger.refresh();
    });

    if (timelineWrapRef.current)
      resizeObserver.observe(timelineWrapRef.current);

    const ctx = gsap.context(() => {
      /* ── Section header ── */
      gsap.from(".dd-header", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      /* ── Background blob parallax ── */
      gsap.utils.toArray<HTMLElement>(".dd-blob").forEach((blob, i) => {
        gsap.to(blob, {
          y: i % 2 === 0 ? -120 : 120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      /* ── Per-step: dot highlight + text/image reveal + parallax ── */
      gsap.utils.toArray<HTMLElement>(".dd-step").forEach((step) => {
        const dot = step.querySelector<HTMLElement>(".dd-dot");
        const numSpan = step.querySelector<HTMLElement>(".dd-dot-num");
        const text = step.querySelector<HTMLElement>(".dd-text");
        const imageWrapper = step.querySelector<HTMLElement>(".dd-image");
        const imageInner = step.querySelector<HTMLElement>(".dd-image-inner");

        /* ── DOT ACTIVE STATE on scroll ── */
        if (dot && numSpan) {
          ScrollTrigger.create({
            trigger: step,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => {
              dot.style.backgroundColor = "#4504DF";
              dot.style.borderColor = "#4504DF";
              numSpan.style.color = "#ffffff";
            },
            onLeave: () => {
              dot.style.backgroundColor = "#ffffff";
              dot.style.borderColor = "#4504DF";
              numSpan.style.color = "#374151";
            },
            onEnterBack: () => {
              dot.style.backgroundColor = "#4504DF";
              dot.style.borderColor = "#4504DF";
              numSpan.style.color = "#ffffff";
            },
            onLeaveBack: () => {
              dot.style.backgroundColor = "#ffffff";
              dot.style.borderColor = "#4504DF";
              numSpan.style.color = "#374151";
            },
          });
        }

        /* ── IMAGE PARALLAX: inner image moves slower than scroll ── */
        if (imageInner && imageWrapper) {
          gsap.fromTo(
            imageInner,
            { y: -40 },
            {
              y: 40,
              ease: "none",
              scrollTrigger: {
                trigger: imageWrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            },
          );
        }

        /* ── TEXT SUBTLE PARALLAX: moves slightly upward as you scroll ── */
        if (text) {
          gsap.fromTo(
            text,
            { y: 20 },
            {
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            },
          );
        }

        /* Text + image staggered reveal */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        });

        if (text) {
          /* Stagger inner children: number badge, h3, p */
          const kids = text.querySelectorAll(".dd-anim");
          tl.from(kids, { y: 32, opacity: 0, duration: 0.7, stagger: 0.12 });
        }
        if (imageWrapper) {
          tl.from(imageWrapper, { y: 28, opacity: 0, duration: 0.8 }, "-=0.45");
        }
      });
    }, sectionRef);

    return () => {
      window.removeEventListener("resize", positionTimelineLine);
      window.removeEventListener("load", rafReposition);
      ScrollTrigger.removeEventListener("refresh", positionTimelineLine);
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-10 overflow-hidden">
      {/* ── Decorative background blobs for parallax depth ── */}
      <div
        className="dd-blob absolute -top-24 -left-32 w-105 h-105 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(69,4,223,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="dd-blob absolute top-1/2 -right-40 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,187,255,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="dd-blob absolute bottom-0 left-1/3 w-87.5 h-87.5 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(69,4,223,0.06) 0%, transparent 70%)",
          filter: "blur(35px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="dd-header flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-[34px] sm:text-[44px] md:text-[56px] text-primary">
            The Deep <span className="font-signature">Dive</span>
          </h2>
        </div>

        {/* Timeline + Steps */}
        <div
          ref={timelineWrapRef}
          className="relative flex flex-col gap-y-12 sm:gap-y-10 md:gap-y-10 lg:gap-y-8 xl:gap-y-6"
        >
          <div
            ref={timelineLineRef}
            className="hidden md:block absolute left-4.25 w-0.5 origin-top z-0"
            style={{
              background:
                "linear-gradient(to bottom, #4504DF 0%, #4504df 100%)",
            }}
          />

          <div className="dd-step">
            <div className="relative flex items-start gap-6 lg:gap-20">
              <div className="hidden md:flex w-9 shrink-0 items-center justify-center z-10">
                <div
                  ref={firstDotRef}
                  className="md:mt-39.5 lg:mt-57.5 dd-dot w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#4504DF" }}
                >
                  <span
                    className="dd-dot-num text-[13px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    1
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8 lg:gap-12 items-center md:flex-row">
                <div className="dd-text w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="dd-anim md:hidden text-[45px] font-black leading-none tracking-tighter text-[#8872bbc5] select-none -mb-2">
                    01.
                  </span>
                  <h3 className="dd-anim text-[32px] sm:text-[39px] md:text-[34px] lg:text-[44px] xl:text-[48px] font-semibold leading-none tracking-tight mb-5">
                    Digital Presence &{" "}
                    <span className="font-signature font-normal text-primary text-[48px] md:text-[58px] lg:text-[68px] leading-[0.8]">
                      Branding
                    </span>
                  </h3>
                  <p className="dd-anim text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-2xl font-medium">
                    We analyze your market, study your competitors, and craft a
                    data-backed blueprint tailored specifically to your business
                    goals.
                  </p>
                </div>
                <div className="dd-image w-full lg:w-1/2 relative flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="/images/how-we-do-it/branding.png"
                    alt="Digital Presence & Branding"
                    className="dd-image-inner relative z-10 sm:w-[65%] md:w-full sm:object-container md:object-cover hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dd-step">
            <div className="relative flex items-start gap-6 lg:gap-20">
              <div className="hidden md:flex w-9 shrink-0 items-center justify-center z-10">
                <div
                  className="md:mt-39.5 lg:mt-57.5 dd-dot w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#4504DF" }}
                >
                  <span
                    className="dd-dot-num text-[13px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    2
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8 lg:gap-16 items-center md:flex-row-reverse">
                <div className="dd-text w-full lg:w-1/2 flex flex-col justify-center items-end">
                  <span className="dd-anim md:hidden text-[45px] font-black leading-none tracking-tighter text-[#8872bbc5] select-none -mb-2">
                    02.
                  </span>
                  <h3 className="dd-anim text-[32px] sm:text-[39px] md:text-[34px] lg:text-[44px] xl:text-[48px] font-semibold leading-none tracking-tight -mb-1">
                    Discovery &
                  </h3>
                  <span className="text-right font-signature font-normal text-primary text-[48px] md:text-[58px] lg:text-[68px] leading-[0.8]">
                    Strategy
                  </span>
                  <p className="dd-anim text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-2xl font-medium text-end mt-3">
                    First impressions dictate the journey. We build a
                    scroll-stopping digital storefront across your website and
                    social channels to ensure your brand looks the part before
                    anyone even clicks.
                  </p>
                </div>
                <div className="dd-image w-full lg:w-1/2 relative flex items-center justify-center  rounded-2xl overflow-hidden">
                  <img
                    src="/images/how-we-do-it/strategy.png"
                    alt="Discovery & Strategy"
                    className="dd-image-inner relative z-10 sm:w-[65%] md:w-full sm:object-container md:object-cover hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dd-step">
            <div className="relative flex items-start gap-6 lg:gap-20">
              <div className="hidden md:flex w-9 shrink-0 items-center justify-center z-10">
                <div
                  className="md:mt-39.5 lg:mt-57.5 dd-dot w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#4504DF" }}
                >
                  <span
                    className="dd-dot-num text-[13px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    3
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8 lg:gap-16 items-center md:flex-row">
                <div className="dd-text w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="dd-anim md:hidden text-[45px] font-black leading-none tracking-tighter text-[#8872bbc5] select-none -mb-2">
                    03.
                  </span>
                  <h3 className="dd-anim text-[32px] sm:text-[39px] md:text-[34px] lg:text-[44px] xl:text-[48px] font-semibold leading-none tracking-tight -mb-2">
                    Awareness &{" "}
                  </h3>
                  <span className="font-signature font-normal text-primary text-[48px] md:text-[58px] lg:text-[68px] leading-[0.8]">
                    Reach
                  </span>
                  <p className="dd-anim text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-2xl font-medium  mt-3">
                    We don&apos;t just chase views; we chase the right eyes.
                    Through highly targeted campaigns, we introduce your brand
                    to an audience that is actually primed to love your product.
                  </p>
                </div>
                <div className="dd-image w-full lg:w-1/2 relative flex items-center justify-center  rounded-2xl overflow-hidden">
                  <img
                    src="/images/how-we-do-it/reach.png"
                    alt="Awareness & Reach"
                    className="dd-image-inner relative z-10 sm:w-[65%] md:w-full sm:object-container md:object-cover hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dd-step">
            <div className="relative flex items-start gap-6 lg:gap-20">
              <div className="hidden md:flex w-9 shrink-0 items-center justify-center z-10">
                <div
                  className="md:mt-39.5 lg:mt-57.5 dd-dot w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#4504DF" }}
                >
                  <span
                    className="dd-dot-num text-[13px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    4
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8 lg:gap-16 items-center md:flex-row-reverse">
                <div className="dd-text w-full lg:w-1/2 flex flex-col justify-center items-end">
                  <span className="dd-anim md:hidden text-[45px] font-black leading-none tracking-tighter text-[#8872bbc5] select-none -mb-2">
                    04.
                  </span>
                  <h3 className="dd-anim text-[32px] sm:text-[39px] md:text-[34px] lg:text-[44px] xl:text-[48px] font-semibold leading-none tracking-tight mb-5 text-end">
                    Engagement & Lead{" "}
                    <span className="font-signature font-normal text-primary text-[48px] md:text-[58px] lg:text-[68px] leading-[0.8]">
                      Generation
                    </span>
                  </h3>
                  <p className="dd-anim text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-2xl font-medium text-end">
                    Awareness is just the start. We nurture that initial spark,
                    building trust and turning casual scrollers into a solid
                    database of warm, qualified leads.
                  </p>
                </div>
                <div className="dd-image w-full lg:w-1/2 relative flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="/images/how-we-do-it/generation.png"
                    alt="Engagement & Lead Generation"
                    className="dd-image-inner relative z-10 sm:w-[65%] md:w-full sm:object-container md:object-cover hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dd-step">
            <div className="relative flex items-start gap-6 lg:gap-20">
              <div className="hidden md:flex w-9 shrink-0 items-center justify-center z-10">
                <div
                  className="md:mt-39.5 lg:mt-57.5 dd-dot w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#4504DF" }}
                >
                  <span
                    className="dd-dot-num text-[13px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    5
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8 lg:gap-16 items-center md:flex-row">
                <div className="dd-text w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="dd-anim md:hidden text-[45px] font-black leading-none tracking-tighter text-[#8872bbc5] select-none -mb-2">
                    05.
                  </span>
                  <h3 className="dd-anim text-[32px] sm:text-[39px] md:text-[34px] lg:text-[44px] xl:text-[48px] font-semibold leading-none tracking-tight -mb-2">
                    Conversion &{" "}
                  </h3>
                  <span className="font-signature font-normal text-primary text-[48px] md:text-[58px] lg:text-[68px] leading-[0.8]">
                    Sales
                  </span>
                  <p className="dd-anim text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-2xl font-medium mt-3">
                    This is where interest converts into income. Using smart
                    retargeting and irresistible offers, we gently guide your
                    warm audience straight to the checkout line.
                  </p>
                </div>
                <div className="dd-image w-full lg:w-1/2 relative flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="/images/how-we-do-it/sales.png"
                    alt="Conversion & Sales"
                    className="dd-image-inner relative z-10 sm:w-[65%] md:w-full sm:object-container md:object-cover hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dd-step">
            <div className="relative flex items-start gap-6 lg:gap-20">
              <div className="hidden md:flex w-9 shrink-0 items-center justify-center z-10">
                <div
                  ref={lastDotRef}
                  className="md:mt-39.5 lg:mt-57.5 dd-dot w-9 h-9 rounded-full flex items-center justify-center border-2"
                  style={{ backgroundColor: "#ffffff", borderColor: "#4504DF" }}
                >
                  <span
                    className="dd-dot-num text-[13px] font-bold"
                    style={{ color: "#374151" }}
                  >
                    6
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-8 lg:gap-16 items-center md:flex-row-reverse">
                <div className="dd-text w-full lg:w-1/2 flex flex-col justify-center items-end">
                  <span className="dd-anim md:hidden text-[45px] font-black leading-none tracking-tighter text-[#8872bbc5] select-none -mb-2">
                    06.
                  </span>
                  <h3 className="dd-anim text-[32px] sm:text-[39px] md:text-[34px] lg:text-[44px] xl:text-[48px] font-semibold leading-none tracking-tight -mb-2 text-end">
                    Analysis &{" "}
                  </h3>
                  <span className="font-signature font-normal text-primary text-[48px] md:text-[58px] lg:text-[68px] leading-[0.8] text-end">
                    Scaling
                  </span>
                  <p className="dd-anim text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] xl:text-2xl font-medium text-end mt-4">
                    We don&apos;t stop at the first win. We dive into the
                    analytics, eliminate what isn&apos;t working, and pour fuel
                    on top-performing campaigns to multiply your ROI.
                  </p>
                </div>
                <div className="dd-image w-full lg:w-1/2 relative flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="/images/how-we-do-it/scalling.png"
                    alt="Analysis & Scaling"
                    className="dd-image-inner relative z-10 sm:w-[65%] md:w-full sm:object-container md:object-cover hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
