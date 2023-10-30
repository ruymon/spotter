import { Skeleton } from "@/components/ui/skeleton";
import { Locate } from "lucide-react";

export function AirportOptionSkeleton() {
  return (
    <figure className="flex gap-3 items-center w-full rounded-md border border-input bg-background px-3 py-2">
      <Locate className="text-muted-foreground" size={16} />
      <div className="flex flex-col w-full gap-1.5 rounded-sm" >
        <Skeleton className="w-1/12 h-4 rounded-sm" />
        <Skeleton className="w-3/12 h-3 rounded-sm" />
      </div>
    </figure>
  )
}