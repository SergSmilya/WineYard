import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://back.wineyard.space:8000/api/'

export const wineApi = createApi({
    reducerPath: 'wineApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Wine'],
    endpoints: (build) => ({
        getAllWine: build.query({
            query: ({ page = 1, filters, dishName }: { page?: number, filters?: string, dishName?: string }) => {
                let queryString = `goods/?page=${page}`;
                if (filters) {
                    queryString = `goods/?${filters}&page=${page}`;
                } 
                if (dishName) {
                    queryString = `dishes/?goods_dishes=${dishName}&page=${page}`;
                }
                return queryString;
            },
            providesTags: ['Wine']
        }),
        getWineByDishes: build.query({
            query: ({ page = 1, category }: { page?: number, category: string }) => `dishes/?goods_dishes=${category}&page=${page}`,
            providesTags: ['Wine']
        }),
    }),
})

export const { useGetAllWineQuery, useGetWineByDishesQuery } = wineApi;
