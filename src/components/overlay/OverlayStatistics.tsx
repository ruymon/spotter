import { cn } from "@/lib/utils";
import { Card, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { OverlayHat } from "./OverlayHat";
import { OverlayInboundWidget } from "./OverlayInboundWidget";
import { OverlayMetarWidget } from "./OverlayMetarWidget";
import { OverlayOutboundWidget } from "./OverlayOutboundWidget";

interface OverlayStatisticsProps {
  locationIcao: string;
  locationLabel: string;
  showMetar: boolean;
  showInboundFlightsCount: boolean;
  showOutboundFlightsCount: boolean;
  className?: string;
};

export function OverlayStatistics({ locationIcao, locationLabel, showMetar, showInboundFlightsCount, showOutboundFlightsCount, className }: OverlayStatisticsProps) {
  return (
    <Card className={cn("max-w-sm p-6", className)}>
      <CardHeader className="gap-5">
        <OverlayHat label="Informações" variant="primary" />

        <div className="flex flex-col gap-1">
          <span className="text-4xl font-bold uppercase text-secondary-foreground">{locationIcao}</span>
          <span className="text-muted-foreground">{locationLabel}</span>
        </div>
      </CardHeader>

      {showMetar && <OverlayMetarWidget icao={locationIcao} />}

      <div className="flex items-center gap-6 justify-between">
        {showInboundFlightsCount && <OverlayInboundWidget icao={locationIcao} />}
        {showInboundFlightsCount && showOutboundFlightsCount && <Separator className="h-12 w-[1px] bg-border" />}
        {showOutboundFlightsCount && <OverlayOutboundWidget icao={locationIcao} />}
      </div>
    </Card>
  );
};
