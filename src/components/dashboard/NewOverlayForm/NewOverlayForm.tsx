"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useState } from "react";
import { MultiStep } from "../MultiStep";
import { EventDetailsStep } from "./EventDetailsStep";
import { LocationDetailsStep } from "./LocationDetailsStep";
import { OverlaySettingsStep } from "./OverlaySettingsStep";
import { PreviewStep } from "./PreviewStep";

type NewOverlayFormItems = {
  title: string;
  subtitle: string;
  aerodromes: string[];
  hideTitle: boolean;
  hideSubtitle: boolean;
  fetchLocaleMetar: boolean;
  fetchLocaleInboundFlights: boolean;
  fetchLocaleOutboundFlights: boolean;
};

export const NEW_OVERLAY_DEFAULT_FORM_VALUES: NewOverlayFormItems = {
  title: "",
  subtitle: "",
  aerodromes: [],
  hideTitle: false,
  hideSubtitle: false,
  fetchLocaleMetar: true,
  fetchLocaleInboundFlights: true,
  fetchLocaleOutboundFlights: true,
};

const NEW_OVERLAY_DEFAULT_FORM_STEPS: { [key: number]: ReactNode } = {
  0: <EventDetailsStep />,
  1: <LocationDetailsStep />,
  2: <OverlaySettingsStep />,
  3: <PreviewStep />,
};

const FORM_STEPS_COUNT = Object.keys(NEW_OVERLAY_DEFAULT_FORM_STEPS).length;

interface NewOverlayFormProps {};

export function NewOverlayForm({}: NewOverlayFormProps) {
  const [currentFormStep, setCurrentFormStep] = useState(0);

  function handleNextStep() {
    if (currentFormStep === FORM_STEPS_COUNT - 1) {
      return;
    }

    setCurrentFormStep(currentFormStep + 1);
  }

  function handlePreviousStep() {
    if (currentFormStep === 0) {
      return;
    }

    setCurrentFormStep(currentFormStep - 1);
  }

  return (
    <div className="flex flex-col gap-10 flex-1">
      <MultiStep size={FORM_STEPS_COUNT} currentStep={currentFormStep} isZeroBased />

      <div className="flex-1 flex flex-col gap-10">
        {NEW_OVERLAY_DEFAULT_FORM_STEPS[currentFormStep]}
      </div>

      <div className="flex w-full items-end justify-between">
        <Button
          variant="ghost"
          disabled={currentFormStep === 0}
          className="flex items-center gap-2 text-muted-foreground"
          onClick={handlePreviousStep}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar etapa</span>
        </Button>

        {currentFormStep === FORM_STEPS_COUNT - 1 ? (
          <Button
            disabled={currentFormStep !== FORM_STEPS_COUNT - 1}
            className="flex items-center gap-2"
            onClick={handleNextStep}
          >
            <span>Gerar</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            disabled={currentFormStep === FORM_STEPS_COUNT - 1}
            className="flex items-center gap-2 text-muted-foreground"
            onClick={handleNextStep}
          >
            <span>Próxima etapa</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div >
  );
};
