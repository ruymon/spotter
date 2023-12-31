import { ReactNode } from "react";

export type NavItem = {
  id: number;
  title: string;
  href: string;
  disabled?: boolean;
};

export type IDashboardNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  href: string;
  icon?: LucideIcon;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type FeaturesConfig = {
  id: number;
  glyph: ReactNode;
  title: string;
  description: string;
}[];

export type NavbarConfig = NavItem[];

export type Airport = {
  icao: string;
  iata: string;
  name: string;
  city: string;
  state: string;
  country: string;
  elevation: number;
  lat: number;
  lon: number;
  tz: string;
}