"use client";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { useSidebarContext } from "@/contexts/sidebarContext";
import { cn } from "@/lib/utils";
import { type ISidebarNavItem } from "@/types";
import { Fingerprint, History, Home, Plus, Star, User } from "lucide-react";
import { ReactNode } from "react";
import { SidebarExpandToggle } from "./SidebarExpandToggle";
import { SidebarNavItem } from "./SidebarNavItem";
import { SidebarThemeToggle } from "./SidebarThemeToggle";

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
    href: `/dashboard/saved`,
    title: `Modelos salvos`,
    icon: <Star />,
    disabled: true,
    external: false
  },
  {
    href: `/dashboard/account`,
    title: `Perfil`,
    icon: <User />,
    disabled: false,
    external: false
  }
]

interface SidebarNavProps {
  children?: ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps) {
  const { isSidebarExpanded } = useSidebarContext();

  return (
    <aside className={cn("flex flex-col gap-5 h-screen top-0 py-8 px-2 sticky", isSidebarExpanded ? 'w-80' : 'w-16')}>
      <div className="flex flex-col gap-6">
        <Logo className="pl-3 overflow-clip gap-3" />
        <Separator className="w-full" />
      </div>

      <nav className="flex flex-col gap-3 grow">
        {SidebarNavItems.map((item) => <SidebarNavItem key={item.href} {...item} />)}
      </nav>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 px-3 mb-3 overflow-clip">
          <Fingerprint className="shrink-0 w-5 aspect-square text-primary" />

          <div className="flex flex-col whitespace-nowrap">
            <span className="text-secondary-foreground font-semibold text-sm">Vatbrz</span>
            <span className="text-xs text-muted-foreground">Conta vinculada à Vatsim HQ</span>
          </div>
        </div>

        <SidebarThemeToggle />
        <SidebarExpandToggle />

        {children}
      </div>
    </aside>
  );
};
