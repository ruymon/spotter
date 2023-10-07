import Link from "next/link";

interface NavbarItemProps {
  href: string;
  label: string;
  disabled?: boolean;
};

export function NavbarItem({ href, label, disabled }: NavbarItemProps) {
  return (
    <li className="text-sm font-medium text-muted-foreground hover:text-secondary-foreground transition-colors">
      <Link href={href}>
        {label}
      </Link>
    </li>
  );
};
