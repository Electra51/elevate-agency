// components/sections/UnfairAdvantage.tsx

export default function UnfairAdvantage() {
  return (
    <section className="bg-stripe-section w-full py-16 md:py-20 px-5 sm:px-10 lg:px-[6%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* ── Dark image card ── */}
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col justify-center px-8 sm:px-10 py-10 border border-[rgba(100,80,255,0.25)] bg-[linear-gradient(135deg,#0a0a1a_0%,#1a1030_45%,#0d0d20_100%)]">
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-44 bg-[radial-gradient(ellipse_at_bottom,rgba(130,90,255,0.55),transparent_70%)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-14 rounded-t-[30px] bg-[linear-gradient(to_top,rgba(160,120,255,0.95),rgba(200,180,255,0.2))] shadow-[0_0_40px_18px_rgba(130,90,255,0.3)]" />
          <h2 className="relative z-10 font-syne text-[clamp(22px,3.2vw,32px)] font-extrabold leading-[1.15] tracking-tight text-white">
            IF YOU DON&apos;T
            <br />
            GET NOTICED
          </h2>
          <p className="relative z-10 mt-3 text-[11px] font-medium uppercase tracking-widest text-white/45">
            Your competitor will be
          </p>
        </div>

        {/* ── Text content ── */}
        <div>
          <h2 className="font-syne text-[clamp(28px,4vw,46px)] font-extrabold leading-[1.08] tracking-tight text-brand-dark">
            Your Unfair Digital
          </h2>
          <span className="font-script text-[clamp(36px,5.5vw,56px)] text-brand-purple leading-snug block mb-5">
            Advantage.
          </span>
          <p className="max-w-[480px] text-[15px] leading-[1.78] text-neutral-500">
            Our mission is simple: transform everyday businesses into premium,
            untouchable brands. We treat your investment like our own. No fake
            promises, no hidden costs. Just transparent communication, hard
            data, and flawless execution.
          </p>
        </div>
      </div>
    </section>
  );
}
