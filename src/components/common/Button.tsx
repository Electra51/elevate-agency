import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  /** If set, renders a Next.js `Link` instead of `<button>`. */
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "className" | "children">;

const baseClass =
  "inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-secondary active:bg-secondary",
  outline:
    "border-2 border-white bg-transparent text-white hover:bg-white/10 active:bg-white/15",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
