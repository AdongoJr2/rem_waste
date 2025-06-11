import type {Skip} from "@/features/skip-selection/models/skip.model.ts";
import {apiSlice} from "@/features/api/api.slice.ts";
import type {SkipFilter} from "@/features/skip-selection/models/skip-filter.model.ts";

export const skipApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSkipsByLocation: builder.query<Skip[], SkipFilter>({
            query: ({postcode, area}) => {
                return `skips/by-location?postcode=${postcode}&area=${area}`
            },
        }),
    }),
});

export const {useGetSkipsByLocationQuery} = skipApi;