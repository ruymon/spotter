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
};

export function OverlayStatistics({ locationIcao, locationLabel, showMetar, showInboundFlightsCount, showOutboundFlightsCount }: OverlayStatisticsProps) {
  return (
    <div className="rounded-xl bg-gray-900/75 backdrop-blur max-w-sm flex flex-col gap-6 p-6">
      <header className="flex flex-col gap-5">
        <OverlayHat label="Informações" variant="info" />

        <div className="flex flex-col gap-0.5">
          <span className="text-2xl font-bold uppercase text-gray-100">
            {locationIcao}
            {/* <span className="text-base uppercase font-medium text-gray-300">/ gru</span> */}
          </span>
          <span className="text-sm text-gray-300">{locationLabel}</span>
        </div>
      </header>

      {showMetar && <OverlayMetarWidget icao={locationIcao} />}

      <div className="flex items-center gap-6">
        {showInboundFlightsCount && <OverlayInboundWidget icao={locationIcao} />}
        {showInboundFlightsCount && showOutboundFlightsCount && <Separator className="h-12 w-[1px] bg-gray-700" />}
        {showOutboundFlightsCount && <OverlayOutboundWidget icao={locationIcao} />}
      </div>

      <span className="text-xs text-gray-400">Tempo para requisição: 5 minutos.</span>
    </div>
  );
};
