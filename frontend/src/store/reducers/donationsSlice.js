import { apiSlice } from "./apiSlice";

export const donationsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchDonations: builder.query({
            query: () => '/donation',
            // providesTags: (result, error, arg) => [
            //     { type: 'Donation', id: "LIST" },
            //     ...result.ids.map(id => ({ type: 'Donation', id }))
            // ],
        }),
        addDonation: builder.mutation({
            query: donationData => ({
                url: '/donation',
                method: 'POST',
                body: { ...donationData }
            })
        })

    })
})

export const {
    useFetchDonationsQuery,
    useAddDonationMutation,
} = donationsApiSlice


