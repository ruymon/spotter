"use client";

import { BetaBanner } from "@/components/BetaBanner";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AirportsSearchInput } from "../AirportsSearchInput";
import { FormItemHeader } from "../FormItemHeader";
import { FormStepFooter } from "../FormStepFooter";
import { FormStepHeader } from "../FormStepHeader";
import { useNewOverlayFormContext } from "../NewOverlayForm";

const locationDetailsFormSchema = z.object({
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

export type LocationDetails = {
  icao: string,
  label: string,
};

export function LocationDetailsStep() {
  const { onNextStep, data, setData } = useNewOverlayFormContext();

  const eventLocationForm = useForm<z.infer<typeof locationDetailsFormSchema>>({
    resolver: zodResolver(locationDetailsFormSchema),
  })

  function onSubmit(values: z.infer<typeof locationDetailsFormSchema>) {
    setData({
      ...data,
      locationDetails: values.locationIcao,
    });
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

          <FormStepFooter />
        </form>
      </Form>
    </div>
  );
};
