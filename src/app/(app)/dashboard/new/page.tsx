import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper";
import { NewOverlayForm } from "@/components/dashboard/NewOverlayForm/NewOverlayForm";

export default function NewOverlayDashboardPage() {
  return (
    <DashboardMaxWidthWrapper>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Novo overlay</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Preencha os campos abaixo para gerar um novo overlay.</span>
      </header>

      <NewOverlayForm />
    </DashboardMaxWidthWrapper>
  );
};
