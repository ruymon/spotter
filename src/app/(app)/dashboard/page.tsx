import { DashboardMaxWidthWrapper } from '@/components/dashboard/DashboardMaxWidthWrapper';
import { createSupabaseServerClient } from '@/lib/database/server';
import { Plus } from "lucide-react";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()

  const { data: profileData } = await supabase.from('profiles').select(`full_name, username, bio, avatar_url`).eq('id', user?.id).single()

  return (
    <DashboardMaxWidthWrapper className='gap-16'>
      <header className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl font-bold text-secondary-foreground">Olá, {profileData?.full_name ?? user?.email}!</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Seja bem vindo ao seu dashboard.</span>
      </header>

      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-secondary-foreground">Para você:</h2>
          <span className="max-w-prose text-muted-foreground text-sm">Confira abaixo opções para agilizar sua vida.</span>
        </div>

        <div className="flex items-center gap-6 w-full flex-wrap">
          <div className="aspect-[10/12] w-32 rounded-md bg-card flex-col text-card-foreground p-5 flex justify-between">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Criar novo overlay</span>
          </div>

          <div className="aspect-[10/12] w-32 rounded-md bg-card flex-col text-card-foreground p-5 flex justify-between">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Criar novo overlay</span>
          </div>

          <div className="aspect-[10/12] w-32 rounded-md bg-card flex-col text-card-foreground p-5 flex justify-between">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Criar novo overlay</span>
          </div>

          <div className="aspect-[10/12] w-32 rounded-md bg-card flex-col text-card-foreground p-5 flex justify-between">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Criar novo overlay</span>
          </div>

          <div className="aspect-[10/12] w-32 rounded-md bg-card flex-col text-card-foreground p-5 flex justify-between">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Criar novo overlay</span>
          </div>
        </div>
      </section>

    </DashboardMaxWidthWrapper>
  );
};
