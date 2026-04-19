"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Slide = {
  brand: string;
  headline: string;
  body: string;
  author: string;
  role: string;
  avatar: string;
};

const slides: Slide[] = [
  {
    brand: "Elevate",
    headline:
      "Elevate Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
    body: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.",
    author: "Diana Loreza",
    role: "Director of GYMSTORY",
    avatar: "/images/ourstory/man1.png",
  },
  {
    brand: "Elevate",
    headline:
      "From strategy to launch, the team delivered clarity and craft at every step.",
    body: "We finally found a partner that treats revenue and brand with equal care. Communication was sharp, timelines were real, and the work stood out in our market.",
    author: "Alex Rivera",
    role: "Founder, Northline Studio",
    avatar: "/images/ourstory/man1.png",
  },
  {
    brand: "Elevate",
    headline:
      "Design and development felt like one unified team — rare and valuable.",
    body: "They translated messy goals into a focused site and funnel. Our conversion story improved within weeks, not months.",
    author: "Samira Khan",
    role: "Marketing Lead, Vanta Co.",
    avatar: "/images/ourstory/man1.png",
  },
];

export default function CustomerTestimonial() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section
      className="relative w-full overflow-hidden py-14 md:py-20 px-5 sm:px-10 lg:px-[6%]"
      style={{
        backgroundColor: "#f3f3f5",
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 52px,
          rgba(0, 0, 0, 0.04) 52px,
          rgba(0, 0, 0, 0.04) 53px
        )`,
      }}
    >
      <div className="mx-auto max-w-275 text-center mb-10 md:mb-12">
        <h2 className="text-[clamp(26px,4.5vw,48px)] font-extrabold tracking-tight text-neutral-900 leading-tight">
          Customer is Our Top{" "}
          <span className="font-signature font-normal text-secondary">
            Priority
          </span>
        </h2>
        <p className="mt-3 text-sm md:text-[15px] text-neutral-500 max-w-xl mx-auto">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>

      <div className="relative mx-auto max-w-230 flex items-center gap-2 md:gap-4">
        <button
          type="button"
          onClick={prev}
          className="z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md ring-1 ring-black/6 transition hover:bg-neutral-50"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <article className="relative z-10 flex-1 rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/4">
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            <div className="flex-1 flex flex-col text-left min-w-0">
              <div className="mb-5 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-sm font-bold text-secondary">
                  {slide.brand.charAt(0)}
                </span>
                <span className="text-base font-semibold text-neutral-900">
                  {slide.brand}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-[22px] font-bold leading-snug text-neutral-900 mb-4">
                {slide.headline}
              </h3>
              <p className="text-[13px] sm:text-sm leading-relaxed text-neutral-500 flex-1">
                {slide.body}
              </p>
              <div className="mt-6 pt-2 border-t border-black/6">
                <p className="font-semibold text-neutral-900">{slide.author}</p>
                <p className="text-xs sm:text-sm text-neutral-500">
                  {slide.role}
                </p>
              </div>
            </div>

            <div className="relative mx-auto md:mx-0 h-55 w-55 sm:h-65 sm:w-65 shrink-0 rounded-full overflow-hidden bg-neutral-800 ring-4 ring-white shadow-lg">
              <Image
                src={slide.avatar}
                alt={slide.author}
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
          </div>
        </article>

        <button
          type="button"
          onClick={next}
          className="z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md ring-1 ring-black/6 transition hover:bg-neutral-50"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
