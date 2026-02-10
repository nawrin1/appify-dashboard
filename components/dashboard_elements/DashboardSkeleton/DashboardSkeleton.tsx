import { Skeleton } from "@/components/ui/Skeleton";


export default function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Filters Area Skeleton */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Skeleton className="w-48 h-8" />
        <div className="flex gap-3 w-full md:w-auto">
          <Skeleton className="w-40 h-10" />
          <Skeleton className="w-40 h-10" />
        </div>
      </div>

      {/* KPI Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>

      {/* Charts Grid ) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Skeleton className="h-[420px] w-full" />
        <Skeleton className="h-[420px] w-full" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Skeleton className="h-[420px] w-full" />
        <Skeleton className="h-[420px] w-full" />
      </div>
    </div>
  );
}