import { NewOverlayForm } from "@/components/dashboard/NewOverlayForm/NewOverlayForm";

export default function NewOverlayDashboardPage() {
  return (
    <div className="p-16 max-w-5xl mx-auto flex flex-col gap-10 h-full">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Novo overlay</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Preencha os campos abaixo para gerar um novo overlay.</span>
      </header>

      <NewOverlayForm />
    </div>
  );
};
