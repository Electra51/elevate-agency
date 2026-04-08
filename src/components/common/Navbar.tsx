"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "How We Do It", href: "/how-we-do-it" },
  { label: "Our Story", href: "/our-story" },
  { label: "Ui/Ux", href: "/ui-ux" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // GSAP animation
  useEffect(() => {
    const drawer = drawerRef.current;
    const overlay = overlayRef.current;
    if (!drawer || !overlay) return;

    const links = linksRef.current.filter(Boolean) as HTMLAnchorElement[];

    if (open) {
      // Make overlay visible & interactive
      gsap.set(overlay, { pointerEvents: "auto" });
      gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });

      // Slide drawer in from right
      gsap.fromTo(
        drawer,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.45, ease: "power4.out" },
      );

      // Stagger nav links fade + slide in
      gsap.fromTo(
        links,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.075,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    } else {
      // Slide drawer out to right
      gsap.to(drawer, {
        xPercent: 100,
        duration: 0.38,
        ease: "power4.in",
      });

      // Fade overlay out & disable pointer events
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlay, { pointerEvents: "none" });
        },
      });

      // Reset links (for next open)
      gsap.set(links, { opacity: 0, x: 24 });
    }
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    if (open) {
      gsap.to(header, {
        width: "18rem",
        duration: 0.45,
        ease: "power4.out",
      });
    } else {
      gsap.to(header, {
        width: "100%",
        duration: 0.4,
        ease: "power4.in",
      });
    }
  }, [open]);
  return (
    <>
      <header ref={headerRef} className="fixed top-0 right-0 z-50 bg-white">
        <div className="mx-auto bg-white! flex md:max-w-5xl lg:max-w-6xl xl:max-w-7xl items-center justify-between px-8 md:px-20 lg:px-20 xl:px-5 py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo.svg"
              alt="EleVate"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-9"
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-bold uppercase tracking-wide text-neutral-900 transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden transition-all duration-300 ease-in-out"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-5 w-6 flex-col justify-center gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-neutral-900 transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-neutral-900 transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-neutral-900 transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* backdrop overlay*/}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm opacity-0 md:hidden"
        style={{ pointerEvents: "none" }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* drawer right side*/}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed right-0 top-16 z-50 flex h-full w-72 flex-col bg-white shadow-2xl md:hidden"
      >
        <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile main">
          {NAV_LINKS.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              className="rounded-md px-3 py-3.5 text-sm font-bold uppercase tracking-wide text-neutral-900 opacity-0 transition-colors hover:bg-neutral-50 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
