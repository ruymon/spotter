import { OverlayHistoryCard } from "@/components/dashboard/OverlayHistoryList/OverlayHistoryCard";
import { createSupabaseServerClient } from "@/lib/database/server";
import { DatabaseZap } from "lucide-react";
import { cookies } from "next/headers";

export default async function OverlayHistoryDashboardPage() {
  const cookieStore = cookies()
  const supabase = createSupabaseServerClient(cookieStore)

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: overlayData } = await supabase
    .from('overlays')
    .select(`id, data, updated_at, created_at`)
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false })

  if (overlayData?.length === 0 || !overlayData) {
    return (
      <div className="flex flex-col gap-6 items-center justify-center text-sm p-6 rounded-md text-left border-2 border-muted border-dashed">
        <DatabaseZap className="text-muted-foreground w-8 shrink-0" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-secondary-foreground font-medium text-base">Nenhum overlay encontrado...</span>
          <span className="text-muted-foreground text-sm">Crie um para exibir aqui</span>
        </div>
      </div>
    )
  }

  return overlayData.map(({
    id,
    data,
    updated_at: updatedAt,
    created_at: createdAt
  }) => (
    <OverlayHistoryCard
      key={id}
      id={id}
      overlay={data}
      updatedAt={updatedAt}
      createdAt={createdAt}
    />
  ))
};
