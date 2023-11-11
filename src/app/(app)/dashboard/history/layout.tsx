import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper";
import { ReactNode } from "react";

interface HistoryLayoutProps {
  children: ReactNode
};

export default function HistoryLayout({ children }: HistoryLayoutProps) {
  return (
    <DashboardMaxWidthWrapper>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Histórico</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Visualize os overlays feitos nesta conta.</span>
      </header>
      
      <div className="flex flex-col gap-8">
        {children}
      </div>
    </DashboardMaxWidthWrapper>
  );
};
