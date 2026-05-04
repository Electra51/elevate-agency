"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "How We Do It", href: "/how-we-do-it" },
  { label: "Our Story", href: "/our-story" },
  { label: "Ui/Ux", href: "/ui-ux" },
] as const;

const SCROLL_THRESHOLD_PX = 12;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Set initial positions via GSAP on mount (avoids Tailwind v4 translate/transform conflict)
  useEffect(() => {
    gsap.set(drawerRef.current, { x: "100%" });
    gsap.set(backdropRef.current, { opacity: 0, pointerEvents: "none" });
  }, []);

  // Solid white bar after scroll; transparent at top of page
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape key closes drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // GSAP open / close animation
  useEffect(() => {
    const drawer = drawerRef.current;
    const backdrop = backdropRef.current;
    const header = headerRef.current;
    const links = linkRefs.current.filter(Boolean);

    if (open) {
      // Hide navbar
      gsap.to(header, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in" });

      // Backdrop + drawer slide in
      gsap.to(backdrop, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.25,
        ease: "none",
      });
      gsap.to(drawer, { x: "0%", duration: 0.38, ease: "power3.out" });

      // Stagger links in
      gsap.fromTo(
        links,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.32,
          stagger: 0.07,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    } else {
      // Restore navbar
      gsap.to(header, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
        delay: 0.15,
      });

      // Close backdrop + drawer
      gsap.to(backdrop, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.22,
        ease: "none",
      });
      gsap.to(drawer, { x: "100%", duration: 0.32, ease: "power3.in" });
    }
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth < 1024) return; // desktop only

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      // Navbar container
      tl.from(".desktop-nav", {
        y: -30,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.8,
      })

        // Links stagger (cinematic)
        .from(
          ".nav-link",
          {
            y: -20,
            opacity: 0,
            filter: "blur(6px)",
            stagger: 0.08,
            duration: 0.6,
          },
          "-=0.5",
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Sticky header ─────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className={`fixed w-full top-0 z-50 transition-[background-color,box-shadow] duration-300 ease-out ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent shadow-none"
        }`}
      >
        <div className="desktop-nav mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
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

          {/* Desktop nav */}
          {/* <nav className="hidden items-center gap-10 md:flex" aria-label="Main"> */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-neutral-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-5 w-6 flex-col justify-center gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-neutral-900 transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-neutral-900 transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-neutral-900 transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ── Full-screen backdrop (covers navbar too) ───────────────── */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-60 bg-black/50 backdrop-blur-[2px] md:hidden"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Right-side drawer ─────────────────────────────────────── */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed right-0 top-0 z-70 flex h-full w-[min(300px,88vw)] flex-col bg-white shadow-2xl md:hidden"
      >
        {/* Drawer header */}
        <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-6 py-4">
          <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.svg"
              alt="EleVate"
              width={96}
              height={32}
              className="h-7 w-auto"
              unoptimized
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
            aria-label="Close menu"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L11 11M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }, i) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-4 rounded-[10px] px-4 py-4 transition-colors duration-150 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-neutral-800 hover:bg-primary/8 hover:text-primary"
                }`}
              >
                <span className="text-[16px] font-semibold uppercase tracking-wide">
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
