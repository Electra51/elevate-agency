"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "How We Do It", href: "/how-we-do-it" },
  { label: "Our Story", href: "/our-story" },
  { label: "Ui/Ux", href: "/ui-ux" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-5 w-6 flex-col justify-center gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-neutral-900 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-neutral-900 transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-neutral-900 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-neutral-100 md:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-4 pb-4 pt-2 sm:px-6"
          aria-label="Mobile main"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="border-b border-neutral-100 py-3 text-base font-bold uppercase tracking-wide text-neutral-900 transition-colors last:border-b-0 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
