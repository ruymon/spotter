import { BetaBanner } from "@/components/BetaBanner";

export default function OverlayHistoryDashboardPage() {
  return (
    <div className="p-16 max-w-5xl mx-auto flex flex-col gap-10 h-full">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Histórico</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Visualize os overlays feitos nesta conta.</span>
      </header>

      <BetaBanner description="Estiamos entregar essa funcionalidade na próxima atualização"/>
    </div>
  );
};
