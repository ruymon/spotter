"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AirportsSearchInput } from "../AirportsSearchInput";
import { FormItemHeader } from "../FormItemHeader";
import { FormStepHeader } from "../FormStepHeader";
import { BetaBanner } from "@/components/BetaBanner";


interface LocationDetailsStepProps {
  currentFormStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

const eventLocationFormSchema = z.object({
  locationIcao: z.object({
    icao: z.string().min(2, {
      message: "Aeródromo deve ser escolhido da lista.",
    }).max(4, {
      message: "Aeródromo deve ser escolhido da lista.",
    }),
    label: z.string(),
  }, {
    required_error: "Aeródromo deve ser escolhido da lista.",
  }),
})

export function LocationDetailsStep({ currentFormStep, onNextStep, onPreviousStep }: LocationDetailsStepProps) {
  const eventLocationForm = useForm<z.infer<typeof eventLocationFormSchema>>({
    resolver: zodResolver(eventLocationFormSchema),
  })

  function onSubmit(values: z.infer<typeof eventLocationFormSchema>) {
    console.log(values.locationIcao.icao)
    onNextStep()
  }

  return (
    <div className="flex flex-col gap-10 flex-1">
      <div className="flex flex-col gap-4">
        <FormStepHeader title="Aeródromos e localidades" description="Escolha as localidades para exibir" />
        <BetaBanner description="Ainda não é possível ter mais de um aeródromo no overlay. Contudo, em breve habilitaremos essa nova funcionalidade." />
      </div>

      <Form {...eventLocationForm}>
        <form onSubmit={eventLocationForm.handleSubmit(onSubmit)} className="flex flex-col gap-8 flex-1 justify-between">
          <div className="flex flex-col gap-8">
            <FormField
              control={eventLocationForm.control}
              name="locationIcao"
              render={({ field }) => (
                <FormItem>
                  <FormItemHeader
                    title="Localidade"
                    description="Escolha o aeródromo ou localidade para exibir."
                  />
                  <FormMessage />
                  <FormControl>
                    <AirportsSearchInput onBlur={field.onBlur} onChange={field.onChange} value={field.value} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>



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
              variant="ghost"
              type="submit"
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span>Próxima etapa</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
