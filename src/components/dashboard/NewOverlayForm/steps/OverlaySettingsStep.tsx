"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormItemHeader } from "../FormItemHeader";
import { FormStepHeader } from "../FormStepHeader";



interface OverlaySettingsStepProps {
  currentFormStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

const overlaySettingsFormSchema = z.object({
  showZuluTime: z.boolean(),
  showLocalTime: z.boolean(),
  showMetar: z.boolean(),
  showInboundFlightsCount: z.boolean(),
  showOutboundFlightsCount: z.boolean(),
})


export function OverlaySettingsStep({ currentFormStep, onNextStep, onPreviousStep }: OverlaySettingsStepProps) {
  const overlaySettingsForm = useForm<z.infer<typeof overlaySettingsFormSchema>>({
    resolver: zodResolver(overlaySettingsFormSchema),
    defaultValues: {
      showZuluTime: true,
      showLocalTime: true,
      showMetar: true,
      showInboundFlightsCount: true,
      showOutboundFlightsCount: true,
    },
  })

  function onSubmit(values: z.infer<typeof overlaySettingsFormSchema>) {
    console.log(values)
    onNextStep()
  }

  return (
    <div className="flex flex-col gap-10 flex-1">
      <FormStepHeader title="Exibir ou ocultar" description="Gerencie o que será exibido ou ocultado no seu overlay" />

      <Form {...overlaySettingsForm}>
        <form onSubmit={overlaySettingsForm.handleSubmit(onSubmit)} className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-8">
            <FormField
              control={overlaySettingsForm.control}
              name="showZuluTime"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormItemHeader
                    title="Exibir horário zulu"
                    description="Exibe o horário UTC (zulu) no seu overlay"
                  />

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={overlaySettingsForm.control}
              name="showLocalTime"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormItemHeader
                    title="Exibir horário local"
                    description="Exibe o horário local com base no aeródromo do evento"
                  />

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={overlaySettingsForm.control}
              name="showMetar"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormItemHeader
                    title="Exibir METAR"
                    description="Busca o METAR do aeródromo do evento e exibe no seu overlay"
                  />

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={overlaySettingsForm.control}
              name="showInboundFlightsCount"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormItemHeader
                    title="Exibir número de chegadas"
                    description="Busca o número de chegadas no aeródromo do evento e exibe no seu overlay"
                  />

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={overlaySettingsForm.control}
              name="showOutboundFlightsCount"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormItemHeader
                    title="Exibir número de saídas"
                    description="Busca o número de saídas do aeródromo do evento e exibe no seu overlay"
                  />

                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
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
