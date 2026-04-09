"use client";

import Image from "next/image";

export default function SlideSix() {
  return (
    <div className="relative w-screen h-screen flex bg-linear-to-br from-[#370ECD] to-[#370ECD] overflow-hidden">
      {/* VECTOR LINE */}
      <Image
        src="/images/brandingImage/Vector6.svg"
        alt="vector"
        width={6452}
        height={636}
        className="absolute top-82 xl:top-65.25 2xl:top-32.25 left-0  2xl:-left-6 opacity-80 w-[90%]"
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
      <div className="w-1/2 flex flex-col justify-center 2xl:pl-43.5 xl:pl-34 text-white z-10">
        <h1 className="slide-title text-[64px] font-bold leading-tight mb-6">
          Analysis & <br /> Scaling
        </h1>

        <div className="slide-desc flex gap-4 max-w-130">
          <div className="w-3 bg-white mt-2"></div>
          <p className="text-lg text-white/90">
            We don’t stop at the first win. We dive into the analytics,
            eliminate what isn't working, and pour fuel on top-performing
            campaigns to multiply your ROI.
          </p>
        </div>
      </div>

      {/* STEP FLAG */}
      <Image
        src="/images/brandingImage/step6.svg"
        alt="step"
        width={39}
        height={80}
        className="step-image absolute top-187 left-15 xl:left-320 xl:top-71 2xl:left-422 2xl:top-45 z-20"
      />

      {/* RIGHT */}
      <div className="w-1/2 relative">
        {/* WHITE BLUR CIRCLE */}
        {/* <div className=" slide-visual absolute top-1/2 left-1/2 xl:top-[69%] xl:left-[58%] w-94.25 h-92 bg-white rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 z-10" /> */}

        {/* STATUE */}
        <Image
          src="/images/brandingImage/statue6.svg"
          alt="statue"
          width={645}
          height={622}
          className="statue-image absolute bottom-0 xl:right-26 xl:bottom-14 2xl:bottom-66 2xl:right-68 z-30"
        />
      </div>
    </div>
  );
}
