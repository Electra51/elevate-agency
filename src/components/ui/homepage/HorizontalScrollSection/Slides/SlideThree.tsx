"use client";

import Image from "next/image";

export default function SlideThree() {
  return (
    <div className="relative w-screen h-screen flex bg-linear-to-br from-[#6b37e4] to-[#713FE7] overflow-hidden">
      {/* VECTOR LINE */}
      <Image
        src="/images/brandingImage/Vector3.svg"
        alt="vector"
        width={6452}
        height={636}
        className="absolute top-82 xl:top-87 2xl:top-69 right-0 opacity-80"
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
        <h1 className="text-[64px] font-bold leading-tight mb-6">
          Awareness & <br /> Reach
        </h1>

        <div className="flex gap-4 max-w-130">
          <div className="w-0.75 bg-white mt-2"></div>
          <p className="text-lg text-white/90">
            We don't just chase views; we chase the right eyes. Through highly
            targeted campaigns, we introduce your brand to an audience that is
            actually primed to love your product.
          </p>
        </div>
      </div>

      {/* STEP FLAG */}
      <Image
        src="/images/brandingImage/step3.svg"
        alt="step"
        width={39}
        height={80}
        className="absolute top-187 left-15 xl:left-16 xl:top-71 2xl:left-197 2xl:top-139 z-20"
      />

      {/* RIGHT */}
      <div className="w-1/2 relative">
        {/* WHITE BLUR CIRCLE */}
        <div className="absolute top-1/2 left-1/2 xl:top-[69%] xl:left-[58%] w-94.25 h-92 bg-white rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* STATUE */}
        <Image
          src="/images/brandingImage/statue3.svg"
          alt="statue"
          width={645}
          height={622}
          className="absolute bottom-0 right-31 z-30"
        />
      </div>
    </div>
  );
}
