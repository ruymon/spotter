"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IDashboardNavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarNavItemProps = IDashboardNavItem;

export function SidebarNavItem({ href, title, icon, disabled, external }: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={external ? `_blank` : `_self`}
      data-disabled={disabled}
      data-active={isActive}
      className={
        cn(
          buttonVariants({ variant: 'ghost' }),
          "w-full px-3 overflow-clip h-auto gap-4 shrink-0 flex items-center justify-start relative text-muted-foreground hover:text-secondary-foreground transition-colors ",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60 data-[disabled=true]:hover:text-muted-foreground data-[active=true]:before:absolute data-[active=true]:before:w-1 data-[active=true]:before:rounded-full data-[active=true]:before:aspect-square data-[active=true]:before:left-0 data-[active=true]:text-primary data-[active=true]:hover:text-primary data-[active=true]:cursor-default data-[active=true]:hover:bg-background data-[active=true]:before:bg-primary",
        )}>


      <figure className="w-5 shrink-0 aspect-square flex items-center justify-center">
        {icon}
      </figure>

      <span className="whitespace-nowrap">{title}</span>
    </Link>
  );
};
