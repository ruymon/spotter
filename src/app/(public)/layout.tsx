import { Navbar } from "@/components/hero/Navbar";
import { ReactNode } from "react";

interface LandingPageLayoutProps {
  children: ReactNode;
};

export default function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <main className="flex flex-col items-center gap-24 bg-background min-h-screen relative">
      <Navbar />
      {children}
    </main>
  );
};
