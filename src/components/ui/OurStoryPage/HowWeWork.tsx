"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heading = new SplitType(".hww-heading", { types: "words,chars" });
      const paragraph = new SplitType(".hww-copy", { types: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".hww-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });

      tl.from(
        heading.chars,
        {
          y: 40,
          opacity: 0,
          stagger: 0.02,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.from(
        paragraph.lines,
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4",
      );

      const steps = gsap.utils.toArray<HTMLElement>(".hww-step");
      const stepTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hww-steps-wrap",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      steps.forEach((step, i) => {
        const circle = step.querySelector(".hww-circle");
        const line = step.querySelector(".hww-line-inner");
        const arrow = step.querySelector(".hww-arrow");
        const mobileLine = step.querySelector(".hww-line-vertical");
        const mobileArrow = step.querySelector(".hww-arrow-down");
        const title = step.querySelector(".hww-title");
        const desc = step.querySelector(".hww-desc");
        const at = i * 0.28;

        if (circle) {
          stepTl.from(
            circle,
            {
              scale: 0.65,
              opacity: 0,
              duration: 0.5,
              ease: "back.out(1.6)",
            },
            at,
          );
        }

        if (line) {
          stepTl.from(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.45,
              ease: "power2.out",
            },
            at + 0.08,
          );
        }

        if (arrow) {
          stepTl.from(
            arrow,
            {
              x: -8,
              opacity: 0,
              duration: 0.28,
              ease: "power2.out",
            },
            at + 0.18,
          );
        }

        if (mobileLine) {
          stepTl.from(
            mobileLine,
            {
              scaleY: 0,
              transformOrigin: "top center",
              duration: 0.4,
              ease: "power2.out",
            },
            at + 0.08,
          );
        }

        if (mobileArrow) {
          stepTl.from(
            mobileArrow,
            {
              y: -6,
              opacity: 0,
              duration: 0.28,
              ease: "power2.out",
            },
            at + 0.18,
          );
        }

        if (title) {
          stepTl.from(
            title,
            {
              y: 28,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            at + 0.12,
          );
        }

        if (desc) {
          stepTl.from(
            desc,
            {
              y: 24,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            at + 0.2,
          );
        }
      });

      return () => {
        heading.revert();
        paragraph.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-10 md:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 md:mt-5 lg:mt-2 xl:mt-10">
        {/* Badge */}
        <span className="hww-badge md:justify-center flex w-fit mx-auto md:flex md:w-fit md:mx-auto lg:ml-0 lg:inline-flex items-center rounded-lg md:rounded-xl lg:rounded-[13px] border border-black px-2.5 py-2 text-[14px] md:text-[14px] lg:text-[16px] font-normal tracking-wide uppercase mb-6 lg:mb-8">
          How We Work
        </span>

        {/* Top row — stacks on mobile, side-by-side from md */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12 lg:mb-14 md:items-center lg:items-start">
          <h1 className="hww-heading lg:text-left text-center md:text-center text-[28px] sm:text-[36px] md:text-[40px] lg:text-[clamp(32px,4vw,54px)] font-bold leading-tight tracking-tight text-black">
            Get a dedicated design team at{" "}
            <span className="text-primary">fraction of the cost.</span>
          </h1>

          <p className="hww-copy text-[15px] sm:text-[16px] md:text-[20px] md:text-center lg:text-left lg:text-[24px] leading-relaxed text-black pt-1">
            Grow your brand with high-quality design for a flat monthly fee.
            Work with senior designers. Subscribe and make as many requests as
            you need — no limits.
          </p>
        </div>

        {/* Steps — vertical on mobile/tablet, horizontal from lg */}
        <div className="hww-steps-wrap flex flex-col lg:flex-row items-start gap-14 md:gap-18 lg:gap-3 xl:gap-0 mt-9 sm:mt-12 md:mt-24">
          <div className="hww-step flex flex-col lg:flex-row items-start gap-0 flex-1 w-full">
            <div className="flex md:flex-row gap-7 md:gap-6 justify-center md:justify-center lg:justify-start lg:flex-col flex-1 w-full">
              <div className="hww-circle relative w-20 h-20 sm:w-24 rounded-full bg-primary sm:h-24 mb-4 sm:mb-5 shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/ourstory/subscribe.svg"
                    alt="Subscribe & get started"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow"
                  />
                </div>

                <div className="hidden absolute top-1 left-21 lg:flex items-center pt-10 lg:w-50 xl:w-61 shrink-0 justify-center">
                  <div className="relative w-full flex items-center">
                    <div className="hww-line-inner h-px flex-1 bg-primary" />
                    <div
                      className="hww-arrow"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "10px solid #4504df",
                      }}
                    />
                  </div>
                </div>

                <div className="flex lg:hidden absolute top-18 left-1 justify-start pt-5 pb-1 pl-8 sm:pl-10">
                  <div className="flex flex-col items-center">
                    <div className="hww-line-vertical w-px h-20 bg-primary" />
                    <div
                      className="hww-arrow-down"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "9px solid #4504df",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="hww-title text-[18px] sm:text-[20px] md:text-2xl lg:text-[24px] xl:text-[26px] font-bold text-black mb-2 sm:mb-2.5 leading-snug tracking-tight">
                  Subscribe & get started
                </h3>
                <p className="hww-desc text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-relaxed text-neutral-600 max-w-xs">
                  Submit as many design tasks as you need without worrying about
                  individual project fees.
                </p>
              </div>
            </div>
          </div>

          <div className="hww-step flex flex-col lg:flex-row items-start gap-0 flex-1 w-full">
            <div className="flex md:flex-row gap-7 md:gap-6 justify-center md:justify-center lg:justify-start lg:flex-col flex-1 w-full">
              <div className="hww-circle relative w-20 h-20 rounded-full bg-primary  sm:w-24 sm:h-24 mb-4 sm:mb-5 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/ourstory/polished.svg"
                    alt="Polished designs — on time"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow"
                  />
                </div>
                <div className="hidden absolute top-1 left-21  lg:flex items-center pt-10 lg:w-50 xl:w-61 shrink-0 justify-center">
                  <div className="relative w-full flex items-center">
                    <div className="hww-line-inner h-px flex-1 bg-primary" />
                    <div
                      className="hww-arrow"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "10px solid #4504df",
                      }}
                    />
                  </div>
                </div>

                <div className="flex lg:hidden absolute top-18 left-1 justify-start pt-5 pb-1 pl-8 sm:pl-10">
                  <div className="flex flex-col items-center">
                    <div className="hww-line-vertical w-px h-20 bg-primary" />
                    <div
                      className="hww-arrow-down"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "9px solid #4504df",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <h3 className="hww-title text-[18px] sm:text-[20px] md:text-2xl lg:text-[24px] xl:text-[26px]  font-bold text-black mb-2 sm:mb-2.5 leading-snug tracking-tight">
                  Polished designs — on time
                </h3>
                <p className="hww-desc text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-relaxed text-neutral-600 max-w-xs">
                  Our designers get to work to deliver your request. Receive
                  your design within a few days.
                </p>
              </div>
            </div>
          </div>

          <div className="hww-step flex flex-col lg:flex-row items-start lg:gap-4 xl:gap-0 flex-1 w-full">
            <div className="flex md:flex-row gap-7 md:gap-6 lg:flex-col justify-center md:justify-center lg:justify-start flex-1 w-full">
              <div className="hww-circle relative w-20 h-20 rounded-full bg-primary  sm:w-24 sm:h-24 mb-4 sm:mb-5 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/ourstory/revision.svg"
                    alt="Revisions made simple"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow"
                  />
                </div>
              </div>
              <div className="">
                <h3 className="hww-title text-[18px] sm:text-[20px] md:text-2xl lg:text-[24px] xl:text-[26px] font-bold text-black mb-2 sm:mb-2.5 leading-snug tracking-tight">
                  Revisions made simple
                </h3>
                <p className="hww-desc text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-relaxed text-neutral-600 max-w-xs">
                  Custom designs, prompt replies and as many revisions as you
                  need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
