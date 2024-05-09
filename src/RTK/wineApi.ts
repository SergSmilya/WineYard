import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://wineyard.space/api/'

export const wineApi = createApi({
    reducerPath: 'wineApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Wine'],
    endpoints: (build) => ({
        getAllWine: build.query({
            query: ({
                page = 1,
                filters,
                dishName,
                ordering,
                isNewest
            }: {
                page?: number,
                filters?: string,
                dishName?: string,
                ordering?: string,
                isNewest?: boolean
            }) => {
                let queryString = `goods`;

                if (page) queryString += `?page=${page}`;
                if (filters) queryString += `&${filters}`;
                if (dishName) queryString = `dishes?goods_dishes=${dishName}&page=${page}`;
                if (ordering) queryString += `&ordering=${ordering}`;
                if (isNewest) queryString = "newest";

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
        getSearch: build.query({
            query: () => "search",
        }),
    }),
})

export const { useGetAllWineQuery, useGetWineByDishesQuery, useGetWineByIdQuery, useGetCountryQuery, useGetSearchQuery } = wineApi;
