interface GlyphProps {
  className?: string;
};

export function ShieldGlyph({ className }: GlyphProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8l15.631-2.93a2 2 0 01.738 0L40 8v21.903a11 11 0 01-5.17 9.328l-10.3 6.438a1 1 0 01-1.06 0l-10.3-6.438A11 11 0 018 29.903V8z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 22a4 4 0 110-8 4 4 0 010 8zM14 32.999C14.432 27.033 18.736 24 23.983 24c5.32 0 9.69 2.866 10.016 9 .013.244 0 1-.835 1H14.808c-.278 0-.83-.676-.807-1.001z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function ThunderGlyph({ className }: GlyphProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 41.523c0 .742.962 1.033 1.374.416l13.849-20.773A.75.75 0 0044.599 20H34V6.477c0-.742-.962-1.033-1.374-.416L18.777 26.834A.75.75 0 0019.401 28H30v13.523z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 11.5A1.5 1.5 0 017.5 10h13a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 016 14.5v-3zm0 24A1.5 1.5 0 017.5 34h13a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 016 38.5v-3zM3.5 22A1.5 1.5 0 002 23.5v3A1.5 1.5 0 003.5 28h11a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-11z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
    </svg>
  );
}

export function VideoCameraGlyph({ className }: GlyphProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 48 48"
    >
      <rect width="26" height="24" x="4" y="12" fill="currentColor" rx="2"></rect>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M42.293 13.707c.63-.63 1.707-.184 1.707.707v19.172c0 .89-1.077 1.337-1.707.707l-9.586-9.586a1 1 0 010-1.414l9.586-9.586z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
    </svg>
  );
}

export function AttachmentGlyph({ className }: GlyphProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.757 25.414l-4.242 4.243a2 2 0 002.828 2.828l4.243-4.242L24 29.657a4 4 0 010 5.657l-5.657 5.657a4 4 0 01-5.657 0L7.03 35.314a4 4 0 010-5.657L12.686 24a4 4 0 015.657 0l1.414 1.414z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M28.243 22.586l4.242-4.243a2 2 0 10-2.828-2.828l-4.243 4.242L24 18.343a4 4 0 010-5.657l5.657-5.657a4 4 0 015.657 0l5.657 5.657a4 4 0 010 5.657L35.314 24a4 4 0 01-5.657 0l-1.414-1.414z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.737 10.565a1 1 0 010-1.414L9.15 7.736a1 1 0 011.414 0l4.243 4.243a1 1 0 010 1.414l-1.415 1.415a1 1 0 01-1.414 0l-4.242-4.243zm8.95-6.536a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6zM3.372 17.343a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2zM37.192 40.02a1 1 0 001.415 0l1.414-1.413a1 1 0 000-1.415l-4.243-4.242a1 1 0 00-1.414 0l-1.414 1.414a1 1 0 000 1.414l4.242 4.243zm6.536-8.949a1 1 0 001-1v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2a1 1 0 001 1h6zM30.414 44.385a1 1 0 001-1v-6a1 1 0 00-1-1h-2a1 1 0 00-1 1v6a1 1 0 001 1h2z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
    </svg>
  );
}
