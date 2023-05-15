import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from './authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include',
    // add token to headers if it exists for restricted api calls
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem("token")
        // TODO: implement with state
        // const token = getState().auth.token
        if (token) {
            headers.set("x-access-token", token)
        }
        return headers
    }
})



const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/login', api, extraOptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    // TODO: implement reauth endpoint, else replace with basequery
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Donation', 'User'],
    endpoints: builder => ({})
})
