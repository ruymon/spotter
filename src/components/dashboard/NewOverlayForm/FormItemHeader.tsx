interface FormItemHeaderProps {
  title: string;
  description?: string;
};

export function FormItemHeader({ title, description }: FormItemHeaderProps) {
  return (
    <header className="flex flex-col gap-0.5">
      <h4 className="text-secondary-foreground font-medium">{title}</h4>
      { description && <span className="text-muted-foreground text-sm font-normal">{description}</span> }
    </header>
  );
};
