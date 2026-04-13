// components/sections/Philosophy.tsx

export default function Philosophy() {
  return (
    <section className="bg-stripe-section w-full border-t border-black/[0.07] py-16 md:py-20 px-5 sm:px-10 text-center">
      <div className="mx-auto max-w-[720px]">
        {/* Badge */}
        <span className="mb-7 inline-flex items-center rounded-full border-[1.5px] border-brand-dark px-4 py-[5px] text-[11px] font-medium uppercase tracking-widest text-brand-dark">
          Our Philosophy (The Mindset)
        </span>

        {/* Heading */}
        <h2 className="font-syne text-[clamp(28px,5vw,54px)] font-extrabold leading-[1.1] tracking-tight text-brand-dark">
          Engineers of Growth,
          <br />
          Not Just{" "}
          <span className="font-script text-[clamp(34px,6vw,66px)] font-normal text-brand-purple leading-[1.3]">
            Artists.
          </span>
        </h2>

        {/* Body */}
        <p className="mx-auto mt-6 max-w-[600px] text-[15.5px] leading-[1.8] text-neutral-500">
          We didn&apos;t start this company to win art awards. We are
          tech-driven problem solvers. We believe every pixel, every line of
          code, and every marketing campaign must have one clear goal: making
          your business more money. If it doesn&apos;t sell, it&apos;s not good
          design.
        </p>
      </div>
    </section>
  );
}
