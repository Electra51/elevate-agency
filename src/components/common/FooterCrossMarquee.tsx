"use client";

const items = [
  "BRANDING",
  "DESIGN",
  "DEVELOPMENT",
  "GROWTH",
  "BRANDING",
  "DESIGN",
  "DEVELOPMENT",
  "GROWTH",
];

const Star = () => (
  <svg
    width="28"
    height="26"
    viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 md:w-9.25 md:h-8.75"
    aria-hidden
  >
    <path
      d="M18.0703 0L22.3361 13.1287H36.1404L24.9725 21.2426L29.2382 34.3713L18.0703 26.2574L6.90239 34.3713L11.1682 21.2426L0.000238419 13.1287H13.8045L18.0703 0Z"
      fill="white"
    />
  </svg>
);

function MarqueePattern() {
  return (
    <div className="flex w-max shrink-0 gap-6 px-4 md:gap-8 md:px-6">
      {items.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex items-center gap-6 md:gap-8"
        >
          <span className="text-white text-[13px] sm:text-[15px] md:text-[18px] tracking-[0.2em] font-bold whitespace-nowrap uppercase">
            {item}
          </span>
          <Star />
        </div>
      ))}
    </div>
  );
}

/** Angled marquee strip. `inline` makes it render in normal flow (for sections like Pricing). */
export default function FooterCrossMarquee({
  inline = false,
}: {
  inline?: boolean;
}) {
  return (
    <div
      className={
        inline
          ? "pointer-events-none relative z-10 w-[135vw] max-w-none -translate-x-[12%] select-none"
          : "pointer-events-none absolute left-1/2 z-15 w-[135vw] max-w-none -translate-x-1/2 -translate-y-1/2 select-none"
      }
      style={inline ? undefined : { top: "clamp(3.5rem, 6%, 5.5rem)" }}
      aria-hidden
    >
      <div className="relative h-18 sm:h-21 md:h-24">
        {/* Angled strip */}
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 -rotate-12 justify-center overflow-hidden border-y border-white/25 bg-[#3B0ECA] py-2 shadow-lg sm:-rotate-[7deg] md:-rotate-6 lg:-rotate-4 xl:-rotate-3 2xl:-rotate-2 md:py-2.5">
          <div
            className="flex w-max"
            style={{
              animation: "footer-marquee-left 38s linear infinite",
            }}
          >
            <MarqueePattern />
            <MarqueePattern />
          </div>
        </div>
      </div>
    </div>
  );
}
