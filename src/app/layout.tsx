import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@ruyymon",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
          {children}
      </body>
    </html>
  );
}
