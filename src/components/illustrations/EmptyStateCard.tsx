import { DatabaseZap } from "lucide-react";
import { ReactNode } from "react";

interface EmptyStateCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
};

const defaultProps: EmptyStateCardProps = {
  title: "Nada encontrado por aqui...",
  description: "Crie um novo overlay para exibir aqui",
  icon: <DatabaseZap />
};

export function EmptyStateCard({ 
  title = defaultProps.title, 
  description = 
  defaultProps.description, 
  icon = defaultProps.icon 
}: EmptyStateCardProps) {
  return (
    <div className="text-muted-foreground flex flex-col gap-6 items-center justify-center text-sm p-6 rounded-md text-left border-2 border-muted border-dashed">
      <figure className="opacity-50 w-8 shrink-0">
        {icon}
      </figure>

      <div className="flex flex-col items-center gap-0.5">
        <span className="font-medium text-base">{title}</span>
        <span className="text-sm opacity-75">{description}</span>
      </div>
    </div>
  );
};
