import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null

const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: token },
    reducers: {
        setCredentials: (state, action) => {
            const { token, email } = action.payload
            //  const { token, refresh_token,  email } = action.payload
            localStorage.setItem('token', token)
            localStorage.setItem('user', email)
            state.user = email
            state.token = token
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
            console.log("in action")
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    },
})


export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token