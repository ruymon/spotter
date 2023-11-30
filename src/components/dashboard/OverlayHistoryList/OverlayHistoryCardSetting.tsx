interface OverlayHistoryCardSettingProps {
  label: string;
  description: string;
};

export function OverlayHistoryCardSetting({ label, description }: OverlayHistoryCardSettingProps) {
  return (
    <div className="flex flex-col text-sm gap-1 basis-36">
      <span className="text-secondary-foreground font-medium">{label}</span>
      <span className="text-muted-foreground text-xs">{description}</span>
    </div>
  );
};
