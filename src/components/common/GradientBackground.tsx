// components/GradientBackground.tsx
export default function GradientBackground({
  children,
  stripeWidth = 60,
}: {
  children?: React.ReactNode;
  stripeWidth?: number;
}) {
  return (
    <div
      style={{
        background: `repeating-linear-gradient(
          to right,
          rgba(255,255,255,0.05),
          rgba(40,40,40,0.62) 67%,
          rgba(255,255,255,0.05) 100%
        )`,
        backgroundSize: `${stripeWidth}px 100%`,
      }}
    >
      {children}
    </div>
  );
}
