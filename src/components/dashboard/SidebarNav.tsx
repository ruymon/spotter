import { type ISidebarNavItem } from "@/types";
import { Fingerprint, History, Home, Plus, SlidersHorizontal, Star } from "lucide-react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { SidebarNavItem } from "./SidebarNavItem";

const SidebarNavItems: ISidebarNavItem[] = [
  {
    href: `/dashboard`,
    title: `Dashboard`,
    icon: <Home />,
    disabled: false,
    external: false
  },
  {
    href: `/dashboard/new`,
    title: `Novo overlay`,
    icon: <Plus />,
    disabled: false,
    external: false
  },
  {
    href: `/dashboard`,
    title: `Histórico`,
    icon: <History />,
    disabled: false,
    external: false
  },
  {
    href: `/dashboard`,
    title: `Modelos salvos`,
    icon: <Star />,
    disabled: false,
    external: false
  },
  {
    href: `/dashboard`,
    title: `Configurações`,
    icon: <SlidersHorizontal />,
    disabled: false,
    external: false
  }
]

interface SidebarNavProps {};

export function SidebarNav({}: SidebarNavProps) {
  return (
    <aside className="bg-primary-foreground flex flex-col gap-16 w-80 h-screen sticky top-0">
      <div className="flex flex-col gap-16 px-8 pt-10">
        <Logo />

        <div className="flex items-center gap-4">
          <div className="p-2 rounded-md bg-primary text-primary-foreground">
            <Fingerprint className="w-5 h-5" />
          </div>

          <div className="flex flex-col">
            <span className="text-secondary-foreground font-semibold">Vatbrz</span>
            <span className="text-sm text-muted-foreground">Conta vinculada à Vatsim HQ</span>
          </div>
        </div>
      </div>


      <nav className="flex flex-col gap-4">
        {SidebarNavItems.map(({ href, title, icon, disabled, external }) => (
          <SidebarNavItem href={href} key={title} title={title} icon={icon} disabled={disabled} external={external} />)
        )}
      </nav>

      <div className="flex flex-col gap-4 p-8 text-muted-foreground grow justify-end items-center">
        <Button variant="ghost" size="lg">Sair da plataforma</Button>
        <span className="text-xs">Spotter &copy; {new Date().getFullYear()}</span>
      </div>
    </aside>
  );
};
