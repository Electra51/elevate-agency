import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-white px-4 text-center">
      {/* Large 404 number */}
      <div className="relative mb-6 select-none">
        <span
          className="text-[clamp(96px,20vw,200px)] font-black leading-none tracking-tighter text-gradient"
          style={{
            backgroundImage: "linear-gradient(135deg, #4504df 0%, #9000ff 100%)",
          }}
        >
          404
        </span>
      </div>

      {/* Accent line */}
      <div className="mb-8 h-1 w-16 rounded-full bg-primary" />

      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
        Page Not Found
      </p>

      <h2 className="mb-4 text-2xl font-black tracking-tight text-neutral-900 sm:text-3xl">
        We can&apos;t find that page
      </h2>

      <p className="mb-10 max-w-md text-base text-neutral-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-secondary active:bg-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Back to Home
        </Link>

        <Link
          href="/what-we-do"
          className="inline-flex items-center justify-center rounded-md border-2 border-neutral-200 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:border-primary hover:text-primary"
        >
          What We Do
        </Link>
      </div>
    </div>
  );
}
