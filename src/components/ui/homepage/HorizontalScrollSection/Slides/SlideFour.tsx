"use client";

import Image from "next/image";

export default function SlideFour() {
  return (
    <div className="relative w-screen h-screen flex bg-linear-to-br from-[#4d25df] to-[#370ECD] overflow-hidden">
      {/* VECTOR LINE */}
      <Image
        src="/images/brandingImage/Vector4.svg"
        alt="vector"
        width={6452}
        height={636}
        className="absolute top-82 xl:top-90.5 2xl:top-65.25 right-0 opacity-80"
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 87%) 1px, #00000047 1px), linear-gradient(90deg, rgb(255 255 255 / 78%) 1px, #00000038 1px)",
          backgroundSize: "58px 55px",
        }}
      />

      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center 2xl:pl-65.5 xl:pl-34 text-white z-10">
        <h1 className="slide-title text-[64px] font-bold leading-tight mb-6">
          Engagement & <br /> Lead <br /> Generation
        </h1>

        <div className="slide-desc flex gap-4 max-w-130">
          <div className="w-3 bg-white mt-2"></div>
          <p className="text-lg text-white/90">
            Awareness is just the start. We nurture that initial spark, building
            trust and turning casual scrollers into a solid database of warm,
            qualified leads.
          </p>
        </div>
      </div>

      {/* STEP FLAG */}
      <Image
        src="/images/brandingImage/step4.svg"
        alt="step"
        width={39}
        height={80}
        className="step-image absolute top-187 left-15 xl:left-16 xl:top-71 2xl:left-20 2xl:top-48 z-20"
      />

      {/* RIGHT */}
      <div className="w-1/2 relative">
        {/* WHITE BLUR CIRCLE */}
        <div className="slide-visual absolute top-1/2 left-1/2 xl:top-[69%] xl:left-[58%] w-94.25 h-92 bg-blue-400 rounded-full blur-3xl opacity-80 -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* STATUE */}
        <div className="statue-image absolute bottom-0 xl:right-8 2xl:bottom-30 z-30 aspect-[645/622] w-[min(100%,645px)] max-w-[645px]">
          <Image
            src="/images/brandingImage/statue4.svg"
            alt="statue"
            fill
            sizes="645px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
