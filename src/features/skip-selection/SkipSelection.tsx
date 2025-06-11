import SkipGrid from "@/features/skip-selection/SkipGrid.tsx";
import {useAppSelector} from "@/app/hooks.ts";

function SkipSelection() {
    const selectedSkip = useAppSelector((state) => state.skip.selectedSkip);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-7 text-center">
                <h1 className="text-2xl font-bold">Choose Your Skip Size</h1>
                <p>Select the skip size that best suits your needs</p>
            </div>

            <SkipGrid/>

            {selectedSkip && (
                <div className="mt-4 bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Selected: {selectedSkip.size} Yard Skip</h2>
                    <p className="text-gray-700">14 day hire period</p>
                    <p className="text-gray-700 font-semibold">
                        £{(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2)}
                    </p>
                </div>
            )}
        </div>
    );
}

export default SkipSelection;