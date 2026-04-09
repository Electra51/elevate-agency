"use client";

import Image from "next/image";

export default function SlideOne() {
  return (
    <div className="relative w-screen h-screen flex bg-linear-to-br from-[#6b37e4] to-[#713FE7] overflow-hidden">
      {/* VECTOR LINE */}
      <Image
        src="/images/brandingImage/Vector1.png"
        alt="vector"
        width={8452}
        height={636}
        className="absolute top-82 xl:top-44 2xl:top-3 right-0 opacity-80"
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
          Digital Presence <br /> & Branding
        </h1>

        <div className="flex gap-4 max-w-lg">
          <div className="w-0.75 bg-white mt-2"></div>
          <p className="text-lg text-white/90">
            We analyze your market, study your competitors, and craft a
            data-backed blueprint tailored specifically to your business goals.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 relative">
        <div className="absolute top-64 right-40 xl:right-20 w-124.75">
          {/* IMAGE fb */}
          {/* <Image
                        src="/images/brandingImage/image1.png"
                        alt="fb"
                        width={621}
                        height={417}
                        className="relative z-0"
                    /> */}

          <Image
            src="/images/brandingImage/image1.png"
            alt="fb"
            width={499}
            height={417}
            priority
            className="relative z-0 w-full h-auto"
          />

          {/* WHITE BLUR CIRCLE */}
          <div className="absolute top-1/2 left-1/2 2xl:w-94.25 2xl:h-92 xl:w-80.25 xl:h-82 bg-white rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 z-10" />
        </div>

        {/* STEP FLAG */}
        <Image
          src="/images/brandingImage/step1.png"
          alt="step"
          width={39}
          height={80}
          className="absolute top-106 xl:top-69 right-15 xl:right-14 2xl:right-22 2xl:top-42 z-20"
        />

        {/* STATUE */}
        {/* <Image
          src="/images/brandingImage/statue.png"
          alt="statue"
          width={645}
          height={622}
          className="absolute bottom-0 right-0 z-30"
        /> */}
        <Image
          src="/images/brandingImage/statue.png"
          alt="statue"
          width={645}
          height={622}
          className="absolute bottom-0 right-0 z-30 xl:w-[554px] xl:h-[517px] 2xl:w-[645px] h-[622px] "
        />
      </div>
    </div>
  );
}
