import { AlertTriangle } from "lucide-react";

interface BetaBannerProps {
  title?: string,
  description: string,
};

export function BetaBanner({title = "Novas funcionalidades...", description}: BetaBannerProps) {
  return (
    <div className="flex gap-3 items-center w-full rounded-md border border-violet-500/20 border-dashed bg-violet-900/5 px-3 py-2 text-sm">
      <AlertTriangle className="text-violet-500" size={16} />

      <div className="flex flex-col">
        <span className="font-semibold text-primary">{title}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
    </div>
  );
};
