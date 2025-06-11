import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";
import {useGetSkipsByLocationQuery} from "@/features/skip-selection/slices/skip-api.slice.ts";
import {useCallback} from "react";
import {setSelectedSkip} from "@/features/skip-selection/slices/skip.slice.ts";
import type {Skip} from "@/features/skip-selection/models/skip.model.ts";
import type {SkipFilter} from "@/features/skip-selection/models/skip-filter.model.ts";

export const useSkips = ({postcode, area}: SkipFilter) => {
    const {data: skips, ...query} = useGetSkipsByLocationQuery({
        postcode,
        area
    });
    return {skips, ...query};
};

export const useSelectedSkipItem = (): [Skip | null, (skip: Skip | null) => void] => {
    const selectedSkipItem = useAppSelector((state) => state.skip.selectedSkip);
    const dispatch = useAppDispatch();

    const setSelectedSkipItem = useCallback((skip: Skip | null) => {
        dispatch(setSelectedSkip(skip));
    }, [dispatch]);

    return [selectedSkipItem, setSelectedSkipItem];
};