import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontHeading = localFont({
  src: [
    {
      path: "../assets/fonts/UniNeueThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniNeueThin-Italic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/UniNeueLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniNeueLight-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/UniNeueBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniNeueBook-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/UniNeueRegular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniNeueBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniNeueBold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/UniNeueBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniNeueBlack-Italic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(defaultUrl),
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
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
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
