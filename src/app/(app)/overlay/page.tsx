"use client";

import { OverlayBrandClock } from "@/components/overlay/OverlayBrandClock";
import { OverlayHeader } from "@/components/overlay/OverlayHeader";
import { OverlayStatistics } from "@/components/overlay/OverlayStatistics";
import { useSearchParams } from "next/navigation";

interface Overlay {
  label: string;
  title: string;
  subtitle: string;

  locationIcao: string;
  locationLabel: string;

  showZuluTime: boolean;
  showLocalTime: boolean;
  showMetar: boolean;
  showInboundFlightsCount: boolean;
  showOutboundFlightsCount: boolean;

  isPreview: boolean;
}

const defaultOverlay: Overlay = {
  label: "evento",
  title: "Evento sem título",
  subtitle: "Evento sem subtítulo",

  locationIcao: "sbgr",
  locationLabel: "Guarulhos",

  showZuluTime: true,
  showLocalTime: true,
  showMetar: true,
  showInboundFlightsCount: true,
  showOutboundFlightsCount: true,

  isPreview: true,
}

function getOverlayParams(searchParams: URLSearchParams) {
  const overlay: Overlay = {
    label: searchParams.get("label") ?? defaultOverlay.label,
    title: searchParams.get("title") ?? defaultOverlay.title,
    subtitle: searchParams.get("subtitle") ?? defaultOverlay.subtitle,

    locationIcao: searchParams.get("locationIcao") ?? defaultOverlay.locationIcao,
    locationLabel: searchParams.get("locationLabel") ?? defaultOverlay.locationLabel,

    showZuluTime: searchParams.get("showZuluTime") === "true" ?? defaultOverlay.showZuluTime,
    showLocalTime: searchParams.get("showLocalTime") === "true" ?? defaultOverlay.showLocalTime,
    showMetar: searchParams.get("showMetar") === "true" ?? defaultOverlay.showMetar,
    showInboundFlightsCount: searchParams.get("showInboundFlightsCount") === "true" ?? defaultOverlay.showInboundFlightsCount,
    showOutboundFlightsCount: searchParams.get("showOutboundFlightsCount") === "true" ?? defaultOverlay.showOutboundFlightsCount,

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
        <OverlayHeader 
          label={overlayData.label} 
          title={overlayData.title} 
          subtitle={overlayData.subtitle} 
        />
        <OverlayStatistics 
          locationIcao={overlayData.locationIcao}
          locationLabel={overlayData.locationLabel}
          showMetar={overlayData.showMetar}
          showInboundFlightsCount={overlayData.showInboundFlightsCount}
          showOutboundFlightsCount={overlayData.showOutboundFlightsCount}
        />
      </section>

      { overlayData.isPreview && <iframe src="https://www.youtube.com/embed/wb2xVVPA_2o?autoplay=1" allow='autoplay' className="absolute top-0 left-0 h-screen w-screen -z-10 scale-150" />}
    </main>
  );
};
