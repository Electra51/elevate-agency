"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    brand: "Kornix",
    headline:
      "Kornix is the best digital agency i have ever seen! Highly Recommended!",
    body: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.",
    author: "Diana Loreza",
    role: "Director of Gymstory",
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
    body: "They translated messy goals into a focused site and funnel. Our conversion rate improved within weeks, not months.",
    author: "Samira Khan",
    role: "Marketing Lead, Vanta Co.",
    avatar: "/images/ourstory/man1.png",
  },
];

export default function CustomerTestimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(".ct-title", { types: "lines,words" });
      const subtitleSplit = new SplitType(".ct-subtitle", { types: "lines" });

      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      headingTl
        .from(".ct-heading", {
          y: 20,
          opacity: 0,
          duration: 0.45,
          ease: "power3.out",
        })
        .from(
          titleSplit.lines,
          {
            yPercent: 110,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.1",
        )
        .from(
          ".ct-priority",
          {
            scale: 0.8,
            y: 10,
            opacity: 0,
            duration: 0.55,
            ease: "back.out(1.8)",
          },
          "-=0.35",
        )
        .from(
          subtitleSplit.lines,
          {
            y: 16,
            opacity: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.2",
        );

      gsap.from(".ct-card", {
        y: 24,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        titleSplit.revert();
        subtitleSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-14 md:pt-10 md:pb-20 px-5 sm:px-10 lg:px-[6%]"
    >
      <div className="ct-heading mx-auto max-w-275 text-center mb-10 md:mb-12">
        <div className="ct-title mt-6 text-[clamp(28px,4vw,54px)] font-bold leading-tight tracking-tight text-[#0D0B1A]">
          <p className="block">Customer is Our</p>
          <br />
          <p className="block">
            Top{" "}
            <span className="ct-priority inline-block font-signature font-normal text-primary text-[clamp(44px,7vw,90px)] leading-[0.75]">
              Priority
            </span>
          </p>
        </div>
        <p className="ct-subtitle mt-3 text-sm md:text-[17px] text-[#111204] max-w-md mx-auto">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>

      <div className="relative mx-auto max-w-230">
        <button
          ref={setPrevEl}
          type="button"
          className="absolute left-0 -bottom-12 md:top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md ring-1 ring-black/6 transition duration-300 hover:bg-neutral-50 hover:scale-105 active:scale-95"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          speed={900}
          loop
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
          pagination={{ clickable: true }}
          className="ct-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={`${slide.author}-${slide.brand}`}>
              <article className="ct-card relative z-10 rounded-2xl border border-[#D9D9D9] bg-[#F9F9F9] p-6 mx-0 sm:mx-16 sm:p-8 md:mx-18 md:p-10 min-h-105 md:min-h-90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/4">
                <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
                  <div className="flex min-w-0 flex-1 flex-col text-left">
                    <div className="ct-slide-item mb-5 flex items-center gap-2">
                      <span className="rounded-lg text-4xl font-medium">
                        {slide.brand.charAt(0)}
                      </span>
                      <span className="text-base font-semibold text-neutral-900">
                        {slide.brand}
                      </span>
                    </div>
                    <h3 className="ct-slide-item mb-4 min-h-21 text-lg font-bold leading-snug text-neutral-900 sm:text-xl md:min-h-24 md:text-[22px]">
                      {slide.headline}
                    </h3>
                    <p className="ct-slide-item flex-1 min-h-24 text-[13px] leading-relaxed text-neutral-500 sm:text-sm md:min-h-27.5">
                      {slide.body}
                    </p>
                    <div className="ct-slide-item mt-6 pt-2 border-t border-black/6">
                      <p className="font-semibold text-neutral-900">
                        {slide.author}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        {slide.role}
                      </p>
                    </div>
                  </div>

                  <div className="ct-slide-item relative mx-auto md:mx-0 h-20 w-20 sm:h-65 sm:w-65 shrink-0 rounded-full overflow-hidden bg-neutral-800 ring-4 ring-white shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.avatar}
                      alt={slide.author}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={setNextEl}
          type="button"
          className="absolute right-0 -bottom-12 md:top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-700 shadow-md ring-1 ring-black/6 transition duration-300 hover:bg-neutral-50 hover:scale-105 active:scale-95"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
