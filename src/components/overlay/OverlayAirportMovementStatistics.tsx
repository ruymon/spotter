import { cn } from "@/lib/utils";
import { MoveDownRight, MoveUpRight } from "lucide-react";
import { ReactNode } from "react";

type AirportMovementStatisticsVariants = "arrivals" | "departures";

interface OverlayAirportMovementStatisticsProps {
  count: number;
  variant: AirportMovementStatisticsVariants;
}

const AirportMovementStatisticsIconVariants: { [key in AirportMovementStatisticsVariants]: ReactNode } = {
  arrivals: <MoveDownRight />,
  departures: <MoveUpRight />
};

const AirportMovementStatisticsColorVariants: { [key in AirportMovementStatisticsVariants]: string } = {
  arrivals: "rose",
  departures: "orange"
};

const AirportMovementStatisticsLabelVariants: { [key in AirportMovementStatisticsVariants]: string } = {
  arrivals: "Pousos",
  departures: "Decolagens"
};

export function OverlayAirportMovementStatistics({ count, variant }: OverlayAirportMovementStatisticsProps) {
  return (
    <div className="flex gap-3">
      <figure className={cn("w-full p-2 rounded-md flex items-center justify-center", `bg-${AirportMovementStatisticsColorVariants[variant]}-400 text-${AirportMovementStatisticsColorVariants[variant]}-400 bg-opacity-10`)}>
        {AirportMovementStatisticsIconVariants[variant]}
      </figure>

      <div className="flex flex-col gap-1">
        <span className="text-5xl font-bold text-muted">{count}</span>
        <span className="text-sm text-muted">{AirportMovementStatisticsLabelVariants[variant]}</span>
      </div>
    </div>
  )
}