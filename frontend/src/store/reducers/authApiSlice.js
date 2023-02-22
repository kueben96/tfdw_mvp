import { apiSlice } from "./apiSlice"
// https://codesandbox.io/s/eed6q?file=/src/apps/posts/_api.js

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        // add signup here
        signup: builder.mutation({
            query: userData => ({
                url: '/signup',
                method: 'POST',
                body: { ...userData }
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignupMutation
} = authApiSlice