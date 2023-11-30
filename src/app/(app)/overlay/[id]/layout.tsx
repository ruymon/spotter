import { ReactNode } from "react";

interface OverlayLayoutProps {
  children: ReactNode
};

export default function OverlayLayout({ children }: OverlayLayoutProps) {
  return (
    <main className="relative w-screen h-screen overflow-hidden !bg-transparent">
      {children}
    </main>
  );
};
