import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { OverlayAirportMovementStatistics } from "./OverlayAirportMovementStatistics";
import { OverlayHat } from "./OverlayHat";

interface OverlayStatisticsProps {};

export function OverlayStatistics({}: OverlayStatisticsProps) {
  return (
    <div className="rounded-xl bg-gray-900/75 backdrop-blur max-w-sm text-secondary flex flex-col gap-6 p-6">
      <header className="flex flex-col gap-5">
        <OverlayHat label="Informações" variant="info" />

        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
          <Badge variant="secondary" className="w-fit text-lg p-2">A</Badge>
          <div className="flex flex-col">
            <span className="text-2xl font-bold uppercase">sbgr <span className="text-base uppercase text-muted font-medium opacity-80">/ gru</span></span>
            <span className="text-sm text-muted opacity-75">Guarulhos &#183; São Paulo</span>
          </div>
          </div>


          <Badge className="w-fit text-xs font-mono">VMC</Badge>
        </div>
      </header>

      <span 
        before="metar" 
        className="font-mono text-muted text-sm opacity-75 p-3 pt-6 rounded-md bg-secondary-foreground relative before:absolute before:px-2 before:rounded-b before:content-[attr(before)] before:uppercase before:text-xs before:font-semibold before:bg-purple-500 before:text-white before:top-0 before:left-3"
      >METAR SBGR 070000Z 08003KT CAVOK 26/23 Q1016</span>


      <div className="flex items-center gap-6">
        <OverlayAirportMovementStatistics count={85} variant="departures" />
        <Separator className="opacity-10" orientation="vertical" />
        <OverlayAirportMovementStatistics count={13} variant="arrivals" />
      </div>
    </div>
  );
};
