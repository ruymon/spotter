import { DashboardMaxWidthWrapper } from '@/components/dashboard/DashboardMaxWidthWrapper';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { createSupabaseServerClient } from '@/lib/database/server';
import { BarChart2, Database, Fingerprint, Layers, Plus, Shield, User2 } from "lucide-react";
import { cookies } from "next/headers";
import Image from 'next/image';

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

      <div className='flex gap-12 justify-between'>
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
          </div>
        </section>

        <section className="max-w-sm flex flex-col w-full h-full gap-8">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-4">
              <Layers className="h-5 w-5 shrink-0 text-muted-foreground" />
              <div className='flex flex-col'>
                <span className='text-xs text-muted-foreground'>Overlays</span>
                <span className="text-2xl font-semibold text-secondary-foreground">10</span>
              </div>
            </div>

            <Separator orientation='vertical' />

            <div className="flex items-center justify-center gap-4">
              <Database className="h-5 w-5 shrink-0 text-muted-foreground" />
              <div className='flex flex-col'>
                <span className='text-xs text-muted-foreground'>Overlays</span>
                <span className="text-2xl font-semibold text-secondary-foreground">18</span>
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1.5'>
                  <BarChart2 className='h-4 w-4 shrink-0 text-muted-foreground' />
                  <span className='text-sm font-medium text-secondary-foreground'>Limite de overlays</span>
                </div>
                <span className='text-xs text-muted-foreground'>Para aumentar o limite, confira o nosso pricing.</span>
              </div>

              <div className='flex flex-col gap-1.5'>
                <div className='flex items-center justify-between gap-2'>
                  <span className='text-lg text-secondary-foreground font-semibold'>8 <span className='text-sm text-muted-foreground font-normal'>/10</span></span>
                  <span className='text-xs text-muted-foreground font-normal'>56.9%</span>
                </div>
                <Progress value={56.9} />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1.5'>
                  <User2 className='h-4 w-4 shrink-0 text-muted-foreground' />
                  <span className='text-sm font-medium text-secondary-foreground'>Conta</span>
                </div>
                <span className='text-xs text-muted-foreground'>Para mudar o tipo de conta acesse as configurações</span>
              </div>

              <div className="flex gap-2 items-center w-full rounded-md border p-2">
                <Shield className="text-zinc-700 fill-zinc-700/30 w-5 h-5 shrink-0" />

                <div className="flex flex-col">
                  <span className="font-medium text-secondary-foreground text-xs">Spotter Staff</span>
                  <span className="text-xs text-muted-foreground">Acesso a todos os recursos da plataforma.</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1.5'>
                  <Fingerprint className='h-4 w-4 shrink-0 text-muted-foreground' />
                  <span className='text-sm font-medium text-secondary-foreground'>Equipes vinculada</span>
                </div>
                <span className='text-xs text-muted-foreground'>Para gerenciar suas equipes, acesse as configurações da sua conta.</span>
              </div>

              <div className='flex flex-col gap-2'>
                <div className="flex gap-3 items-center w-full rounded-md border p-2">
                  <Image src="https://cdn.discordapp.com/icons/410634405015584768/a_cba582f3f6b6e3b74592e61182058e9b.gif" alt="Logo do Time" width={32} height={32} className='rounded-md' />

                  <div className="flex flex-col">
                    <span className="font-medium text-secondary-foreground text-sm">Vatsim Brasil</span>
                    <span className="text-xs text-muted-foreground">Overlays compartilhados com todos os membros</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center w-full rounded-md border p-2">
                  <figure className='w-10 h-10 shrink-0 rounded-md bg-secondary-foreground'>

                  </figure>

                  <div className="flex flex-col">
                    <span className="font-medium text-secondary-foreground text-sm">Chu Passeios</span>
                    <span className="text-xs text-muted-foreground">Overlays compartilhados com todos os membros</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

    </DashboardMaxWidthWrapper>
  );
};


// <section className="max-w-sm flex flex-col w-full h-full border rounded-lg overflow-clip">
// <div className="flex items-center justify-between w-full border-b">
//   <div className="flex items-center justify-center gap-4 flex-1 p-3">
//     <Layers className="h-5 w-5 shrink-0 text-muted-foreground" />
//     <div className='flex flex-col'>
//       <span className='text-xs text-muted-foreground'>Overlays</span>
//       <span className="text-2xl font-semibold text-secondary-foreground">10</span>
//     </div>
//   </div>

