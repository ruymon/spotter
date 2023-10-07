import { Input } from "@/components/ui/input";
import { FormItemHeader } from "./FormItemHeader";
import { FormStepHeader } from "./FormStepHeader";

interface EventDetailsStepProps {};

export function EventDetailsStep({}: EventDetailsStepProps) {
  return (
    <>
      <FormStepHeader title="Detalhes da transmissão" description="Preencha os dados para gerar o cabeçalho." />

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <FormItemHeader
            title="Título"
            description="Escolha um título para o seu overlay. Ele será exibido no topo da tela."
          />

          <Input
            type="text"
            placeholder="Qual o título do seu overlay?"
          />
        </div>

        <div className="flex flex-col gap-4">
          <FormItemHeader
            title="Subtítulo"
            description="Escolha um subtítulo para o seu overlay. Ele será exibido abaixo do título."
          />

          <Input
            type="text"
            placeholder="Alguma outra informação importante?"
          />
        </div>
      </div>
    </>
  );
};
