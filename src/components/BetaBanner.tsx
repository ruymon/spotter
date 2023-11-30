import { AlertTriangle } from "lucide-react";

interface BetaBannerProps {
  title?: string,
  description: string,
};

export function BetaBanner({title = "Novas funcionalidades...", description}: BetaBannerProps) {
  return (
    <div className="flex gap-4 items-center w-full rounded-md border border-violet-500/30 border-dashed bg-violet-500/5 p-3">
      <AlertTriangle className="text-violet-500 w-4 h-4 shrink-0" />

      <div className="flex flex-col gap-1.5">
        <span className="font-medium leading-none text-sm text-secondary-foreground">{title}</span>
        <span className="text-xs text-muted-foreground leading-normal">{description}</span>
      </div>
    </div>
  );
};
