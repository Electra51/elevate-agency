"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-white px-4 text-center">
      {/* Accent line */}
      <div className="mb-8 h-1 w-16 rounded-full bg-primary" />

      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
        Something went wrong
      </p>

      <h1 className="mb-4 text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
        Error
      </h1>

      <p className="mb-10 max-w-md text-base text-neutral-500">
        {error.message
          ? error.message
          : "An unexpected error occurred. Please try again or return to the homepage."}
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-secondary active:bg-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border-2 border-neutral-200 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:border-primary hover:text-primary"
        >
          Back to Home
        </Link>
      </div>

      {error.digest && (
        <p className="mt-10 text-xs text-neutral-400">
          Error ID:{" "}
          <span className="font-mono tracking-wide">{error.digest}</span>
        </p>
      )}
    </div>
  );
}
