"use client";

import { cn } from "@/lib/utils";
import { type ISidebarNavItem } from "@/types";
import { Aperture, Fingerprint, History, Home, Lightbulb, LogOut, Moon, PanelLeftClose, PanelLeftOpen, Plus, SlidersHorizontal, Star } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
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
    href: `/dashboard/history`,
    title: `Histórico`,
    icon: <History />,
    disabled: false,
    external: false
  },
  {
    href: `/dashboard`,
    title: `Modelos salvos`,
    icon: <Star />,
    disabled: true,
    external: false
  },
  {
    href: `/dashboard`,
    title: `Configurações`,
    icon: <SlidersHorizontal />,
    disabled: true,
    external: false
  }
]

interface SidebarNavProps {};

export function SidebarNav({}: SidebarNavProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <aside className={cn("flex flex-col gap-5 w-80 h-screen sticky top-0 px-4 py-8", isExpanded ? 'w-80' : 'w-16 items-center')}>
      <div className="flex flex-col gap-6 px-4" >
        {isExpanded ? <Logo /> : <Aperture className="w-7 text-primary shrink-0" />}
        <Separator className="w-full" />
      </div>

      <nav className={cn("flex flex-col gap-4 grow justify-start", isExpanded ? "items-start" : "items-center")}>
        {SidebarNavItems.map(({ href, title, icon, disabled, external }) => (
          <SidebarNavItem href={href} key={title} title={title} icon={icon} disabled={disabled} external={external} isExpanded={isExpanded} />)
        )}
      </nav>

      <div className={cn("flex flex-col gap-4", isExpanded ? "items-start" : "items-center")}>
        <div className="flex items-center gap-4 h-10 px-4 mb-6">
          <Fingerprint className="shrink-0 w-5 text-primary" />

          {isExpanded && (
            <div className="flex flex-col">
              <span className="text-secondary-foreground font-semibold text-sm">Vatbrz</span>
              <span className="text-xs text-muted-foreground">Conta vinculada à Vatsim HQ</span>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          size={isExpanded ? "default" : "icon"}
          className={
            cn(
              "relative text-muted-foreground hover:text-secondary-foreground transition-colors",
              isExpanded ? "justify-start flex items-center gap-4 w-full" : "justify-center"
            )
          }
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <figure className="shrink-0 w-5 flex items-center justify-center aspect-square">
            {theme === "dark" ? <Lightbulb /> : <Moon />}
          </figure>
          {isExpanded && <span>{theme === "dark" ? "Modo claro" : "Modo escuro"}</span>}
        </Button>

        <Button
          variant="ghost"
          size={isExpanded ? "default" : "icon"}
          className={
            cn(
              "relative text-muted-foreground hover:text-secondary-foreground transition-colors",
              isExpanded ? "justify-start flex items-center gap-4 w-full" : "justify-center"
            )
          }
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <figure className="shrink-0 w-5 flex items-center justify-center aspect-square">
            {isExpanded ? <PanelLeftClose /> : <PanelLeftOpen />}
          </figure>
          {isExpanded && <span>Recolher painel lateral</span>}
        </Button>

        <Button
          variant="ghost"
          size={isExpanded ? "default" : "icon"}
          className={
            cn(
              "relative text-muted-foreground hover:text-secondary-foreground transition-colors",
              isExpanded ? "justify-start flex items-center gap-4 w-full" : "justify-center"
            )
          }
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <figure className="shrink-0 w-5 flex items-center justify-center aspect-square">
            <LogOut />
          </figure>
          {isExpanded && <span>Sair da plataforma</span>}
        </Button>
      </div>
    </aside>
  );
};
