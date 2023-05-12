import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null

const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null

const authSlice = createSlice({
    // TODO: persist redux state objects in local storage
    name: 'auth',
    initialState: { user: null, token: token },
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
            console.log("in action")
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