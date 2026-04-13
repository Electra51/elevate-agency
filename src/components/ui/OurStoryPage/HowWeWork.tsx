import { Palette, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Subscribe & get started",
    desc: "Submit as many design tasks as you need without worrying about individual project fees.",
  },
  {
    icon: Palette,
    title: "Polished designs — on time",
    desc: "Our designers get to work to deliver your request. Receive your design within a few days.",
  },
  {
    icon: RefreshCw,
    title: "Revisions made simple",
    desc: "Custom designs, prompt replies and as many revisions as you need.",
  },
];

export default function HowWeWork() {
  return (
    <section
      className="w-full px-14 py-16"

      //       background-color: white;
      // background-image: repeating-linear-gradient(to right, rgb(255 254 254 / 0%), rgb(219 219 219 / 55%) 54%, rgb(255 255 255 / 5%) 103%);
      // background-size: 59px 2%;
    >
      {/* Badge */}
      <span className="inline-block border border-black rounded-full px-4 py-1 text-[11px] font-medium tracking-widest uppercase mb-6">
        How we work
      </span>

      {/* Top row */}
      <div className="grid grid-cols-2 gap-10 mb-14 items-start">
        <h1 className="text-[46px] font-extrabold leading-[1.08] tracking-tight text-black font-display">
          Get a dedicated design team{" "}
          <span className="text-[#5533FF] italic">
            at fraction of the cost.
          </span>
        </h1>

        <p className="text-[14.5px] leading-relaxed text-neutral-500 pt-1 max-w-sm">
          Grow your brand with high-quality design for a flat monthly fee. Work
          with senior designers. Subscribe and make as many requests as you need
          — no limits.
        </p>
      </div>

      {/* Steps */}
      <div className="flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-0 flex-1">
            {/* Step card */}
            <div className="flex flex-col flex-1">
              {/* Icon circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-[#5533FF] flex items-center justify-center mb-5 shrink-0">
                <step.icon className="w-8 h-8 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-[16px] font-bold text-black mb-2.5 leading-snug">
                {step.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-neutral-500 max-w-[200px]">
                {step.desc}
              </p>
            </div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="flex items-center pt-[34px] w-20 shrink-0">
                <div className="relative w-full h-[2px]">
                  <div className="absolute inset-0 mr-3 bg-[#5533FF]" />
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "6px solid transparent",
                      borderBottom: "6px solid transparent",
                      borderLeft: "12px solid #5533FF",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
