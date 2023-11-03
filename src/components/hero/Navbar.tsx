import { navbarConfig } from "@/config/navbar";
import Link from "next/link";
import { Logo } from "../logo";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { NavbarItem } from "./NavbarItem";
import { ThemeSwitcher } from "./ThemeSwitcher";


interface NavbarProps {};

export function Navbar({}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-20 w-full bg-transparent backdrop-blur-2xl backdrop-saturate-200 px-8 sm:px-16">
      <MaxWidthWrapper className="flex items-center justify-between py-4 w-full">
        <Link href='/'>
          <Logo />
        </Link>

        <ul className="flex items-center gap-6">
          {navbarConfig.map(({ href, id, title, disabled }) => <NavbarItem href={href} key={id} label={title} disabled={disabled} />)}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeSwitcher />

          <Link
            className="text-sm font-medium py-1.5 px-3 rounded hover:bg-primary-foreground hover:text-primary transition-colors text-muted-foreground"
            href='/dashboard'>
            Dashboard
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
