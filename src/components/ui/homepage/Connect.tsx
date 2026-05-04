"use client";

import { ArrowRight } from "lucide-react";

export default function Connect() {
  return (
    <div>
      <section className="relative flex items-center justify-center overflow-hidden bg-white py-24 md:py-40 z-10 mt-10">
        {/* BIG SEMI CIRCLE BACKGROUND */}
        <div className="absolute w-175 h-175 md:w-253 md:h-249.25 rounded-full bg-linear-to-b from-[#008CFF]/30 via-[#FCFFAA]/43 to-[#FCFFAA]/10 top-[-10%] md:top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-2xl px-6 w-full">
          <h2 className="text-[32px] md:text-[54px] font-black text-[#0D0B1A] leading-[1.1] tracking-tight">
            Transform Your Brand-
            <br />
            Let's Connect
          </h2>

          <p className="text-gray-500 mt-6 text-[15px] md:text-[18px] leading-relaxed max-w-xl mx-auto font-medium">
            Discover how we can help you transform your brand
            <br className="hidden md:block" />
            into a powerful force that resonates with your audience.
          </p>

          {/* INPUT CTA */}
          <div className="mt-10 flex items-center justify-between bg-[#601FF9] rounded-[15px] p-1.5 max-w-md mx-auto shadow-xl relative z-50">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-5 md:px-6 py-2.5 rounded-full bg-transparent text-white placeholder-white/70 outline-none text-[15px] md:text-[16px] font-medium"
            />
            <button className="bg-white text-[#601FF9] px-6 md:px-7 py-2.5 rounded-[15px] text-[13px] md:text-[14px] font-medium shadow hover:bg-gray-100 transition-colors whitespace-nowrap tracking-wide flex justify-center items-center gap-1">
              Submit <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
