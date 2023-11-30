import { cn } from "@/lib/utils";
import { VatsimBrasilLogo } from "../VatsimBrasilLogo";
import { Card, CardHeader } from "../ui/card";
import { OverlayClock } from "./OverlayClock";
import { OverlayHat } from "./OverlayHat";

interface OverlayHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function OverlayHeader({ title, subtitle, label, className }: OverlayHeaderProps) {
  return (
    <Card className={cn("w-fit p-6", className)}>
      <CardHeader className="flex-row items-center justify-between">
        <OverlayHat label={label} variant="primary" />
        <VatsimBrasilLogo className="text-secondary-foreground w-16" />
      </CardHeader>

      <div className="flex flex-col gap-1.5">
        <h1 className="text-4xl font-bold text-secondary-foreground">{title}</h1>
        <span className="font-normal text-muted-foreground">{subtitle}</span>
      </div>

      <OverlayClock className="text-2xl font-bold text leading-none text-muted-foreground" />
    </Card>
  );
};
