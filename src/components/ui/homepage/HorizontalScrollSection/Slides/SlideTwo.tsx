"use client";

import Image from "next/image";

export default function SlideTwo() {
  return (
    <div className="relative w-screen h-screen flex bg-linear-to-br from-[#713FE7] to-[#370ECD] overflow-hidden">
      {/* VECTOR LINE */}
      <Image
        src="/images/brandingImage/Vector2.svg"
        alt="vector"
        width={6452}
        height={636}
        className="absolute top-82 xl:top-93.5 2xl:top-69.25 right-0 opacity-80"
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
      <div className="w-1/2 flex flex-col justify-center 2xl:pl-87.5 xl:pl-28 text-white z-10">
        <h1 className="slide-title text-[64px] font-bold leading-tight mb-6">
          Discovery & <br /> Strategy
        </h1>

        <div className="slide-desc flex gap-4 max-w-130">
          <div className="w-3 bg-white mt-2"></div>
          <p className="text-lg text-white/90">
            First impressions dictate the journey. We build a scroll-stopping
            digital storefront across your website and social channels to ensure
            your brand looks the part before anyone even clicks.
          </p>
        </div>
      </div>

      {/* STEP FLAG */}
      <Image
        src="/images/brandingImage/step2.svg"
        alt="step"
        width={39}
        height={80}
        className="step-image absolute top-187 left-15 xl:left-147 xl:top-142 2xl:left-197 2xl:top-139 z-20"
      />

      {/* RIGHT */}
      <div className="w-1/2 relative">
        {/* WHITE BLUR CIRCLE */}
        <div className="slide-visual absolute top-1/2 left-1/2 xl:top-[69%] xl:left-[58%] w-94.25 h-92 bg-blue-400 rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* STATUE */}
        <div className="statue-image absolute bottom-0 right-31 z-30 2xl:bottom-32 aspect-[645/622] w-[min(100%,645px)] max-w-[645px]">
          <Image
            src="/images/brandingImage/statue2.svg"
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
