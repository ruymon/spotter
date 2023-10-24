
export type NavItem = {
  id: number;
  title: string;
  href: string;
  disabled?: boolean;
};

export type ISidebarNavItem = {
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
  title: string;
  description: string;
}[];

export type NavbarConfig = NavItem[];

export type Overlay = {
  title: string;
  subtitle: string;
  locationIcao: string;
  label: string;
  isPreview: boolean;
}