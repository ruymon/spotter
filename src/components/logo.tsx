import { siteConfig } from "@/config/site";
import { Aperture } from "lucide-react";

interface LogoProps {};

export function Logo({}: LogoProps) {
  return (
    <div className="flex items-center gap-1.5 font-heading text-xl font-bold text-secondary-foreground">
      <Aperture className="w-6 text-primary" />
      <span className="leading-none">{siteConfig.name}</span>
    </div>
  );
};
