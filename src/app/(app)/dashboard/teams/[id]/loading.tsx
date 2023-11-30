import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper"
import { EmptyStateCard } from "@/components/illustrations/EmptyStateCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

export default async function TeamProfileDashboardLoadingPage() {
  return (
    <DashboardMaxWidthWrapper className="md:max-w-5xl">
      <header className="flex flex-col gap-8">
        <Skeleton className="w-20 h-20 rounded-3xl" />

        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-1/4 h-8" />
          <Skeleton className="w-2/4 h-4" />
        </div>
      </header>

      <section className="flex gap-12">
        <main className="flex-1">
          <EmptyStateCard />
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
