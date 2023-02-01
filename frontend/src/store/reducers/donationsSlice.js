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
    async (newPost) => {
        const response = await axios.post("/api/donation", newPost)
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


// *** reserved section for later requests"

// export const retrieveAllDonations = createAsyncThunk(
//     "donations/retrieveAll",
//     async () => {
//         const res = await DonationsDataService.getAll()
//     }
// )

// export const getDonationsById = createAsyncThunk(
//     "donations/retrieveById",
//     async ({ id }) => {
//         const res = await DonationsDataService.getDonation(id)
//         return res.data;
//     }
// )
