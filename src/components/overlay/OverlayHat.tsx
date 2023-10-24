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
  'success': 'border-green-400',
  'warning': 'border-orange-400',
  'info': 'border-sky-400',
  'purple': 'border-purple-400',
};

export function OverlayHat({ label, variant = 'primary' }: OverlayHatProps) {
  return (
    <span className={cn("text-sm text-accent font-medium pl-2 border-destructive border-l-2 capitalize", variants[variant])}>{label}</span>
  );
};
