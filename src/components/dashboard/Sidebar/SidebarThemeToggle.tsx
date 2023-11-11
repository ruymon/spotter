"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SidebarThemeToggleProps {};

export function SidebarThemeToggle({}: SidebarThemeToggleProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <Skeleton className="w-full h-10" />
  }

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      variant="ghost"
      className="w-full px-3 overflow-clip h-auto gap-4 shrink-0 flex items-center justify-start relative text-muted-foreground hover:text-secondary-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:text-muted-foreground data-[active=true]:before:absolute data-[active=true]:before:w-1 data-[active=true]:before:rounded-full data-[active=true]:before:aspect-square data-[active=true]:before:left-0 data-[active=true]:text-primary data-[active=true]:hover:text-primary data-[active=true]:cursor-default data-[active=true]:hover:bg-background data-[active=true]:before:bg-primary"
      onClick={handleThemeChange}
    >
      <figure className="w-5 shrink-0 aspect-square flex items-center justify-center">
        {theme === "dark" ? <Lightbulb /> : <Moon />}
      </figure>
      <span className="whitespace-nowrap">{theme === "dark" ? "Modo claro" : "Modo escuro"}</span>
    </Button>
  );
};
