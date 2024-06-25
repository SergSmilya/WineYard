import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.apilayer.com/number_verification/'

export const verifyNumber = createApi({
    reducerPath: 'verifyNumber',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('apikey', import.meta.env.VITE_AUTH_TOKEN); 
            return headers;
        },
    }),
    endpoints: (build) => ({
        verify: build.query({
            query: (number) => `validate?number=${number}`,
        }),
    }),
})

export const { useVerifyQuery } = verifyNumber;