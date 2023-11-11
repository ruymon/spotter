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
          <NavbarItem href="/dashboard" label="Dashboard" />
          <NavbarItem href="/dashboard/new" label="Novo" />
          <NavbarItem href="/dashboard/history" label="Histórico" />
          <NavbarItem href="/dashboard/account" label="Perfil" />
        </ul>
      </div>
    </nav>
  );
};
