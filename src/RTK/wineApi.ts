import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://back.wineyard.space:8000/api/'

export const wineApi = createApi({
    reducerPath: 'wineApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllWine: builder.query({
            query: () => 'goods/'
        }),
        sortWine: builder.query({
            query: (param) => `dishes/?goods_dishes=${param}`,
        })
    }),
})

export const {useGetAllWineQuery, useSortWineQuery} = wineApi;