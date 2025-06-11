import type {Skip} from "@/features/skip-selection/models/skip.model.ts";
import {CheckCircle2} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {
    calculateTotalPrice,
    getPlacementText, getSkipImageUrl,
    getSkipSizeCategory,
    getWasteText
} from "@/features/skip-selection/helpers/skip.helper.ts";

interface Props {
    skip: Skip;
}

export const SelectedSkipSummary = ({skip}: Props) => {
    return (
        <div className="py-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h2 className="text-xl font-semibold">Your Selected Skip</h2>
                <Badge className="px-4 py-2" variant="default">
                    <CheckCircle2 className="h-4 w-4 mr-1"/>
                    {skip.size} Yard Skip - {getSkipSizeCategory(skip.size)}
                </Badge>
            </div>

            <div className="relative h-60 w-full rounded-md">
                <img
                    src={getSkipImageUrl(skip.size)}
                    alt={`${skip.size} yard skip`}
                    className="object-cover rounded-md size-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                    {/* Hire Period */}
                    <div className="flex justify-between sm:block sm:space-y-1">
                        <p className="text-muted-foreground text-sm">Hire Period</p>
                        <p className="font-medium text-sm">{skip.hire_period_days} days</p>
                    </div>

                    {/* Placement */}
                    <div className="flex justify-between sm:block sm:space-y-1">
                        <p className="text-muted-foreground text-sm">Placement</p>
                        <p className="font-medium text-sm">{getPlacementText(skip)}</p>
                    </div>

                    {/* Waste Type */}
                    <div className="flex justify-between sm:block sm:space-y-1">
                        <p className="text-muted-foreground text-sm">Waste Type</p>
                        <p className="font-medium text-sm">{getWasteText(skip)}</p>
                    </div>

                    {/* Transport Cost - conditionally rendered */}
                    {skip.transport_cost && (
                        <div className="flex justify-between sm:block sm:space-y-1">
                            <p className="text-muted-foreground text-sm">Transport Included</p>
                            <p className="font-medium text-sm">£{skip.transport_cost}</p>
                        </div>
                    )}
                </div>

                <Separator className="my-4"/>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>£{skip.price_before_vat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>VAT ({skip.vat}%)</span>
                        <span>£{(skip.price_before_vat * skip.vat / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2">
                        <span>Total Price</span>
                        <span>£{calculateTotalPrice(skip).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};