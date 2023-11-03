import { type ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  count: number;
  glyph: ReactNode;
};

export function FeatureCard({ title, description, count, glyph }: FeatureCardProps) {
  return (
    <li className='flex flex-col gap-8'>
      <figure className="w-8 h-8 shrink-0 text-violet-400">
        {glyph}
      </figure>

      <div className='flex flex-col gap-1'>
        <span className='text-xl font-semibold text-secondary-foreground'>
          {title}
        </span>
        <span className='text-muted-foreground'>
          {description}
        </span>
      </div>
    </li>
  );
};
