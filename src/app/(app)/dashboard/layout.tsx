import { MobileNav } from "@/components/dashboard/MobileNav";
import { SidebarNav } from "@/components/dashboard/Sidebar/SidebarNav";
import { SidebarSignOutButton } from "@/components/dashboard/Sidebar/SidebarSignOutButton";
import { ERROR_MESSAGES } from "@/constants/errors";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { type ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    permanentRedirect(`/auth/login?message=${ERROR_MESSAGES.AUTH.NOT_AUTHORIZED}`)
  }

  return (
    <div className="flex w-full min-h-screen flex-col gap-8 md:gap-0 md:flex-row">
      <SidebarNav>
        <SidebarSignOutButton />
      </SidebarNav>

      <MobileNav />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};
