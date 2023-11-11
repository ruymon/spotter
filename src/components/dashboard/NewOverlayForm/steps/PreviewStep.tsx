import { saveOverlayInDatabase } from "@/actions/newOverlayFormActions";
import { BrowserWindow } from "@/components/BrowserWindow";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormStepHeader } from "../FormStepHeader";
import { useNewOverlayFormContext } from "../NewOverlayForm";
import { OverlaySyncStatusCard } from "../SyncStatusCard";

export function PreviewStep() {
  const { currentFormStep, onNextStep, onPreviousStep, data, dataSyncedStatus, setDataSyncedStatus } = useNewOverlayFormContext();

  async function handleNextStep() {
    try {
      await saveOverlayInDatabase(data);
      setDataSyncedStatus("synced");
      onNextStep();
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao salvar o overlay no banco de dados.");
    }
  }

  return (
    <div className="flex flex-col gap-10 flex-1 justify-between">
      <FormStepHeader title="Pré-visualização" description="Consulte uma prévia, antes de finalizá-lo." />

      <BrowserWindow>
        <div className="justify-center items-center flex w-full h-full">
          <span>Algum preview que ainda não existe.</span>
        </div>
      </BrowserWindow>

      <OverlaySyncStatusCard syncStatus={dataSyncedStatus} />

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
          onClick={handleNextStep}
        >
          <span>Salvar e continuar</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
