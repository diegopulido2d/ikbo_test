import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/products',
            method: 'GET',
            transformResponse: (response) => response,
        }),
        getAllProductsById: builder.query({
            query: (id) => `/products/${id}`,
            method: 'GET'
        }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: newProduct,
            }),
        }),
    })
})

export const {useGetAllProductsQuery, useAddNewProductMutation} = productsApi;