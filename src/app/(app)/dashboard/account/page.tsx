import { AccountSettingsForm } from "@/components/dashboard/Account/AccountSettingsForm";
import { DashboardMaxWidthWrapper } from "@/components/dashboard/DashboardMaxWidthWrapper";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies } from "next/headers";

interface AccountPageProps {};

export default async function AccountPage({}: AccountPageProps) {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <DashboardMaxWidthWrapper>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Perfil</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Gerencie as informações da sua conta.</span>
      </header>

      <AccountSettingsForm session={session} />
    </DashboardMaxWidthWrapper>
  );
};
