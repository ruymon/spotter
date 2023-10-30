import { BrowserWindow } from "@/components/BrowserWindow";
import { Button } from "@/components/ui/button";
import { generateOverlayUrl } from "@/services/generateOverlay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormStepHeader } from "../FormStepHeader";
import { useNewOverlayFormContext } from "../NewOverlayForm";

export function PreviewStep() {
  const { currentFormStep, onNextStep, onPreviousStep, data } = useNewOverlayFormContext();

  const overlayUrl = generateOverlayUrl(data);

  console.log(overlayUrl);

  return (
    <div className="flex flex-col gap-10 flex-1 justify-between">
      <FormStepHeader title="Pré-visualização" description="Consulte uma prévia, antes de finalizá-lo." />

      <BrowserWindow className="max-w-3xl self-center">
        <div className="justify-center items-center flex w-full h-full">
          <span>Algum preview que ainda não existe.</span>
        </div>
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
