import { cn } from "@/lib/utils";
import { ISidebarNavItem } from "@/types";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type SidebarNavItemProps = ISidebarNavItem & {
  isExpanded?: boolean;
};

export function SidebarNavItem({ href, title, icon, disabled, external, isExpanded }: SidebarNavItemProps) {
  const isActive = false;

  return (
    <Link
      href={href}
      target={external ? `_blank` : `_self`}
      data-disabled={disabled}
      data-active={isActive}
      className={
        cn(buttonVariants({ variant: 'ghost', size: isExpanded ? 'default' : 'icon' }),
          "relative text-muted-foreground hover:text-secondary-foreground transition-colors ",
          "data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60 data-[disabled=true]:hover:text-muted-foreground data-[active=true]:before:absolute data-[active=true]:before:p-0.5 data-[active=true]:before:w-1 data-[active=true]:before:rounded-r-sm data-[active=true]:before:h-full data-[active=true]:before:left-0 data-[active=true]:text-primary data-[active=true]:hover:text-primary data-[active=true]:cursor-default data-[active=true]:before:bg-primary",
          isExpanded ? "justify-start flex items-center gap-4 w-full data-[active=true]:before:-ml-4" : "justify-center data-[active=true]:before:-ml-3"
        )}>

      <figure className="shrink-0 w-5 flex items-center justify-center aspect-square">
        {icon}
      </figure>
      {isExpanded && <span>{title}</span>}
    </Link>
  );
};
