import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
        const response = await axios.post("/api/login", { email, password })
        return response.data;
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null, error: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            console.log('payload')
            console.log(action.payload)
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
    extraReducers: {
        [login.pending]: (state) => { state.error = null },
        [login.fulfilled]: (state, action) => {
            console.log("payload")
            console.log(action.payload)
            const user = action.payload

            state.user = user
            state.token = user.token
        },
        [login.rejected]: (state, action) => {
            state.error = action.error
        }
    }

})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token