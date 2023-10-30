import { Button } from "@/components/ui/button";
import { Copy, PartyPopper } from "lucide-react";

interface FinishedStepProps {
  currentFormStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

export function FinishedStep({ currentFormStep }: FinishedStepProps) {
  return (
    <div className="flex flex-col gap-24 flex-1 justify-center items-center">
      <section className="flex flex-col gap-12 items-center max-w-md text-center">
        <figure className="p-3 rounded-md flex items-center justify-center border w-fit bg-card text-card-foreground">
          <PartyPopper />
        </figure>

        <div className="flex flex-col gap-1.5 items-center">
          <h2 className="text-2xl font-semibold text-secondary-foreground">Tudo pronto!</h2>
          <div className="text-muted-foreground flex flex-col items-center gap-0.5">
            <span>Tudo pronto por aqui, agora é com você!</span>
            <span>Copie o link gerado e insira na sua transmissão</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          <Button className="dark:font-semibold flex items-center gap-3 w-full" size="lg">
            <Copy className="shrink-0 w-4"/>
            <span>Copiar URL do Overlay</span>
          </Button>

          <div className="text-sm flex items-center text-muted-foreground w-full gap-4">
            <div className="w-full h-0.5 bg-border"/>
            <span>ou</span>
            <div className="w-full h-0.5 bg-border"/>
          </div>

          <Button variant="secondary" className="text-muted-foreground w-full">Voltar ao dashboard</Button>
        </div>



        <span className="text-xs text-muted-foreground leading-relaxed w-3/4">Fique tranquilo: essa configuração já está salva nos seus overlays e você poderá reutilizá-la a qualquer momento.</span>
      </section>
    </div>
  );
};
