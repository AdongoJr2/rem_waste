import {useGetSkipsByLocationQuery} from "@/features/skip-selection/skip-api.slice.ts";
import SkipGridItem from "@/features/skip-selection/SkipGridItem.tsx";

const SkipGrid = () => {
    const {data: skips, isFetching, error} = useGetSkipsByLocationQuery();

    if (isFetching) return <p>Loading...</p>;
    if (error) return <p>Error loading skips.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skips?.map((skip) => (
                <SkipGridItem key={skip.id} skip={skip}/>
            ))}
        </div>
    );
};

export default SkipGrid;