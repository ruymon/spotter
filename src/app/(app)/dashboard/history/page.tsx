import { OverlayHistoryCard } from "@/components/dashboard/OverlayHistoryList/OverlayHistoryCard";
import { EmptyStateCard } from "@/components/illustrations/EmptyStateCard";
import { createSupabaseServerClient } from "@/lib/database/server";
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
    return <EmptyStateCard />
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
