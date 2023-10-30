import { Locate } from "lucide-react";
import { AirportValue } from ".";

interface AirportOptionButtonProps {
  onClick: () => void;
  airport: AirportValue;
};

export function AirportOptionButton({ onClick, airport }: AirportOptionButtonProps) {
  return (
    <button type="button" onClick={onClick} className="hover:bg-muted text-left flex gap-3 items-center w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
      <Locate className="text-muted-foreground" size={16} />

      <div className="flex flex-col">
        <span className="font-semibold text-secondary-foreground">{airport?.icao}</span>
        <span className="text-xs text-muted-foreground">{airport?.label}</span>
      </div>
    </button>
  );
};
