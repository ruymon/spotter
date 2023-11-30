import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper";
import { TeamCard } from "@/components/dashboard/Teams/TeamCard";
import { EmptyStateCard } from "@/components/illustrations/EmptyStateCard";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies } from "next/headers";

export default async function TeamsDashboardPage() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: teams } = await supabase.from('team_members').select(`teams (id, name, logo_url)`).eq('user_id', session?.user?.id)
  const userTeams = teams?.map(({ teams }) => teams) as unknown as { id: string, name: string, logo_url: string }[]

  if (userTeams?.length === 0 || !userTeams) {
    return <EmptyStateCard title="Você não possui ou não faz parte de nenhuma equipe..." />
  }

  return (
    <DashboardMaxWidthWrapper>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Equipes</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Visualize os overlays feitos nesta conta.</span>
      </header>

      <div className='grid grid-cols-2 gap-6'>
        {userTeams?.map(team => (
          <TeamCard key={team.id} {...team} />
        ))}
      </div>
    </DashboardMaxWidthWrapper>
  )
};
