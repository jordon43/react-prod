import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: build => ({
        getPosts: build.query({
            query: (limit = '') => `posts?${limit && `_limit=${limit}`}`,

        }),
        getPost: build.query({
            query: (id) => `posts/${id}`,
        })
    })
});

export const {useGetPostsQuery, useGetPostQuery} = postsApi;