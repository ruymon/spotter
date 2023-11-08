import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";
import { CURRENT_YEAR } from "@/constants/date";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-8 flex flex-col justify-center gap-24">
      <Link href="/" className="w-fit"><Logo /></Link>
      {children}
      
      <footer className="flex flex-col items-center text-xs text-center text-muted-foreground gap-1 opacity-75 absolute bottom-8 left-1/2 -translate-x-1/2">
        <span>Todos os direitos reservados</span>
        <span>&copy; {CURRENT_YEAR} {siteConfig.name}</span>
      </footer>
    </div>
  );
};
