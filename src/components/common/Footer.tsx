import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";

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
  return (
    <footer className="relative w-full text-white pt-10 md:pt-20 -mt-5 md:-mt-10 h-137.5">
      {/* Absolute Background layer securely clipped independently without truncating the statue child! */}
      <div
        className="absolute inset-0 bg-[#060317] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          clipPath: "polygon(0 12%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <Image
        src="/images/footer.png"
        alt="Classical philosopher statue"
        className="absolute bottom-0 left-0 md:left-0 z-60"
        height={713}
        width={645}
        priority
      />

      <div
        className="absolute top-1/2 left-[20%] 
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
        className="absolute top-1/2 right-5 
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-8">
          {/* STATUE POPPING OUT */}
          <div className="relative w-full lg:w-[45%] shrink-0 pointer-events-none z-50">
            {/* The statue absolutely positioned to break out of the footer boundary up into the Connect section */}
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-sm">
            <div>
              <h3 className="text-[15px] font-bold mb-4 text-white">
                Quick links
              </h3>
              <ul className="space-y-2.5 text-neutral-300">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-bold mb-4 text-white">Service</h3>
              <ul className="space-y-2.5">
                {services.map((item) => (
                  <li key={item.label}>
                    <a
                      href="#"
                      className={
                        item.active
                          ? "text-[#a78bfa] font-medium hover:text-[#c4b5fd]"
                          : "text-neutral-300 hover:text-white transition-colors"
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-bold mb-4 text-white">Address</h3>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex gap-2.5">
                  <MapPin
                    className="h-4 w-4 shrink-0 mt-0.5 text-white/80"
                    strokeWidth={1.75}
                  />
                  <span className="leading-snug">
                    4th Floor, House-02 Road-02, Dhaka 1230
                  </span>
                </li>
                <li className="flex gap-2.5 items-center">
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

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[15px] font-bold mb-3 text-white">
                Newsletter
              </h3>
              <p className="text-neutral-400 text-[13px] leading-relaxed mb-6">
                Stay informed with our newsletter for the latest updates and
                insights.
              </p>
              <h4 className="text-[13px] font-bold mb-3 text-white">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <IconFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <IconTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
