import { BrowserWindow } from "@/components/BrowserWindow";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormStepHeader } from "../FormStepHeader";

interface PreviewStepProps {
  currentFormStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

export function PreviewStep({ currentFormStep, onNextStep, onPreviousStep }: PreviewStepProps) {
  return (
    <div className="flex flex-col gap-10 flex-1 justify-between">
      <FormStepHeader title="Pré-visualização" description="Consulte uma prévia, antes de finalizá-lo." />


      <BrowserWindow className="max-w-3xl self-center">
        <iframe className="w-full h-full rounded-sm" src="https://spotter-two.vercel.app/overlay?title=Nareba%20%C3%A9%20amigo&subtitle=Servi%C3%A7o%20ATC%20no%20mundo%20inteiro%20para%20o%20grande%20evento%20com%20dura%C3%A7%C3%A3o%20de%2024%20horas!&locationIcao=sbgr&label=evento" />
      </BrowserWindow>


      <div className="flex w-full items-end justify-between">
        <Button
          variant="ghost"
          disabled={currentFormStep === 0}
          className="flex items-center gap-2 text-muted-foreground"
          onClick={onPreviousStep}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar etapa</span>
        </Button>

        <Button
          className="flex items-center gap-2"
          onClick={onNextStep}
        >
          <span>Gerar overlay</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
