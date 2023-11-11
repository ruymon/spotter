import { NewOverlayFormData } from "../NewOverlayForm/NewOverlayForm";
import { OverlayHistoryCard } from "./OverlayHistoryCard";

interface OverlayHistoryListProps {
  overlays: Overlay[]
};

interface Overlay {
  id: string
  data: NewOverlayFormData
};

export function OverlayHistoryList({ overlays }: OverlayHistoryListProps) {
  overlays.map(({ id, data }) => <OverlayHistoryCard key={id} overlay={data} />)
};
