"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, type SVGProps } from "react";
import FooterCrossMarquee from "./FooterCrossMarquee";

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1c-.55 0-1 .45-1 1V12h3v3h-3v8.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function IconTwitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const quickLinks = ["About", "Contact us", "FAQs", "Blog"];

const services = [
  { label: "Branding", active: false },
  { label: "Design", active: true },
  { label: "Development", active: false },
  { label: "Content Storytelling", active: false },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // 1. Marquee — slides down into place
      tl.from(".footer-marquee", {
        y: -24,
        opacity: 0,
        duration: 0.7,
      })

        // 2. Statue — cinematic rise + blur
        .from(
          ".footer-statue",
          {
            y: 80,
            opacity: 0,
            filter: "blur(12px)",
            scale: 0.95,
            duration: 1.0,
            ease: "power2.out",
          },
          "-=0.4",
        )

        // 3. Columns — stagger slide up
        .from(
          ".footer-col",
          {
            y: 40,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.65,
            stagger: 0.12,
          },
          "-=0.7",
        )

        // 4. Each item — cascade
        .from(
          ".footer-item",
          {
            y: 16,
            opacity: 0,
            duration: 0.4,
            stagger: 0.04,
          },
          "-=0.55",
        );

      // ── Subtle background glow pulse (continuous) ──
      gsap.to(".footer-glow-1", {
        scale: 1.15,
        opacity: 0.5,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".footer-glow-2", {
        scale: 1.2,
        opacity: 0.4,
        duration: 6.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: footerRef.current,
  //         start: "top 85%",
  //         toggleActions: "play none none reverse",
  //       },
  //       defaults: { ease: "power3.out" },
  //     });

  //     // 1. Marquee glides in from slight offset
  //     tl.from(".footer-marquee", {
  //       y: -18,
  //       opacity: 0,
  //       duration: 0.6,
  //     })

  //       // 2. Columns reveal left→right with elegant stagger
  //       .from(
  //         ".footer-col",
  //         {
  //           y: 36,
  //           opacity: 0,
  //           duration: 0.65,
  //           stagger: 0.1,
  //         },
  //         "-=0.3",
  //       )

  //       // 3. Each link/item cascades in softly
  //       .from(
  //         ".footer-item",
  //         {
  //           y: 14,
  //           opacity: 0,
  //           duration: 0.4,
  //           stagger: 0.03,
  //         },
  //         "-=0.5",
  //       )

  //       // 4. Statue rises up from below — cinematic but controlled
  //       .from(
  //         ".footer-statue",
  //         {
  //           y: 60,
  //           opacity: 0,
  //           duration: 0.9,
  //           ease: "power2.out",
  //         },
  //         "-=0.7",
  //       );
  //   }, footerRef);

  //   return () => ctx.revert();
  // }, []);
  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-[71vh] sm:min-h-[77vh] lg:min-h-[46vh] text-white pt-10 md:pt-20 -mt-5 md:-mt-10 overflow-x-clip"
    >
      <Image
        src="/images/footer.png"
        alt="Classical philosopher statue"
        className="footer-statue absolute bottom-0 left-0 z-60 w-60 sm:w-97 md:w-[320px] lg:w-107.5 xl:w-148.5 hidden sm:block"
        height={713}
        width={645}
        priority
        style={{ height: "auto" }}
      />

      {/* Absolute Background layer securely clipped independently without truncating the statue child! */}
      <div
        className="footer-bg absolute inset-0 bg-[#060317] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          clipPath: "polygon(0 12%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <FooterCrossMarquee />

      <div
        className="footer-glow-1 absolute top-1/2 left-[20%] 
-translate-x-1/2 -translate-y-1/2 
w-120 h-80 
sm:w-160 sm:h-95 
lg:w-219 lg:h-96 
2xl:h-94 2xl:w-170
 bg-[#601FF9]/30
rounded-[100%] 
blur-[90px] 
opacity-80
z-10 pointer-events-none"
      />
      <div
        className="footer-glow-2  absolute top-1/2 right-5 
-translate-x-1/2 -translate-y-1/2 
w-120 h-80 
sm:w-160 sm:h-95 
lg:w-219 lg:h-96 
2xl:h-[316.38px] 2xl:w-[516.73px]
 bg-[#601FF9]/30
rounded-[100%] 
blur-[90px] 
opacity-80
z-10 pointer-events-none -rotate-11"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 pt-22 sm:pt-16 md:pt-10 pb-18 lg:pb-26">
        <div className="flex flex-col  lg:items-end gap-4 md:gap-1 lg:gap-8">
          {/* STATUE POPPING OUT */}
          <div className="relative w-full lg:w-[25%] shrink-0 pointer-events-none z-50">
            {/* The statue absolutely positioned to break out of the footer boundary up into the Connect section */}
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 md:gap-8 text-sm lg:w-[61%] xl:w-[54%] md:pt-10">
            <div className="footer-col">
              <h3 className="footer-item text-lg md:text-[20px] font-bold mb-4 text-white">
                Quicks links
              </h3>
              <ul className="space-y-2.5 text-neutral-300">
                {quickLinks.map((item) => (
                  <li key={item} className="footer-item">
                    <a
                      href="#"
                      className="text-[15px] md:text-[18px] hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 lg:block hidden">
                <h3 className="footer-item text-[16px] font-bold mb-4 text-white">
                  Address
                </h3>
                <ul className="space-y-4 text-neutral-300">
                  <li className="footer-item flex gap-2.5">
                    <MapPin
                      className="h-4 w-4 shrink-0 mt-0.5 text-white/80"
                      strokeWidth={1.75}
                    />
                    <span className="leading-snug text-nowrap">
                      4th Floor, House-02 Road-02, Dhaka 1230
                    </span>
                  </li>
                  <li className="footer-item flex gap-2.5 items-center">
                    <Phone
                      className="h-4 w-4 shrink-0 text-white/80"
                      strokeWidth={1.75}
                    />
                    <a href="tel:01312838088" className="hover:text-white">
                      01312-838088
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-item text-lg md:text-[20px] font-bold mb-4 text-white">
                Service
              </h3>
              <ul className="space-y-2.5">
                {services.map((item) => (
                  <li key={item.label} className="footer-item">
                    <a
                      href="#"
                      className={
                        item.active
                          ? "text-[15px] md:text-[18px] text-nowrap text-[#a78bfa] font-medium hover:text-[#c4b5fd]"
                          : "text-[15px] md:text-[18px] text-nowrap text-neutral-300 hover:text-white transition-colors"
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col col-span-2 sm:col-span-1 hidden sm:block md:block">
              <h3 className="footer-item text-lg md:text-[20px] font-bold mb-3 text-white">
                Newsletter
              </h3>
              <p className="footer-item text-neutral-400 text-[15px] md:text-[18px] leading-relaxed mb-3 md:mb-6 ">
                Stay informed with our newsletter for the latest updates and
                insights.
              </p>
              <h4 className="footer-item text-lg md:text-[20px] font-bold mb-3 text-white">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="footer-item text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <IconFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="footer-item text-white/80 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <IconTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="footer-item text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-12 sm:block hidden lg:hidden ">
                <h3 className="footer-item text-[16px] font-bold mb-4 text-white">
                  Address
                </h3>
                <ul className="space-y-4 text-neutral-300 text-[12px]">
                  <li className="footer-item flex gap-2">
                    <MapPin
                      className="h-4 w-4 shrink-0 mt-0.5 text-white/80"
                      strokeWidth={1.75}
                    />
                    <span className="leading-snug  text-[14px]">
                      4th Floor, House-02 Road-02, Dhaka 1230
                    </span>
                  </li>
                  <li className="footer-item flex gap-2 items-center">
                    <Phone
                      className="h-4 w-4 shrink-0 text-white/80"
                      strokeWidth={1.75}
                    />
                    <a
                      href="tel:01312838088"
                      className="hover:text-white  text-[14px]"
                    >
                      01312-838088
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-col mt-4 sm:hidden md:hidden">
            <h3 className="footer-item text-[16px] font-bold mb-4 text-white">
              Address
            </h3>
            <ul className="space-y-4 text-neutral-300 text-[12px]">
              <li className="footer-item flex gap-2">
                <MapPin
                  className="h-4 w-4 shrink-0 mt-0.5 text-white/80"
                  strokeWidth={1.75}
                />
                <span className="leading-snug  text-[14px]">
                  4th Floor, House-02 Road-02, Dhaka 1230
                </span>
              </li>
              <li className="footer-item flex gap-2 items-center">
                <Phone
                  className="h-4 w-4 shrink-0 text-white/80"
                  strokeWidth={1.75}
                />
                <a
                  href="tel:01312838088"
                  className="hover:text-white  text-[14px]"
                >
                  01312-838088
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col col-span-2 md:col-span-1 sm:hidden block">
            <h3 className="footer-item text-[16px] md:text-[20px] font-bold mb-3 text-white">
              Newsletter
            </h3>
            <p className="footer-item text-neutral-400 text-[15px] md:text-[18px] leading-relaxed mb-6">
              Stay informed with our newsletter for the latest updates and
              insights.
            </p>
            <h4 className="footer-item text-[17px] md:text-[20px] font-bold mb-3 text-white">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="footer-item text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <IconFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="footer-item text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <IconTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="footer-item text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
