import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Aperture } from "lucide-react";

interface LogoProps {
  className?: string;
};

export function Logo({className}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 text-xl font-bold text-secondary-foreground", className)}>
      <Aperture className="w-6 text-primary shrink-0" />
      <span className="leading-none">{siteConfig.name}</span>
    </div>
  );
};
