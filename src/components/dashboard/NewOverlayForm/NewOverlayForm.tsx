"use client";

import { ReactNode } from "react";
import { create } from 'zustand';
import { MultiStep } from "../MultiStep";
import { EventDetails, EventDetailsStep } from "./steps/EventDetailsStep";
import { FinishedStep } from "./steps/FinishedStep";
import { LocationDetails, LocationDetailsStep } from "./steps/LocationDetailsStep";
import { OverlaySettings, OverlaySettingsStep } from "./steps/OverlaySettingsStep";
import { PreviewStep } from "./steps/PreviewStep";

const FORM_STEPS_COUNT = 5;

const newOverlayFormSteps: { [key: number]: ReactNode } = {
  0: <EventDetailsStep  />,
  1: <LocationDetailsStep />,
  2: <OverlaySettingsStep />,
  3: <PreviewStep />,
  4: <FinishedStep />,
};

export type NewOverlayFormData = {
  eventDetails: EventDetails,
  locationDetails: LocationDetails,
  overlaySettings: OverlaySettings
}

type NewOverlayFormContext = {
  currentFormStep: number, 
  onPreviousStep: () => void, 
  onNextStep: () => void,
  data: NewOverlayFormData,
  setData: (data: NewOverlayFormData) => void;
};

export const useNewOverlayFormContext = create<NewOverlayFormContext>(
  set => ({
    currentFormStep: 0,
    onNextStep: () => set(state => ({ currentFormStep: state.currentFormStep + 1 })),
    onPreviousStep: () => set(state => ({ currentFormStep: state.currentFormStep - 1 })),
    data: {
      eventDetails: {
        label: "",
        title: "",
        subtitle: "",
      },
      locationDetails: {
        icao: "",
        label: "",
      },
      overlaySettings: {
        showZuluTime: true,
        showLocalTime: true,
        showMetar: true,
        showInboundFlightsCount: true,
        showOutboundFlightsCount: true,
      },
    },
    setData: (data: NewOverlayFormData) => set(state => ({ data })),
  })
);

export function NewOverlayForm() {
  const { currentFormStep } = useNewOverlayFormContext();

  return (
    <div className="flex flex-col gap-10 flex-1">
      <MultiStep size={FORM_STEPS_COUNT} currentStep={currentFormStep} isZeroBased />
      {newOverlayFormSteps[currentFormStep]}
    </div >
  );
};
