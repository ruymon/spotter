import { cn } from "@/lib/utils";

type OverlayHatVariants = 'primary' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info' | 'purple';

interface OverlayHatProps {
  label: string;
  variant?: OverlayHatVariants;
};

const variants: { [key in OverlayHatVariants]: string } = {
  'primary': 'border-primary',
  'secondary': 'border-secondary',
  'destructive': 'border-destructive',
  'success': 'border-green-600',
  'warning': 'border-orange-600',
  'info': 'border-blue-600',
  'purple': 'border-purple-600',
};

export function OverlayHat({ label, variant = 'primary' }: OverlayHatProps) {
  return (
    <span className={cn("pl-2 border-l-2 capitalize text-muted-foreground", variants[variant])}>{label}</span>
  );
};
