import { Input } from "@/components/ui/input";
import { FormItemHeader } from "./FormItemHeader";
import { FormStepHeader } from "./FormStepHeader";

interface LocationDetailsStepProps {};

export function LocationDetailsStep({}: LocationDetailsStepProps) {
  return (
    <>
      <FormStepHeader title="Aeródromos e localidades" description="Escolha as localidades para exibir" />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <FormItemHeader
            title="Localidade"
            description="Código ICAO do aeródromo, com base no código ICAO, o sistema irá exibir as informações do aeródromo ou localidade (METAR / TAF)."
          />

          <Input
            type="text"
            placeholder="Código ICAO"
          />
        </div>
      </div>
    </>
  );
};
