"use client";

import { OverlayBrandClock } from "@/components/overlay/OverlayBrandClock";
import { OverlayHeader } from "@/components/overlay/OverlayHeader";
import { OverlayStatistics } from "@/components/overlay/OverlayStatistics";
import { Overlay } from "@/types";
import { useSearchParams } from "next/navigation";

const defaultOverlay: Overlay = {
  title: "Evento sem título",
  subtitle: "Evento sem subtítulo",
  locationIcao: "sbgr",
  label: "evento",
  isPreview: false,
}

function getOverlayParams(searchParams: URLSearchParams) {
  const overlay: Overlay = {
    title: searchParams.get("title") ?? defaultOverlay.title,
    subtitle: searchParams.get("subtitle") ?? defaultOverlay.subtitle,
    locationIcao: searchParams.get("locationIcao") ?? defaultOverlay.locationIcao,
    label: searchParams.get("label") ?? defaultOverlay.label,
    isPreview: searchParams.get("preview") === "true" ?? defaultOverlay.isPreview,
  };

  return overlay;
}


export default function DashboardPage() {
  const searchParams = useSearchParams();
  const overlayData = getOverlayParams(searchParams);

  return (
    <main className="relative p-4 w-screen h-screen flex flex-col justify-between overflow-hidden">
      <section className="flex flex-col gap-4">
        <OverlayBrandClock />
        <OverlayHeader label={overlayData.label} title={overlayData.title} subtitle={overlayData.subtitle} />
        <OverlayStatistics locationIcao={overlayData.locationIcao} />
      </section>

      <iframe src="https://www.youtube.com/embed/wb2xVVPA_2o?autoplay=1" allow='autoplay' className="absolute top-0 left-0 h-screen w-screen -z-10 scale-150" />
    </main>
  );
};
