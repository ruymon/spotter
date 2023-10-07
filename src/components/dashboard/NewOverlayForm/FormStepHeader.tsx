interface FormStepHeaderProps {
  title: string;
  description?: string;
};

export function FormStepHeader({ title, description }: FormStepHeaderProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary-foreground">{title}</h2>
      {description && <span className="text-muted-foreground">{description}</span>}
    </div>
  );
};
