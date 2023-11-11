import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getDistanceFromDate } from "@/lib/date";
import { Check, ExternalLink, Star } from "lucide-react";
import { NewOverlayFormData } from "../NewOverlayForm/NewOverlayForm";
import { OverlayHistoryCardSetting } from "./OverlayHistoryCardSetting";

interface OverlayHistoryCardProps {
  updatedAt: string;
  createdAt: string;
  overlay: NewOverlayFormData;
};

export function OverlayHistoryCard({ overlay, updatedAt, createdAt }: OverlayHistoryCardProps) {
  console.log(new Date(createdAt))

  return (
    <Card className="flex flex-col bg-background border rounded-lg p-5 gap-8">
      <CardHeader className="p-0 space-y-0 flex-col md:flex-row items-start md:justify-between gap-4">
        <div className="flex flex-col gap-0.5 flex-1">
          <span className="text-muted-foreground text-xs mb-1.5 capitalize">{overlay.eventDetails.label}</span>
          <span className="text-secondary-foreground font-bold text-2xl">{overlay.eventDetails.title}</span>
          <span className="text-muted-foreground text-sm md:w-10/12">{overlay.eventDetails.subtitle}</span>
        </div>

        <Badge variant="outline" className="items-center gap-1.5 px-2 py-1 shrink-0">
          <Check className="w-3 h-3 shrink-0 text-green-500" />
          <span className="font-medium text-xs text-secondary-foreground">Sincronizado</span>
        </Badge>
      </CardHeader>

      <CardContent className="p-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-12">
        <OverlayHistoryCardSetting label="Aeródromo" description={overlay.locationDetails.icao} />
        <OverlayHistoryCardSetting label="Estatísticas de decolagens" description={overlay.overlaySettings.showOutboundFlightsCount === true ? "Exibir em tela" : 'Não exibir'} />
        <OverlayHistoryCardSetting label="Estatísticas de pousos" description={overlay.overlaySettings.showInboundFlightsCount === true ? "Exibir em tela" : 'Não exibir'} />
        <OverlayHistoryCardSetting label="Formato hora" description={`${overlay.overlaySettings.showZuluTime && "UTC (zulu)"} ${overlay.overlaySettings.showZuluTime && overlay.overlaySettings.showLocalTime && " e "} ${overlay.overlaySettings.showLocalTime && "Hora local"}`} />
        <OverlayHistoryCardSetting label="Meteorologia" description={overlay.overlaySettings.showMetar === true ? 'Exibir METAR' : 'Não exibir'} />
      </CardContent>

      <CardFooter className="p-0 flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 md:gap-2 w-full">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="">Editado por último {getDistanceFromDate(new Date(updatedAt))}</span>
        </div>

        <div className="flex flex-row items-center gap-2 w-full md:w-auto justify-between md:justify-normal">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline" className="h-8 w-8 p-2">
              <Star />
            </Button>

            <Button size="icon" variant="outline" className="h-8 w-8 p-2">
              <ExternalLink />
            </Button>
          </div>

          <Button className="h-8 p-2 text-sm font-medium shrink-0">
            Configurar overlay
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
