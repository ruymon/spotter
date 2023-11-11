import { Check, RefreshCw, RefreshCwOff } from "lucide-react";
import { ReactNode } from "react";
import { OverlayDataSyncStatus } from "./NewOverlayForm";

interface OverlaySyncStatusCardProps {
  syncStatus: OverlayDataSyncStatus;
};

const statusIconVariants: { [key in OverlayDataSyncStatus]: ReactNode } = {
  synced: <Check className="text-green-500 w-4 shrink-0" />,
  syncing: <RefreshCw className="text-indigo-500 animate-spin w-4 shrink-0" />,
  unsynced: <RefreshCwOff className="text-destructive w-4 shrink-0" />,
};

const statusTitleVariants: { [key in OverlayDataSyncStatus]: string } = {
  synced: "Sincronizado na nuvem",
  syncing: "Salvando overlay na nuvem...",
  unsynced: "Não sincronizado na nuvem",
};

const statusDescriptionVariants: { [key in OverlayDataSyncStatus]: string } = {
  synced: "Fique tranquilo, esse overlay já está salvo no seu perfil e você poderá reutilizá-la a qualquer momento.",
  syncing: "Isso não deve demorar muito. Você poderá acessá-lo na aba de histórico.",
  unsynced: "Esse overlay ainda não está sincronizado. Isso significa que você não poderá acessá-lo em outros dispositivos.",
};

export function OverlaySyncStatusCard({ syncStatus }: OverlaySyncStatusCardProps) {
  return (
    <div className="flex gap-3 items-center text-sm p-3 rounded-md border text-left">
      {statusIconVariants[syncStatus]}
      <div className="flex flex-col gap-1">
        <span className="text-secondary-foreground font-medium">{statusTitleVariants[syncStatus]}</span>
        <span className="text-muted-foreground text-xs leading-snug">{statusDescriptionVariants[syncStatus]}</span>
      </div>
    </div>
  );
};
