import { ISidebarNavItem } from "@/types";
import Link from "next/link";

type SidebarNavItemProps = ISidebarNavItem;

export function SidebarNavItem({ href, title, icon, disabled, external }: SidebarNavItemProps) {
  const isActive = false;

  return (
    <Link
      href={href}
      target={external ? `_blank` : `_self`}
      data-disabled={disabled}
      data-active={isActive}
      className="flex items-center gap-4 w-full relative text-muted-foreground hover:text-secondary-foreground transition-colors data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60 data-[disabled=true]:hover:text-muted-foreground data-[active=true]:before:absolute data-[active=true]:before:p-0.5 data-[active=true]:before:w-1 data-[active=true]:before:rounded-r-sm data-[active=true]:before:h-full data-[active=true]:before:left-0 data-[active=true]:text-primary data-[active=true]:hover:text-primary data-[active=true]:cursor-default data-[active=true]:before:bg-primary pl-8 py-2">
      <figure className="w-5 h-5 flex items-center justify-center">
        {icon}
      </figure>
      <span className="font-semibold">{title}</span>
    </Link>
  );
};
