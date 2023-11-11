import { NewOverlayFormData } from "@/components/dashboard/NewOverlayForm/NewOverlayForm";
import { OverlayBrandClock } from "@/components/overlay/OverlayBrandClock";
import { OverlayHeader } from "@/components/overlay/OverlayHeader";
import { OverlayStatistics } from "@/components/overlay/OverlayStatistics";
import { createSupabaseServerClient } from "@/lib/database/server";
import { AlertTriangle } from "lucide-react";
import { cookies } from "next/headers";

interface OverlayPageProps {
  params: {
    id: string;
  };
};

export default async function OverlayPage({ params }: OverlayPageProps) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { data } = await supabase
    .from('overlays')
    .select(`data`)
    .eq('id', params.id)
    .single()

  const overlayData: NewOverlayFormData = data?.data

  if (!overlayData) {
    return (
      <div className="flex flex-col gap-6 justify-center text-sm p-6 rounded-lg text-left border w-full max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <figure className="text-foreground flex items-center gap-2 w-8">
          <AlertTriangle />
        </figure>
        <div className="flex flex-col  gap-0.5">
          <span className="text-secondary-foreground font-semibold text-xl">Nenhum overlay encontrado...</span>
          <span className="text-muted-foreground text-sm">Verifique os parâmetros digitados e tente novamente.</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-secondary-foreground font-medium text-base">Possíveis causas:</span>
          <ol className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            <li>O <code>ID</code> digitado não existe no banco de dados.</li>  
            <li>Você está sem uma conexão com a internet.</li>  
          </ol>
        </div>
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-4 absolute top-0 left-0 p-4">
      <OverlayBrandClock />
      <OverlayHeader
        label={overlayData.eventDetails.label}
        title={overlayData.eventDetails.title}
        subtitle={overlayData.eventDetails.subtitle}
      />
      <OverlayStatistics
        locationIcao={overlayData.locationDetails.icao}
        locationLabel={overlayData.locationDetails.label}
        showMetar={overlayData.overlaySettings.showMetar}
        showInboundFlightsCount={overlayData.overlaySettings.showInboundFlightsCount}
        showOutboundFlightsCount={overlayData.overlaySettings.showOutboundFlightsCount}
      />
    </section>
  );
};
