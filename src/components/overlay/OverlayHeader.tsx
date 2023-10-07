import { OverlayHat } from "./OverlayHat";

interface OverlayHeaderProps {
  title: string;
  subtitle?: string;
};

export function OverlayHeader({ title, subtitle }: OverlayHeaderProps) {
  return (
    <header className="p-6 bg-gray-900/75 backdrop-blur rounded-xl max-w-sm w-fit text-secondary flex flex-col gap-4">
      <OverlayHat label="Evento" variant="primary" />

      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <span className="text-muted font-normal text-sm">{subtitle}</span>
      </div>
    </header>
  );
};
