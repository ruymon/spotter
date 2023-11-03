"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

interface ThemeSwitcherProps {};

export function ThemeSwitcher({}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-fit h-fit p-2 hover:text-primary transition-colors text-muted-foreground"
      size="icon"
    >
      {theme === "dark" ? <Sun className="shrink-0 w-4 h-4" /> : <Moon className="shrink-0 w-4 h-4" />}
    </Button>
  );
};
