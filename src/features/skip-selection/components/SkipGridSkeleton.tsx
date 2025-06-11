import {Card} from "@/components/ui/card.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {Separator} from "@/components/ui/separator.tsx";

const SkipGridSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
                <div className="mx-5">
                    <Skeleton className="h-48 w-full rounded-md"/>
                </div>
                <div className="px-6 space-y-3">
                    <div className="flex justify-between">
                        <Skeleton className="h-5 w-24"/>
                        <Skeleton className="h-5 w-10 rounded-full"/>
                    </div>
                    <div className="space-y-1">
                        <div className="space-y-2">
                            <div className="flex justify-between pt-2">
                                <Skeleton className="h-4 w-16"/>
                                <Skeleton className="h-4 w-20"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between pt-2">
                                <Skeleton className="h-4 w-16"/>
                                <Skeleton className="h-4 w-20"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between pt-2">
                                <Skeleton className="h-4 w-16"/>
                                <Skeleton className="h-4 w-20"/>
                            </div>
                        </div>
                    </div>
                    <Separator className="h-5 w-5 rounded-full"/>
                    <div className="space-y-2">
                        <div className="flex justify-between pt-2">
                            <Skeleton className="h-5 w-16"/>
                            <Skeleton className="h-5 w-20"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full"/>
                        <Skeleton className="h-4 w-3/4"/>
                    </div>
                </div>
            </Card>
        ))}
    </div>
);

export default SkipGridSkeleton;