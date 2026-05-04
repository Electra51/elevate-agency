"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services, including branding, web design, digital marketing, social media management, content creation, & strategy development, all tailored to meet the unique needs of your business.",
  },
  {
    question: "How do we start working together?",
    answer:
      "We offer a comprehensive range of services, including branding, web design, digital marketing, social media management, content creation, & strategy development, all tailored to meet the unique needs of your business.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We offer a comprehensive range of services, including branding, web design, digital marketing, social media management, content creation, & strategy development, all tailored to meet the unique needs of your business.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "We offer a comprehensive range of services, including branding, web design, digital marketing, social media management, content creation, & strategy development, all tailored to meet the unique needs of your business.",
  },
];

const Faq = () => {
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

      // Image — rises + blur reveal
      tl.from(".faq-image", {
        x: -60,
        opacity: 0,
        filter: "blur(10px)",
        scale: 0.95,
        duration: 0.9,
      })

        // Heading — scale pop
        .from(
          ".faq-title",
          {
            y: 40,
            opacity: 0,
            scale: 0.9,
            filter: "blur(8px)",
            duration: 0.75,
            ease: "back.out(1.4)",
          },
          "-=0.6",
        )

        // Paragraph
        .from(
          ".faq-para",
          {
            y: 25,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.6,
          },
          "-=0.45",
        )

        // FAQ items — stagger slide in
        .from(
          ".faq-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.35",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#08071A] text-white overflow-hidden"
    >
      {/* purple glow */}
      <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 md:w-125 md:h-125 bg-[#3A00CC] opacity-30 rounded-full blur-[120px] md:blur-[140px] -translate-y-1/2 translate-x-[-10%] z-0 pointer-events-none" />

      <div className="mx-auto md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-4 sm:px-6 md:px-10 lg:px-24 xl:px-20 relative z-10 flex flex-col md:flex-row md:items-start">
        {/* left*/}
        <div className="faq-image relative w-full md:w-60 lg:w-[288px] shrink-0 h-56 sm:h-72 md:h-130 lg:h-205.75 overflow-hidden md:ml-2 lg:ml-10 mt-8 md:mt-0 rounded-xl md:rounded-lg lg:rounded-none">
          <Image
            src="/images/Faq.png"
            alt="Abstract colorful 3D art"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 240px, 288px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* right */}
        <div className="flex-1 flex flex-col justify-start pl-0 md:pl-8 lg:pl-16 py-10 sm:py-12 md:py-14 lg:py-20">
          <h2 className="faq-title text-2xl sm:text-3xl md:text-[34px] lg:text-4xl font-bold leading-tight mb-4">
            Direct Answers <br />
            to Significant Questions
          </h2>

          <p className="faq-para text-gray-400 text-sm md:text-[15px] lg:text-base font-medium pr-0 md:pr-4 lg:pr-24 mb-8 md:mb-8 lg:mb-10 leading-relaxed">
            Providing straightforward solutions to complex challenges, ensuring
            clarity and confidence in every decision you make.
          </p>

          {/* Accordion */}
          <div className="space-y-0">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={index} className="faq-item border-b border-gray-700">
                  {/* Question Row */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left py-4 group"
                  >
                    <span className="text-sm md:text-[15px] lg:text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {item.question}
                    </span>
                    <span className="text-gray-400 text-xl leading-none ml-4 shrink-0 group-hover:text-purple-300 transition-colors duration-200">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive
                        ? "max-h-40 opacity-100 pb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-sm md:text-[15px] lg:text-base leading-relaxed pr-0 md:pr-4 lg:pr-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
