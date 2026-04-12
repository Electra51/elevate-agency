"use client";

export default function Connect() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#f5f5f5] py-20">
      {/* 🔥 BIG SEMI CIRCLE BACKGROUND */}
      <div className="absolute w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-blue-200 via-purple-200 to-yellow-100 top-[-700px]" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h2 className="text-[28px] md:text-[40px] font-extrabold text-black leading-tight">
          Transform Your Brand- <br />
          Let’s Connect
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
          Discover how we can help you transform your brand into a powerful
          force that resonates with your audience.
        </p>

        {/* 🔥 INPUT CTA */}
        <div className="mt-6 flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full p-1 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-2 rounded-full bg-transparent text-white placeholder-white outline-none text-sm"
          />

          <button className="bg-white text-purple-600 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
            Submit →
          </button>
        </div>
      </div>
    </section>
  );
}
