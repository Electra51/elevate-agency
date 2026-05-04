const Star = () => (
  <svg
    className="shrink-0 w-5 h-5 md:w-7 md:h-7"
    viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M18.0703 0L22.3361 13.1287H36.1404L24.9725 21.2426L29.2382 34.3713L18.0703 26.2574L6.90239 34.3713L11.1682 21.2426L0.000238419 13.1287H13.8045L18.0703 0Z"
      fill="white"
    />
  </svg>
);

const segments = ["Design & Development", "Ui Ux Wireframe", "Testing & Optimization"];

export default function StoryProcessBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-primary">
      <div
        className="relative py-5 md:py-6 -skew-y-2 origin-left"
        style={{
          background:
            "linear-gradient(90deg, #5208e8 0%, #601ff9 45%, #4504df 100%)",
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 px-4 py-1 skew-y-2">
          {segments.map((label, i) => (
            <div key={label} className="flex items-center gap-4 md:gap-10">
              <span className="text-white text-[15px] sm:text-lg md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                {label}
              </span>
              {i < segments.length - 1 && <Star />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
