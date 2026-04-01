"use client";

import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  "BRANDING",
  "DESIGN",
  "DEVELOPMENT",
  "Growth",
  "BRANDING",
  "DESIGN",
  "DEVELOPMENT",
  "Growth",
];

const Star = () => (
  <svg
    width="37"
    height="35"
    viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0703 0L22.3361 13.1287H36.1404L24.9725 21.2426L29.2382 34.3713L18.0703 26.2574L6.90239 34.3713L11.1682 21.2426L0.000238419 13.1287H13.8045L18.0703 0Z"
      fill="white"
    />
  </svg>
);

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-primary py-3 overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        loop={true}
        freeMode={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        className="transition-none!"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="flex items-center gap-7 px-6">
              <span
                className={`text-white text-[30px] tracking-widest font-semibold whitespace-nowrap`}
              >
                {item}
              </span>
              <Star />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
