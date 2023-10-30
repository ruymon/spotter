import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  url?: string;
  urlPrefix?: string;
  className?: string;
};

export function BrowserWindow({ children, url, urlPrefix = "https://", className }: BrowserWindowProps) {
  return (
    <figure className={cn("rounded bg-card w-full aspect-video p-3 flex flex-col items-center gap-2", className)}>
      <div className="w-full flex items-center justify-between gap-3">
        <div className="bg-background flex items-center gap-0.5 opacity-40 py-1 px-2 rounded-sm text-xs text-foreground grow">
          <span className="opacity-40">{urlPrefix}</span>
          <span>{url || siteConfig.name.toLocaleLowerCase()}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="aspect-square w-2 rounded-full bg-green-500" />
          <div className="aspect-square w-2 rounded-full bg-amber-500" />
          <div className="aspect-square w-2 rounded-full bg-red-500" />
        </div>
      </div>

      <div className="flex-1 w-full bg-background rounded">
        {children}
      </div>
    </figure>
  );
};
