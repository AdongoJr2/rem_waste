import type {Skip} from "@/features/skip-selection/models/skip.model.ts";

export const calculateTotalPrice = (skip: Skip): number => {
    return skip.price_before_vat * (1 + skip.vat / 100);
};

export const getPlacementText = (skip: Skip): string => {
    return skip.allowed_on_road ? 'Can Be Placed On Road' : 'Not Allowed On Road';
};

export const getWasteText = (skip: Skip): string => {
    return skip.allows_heavy_waste ? 'Heavy Waste Allowed' : 'Light Waste Only';
};

export const getSkipSizeCategory = (size: number): string => {
    if (size <= 8) return 'Small';
    if (size <= 12) return 'Medium';
    if (size <= 20) return 'Large';
    return 'Extra Large';
};

export const getSkipImageUrl = (size: number) => {
    return `${import.meta.env.VITE_API_BASE_IMAGE_URL}/skips/skip-sizes/${size}-yarder-skip.jpg`;
};
