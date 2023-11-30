import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TeamCardSkeleton() {
  return (
    <Card className="group-hover:bg-muted transition-colors p-4 gap-6 cursor-default">
      <Skeleton className="h-10 w-10 shrink-0 rounded-full"/>

      <CardHeader className="gap-1.5">
        <Skeleton className="h-5 w-3/4 mb-2"/>
        <Skeleton className="h-2.5 w-full"/>
        <Skeleton className="h-2.5 w-full"/>
      </CardHeader>
    </Card>
  );
};
