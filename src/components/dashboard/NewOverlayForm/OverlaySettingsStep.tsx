import { Switch } from "@/components/ui/switch";
import { FormItemHeader } from "./FormItemHeader";
import { FormStepHeader } from "./FormStepHeader";

interface OverlaySettingsStepProps {};

export function OverlaySettingsStep({}: OverlaySettingsStepProps) {
  return (
    <>
      <FormStepHeader title="Exibir ou ocultar" description="Gerencie o que será exibido ou ocultado no seu overlay" />

      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <FormItemHeader
            title="Habilitar localidade"
            description="Exibe a localidade escolhida no passo anterior"
          />
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <FormItemHeader
            title="Habilitar localidade"
            description="Exibe a localidade escolhida no passo anterior"
          />
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <FormItemHeader
            title="Habilitar localidade"
            description="Exibe a localidade escolhida no passo anterior"
          />
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <FormItemHeader
            title="Habilitar localidade"
            description="Exibe a localidade escolhida no passo anterior"
          />
          <Switch />
        </div>
      </div>
    </>
  );
};
