"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function PanoramicDesignSlider() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const lastXRef = useRef(0);
  const rotationRef = useRef(0);

  const CARDS = [
    "/images/designImage/1Image.png",
    "/images/designImage/2Image.png",
    "/images/designImage/3Image.png",
    "/images/designImage/4Image.png",
    "/images/designImage/5Image.png",
    "/images/designImage/6Image.png",
    "/images/designImage/7Image.png",
    "/images/designImage/8Image.png",
  ];

  // Duplicate cards for seamless 360 rotation
  const allCards = [...CARDS, ...CARDS, ...CARDS];
  const totalCards = allCards.length;
  // Calculate radius based on the number of items to form a perfect circle
  const baseCardWidth = 220;
  const radius =
    Math.round(baseCardWidth / 2 / Math.tan(Math.PI / totalCards)) + 100; // Added extra padding radius

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // "Behind The" — blurs in from top
      tl.from(".design-sub", {
        y: -40,
        opacity: 0,
        filter: "blur(12px)",
        scale: 0.85,
        duration: 1.0,
      })
        // "DESIGN" — massive scale pop from center
        .from(
          ".design-title",
          {
            scale: 0.6,
            opacity: 0,
            filter: "blur(20px)",
            duration: 1.1,
            ease: "back.out(1.3)",
          },
          "-=0.6",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const scene = sceneRef.current;
    if (!track || !scene) return;

    let rafId = 0;
    let lastTs = performance.now();
    let velocity = 0;
    let lastDx = 0;

    const render = () => {
      track.style.transform = `translateZ(${radius}px) rotateY(${rotationRef.current}deg)`;
    };

    const tick = (ts: number) => {
      const dt = ts - lastTs;
      lastTs = ts;

      if (!isDraggingRef.current) {
        // Auto-rotate + momentum decay
        velocity *= 0.92;
        rotationRef.current -= (360 / 40000) * dt;
        rotationRef.current += velocity;
      }

      render();
      rafId = requestAnimationFrame(tick);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!e.isPrimary) return;
      e.preventDefault();
      isDraggingRef.current = true;
      pointerIdRef.current = e.pointerId;
      lastXRef.current = e.clientX;
      velocity = 0;
      lastDx = 0;
      scene.setPointerCapture(e.pointerId);
      scene.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || pointerIdRef.current !== e.pointerId)
        return;
      e.preventDefault();
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      // Smooth drag — lerp between last and current dx
      lastDx = lastDx * 0.6 + dx * 0.4;
      rotationRef.current += dx * 0.3;
      velocity = lastDx * 0.3;
      render();
    };

    const stopDragging = (e: PointerEvent) => {
      if (pointerIdRef.current !== e.pointerId) return;
      isDraggingRef.current = false;
      pointerIdRef.current = null;
      scene.style.cursor = "grab";
      if (scene.hasPointerCapture(e.pointerId)) {
        scene.releasePointerCapture(e.pointerId);
      }
      // velocity already set from last move — momentum continues in tick()
    };

    const forceStopDragging = () => {
      isDraggingRef.current = false;
      pointerIdRef.current = null;
      scene.style.cursor = "grab";
    };

    const onLostPointerCapture = () => {
      forceStopDragging();
    };

    scene.addEventListener("pointerdown", onPointerDown);
    scene.addEventListener("pointermove", onPointerMove);
    scene.addEventListener("pointerup", stopDragging);
    scene.addEventListener("pointercancel", stopDragging);
    scene.addEventListener("lostpointercapture", onLostPointerCapture);
    window.addEventListener("pointerup", forceStopDragging);
    window.addEventListener("pointercancel", forceStopDragging);
    window.addEventListener("blur", forceStopDragging);

    scene.style.cursor = "grab";
    render();
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      scene.removeEventListener("pointerdown", onPointerDown);
      scene.removeEventListener("pointermove", onPointerMove);
      scene.removeEventListener("pointerup", stopDragging);
      scene.removeEventListener("pointercancel", stopDragging);
      scene.removeEventListener("lostpointercapture", onLostPointerCapture);
      window.removeEventListener("pointerup", forceStopDragging);
      window.removeEventListener("pointercancel", forceStopDragging);
      window.removeEventListener("blur", forceStopDragging);
    };
  }, [radius]);
  return (
    <div
      ref={rootRef}
      className="relative pt-40 overflow-hidden flex flex-col items-center min-h-225 z-10"
    >
      {/* HEADER */}
      <div className="absolute top-10 w-full flex flex-col items-center justify-center z-20 pointer-events-none text-center">
        <h2 className="design-sub  font-signature text-[60px] md:text-[80px] text-transparent bg-clip-text bg-linear-to-b from-[#6c39e2] to-[#FFFFFF]/84 -mb-12 md:-mb-13 z-30 relative tracking-wide">
          Behind The
        </h2>
        <h1 className="design-title font-clash text-[100px] md:text-[180px] lg:text-[220px] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#6c39e2] to-[#FFFFFF]/84 leading-none tracking-tighter">
          DESIGN
        </h1>
      </div>

      <style>{`
        .panoramic-scene {
          position: absolute;
          top: 152px;
    width: 100vw;
   
          perspective: 800px; /* Adjust perspective depth */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          /* Fade edges out gently */
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        
        .panoramic-track {
          width: ${baseCardWidth}px;
          height: 330px;
          position: relative;
          transform-style: preserve-3d;
          /* Push the camera "inside" the circle so cards around edges appear larger */
          transform: translateZ(${radius}px); 
        }

        .panoramic-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 13px;
          overflow: hidden;
             box-shadow: 0 5px 14px rgba(0, 0, 0, 0.5);
          transition: filter 0.3s ease;
        }
      `}</style>

      <div
        ref={sceneRef}
        className="panoramic-scene pointer-events-auto h-118.5 sm:h-151.5 xl:h-171.25 touch-none select-none mt-10"
      >
        <div ref={trackRef} className="panoramic-track">
          {allCards.map((src, i) => {
            const angle = (360 / totalCards) * i;
            return (
              <div
                key={i}
                className="panoramic-card"
                style={{
                  // Position items along the outward perimeter
                  transform: `rotateY(${angle}deg) translateZ(-${radius}px)`,
                }}
              >
                <Image
                  src={src}
                  width={300}
                  height={450}
                  alt={`design ${i}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
