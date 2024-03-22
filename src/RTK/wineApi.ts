// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_URL = 'http://back.wineyard.space:8000/api/'

// export const wineApi = createApi({
//     reducerPath: 'wineApi',
//     baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//     tagTypes: ['Wine'],
//     endpoints: (build) => ({
//         getAllWine: build.query({
//             query: () => 'goods/',
//             providesTags: ['Wine']
//         }),
//     }),
// })

// export const {useGetAllWineQuery} = wineApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://back.wineyard.space:8000/api/'

export const wineApi = createApi({
    reducerPath: 'wineApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Wine'],
    endpoints: (build) => ({
        getAllWine: build.query({
            query: (page = 1) => `goods/?page=${page}`,
            providesTags: ['Wine']
        }),
    }),
})

export const {useGetAllWineQuery} = wineApi;