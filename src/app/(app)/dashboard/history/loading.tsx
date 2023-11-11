import { OverlayHistoryCardSkeleton } from "@/components/dashboard/OverlayHistoryList/OverlayHistoryCardSkeleton";

interface HistoryLoadingPageProps {};

export default function HistoryLoadingPage({}: HistoryLoadingPageProps) {
  return (
    <div className="flex flex-col gap-8">
      <OverlayHistoryCardSkeleton />
      <OverlayHistoryCardSkeleton />
    </div>
  );
};
