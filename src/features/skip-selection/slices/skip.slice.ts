import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {Skip} from "@/features/skip-selection/models/skip.model.ts";

interface SkipState {
    selectedSkip: Skip | null;
}

const initialState: SkipState = {
    selectedSkip: null,
};

const skipSlice = createSlice({
    name: 'skip',
    initialState,
    reducers: {
        setSelectedSkip(state, action: PayloadAction<Skip | null>) {
            state.selectedSkip = action.payload;
        },
    },
});

export const {setSelectedSkip} = skipSlice.actions;

export default skipSlice.reducer;
