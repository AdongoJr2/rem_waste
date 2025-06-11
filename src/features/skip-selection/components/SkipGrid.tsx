import SkipGridItem from "@/features/skip-selection/components/SkipGridItem.tsx";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";
import {AlertCircleIcon} from "lucide-react";
import {useSkips} from "@/features/skip-selection/hooks/skip.hooks.ts";
import SkipGridSkeleton from "@/features/skip-selection/components/SkipGridSkeleton.tsx";

const SkipGrid = () => {
    const {skips, isFetching, error} = useSkips({postcode: 'NR32', area: 'Lowestoft'});

    if (isFetching) return <SkipGridSkeleton/>;

    if (error) return (
        <Alert variant="destructive" className="bg-red-50 dark:bg-red-200">
            <AlertCircleIcon className="dark:font-extrabold"/>
            <AlertTitle className="dark:font-bold uppercase">Error</AlertTitle>
            <AlertDescription className="dark:font-semibold">
                Failed to load skips. Please try again later or contact support for assistance.
            </AlertDescription>
        </Alert>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips?.map((skip) => (
                <SkipGridItem key={skip.id} skip={skip}/>
            ))}
        </div>
    );
};

export default SkipGrid;