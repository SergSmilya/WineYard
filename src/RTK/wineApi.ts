import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://back.wineyard.space:8000/api/'

export const wineApi = createApi({
    reducerPath: 'wineApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Wine'],
    endpoints: (build) => ({
        getAllWine: build.query({
            query: () => 'goods/',
            providesTags: ['Wine']
        }),
        getWineByDishes: build.query({
            query: (category) => `dishes/?goods_dishes=${category}&page=${1}`,
            providesTags: ['Wine']
        }),
    }),
})

export const { useGetAllWineQuery, useGetWineByDishesQuery } = wineApi;

// http://back.wineyard.space:8000/api/dishes/?goods_dishes=Red%20meat