import { navbarConfig } from "@/config/navbar";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import { Logo } from "./logo";

interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="flex items-center justify-between py-4 w-full border-b border-border">
      <Link href='/'>
        <Logo />
      </Link>

      <ul className="flex items-center gap-6">
        {navbarConfig.map(({ href, id, title, disabled }) => <NavbarItem href={href} key={id} label={title} disabled={disabled} />)}
      </ul>

      <Link
        className="text-sm font-medium py-1 px-3 rounded hover:bg-primary-foreground hover:text-primary transition-colors text-muted-foreground"
        href='/dashboard'>
        Dashboard
      </Link>
    </nav>
  );
};
