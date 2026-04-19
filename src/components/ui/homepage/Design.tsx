"use client";

import Image from "next/image";

export default function PanoramicDesignSlider() {
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

  return (
    <div className="relative pt-40 overflow-hidden flex flex-col items-center min-h-225 z-10">
      {/* HEADER */}
      <div className="absolute top-10 w-full flex flex-col items-center justify-center z-20 pointer-events-none text-center">
        <h2 className="font-signature text-[60px] md:text-[80px] text-transparent bg-clip-text bg-linear-to-b from-[#6c39e2] to-[#FFFFFF]/84 -mb-12 md:-mb-13 z-30 relative tracking-wide">
          Behind The
        </h2>
        <h1 className="font-clash text-[100px] md:text-[180px] lg:text-[220px] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#6c39e2] to-[#FFFFFF]/84 leading-none tracking-tighter">
          DESIGN
        </h1>
      </div>

      <style>{`
        .panoramic-scene {
          position: absolute;
          top: 152px;
    width: 100vw;
    height: 685px;
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
          animation: spin-panorama 40s infinite linear;
          /* Push the camera "inside" the circle so cards around edges appear larger */
          transform: translateZ(${radius}px); 
        }

        .panoramic-track:hover {
          animation-play-state: paused;
        }

        @keyframes spin-panorama {
          0% { transform: translateZ(${radius}px) rotateY(0deg); }
          100% { transform: translateZ(${radius}px) rotateY(-360deg); }
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

      <div className="panoramic-scene pointer-events-auto">
        <div className="panoramic-track">
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
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
