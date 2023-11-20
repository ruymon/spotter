import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { ClientProviders } from '@/components/providers/ClientProviders';
import { ServerProviders } from '@/components/providers/ServerProviders';
import { siteConfig } from "@/config/site";
import { cn, getURL } from "@/lib/utils";
import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(getURL()),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Ruy Monteiro",
      url: "https://github.com/ruymon",
    },
  ],
  creator: "Ruy Monteiro",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans bg-transparent antialiased scrollbar-w-2 scrollbar-thumb-blue",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ServerProviders>
          <ClientProviders>
            {children}
          </ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
