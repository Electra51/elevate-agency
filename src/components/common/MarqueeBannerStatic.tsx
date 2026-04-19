"use client";

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

export default function MarqueeBannerStatic() {
  return (
    <div className="w-full relative h-17.5 md:h-22.5 flex items-center justify-center overflow-visible overflow-x-clip z-20 -my-9">
      {/* CURVED ARROW */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-20"
        >
          <path
            d="M10 10 Q 50 10, 50 50"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M44 44 L50 50 L38 50"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2  bg-[#3B0ECA] py-3.5 md:py-4 flex overflow-hidden shadow-2xl border-y border-indigo-400"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="flex w-max gap-8 px-6 justify-center">
          {[...items, ...items, ...items, ...items, ...items, ...items].map(
            (item, index) => (
              <div key={index} className="flex items-center gap-8">
                <span className="text-white text-[16px] md:text-[22px] tracking-widest font-bold whitespace-nowrap uppercase">
                  {item}
                </span>
                <Star />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
