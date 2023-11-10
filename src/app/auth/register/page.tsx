import { AuthRegisterForm } from "@/components/auth/AuthRegisterForm";
import { createSupabaseServerClient } from "@/lib/database/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface RegisterPageProps {
  searchParams: { message: string }
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const message = searchParams.message;

  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  return <AuthRegisterForm message={message} />
};
