import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AccountTypeCardSkeleton() {
  return (
    <Card className='gap-8'>
      <CardHeader className='flex-row gap-4'>
        <Skeleton className="h-10 w-10" />
        <div className='flex flex-col gap-2 w-full'>
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-8">
        <div className="flex gap-2 basis-56">
          <Skeleton className="h-5 w-5 translate-y-1" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-2.5 w-1/4" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        </div>

        <div className="flex gap-2 basis-56">
          <Skeleton className="h-5 w-5 translate-y-1" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-2.5 w-1/4" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        </div>

        <div className="flex gap-2 basis-56">
          <Skeleton className="h-5 w-5 translate-y-1" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-2.5 w-1/4" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        </div>

        <div className="flex gap-2 basis-56">
          <Skeleton className="h-5 w-5 translate-y-1" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-2.5 w-1/4" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        </div>

        <div className="flex gap-2 basis-56">
          <Skeleton className="h-5 w-5 translate-y-1" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-2.5 w-1/4" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        </div>

        <div className="flex gap-2 basis-56">
          <Skeleton className="h-5 w-5 translate-y-1" />
          <div className="flex flex-col w-full gap-1">
            <Skeleton className="h-2.5 w-1/4" />
            <Skeleton className="h-2.5 w-3/4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
