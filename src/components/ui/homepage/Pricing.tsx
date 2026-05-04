"use client";

import FooterCrossMarquee from "@/components/common/FooterCrossMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const plans = [
  {
    name: "Standard",
    price: "5,000",
    currency: "BDT",
    description: "Essential setup and visual branding for new brands.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    popular: false,
    highlight: false,
  },
  {
    name: "Plus",
    price: "12,000",
    currency: "BDT",
    description: "Drive traffic and optimize conversions for growing stores.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    popular: false,
    highlight: false,
  },
  {
    name: "Custom",
    price: null,
    currency: null,
    description: "Personalized plan matching your exact needs.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    popular: true,
    highlight: true,
  },
  {
    name: "Premium",
    price: "15,000",
    currency: "BDT",
    description: "Comprehensive campaigns for total industry dominance.",
    features: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    popular: false,
    highlight: false,
  },
];

const CheckIcon = ({ white }: { white?: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 mt-0.5"
  >
    <circle
      cx="8"
      cy="8"
      r="8"
      fill={white ? "white" : "#7C3AED"}
      opacity={white ? 0.25 : 0.12}
    />
    <path
      d="M5 8l2 2 4-4"
      stroke={white ? "white" : "#7C3AED"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const regularCardClass =
  "pricing-card group relative z-0 bg-[#F4F3F8] rounded-2xl px-6 pt-5 pb-7 cursor-default " +
  "transition-all duration-300 ease-out motion-reduce:transition-none " +
  "hover:z-10 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 " +
  "md:hover:-translate-y-4";

const regularCardButtonClass =
  "w-full border border-gray-300 text-gray-700 font-medium text-sm py-2.5 rounded-full " +
  "transition-all duration-300 ease-out motion-reduce:transition-none md:text-[15px] " +
  "group-hover:border-primary group-hover:text-primary group-hover:bg-white " +
  "group-hover:shadow-sm";

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      gsap.set([".pricing-title", ".pricing-sub"], {
        transformOrigin: "center center",
      });

      tl.from(".pricing-title", {
        scale: 0.78,
        opacity: 0,
        y: 28,
        duration: 0.75,
        ease: "power3.out",
        immediateRender: false,
      }).from(
        ".pricing-sub",
        {
          scale: 0.86,
          opacity: 0,
          y: 16,
          duration: 0.55,
          ease: "power2.out",
          immediateRender: false,
        },
        "-=0.38",
      )
        .from(
          ".pricing-card",
          {
            y: 60,
            opacity: 0,
            scale: 0.94,
            filter: "blur(8px)",
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.3",
        )
        .from(
          ".pricing-featured",
          {
            scale: 0.9,
            duration: 0.5,
            ease: "back.out(1.8)",
            immediateRender: false,
          },
          "-=0.7",
        )
        .from(
          ".pricing-marquee",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            immediateRender: false,
          },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionRef} className="relative">
      <div className="bg-white flex flex-col w-full">
        <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl items-center justify-between px-8 md:px-20 lg:px-20 xl:px-5 pt-4 mx-auto">
          {/* Header */}
          <div className="text-center pt-16 pb-10">
            <h1 className="pricing-title text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="pricing-sub  text-gray-400 mt-2 text-sm">
              No contracts. No surprise fees.
            </p>
          </div>

          {/* Cards */}
          <div className="flex-1 px-4 md:px-10 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end max-w-6xl mx-auto bg-[#F4F3F8] rounded-2xl pb-14">
              {plans.map((plan) =>
                plan.highlight ? (
                  /* ── Featured Card ── */
                  <div
                    key={plan.name}
                    className="pricing-featured group text-3xl md:text-[40px] relative rounded-2xl bg-primary text-white px-6 pb-8 mb-0 md:mb-0 md:-translate-y-4 shadow-xl transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-5 hover:shadow-2xl"
                  >
                    {/* Badge */}
                    <div className="absolute top-2 right-4">
                      <span className="bg-white/75 text-primary text-[10px] font-semibold tracking-widest px-3 py-2 rounded-full uppercase">
                        Most Popular
                      </span>
                    </div>

                    <div className="mb-6 mt-16">
                      <h2 className="text-2xl lg:text-[28px] font-semibold mb-2">
                        {plan.name}
                      </h2>
                      <p className="text-white/70 text-sm md:text-[15px] leading-snug">
                        {plan.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm md:text-[15px] text-white/90"
                        >
                          <CheckIcon white />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="w-full bg-white text-primary font-semibold text-sm md:text-[15px] py-2.5 rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-md active:scale-[0.98]"
                    >
                      Choose plan
                    </button>
                  </div>
                ) : (
                  /* ── Regular Card ── */
                  <div key={plan.name} className={regularCardClass}>
                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-3xl md:text-[40px] text-gray-900">
                        {plan.price}
                        <span className="text-base font-semibold text-gray-900">
                          {plan.currency}
                        </span>
                      </span>
                      <span className="text-gray-400 text-xs ml-1">/month</span>
                    </div>

                    <h2 className="text-xl md:text-[28px] font-bold text-gray-900 mb-1">
                      {plan.name}
                    </h2>
                    <p className="text-gray-400 text-xs md:text-[15px] leading-snug mb-5">
                      {plan.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-xs md:text-[15px] text-gray-600"
                        >
                          <CheckIcon />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className={regularCardButtonClass}
                    >
                      Choose plan
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-marquee relative h-24 overflow-x-clip">
        <FooterCrossMarquee inline />
      </div>
    </div>
  );
}
