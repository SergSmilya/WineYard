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
        getFilteredWine: build.query({
            query: ({ page = 1, filters }: { page?: number, filters?: string }) => `goods/?${filters}&page=${page}`,
            providesTags: ['Wine']
        }),
        getWineByDishes: build.query({
            query: ({ page = 1, category }: { page?: number, category: string }) => `dishes/?goods_dishes=${category}&page=${page}`,
            providesTags: ['Wine']
        }),
    }),
})

export const { useGetAllWineQuery, useGetWineByDishesQuery, useGetFilteredWineQuery } = wineApi;
