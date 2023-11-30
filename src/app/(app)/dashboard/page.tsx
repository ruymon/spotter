import { BetaBanner } from '@/components/BetaBanner';
import { AccountTypeCard } from '@/components/dashboard/Account/AccountTypeCard';
import { DashboardMaxWidthWrapper } from '@/components/dashboard/DashboardMaxWidthWrapper';
import { TeamCard } from '@/components/dashboard/Teams/TeamCard';
import { Progress } from '@/components/ui/progress';
import { createSupabaseServerClient } from '@/lib/database/server';
import { BarChart2, User2, Users2 } from "lucide-react";
import { cookies } from "next/headers";


export default async function DashboardPage() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()
  const { data: profileData } = await supabase.from('profiles').select(`full_name`).eq('id', user?.id).single()
  const { data: teams } = await supabase.from('team_members').select(`teams (id, name, logo_url)`).eq('user_id', user?.id)
  
  const userTeams = teams?.map(({ teams }) => teams) as unknown as { id: string, name: string, logo_url: string }[]

  return (
    <DashboardMaxWidthWrapper className='md:max-w-3xl'>
      <header className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl font-bold text-secondary-foreground">Olá, {profileData?.full_name ?? user?.email}!</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Seja bem vindo ao seu dashboard.</span>
      </header>
        
      <BetaBanner title="Limitações da fase BETA" description="Haja visto que o Spotter ainda está em desenvolvimento, bugs e falhas são normais e esperados. Trabalharemos para melhorar cada vez mais! Por favor, tenha paciência." />

      <section className="flex flex-col w-full h-full gap-10">
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <BarChart2 className='h-4 w-4 shrink-0 text-muted-foreground' />
              <span className='text-lg font-semibold text-secondary-foreground'>Limite de overlays</span>
            </div>
            <span className='text-sm text-muted-foreground'>Para aumentar o limite, confira o nosso pricing.</span>
          </div>

          <div className='flex flex-col gap-1.5'>
            <div className='flex items-center justify-between gap-2'>
              <span className='text-lg text-secondary-foreground font-semibold'>8 <span className='text-sm text-muted-foreground font-normal'>/10</span></span>
              <span className='text-xs text-muted-foreground font-normal'>80%</span>
            </div>
            <Progress value={80} />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <User2 className='h-4 w-4 shrink-0 text-muted-foreground' />
              <span className='text-lg font-semibold text-secondary-foreground'>Conta</span>
            </div>
            <span className='text-sm text-muted-foreground'>Para mudar o tipo de conta acesse as configurações</span>
          </div>

          <AccountTypeCard accountType={4} />
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <Users2 className='h-4 w-4 shrink-0 text-muted-foreground' />
              <span className='text-lg font-semibold text-secondary-foreground'>Equipes vinculadas</span>
            </div>
            <span className='text-sm text-muted-foreground'>Para gerenciar suas equipes, acesse as configurações da sua conta.</span>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            {userTeams?.map(team => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </div>
      </section>

    </DashboardMaxWidthWrapper>
  );
};
