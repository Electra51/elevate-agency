"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#08071A] text-white h-204.75">
      {/* purple glow */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-[#3A00CC] opacity-30 rounded-full blur-[140px] -translate-y-1/2 translate-x-[-10%] z-0 pointer-events-none" />

      <div className="mx-auto md:max-w-5xl lg:max-w-6xl xl:max-w-7xl px-8 md:px-20 lg:px-24 xl:px-20 relative z-10 flex flex-col md:flex-row">
        {/* left*/}
        <div className="relative w-[288px] shrink-0 h-205.75 overflow-hidden ml-10">
          <Image
            src="/images/faq.png"
            alt="Abstract colorful 3D art"
            fill
            className="object-fit object-center"
            priority
          />
        </div>

        {/* right */}
        <div className="flex-1 flex flex-col justify-center pl-10 md:pl-16 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Direct Answers <br />
            to Significant Questions
          </h2>

          <p className="text-gray-400 text-sm md:text-base font-medium pr-24 mb-10 leading-relaxed">
            Providing straightforward solutions to complex challenges, ensuring
            clarity and confidence in every decision you make.
          </p>

          {/* Accordion */}
          <div className="space-y-0">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={index} className="border-b border-gray-700">
                  {/* Question Row */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left py-4 group"
                  >
                    <span className="text-sm md:text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {item.question}
                    </span>
                    <span className="text-gray-400 text-xl leading-none ml-4 flex-shrink-0 group-hover:text-purple-300 transition-colors duration-200">
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
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed pr-8">
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
