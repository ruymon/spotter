import { type ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  count: number;
};

export function FeatureCard({ title, description, count }: FeatureCardProps) {
  return (
    <li className='md:flex-1'>
      <div className='flex flex-col gap-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-muted-foreground mb-2'>
          Passo {count}
        </span>
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
