import { dashboardNavItems } from "@/config/dashboardNavigation";
import { Aperture } from "lucide-react";
import { NavbarItem } from "../hero/NavbarItem";
import { Separator } from "../ui/separator";

interface MobileNavProps {};

export function MobileNav({}: MobileNavProps) {
  return (
    <nav className="md:hidden flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <Aperture className="w-6 text-primary shrink-0" />

        <Separator orientation="vertical" className="h-6" />

        <ul className="flex items-center gap-4">
          {dashboardNavItems.map(({href, title}) => <NavbarItem key={href} href={href} label={title} />)}
        </ul>
      </div>
    </nav>
  );
};
