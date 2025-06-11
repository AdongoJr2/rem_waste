import {setSelectedSkip} from '@/features/skip-selection/skip.slice.ts';
import type {Skip} from "@/features/skip-selection/skip.model.ts";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";

interface Props {
    skip: Skip
}

const SkipGridItem = ({skip}: Props) => {
    const dispatch = useAppDispatch();
    const selectedSkip = useAppSelector((state) => state.skip.selectedSkip);

    const isSelected = skip.id === selectedSkip?.id;

    const handleClick = () => {
        dispatch(setSelectedSkip(isSelected ? null : skip));
    };

    return (
        <div
            className={`border p-4 cursor-pointer rounded-lg transition-all ${
                isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onClick={handleClick}
        >
            <h3 className="text-xl font-bold">{skip.size} Yard Skip</h3>
            <p>Hire Period: {skip.hire_period_days} days</p>
            <p>Price: £{skip.price_before_vat}</p>
            {isSelected && <span className="text-green-600">Selected</span>}
        </div>
    );
};

export default SkipGridItem;