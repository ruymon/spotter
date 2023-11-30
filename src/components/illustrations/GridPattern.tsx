
interface GridPatternProps {
  className?: string;
};

export function GridPattern({ className }: GridPatternProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
    >
      <defs>
        <pattern
          width="30"
          height="30"
          x="-1"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path fill="none" strokeDasharray="4 2" d="M.5 30V.5H30"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#:r1p:)"></rect>
    </svg>
  );
};
