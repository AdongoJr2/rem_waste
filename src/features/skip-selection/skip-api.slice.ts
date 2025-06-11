import type {Skip} from "@/features/skip-selection/skip.model.ts";
import {apiSlice} from "@/features/api/api.slice.ts";

export const skipApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSkipsByLocation: builder.query<Skip[], void>({
            query: () => 'skips/by-location?postcode=NR32&area=Lowestoft',
        }),
    }),
});

export const {useGetSkipsByLocationQuery} = skipApi;