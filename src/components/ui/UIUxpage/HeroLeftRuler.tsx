import { useId, type SVGProps } from "react";

type HeroLeftRulerProps = SVGProps<SVGSVGElement>;

export function HeroLeftRuler({
  width = 79,
  height = 373,
  className,
  ...props
}: HeroLeftRulerProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `${uid}-clip`;
  const paintId = `${uid}-paint`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 79 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <g clipPath={`url(#${clipId})`}>
        <rect width="53" height="373" fill="transparent" />
        <line y1="46" x2="24" y2="46" stroke="black" strokeWidth="4" />
        <line y1="126" x2="24" y2="126" stroke="black" strokeWidth="4" />
        <line y1="206" x2="24" y2="206" stroke="black" strokeWidth="4" />
        <line y1="286" x2="24" y2="286" stroke="black" strokeWidth="4" />
        <line y1="366" x2="24" y2="366" stroke="black" strokeWidth="4" />
        <line y1="62" x2="8" y2="62" stroke="black" strokeWidth="4" />
        <line y1="142" x2="8" y2="142" stroke="black" strokeWidth="4" />
        <line y1="222" x2="8" y2="222" stroke="black" strokeWidth="4" />
        <line y1="302" x2="8" y2="302" stroke="black" strokeWidth="4" />
        <line y1="78" x2="8" y2="78" stroke="black" strokeWidth="4" />
        <line y1="158" x2="8" y2="158" stroke="black" strokeWidth="4" />
        <line y1="238" x2="8" y2="238" stroke="black" strokeWidth="4" />
        <line y1="318" x2="8" y2="318" stroke="black" strokeWidth="4" />
        <line y1="14" x2="8" y2="14" stroke="black" strokeWidth="4" />
        <line y1="94" x2="8" y2="94" stroke="black" strokeWidth="4" />
        <line y1="174" x2="8" y2="174" stroke="black" strokeWidth="4" />
        <line y1="254" x2="8" y2="254" stroke="black" strokeWidth="4" />
        <line y1="334" x2="8" y2="334" stroke="black" strokeWidth="4" />
        <line y1="30" x2="8" y2="30" stroke="black" strokeWidth="4" />
        <line y1="110" x2="8" y2="110" stroke="black" strokeWidth="4" />
        <line y1="190" x2="8" y2="190" stroke="black" strokeWidth="4" />
        <line y1="270" x2="8" y2="270" stroke="black" strokeWidth="4" />
        <line y1="350" x2="8" y2="350" stroke="black" strokeWidth="4" />
        <rect width="53" height="384" fill={`url(#${paintId})`} />
      </g>
      <path
        d="M44.88 215.24C39.024 215.24 36.624 212.672 36.624 206.984C36.624 201.392 39.768 198.68 44.568 198.68C48.96 198.68 51.792 200.792 51.792 204.08V204.272H47.784V204.08C47.784 202.688 46.872 202.136 44.568 202.136C41.616 202.136 40.464 203.072 40.464 206.36V207.416H40.728C41.4 206.12 43.128 205.064 46.008 205.064C49.968 205.064 52.176 206.672 52.176 209.96C52.176 213.176 49.656 215.24 44.88 215.24ZM44.688 211.784C47.544 211.784 48.408 211.112 48.408 209.696C48.408 208.208 47.568 207.56 44.712 207.56C41.688 207.56 40.752 208.208 40.752 209.648C40.752 211.088 41.712 211.784 44.688 211.784ZM61.3464 215.24C56.3064 215.24 53.6664 213.536 53.6664 210.008V209.792H57.3864V210.008C57.3864 211.376 58.3464 211.952 61.3944 211.952C64.1544 211.952 64.9944 211.304 64.9944 209.552C64.9944 207.776 64.1544 207.128 61.4184 207.128C59.2104 207.128 58.0104 207.392 57.4344 208.232L57.1704 208.208V208.232L53.7864 208.136L54.6984 198.92H67.9464V202.16H57.8904L57.3864 206.36L57.6024 206.384C58.1784 205.448 59.8824 204.272 62.8824 204.272C66.8424 204.272 68.8104 206.192 68.8104 209.504C68.8104 212.984 66.4584 215.24 61.3464 215.24Z"
        fill="black"
      />
      <path
        d="M75.5 204C73.3043 204 72 202.47 72 200C72 197.542 73.3043 196 75.5 196C77.6957 196 79 197.542 79 200C79 202.47 77.6957 204 75.5 204ZM75.5 202.794C77.0543 202.794 77.75 201.936 77.75 200C77.75 198.064 77.0543 197.206 75.5 197.206C73.9457 197.206 73.2391 198.064 73.2391 200C73.2391 201.936 73.9457 202.794 75.5 202.794Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id={paintId}
          x1="26.5"
          y1="0"
          x2="26.5"
          y2="384"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="transparent" />
          <stop offset="0.25" stopColor="transparent" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="transparent" stopOpacity="0" />
          <stop offset="0.75" stopColor="transparent" stopOpacity="0.95" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="53" height="373" fill="transparent" />
        </clipPath>
      </defs>
    </svg>
  );
}
