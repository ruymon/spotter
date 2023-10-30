"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormItemHeader } from "../FormItemHeader";
import { FormStepHeader } from "../FormStepHeader";


interface EventDetailsStepProps {
  currentFormStep: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

const eventDetailsFormSchema = z.object({
  label: z.string().min(2, {
    message: "Etiqueta do evento deve ter no mínimo 2 caracteres.",
  }),
  title: z.string().min(2, {
    message: "Título do evento deve ter no mínimo 2 caracteres.",
  }),
  subtitle: z.string().min(2, {
    message: "Subtítulo do evento deve ter no mínimo 2 caracteres."
  }),
})

export function EventDetailsStep({ currentFormStep, onNextStep, onPreviousStep }: EventDetailsStepProps) {
  const eventDetailsForm = useForm<z.infer<typeof eventDetailsFormSchema>>({
    resolver: zodResolver(eventDetailsFormSchema),
    defaultValues: {
      label: "",
      title: "",
      subtitle: "",
    },
  })

  function onSubmit(values: z.infer<typeof eventDetailsFormSchema>) {
    console.log(values)
    onNextStep()
  }

  return (
    <div className="flex flex-col gap-10 flex-1">
      <FormStepHeader title="Detalhes da transmissão" description="Preencha os dados para gerar o cabeçalho." />

      <Form {...eventDetailsForm}>
        <form onSubmit={eventDetailsForm.handleSubmit(onSubmit)} className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-8">
            <FormField
              control={eventDetailsForm.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormItemHeader
                    title="Etiqueta"
                    description="Escolha uma etiqueta para o seu overlay. Ela será exibida no topo da tela."
                  />
                  <FormControl>
                    <Input type="text" placeholder="Tipo do evento?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={eventDetailsForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormItemHeader
                    title="Título"
                    description="Escolha um título para o seu overlay. Ele será exibido no topo da tela."
                  />
                  <FormControl>
                    <Input type="text" placeholder="Qual o título do seu overlay?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={eventDetailsForm.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormItemHeader
                    title="Subtítulo"
                    description="Escolha um subtítulo para o seu overlay. Ele será exibido abaixo do título."
                  />
                  <FormControl>
                    <Input type="text" placeholder="Alguma outra informação importante?" {...field} />
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
