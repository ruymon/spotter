"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface ThemeSwitcherProps {};

export function ThemeSwitcher({}: ThemeSwitcherProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <Skeleton className="w-8 h-8" />
  }

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="ghost" onClick={handleThemeChange} className="w-fit h-fit p-2 hover:text-primary transition-colors text-muted-foreground" size="icon">
      {theme === "dark" ? <Sun className="shrink-0 w-4 h-4" /> : <Moon className="shrink-0 w-4 h-4" />}
    </Button>
  )
};
