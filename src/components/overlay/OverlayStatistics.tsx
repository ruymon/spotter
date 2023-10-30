import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { OverlayAirportMovementStatistics } from "./OverlayAirportMovementStatistics";
import { OverlayHat } from "./OverlayHat";

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

        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="w-fit text-lg p-2 bg-amber-500 text-gray-50">A</Badge>
            <div className="flex flex-col">
              <span className="text-2xl font-bold uppercase text-gray-200">{locationIcao} <span className="text-base uppercase font-medium text-gray-300">/ gru</span></span>
              <span className="text-sm opacity-75 text-gray-300">{locationLabel}</span>
            </div>
          </div>


          <Badge className="w-fit text-xs font-mono text-gray-50 bg-gray-600">VMC</Badge>
        </div>
      </header>

      {showMetar && (
        <span
          //@ts-expect-error valid attribute and used in className
          before="metar"
          className="font-mono text-sm opacity-75 p-3 pt-6 rounded-md bg-gray-900 text-gray-100 relative before:absolute before:px-2 before:rounded-b before:content-[attr(before)] before:uppercase before:text-xs before:font-semibold before:bg-purple-500 before:text-gray-50 before:top-0 before:left-3"
        >
          METAR SBGR 070000Z 08003KT CAVOK 26/23 Q1016
        </span>
      )}




      <div className="flex items-center gap-6">
        { showInboundFlightsCount && <OverlayAirportMovementStatistics count={85} variant="departures" />}
        { showInboundFlightsCount && showOutboundFlightsCount && <Separator className="h-12 w-[1px] bg-gray-700" />}
        { showOutboundFlightsCount && <OverlayAirportMovementStatistics count={13} variant="arrivals" />}
      </div>
    </div>
  );
};
