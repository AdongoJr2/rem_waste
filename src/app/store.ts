import {configureStore} from '@reduxjs/toolkit'
import skipReducer from "@/features/skip-selection/slices/skip.slice.ts"
import {apiSlice} from "@/features/api/api.slice.ts";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        skip: skipReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
