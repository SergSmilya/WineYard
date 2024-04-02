import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://back.wineyard.space:8000/api/'

export const wineApi = createApi({
    reducerPath: 'wineApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Wine'],
    endpoints: (build) => ({
        getAllWine: build.query({
            query: ({ page = 1, filters, dishName }: { page?: number, filters?: string, dishName?: string }) => {
                let queryString = `goods`;
                
                if (page) queryString += `?page=${page}`;
                if (filters) queryString += `&${filters}`;
                if (dishName) queryString = `dishes?goods_dishes=${dishName}&page=${page}`;

                return queryString;
            },
            providesTags: ['Wine']
        }),
        getWineByDishes: build.query({
            query: ({ page, category }: { page?: number, category: string }) => page && category ? `dishes?goods_dishes=${category}&page=${page}` : 'dishes',
            providesTags: ['Wine']
        }),
        getWineById: build.query({
            query: (id) => `goods/${id}`,
        }),
        getCountry: build.query({
            query: () => "country",
        }),
    }),
})

export const { useGetAllWineQuery, useGetWineByDishesQuery, useGetWineByIdQuery, useGetCountryQuery } = wineApi;
