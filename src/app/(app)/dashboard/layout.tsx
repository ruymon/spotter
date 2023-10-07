import { SidebarNav } from "@/components/dashboard/SidebarNav";
import { type ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex w-full min-h-screen">
      <SidebarNav />
      <main className="flex-1 bg-card">
        {children}
      </main>
    </div>
  );
};
