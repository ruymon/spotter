"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNewOverlayFormContext } from "./NewOverlayForm";

interface FormStepFooterProps {};

export function FormStepFooter({}: FormStepFooterProps) {
  const { currentFormStep, onPreviousStep } = useNewOverlayFormContext();

  return (
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
  );
};
