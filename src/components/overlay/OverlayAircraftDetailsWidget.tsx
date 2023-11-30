import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

interface OverlayAircraftDetailsWidgetProps {};

export function OverlayAircraftDetailsWidget({}: OverlayAircraftDetailsWidgetProps) {
  return (
    <Card className="p-0 w-full max-w-md absolute right-10 top-10 overflow-clip gap-2">
      <header className="flex flex-col items-center">
        <figure className="relative h-48 opacity-80 flex-1 inset-0 pointer-events-none">
          <Image width={1920} height={1080} src="https://cdn.jetphotos.com/full/6/612748_1699378426.jpg" priority alt="Airplane" className="object-fill w-full h-full" />
          <div className="bg-gradient-to-b from-transparent to-background absolute top-0 left-0 w-full h-full" />
        </figure>

        <div className="flex flex-col items-center gap-2 -mt-16 z-10">
          <img src="https://companieslogo.com/img/orig/LTM.SN-8e4d5863.png" alt="Latam Icon" className="w-4 grayscale invert mb-4" />
          <h3 className="text-secondary-foreground font-bold text-3xl leading-none">PR-RUY</h3>
          <span className="text-muted-foreground font-medium leading-none">AIRBUS A320 neo</span>
        </div>
      </header>

      <CardContent className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-medium text-secondary-foreground">Progresso</span>
            <span className="text-sm text-muted-foreground">Taxa de progresso do voo</span>
          </div>
          <Progress value={75} />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-4 p-3 rounded-md border w-full">
            <PlaneTakeoff className="text-muted-foreground w-4 h-4" />
            <div className="flex flex-col">
              <span className="font-medium text-secondary-foreground">Origem</span>
              <span className="text-sm text-muted-foreground">São Paulo (GRU)</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-3 rounded-md border w-full">
            
            <PlaneLanding className="text-muted-foreground w-4 h-4" />
            <div className="flex flex-col">
              <span className="font-medium text-secondary-foreground">Destino</span>
              <span className="text-sm text-muted-foreground">São Paulo (GRU)</span>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};
