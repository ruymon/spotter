"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";
import { Toaster } from "../ui/toaster";

interface ClientProvidersProps {
  children: ReactNode;
};

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <NextThemesProvider
        themes={['light', 'dark']}
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableSystem={false}
      >
        {children}
        <Toaster />
      </NextThemesProvider>
    </>
  );
};
