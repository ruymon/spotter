import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper";
import { TeamCardSkeleton } from "@/components/dashboard/Teams/TeamCardSkeleton";

interface TeamsLoadingPageProps {};

export default function TeamsLoadingPage({}: TeamsLoadingPageProps) {
  return (
    <DashboardMaxWidthWrapper>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Equipes</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Visualize os overlays feitos nesta conta.</span>
      </header>

      <div className='grid grid-cols-2 gap-6'>
        <TeamCardSkeleton />
        <TeamCardSkeleton />
        <TeamCardSkeleton />
        <TeamCardSkeleton />
      </div>
    </DashboardMaxWidthWrapper>
  );
};
