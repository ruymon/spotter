import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper"
import { OverlayHistoryCard } from "@/components/dashboard/OverlayHistoryList/OverlayHistoryCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { createSupabaseServerClient } from "@/lib/database/server"
import { getInitials } from "@/lib/utils"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"

interface TeamProfileDashboardPageProps {
  params: {
    id: string;
  };
};

const overlayMock = {
  "eventDetails": {
    "label": "evento",
    "title": "Chu Passeios Long Haul",
    "subtitle": "O maior evento da Chu Comunidade"
  },
  "locationDetails": {
    "icao": "SBGR",
    "label": "Guarulhos - Governador Andre Franco Montoro International Airport · Sao Paulo"
  },
  "overlaySettings": {
    "showZuluTime": true,
    "showLocalTime": true,
    "showMetar": true,
    "showInboundFlightsCount": true,
    "showOutboundFlightsCount": true
  }
}

export default async function TeamProfileDashboardPage({ params }: TeamProfileDashboardPageProps) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: teamUser } = await supabase.from('team_members').select(`*`).eq('user_id', session?.user?.id).eq('team_id', params.id).single()
  const { data: team } = await supabase.from('teams').select(`*`).eq('id', params.id).single()

  if (!teamUser || !team) notFound();

  return (
    <DashboardMaxWidthWrapper className="md:max-w-5xl">
      <header className="flex flex-col gap-8">
        <Avatar className="w-20 h-20 rounded-3xl">
          <AvatarImage src={team.logo_url} alt="Logo do time" />
          <AvatarFallback className="rounded-3xl">{getInitials(team.name)}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <h2 className="text-4xl font-bold text-secondary-foreground">{team.name}</h2>
          <span className="text-muted-foreground text-sm">Criado em 22/11/2023 por @fonfs</span>
        </div>
      </header>

      <section className="flex gap-12">
        <main className="flex-1 flex flex-col gap-4">
          {/* <EmptyStateCard /> */}
          <OverlayHistoryCard id="1" updatedAt={new Date().toString()} createdAt={new Date().toString()} overlay={overlayMock} />
        </main>

        <aside className="flex flex-col gap-5 max-w-[30%]">
          <div className="flex flex-col">
            <h3 className="text-secondary-foreground font-semibold">Membros</h3>
            <span className="text-sm text-muted-foreground">Usuários que participam dessa equipe</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/fonfs.png" alt="Logo do time" />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-sm gap-0.5">
                <span className="text-secondary-foreground font-medium">Filipe Fonseca</span>
                <span className="text-muted-foreground text-xs">Fundador</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/lcnssantos.png" alt="Logo do time" />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-sm gap-0.5">
                <span className="text-secondary-foreground font-medium">Luciano Santos</span>
                <span className="text-muted-foreground text-xs">Membro</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/ruymon.png" alt="Logo do time" />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-sm gap-0.5">
                <span className="text-secondary-foreground font-medium">Ruy Monteiro</span>
                <span className="text-muted-foreground text-xs">Membro</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/s.png" alt="Logo do time" />
                <AvatarFallback>CP</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-sm gap-0.5">
                <span className="text-secondary-foreground font-medium">Ailton Zamboti</span>
                <span className="text-muted-foreground text-xs">Membro</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </DashboardMaxWidthWrapper>
  )
};
