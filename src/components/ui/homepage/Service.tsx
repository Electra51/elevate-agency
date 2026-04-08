"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Branding",
    img: "/images/branding.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Design",
    img: "/images/design.png",
  },
  {
    title: "Market Strategy",
    img: "/images/market-strategy.png",
  },
  {
    title: "Digital Marketing",
    img: "/images/digital-marketing.png",
    className: "md:col-span-2",
  },
];
const Service = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  //smooth animation using gsap
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {services.map((item, index) => {
          console.log("item", item);
          return (
            <div
              key={index}
              className={`service-card relative overflow-hidden rounded-xl group cursor-pointer h-55 sm:h-60 md:h-auto ${item.className || ""}`}
            >
              {/* all card image */}
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(#25027912 0%, #4504DF 74%)",
                  opacity: 0.9,
                }}
              />

              {/* text content */}
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <h3 className="text-white text-lg font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mt-1 max-w-55">
                  Elevating brands with creativity and strategy
                </p>
              </div>

              {/* hover */}
              <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition duration-500" />

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.4),transparent_70%)]" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
