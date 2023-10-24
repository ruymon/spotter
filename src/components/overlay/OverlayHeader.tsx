import { OverlayHat } from "./OverlayHat";

interface OverlayHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
};

export function OverlayHeader({ title, subtitle, label }: OverlayHeaderProps) {
  return (
    <header className="p-6 bg-gray-900/75 backdrop-blur rounded-xl max-w-sm w-fit flex flex-col gap-4">
      <OverlayHat label={label} variant="primary" />

      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-bold text-gray-50">{title}</h1>
        <span className="font-normal text-sm text-gray-300">{subtitle}</span>
      </div>
    </header>
  );
};
