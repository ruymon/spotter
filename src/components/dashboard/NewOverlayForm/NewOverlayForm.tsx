"use client";

import { ReactNode, useState } from "react";
import { MultiStep } from "../MultiStep";
import { EventDetailsStep } from "./steps/EventDetailsStep";
import { FinishedStep } from "./steps/FinishedStep";
import { LocationDetailsStep } from "./steps/LocationDetailsStep";
import { OverlaySettingsStep } from "./steps/OverlaySettingsStep";
import { PreviewStep } from "./steps/PreviewStep";


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

const FORM_STEPS_COUNT = 5;

function CurrentFormStepComponent(props: { currentFormStep: number, onPreviousStep: () => void, onNextStep: () => void }) {
  const NEW_OVERLAY_DEFAULT_FORM_STEPS: { [key: number]: ReactNode } = {
    0: <EventDetailsStep {...props}  />,
    1: <LocationDetailsStep {...props} />,
    2: <OverlaySettingsStep {...props} />,
    3: <PreviewStep {...props} />,
    4: <FinishedStep {...props} />,
  };

  return NEW_OVERLAY_DEFAULT_FORM_STEPS[props.currentFormStep];
}


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
      <CurrentFormStepComponent currentFormStep={currentFormStep} onPreviousStep={handlePreviousStep} onNextStep={handleNextStep} />
    </div >
  );
};
