import { cn } from "@/lib/utils";
import { MoveDownRight, MoveUpRight } from "lucide-react";
import { ReactNode } from "react";
import { Skeleton } from "../ui/skeleton";

type AirportMovementStatisticsVariants = "arrivals" | "departures";

interface OverlayAirportMovementStatisticsProps {
  count: number | null;
  variant: AirportMovementStatisticsVariants;
}

const AirportMovementStatisticsIconVariants: { [key in AirportMovementStatisticsVariants]: ReactNode } = {
  arrivals: <MoveDownRight />,
  departures: <MoveUpRight />
};

const AirportMovementStatisticsColorVariants: { [key in AirportMovementStatisticsVariants]: string } = {
  arrivals: "blue",
  departures: "orange"
};

const AirportMovementStatisticsLabelVariants: { [key in AirportMovementStatisticsVariants]: string } = {
  arrivals: "Pousos",
  departures: "Decolagens"
};

export function OverlayAirportMovementStatistics({ count, variant }: OverlayAirportMovementStatisticsProps) {
  return (
    <div className="flex gap-4">
      <figure className={cn("w-full p-2 rounded-md flex items-center justify-center bg-gradient-to-br from-muted via-accent to-background text-secondary-foreground")}>
        {AirportMovementStatisticsIconVariants[variant]}
      </figure>

      <div className="flex flex-col gap-1">
        { count !== null ? <span className="text-5xl font-bold text-secondary-foreground">{count}</span> : <Skeleton className="w-12 h-14" />}
        <span className="text-muted-foreground">{AirportMovementStatisticsLabelVariants[variant]}</span>
      </div>
    </div>
  )
}