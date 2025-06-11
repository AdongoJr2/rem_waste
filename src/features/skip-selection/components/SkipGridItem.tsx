import {setSelectedSkip} from '@/features/skip-selection/slices/skip.slice.ts';
import type {Skip} from "@/features/skip-selection/models/skip.model.ts";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";
import {AlertCircle, CheckCircle2, Route, Truck} from "lucide-react";
import {Card} from "@/components/ui/card.tsx";
import {
    calculateTotalPrice,
    getPlacementText, getSkipImageUrl,
    getSkipSizeCategory, getWasteText
} from "@/features/skip-selection/helpers/skip.helper.ts";
import {Badge} from "@/components/ui/badge.tsx";

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
        <Card className={`cursor-pointer transition-all duration-500 h-full flex flex-col 
            shadow-md shadow-primary/30 hover:shadow-primary/40 hover:shadow-lg
            ${isSelected ?
            'border-primary ring-2 ring-primary bg-primary/10 scale-[1.02]' :
            'hover:scale-[1.02] hover:bg-primary/5 hover:border-primary/50'
        }`}
              onClick={handleClick}
        >
            <div className="relative h-48 w-full px-5 rounded-md overflow-hidden">
                <img
                    src={getSkipImageUrl(skip.size)}
                    alt={`${skip.size} yard skip`}
                    className="object-cover rounded-md size-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="px-6 flex-1">
                <div className="flex justify-between items-center gap-2">
                    <div className="flex-1 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{skip.size} Yard Skip</h3>
                        <Badge variant="secondary">
                            {getSkipSizeCategory(skip.size)}
                        </Badge>
                    </div>
                    {isSelected && <CheckCircle2 className="h-6 w-6 text-primary"/>}
                </div>

                <div className="mt-4 space-y-1">
                    {/* Hire Period */}
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Hire Period:</span>
                        <span>{skip.hire_period_days} day</span>
                    </div>

                    {/* Price Information */}
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Base Price:</span>
                        <span className="font-semibold">£{skip.price_before_vat.toFixed(2)}</span>
                    </div>

                    {/* VAT Information */}
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">VAT ({skip.vat}%):</span>
                        <span>£{(skip.price_before_vat * skip.vat / 100).toFixed(2)}</span>
                    </div>

                    {/* Total Price */}
                    <div className="flex items-center justify-between font-medium border-t pt-2 mt-2">
                        <span>Total:</span>
                        <span className="text-lg">
                          £{calculateTotalPrice(skip).toFixed(2)}
                        </span>
                    </div>

                    {/* Features */}
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            {skip.allowed_on_road ? (
                                <>
                                    <Route className="h-4 w-4 text-green-600"/>
                                    <span className="text-sm text-green-600">{getPlacementText(skip)}</span>
                                </>
                            ) : (
                                <>
                                    <AlertCircle className="h-4 w-4 text-yellow-600"/>
                                    <span className="text-sm text-yellow-600">{getPlacementText(skip)}</span>
                                </>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            {skip.allows_heavy_waste ? (
                                <>
                                    <CheckCircle2 className="h-4 w-4 text-green-600"/>
                                    <span className="text-sm text-green-600">{getWasteText(skip)}</span>
                                </>
                            ) : (
                                <>
                                    <AlertCircle className="h-4 w-4 text-yellow-600"/>
                                    <span className="text-sm text-yellow-600">{getWasteText(skip)}</span>
                                </>
                            )}
                        </div>

                        {skip.transport_cost && (
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-blue-600"/>
                                <span className="text-sm text-blue-600">
                                  Includes transport: £{skip.transport_cost}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isSelected && (
                <div className="bg-primary/10 border-t p-3 text-center text-primary font-medium">
                    Selected
                </div>
            )}
        </Card>
    );
};

export default SkipGridItem;