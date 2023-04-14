import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/user',
        }),
        getUserById: builder.query({
            query: (id) => `/user/${id}`,
        }),
        updateUser: builder.mutation({
            query: (params) => ({
                url: `/user/${params.id}`,
                method: 'PATCH',
                body: params,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            }),
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApiSlice