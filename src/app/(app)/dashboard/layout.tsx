
import { SidebarNav } from "@/components/dashboard/Sidebar/SidebarNav";
import { SidebarSignOutButton } from "@/components/dashboard/Sidebar/SidebarSignOutButton";
import { createClient } from "@/lib/database/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?message=Yikes! you must be logged in to access this page.")
  }

  return (
    <div className="flex w-full min-h-screen">
      <SidebarNav>
        <SidebarSignOutButton />
      </SidebarNav>

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};
