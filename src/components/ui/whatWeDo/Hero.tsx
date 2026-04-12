"use client";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-16 md:py-24">
      {/* 🔥 Container */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* 🔥 LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-lg md:text-2xl font-semibold text-black mb-2">
            Not Just Beautiful Design.
          </h2>

          <h1 className="text-[36px] md:text-[60px] lg:text-[72px] font-extrabold leading-tight text-black">
            We Build
          </h1>

          {/* Highlight */}
          <div className="inline-block bg-purple-600 text-white px-3 py-1 mt-2 text-sm md:text-lg font-semibold">
            Digital Experiences
          </div>

          <h2 className="text-[28px] md:text-[48px] lg:text-[60px] font-bold text-black mt-3 leading-tight">
            That Drive{" "}
            <span className="text-purple-500 font-signature italic">
              Revenue.
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base max-w-xl mt-6 leading-relaxed mx-auto lg:mx-0">
            Is your brand just surviving online, or is it dominating? Anyone can
            build a pretty website or a nice logo. We engineer digital
            ecosystems based on user psychology that stop the scroll and turn
            casual visitors into loyal customers.
          </p>
        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="flex-1 relative flex justify-center">
          {/* Glow background */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-60"></div>

          {/* Image */}
          <img
            src="./images/what-we-do/hero-img.png" // replace with your image
            alt="statue"
            className="relative z-10 w-[260px] md:w-[350px] lg:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
