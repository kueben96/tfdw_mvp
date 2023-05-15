import { createSlice } from "@reduxjs/toolkit";

export const tokenFromLocalStorage = localStorage.getItem('token') ?? null
export const userFromLocalStorage = localStorage.getItem('user') ?? null
export const userIdFromLocalStorage = localStorage.getItem('userId') ?? null

const authSlice = createSlice({
    // TODO: persist redux state objects in local storage
    name: 'auth',
    initialState: { user: null, token: tokenFromLocalStorage },
    reducers: {
        setCredentials: (state, action) => {
            const { id, email } = action.payload[0]
            const { token } = action.payload[1]
            const { refresh_token } = action.payload[2]
            //  const { token, refresh_token,  email } = action.payload
            localStorage.setItem('token', token)
            localStorage.setItem('user', email)
            localStorage.setItem('userId', id)
            localStorage.setItem('refreshToken', refresh_token)
            state.user = action.payload[0]
            state.token = token
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('userId')
            localStorage.removeItem('refreshToken')
        }
    },
})


export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token