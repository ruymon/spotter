import { IDashboardNavItem } from "@/types";
import { History, Home, Plus, User, Users2 } from "lucide-react";

export const dashboardNavItems: IDashboardNavItem[] = [
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
    href: `/dashboard/teams`,
    title: `Equipes`,
    icon: <Users2 />,
    disabled: false,
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