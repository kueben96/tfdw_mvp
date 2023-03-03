import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null

const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : null

const authSlice = createSlice({
    name: 'auth',
    initialState: { email: null, token: token },
    reducers: {
        setCredentials: (state, action) => {
            const { token, email } = action.payload
            state.email = email
            state.token = token
            localStorage.setItem('token', token)
            localStorage.setItem('user', email)
        },
        logOut: (state, action) => {
            state.email = null
            state.token = null
            console.log("in action")
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    },
})


export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state) => state.auth.email
export const selectCurrentToken = (state) => state.auth.token