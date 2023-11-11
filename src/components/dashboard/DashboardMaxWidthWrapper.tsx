import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface DashboardMaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
};

export function DashboardMaxWidthWrapper({ children, className }: DashboardMaxWidthWrapperProps) {
  return (
    <div className={cn('px-6 md:p-16 md:max-w-5xl md:mx-auto flex flex-col gap-10 h-full', className)}>
      {children}
    </div>
  );
};

