import AccountForm from "@/components/dashboard/Account";
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
    <div className="p-16 max-w-5xl mx-auto flex flex-col gap-10 h-full">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-secondary-foreground">Perfil</h1>
        <span className="max-w-prose text-muted-foreground sm:text-lg">Gerencie as informações da sua conta.</span>
      </header>

      <AccountForm session={session} />
    </div>
  );
};
