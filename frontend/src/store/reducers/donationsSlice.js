import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    donations: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchDonations = createAsyncThunk(
    "donations/fetch",
    async () => {
        const response = await axios.get("/api/donation")
        console.log(response.data)
        return response.data;
    }
)

export const addDonation = createAsyncThunk(
    "donations/add",
    async (newDonation) => {
        const response = await axios.post("/api/donation", newDonation)
        return response.data;
    }
)

const donationsSlice = createSlice({
    name: "donations",
    initialState,
    extraReducers: {
        [addDonation.fulfilled]: (state, action) => {
            state.push(action.payload)
        },
        [fetchDonations.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // return [...action.payload];
            state.donations = [...action.payload]
        }
    }
})

export const selectAllDonations = (state) => state.donations.donations;
export const getDonationsStatus = (state) => state.donations.status;
export const getDonationsError = (state) => state.donations.error;


export default donationsSlice.reducer

