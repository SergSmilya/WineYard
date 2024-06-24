import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(fetchBaseQuery)

const BASE_URL = 'https://api.apilayer.com/number_verification/validate'
// headers: { apikey: import.meta.env.VITE_AUTH_TOKEN } 

export const verifyNumber = createApi({
    reducerPath: 'verifyNumber',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        verify: build.query({
            query: (number: number) => `?number=${number}`,
        }),
    }),
})

export const { useVerifyQuery } = verifyNumber;