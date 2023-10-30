import { cn } from "@/lib/utils";

interface MultiStepProps {
  size: number,
  currentStep?: number,
  isZeroBased?: boolean,
};

export function MultiStep({ size, currentStep = 1, isZeroBased }: MultiStepProps) {
  if (isZeroBased) {
    currentStep += 1;
  }
  
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-muted-foreground">
        Passo {currentStep} de {size}
      </span>

      <div
        data-step-size={size}
        className={cn('grid gap-4', `grid-cols-${size}`)}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <div
              key={step}
              className={cn(
                "rounded-sm h-1",
                currentStep >= step ? "bg-primary" : "bg-primary-foreground"
              )}
            />
          )
        })}
      </div>
    </div>
  );
};
