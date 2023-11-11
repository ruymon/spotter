import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function OverlayHistoryCardSkeleton() {
  return (
    <Card className="flex flex-col bg-background border rounded-lg p-5 gap-8">
      <CardHeader className="p-0 space-y-0 flex-row items-start justify-between">
        <div className="flex flex-col gap-2.5 flex-1">
          <Skeleton className="w-2/12 h-3 mb-1" />

          <Skeleton className="w-5/12 h-9" />
          <Skeleton className="w-8/12 h-5" />
        </div>

        <Skeleton className="w-1/12 h-5" />
      </CardHeader>

      <CardContent className="p-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-12">
        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-3/6 h-3" />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-3/6 h-3" />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-3/6 h-3" />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-3/6 h-3" />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton className="w-5/6 h-4" />
          <Skeleton className="w-3/6 h-3" />
        </div>
      </CardContent>

      <CardFooter className="p-0 flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 md:gap-2 w-full">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground w-1/2">
          <Skeleton className="w-1/2 h-3" />
        </div>

        <div className="flex items-center gap-2 justify-between w-full md:w-auto md:justify-normal">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
          <Skeleton className="h-8 w-36" />
        </div>
      </CardFooter>
    </Card>
  );
};
