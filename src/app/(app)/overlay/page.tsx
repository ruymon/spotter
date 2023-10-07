"use client";

import { OverlayBrandClock } from "@/components/overlay/OverlayBrandClock";
import { OverlayHeader } from "@/components/overlay/OverlayHeader";
import { OverlayStatistics } from "@/components/overlay/OverlayStatistics";
import { useSearchParams } from "next/navigation";

// bg-[url('https://images.unsplash.com/photo-1485727511593-8c9f45ea2a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat

export default function DashboardPage() {
  const searchParams = useSearchParams()

  return (
    <main className="relative p-4 w-screen h-screen flex flex-col justify-between overflow-hidden">
      <section className="flex flex-col gap-4">
        <OverlayBrandClock />
        <OverlayHeader title="24 hours of Vatsim" subtitle="Serviço ATC no mundo inteiro para o grande evento com duração de 24 horas!" />
        <OverlayStatistics />
      </section>

      <iframe src="https://www.youtube.com/embed/wb2xVVPA_2o?autoplay=1" allow='autoplay' className="absolute top-0 left-0 h-screen w-screen -z-10 scale-150" />
    </main>
  );
};