//   <Separator orientation='vertical' />

//   <div className="flex items-center justify-center gap-4 flex-1 p-3">
//     <Database className="h-5 w-5 shrink-0 text-muted-foreground" />
//     <div className='flex flex-col'>
//       <span className='text-xs text-muted-foreground'>Overlays</span>
//       <span className="text-2xl font-semibold text-secondary-foreground">18</span>
//     </div>
//   </div>
// </div>

// <div className='flex-1 p-4 flex flex-col gap-6'>
//   <div className='flex flex-col gap-2'>
//     <div className='flex flex-col gap-0.5'>
//       <div className='flex items-center gap-1'>
//         <BarChart2 className='h-4 w-4 shrink-0 text-muted-foreground' />
//         <span className='text-sm font-medium text-secondary-foreground'>Conta</span>
//       </div>
//       <span className='text-xs text-muted-foreground'>Para aumentar o limite, confira o nosso pricing.</span>
//     </div>

//     <div className='flex flex-col gap-1'>
//       <div className='flex items-center justify-between gap-2'>
//         <span className='text-lg text-secondary-foreground font-semibold'>8 <span className='text-sm text-muted-foreground font-normal'>/10</span></span>
//         <span className='text-xs text-muted-foreground font-normal'>56.9%</span>
//       </div>
//       <figure className='w-full rounded-[3px] overflow-clip relative h-3'>
//         <div className="bg-muted -z-10 absolute w-full h-full" />
//         <div className="bg-muted-foreground absolute w-1/2 h-full" />
//       </figure>
//     </div>
//   </div>

//   <div className='flex flex-col gap-2'>
//     <div className='flex flex-col gap-0.5'>
//       <div className='flex items-center gap-1'>
//         <BarChart2 className='h-4 w-4 shrink-0 text-muted-foreground' />
//         <span className='text-sm font-medium text-secondary-foreground'>Limite de overlays</span>
//       </div>
//       <span className='text-xs text-muted-foreground'>Para aumentar o limite, confira o nosso pricing.</span>
//     </div>

//     <div className='flex flex-col gap-1'>
//       <div className='flex items-center justify-between gap-2'>
//         <span className='text-lg text-secondary-foreground font-semibold'>8 <span className='text-sm text-muted-foreground font-normal'>/10</span></span>
//         <span className='text-xs text-muted-foreground font-normal'>56.9%</span>
//       </div>
//       <figure className='w-full rounded-[3px] overflow-clip relative h-3'>
//         <div className="bg-muted -z-10 absolute w-full h-full" />
//         <div className="bg-muted-foreground absolute w-1/2 h-full" />
//       </figure>
//     </div>
//   </div>

//   <div className='flex flex-col gap-2'>
//     <div className='flex flex-col gap-0.5'>
//       <div className='flex items-center gap-1'>
//         <BarChart2 className='h-4 w-4 shrink-0 text-muted-foreground' />
//         <span className='text-sm font-medium text-secondary-foreground'>Limite de overlays</span>
//       </div>
//       <span className='text-xs text-muted-foreground'>Para aumentar o limite, confira o nosso pricing.</span>
//     </div>

//     <div className='flex flex-col gap-1'>
//       <div className='flex items-center justify-between gap-2'>
//         <span className='text-lg text-secondary-foreground font-semibold'>8 <span className='text-sm text-muted-foreground font-normal'>/10</span></span>
//         <span className='text-xs text-muted-foreground font-normal'>56.9%</span>
//       </div>
//       <figure className='w-full rounded-[3px] overflow-clip relative h-3'>
//         <div className="bg-muted -z-10 absolute w-full h-full" />
//         <div className="bg-muted-foreground absolute w-1/2 h-full" />
//       </figure>
//     </div>
//   </div>

// </div>

// <div className='border-t bg-zinc-500/10 text-xs text-muted-foreground px-4 py-2'>
//   <span>Usage as of 1 hour ago (updated hourly)</span>
// </div>
// </section>