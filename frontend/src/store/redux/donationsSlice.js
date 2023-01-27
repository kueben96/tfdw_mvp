import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Add Services to ACTONS

const initialState = [];

export const createDonation = createAsyncThunk(
    "donations/create",
    async ({ type, number, color, cut, description }) => {
        const res = await DonationsDataService.create({ title, description });
        return res.data;
    }
)

export const retrieveAllDonations = createAsyncThunk(
    "donations/retrieveAll",
    async () => {
        const res = await DonationsDataService.getAll()
    }
)

export const getDonationsById = createAsyncThunk(
    "donations/retrieveById",
    async ({ id }) => {
        const res = await DonationsDataService.getDonation(id)
        return res.data;
    }
)

const donationsSlice = createSlice({
    name: "donations",
    initialState,
    extraReducers: {
        [createDonation.fulfilled]: (state, action) => {
            state.push(action.payload)
        },
        [retrieveAllDonations.fulfilled]: (state, action) => {
            return [...action.payload];
        }
    }
})