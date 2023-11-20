import { ReactNode } from "react";

interface ServerProvidersProps {
  children: ReactNode;
};

export function ServerProviders({ children }: ServerProvidersProps) {
  return (
    <>
      {children}
    </>
  );
};
