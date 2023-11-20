import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { ThemeProvider } from "@/components/ThemeProvider";
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
          "min-h-screen bg-background font-sans antialiased scrollbar-w-2 scrollbar-thumb-blue",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          themes={['light', 'dark']}
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
