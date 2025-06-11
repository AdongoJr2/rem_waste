import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://app.wewantwaste.co.uk/api/',
        prepareHeaders: (headers) => {
            return headers;
        },
    }),
    endpoints: () => ({}),
})