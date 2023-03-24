import { apiSlice } from "./apiSlice";

export const donationsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchDonations: builder.query({
            query: (filter) => {
                const filterQueryParams = new URLSearchParams(filter).toString();
                return `/donation?${filterQueryParams}`;
            },
            providesTags: (result = [], error, arg) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Donation', id })),
                        { type: 'Donation', id: 'LIST' },
                    ]
                    : [{ type: 'Donation', id: 'LIST' }],
            // providesTags: (result, error, arg) => [
            //     { type: 'Donation', id: "LIST" },
            //     ...result.map(id => ({ type: 'Donation', id }))
            // ],
        }),
        // fetchFilteredDonations: builder.query({
        //     query: ({ category, color }) =>
        //         `/donation?category=${category}&color=${color}`
        // }),

        // not necessary -> will get deleted
        getDonationById: builder.query({
            query: donation_id => `/donation_details/?${donation_id}`,
        }),
        // header x-access-token required
        // for detailed card with contact info
        getDonationDetailsByIdWithUserInfo: builder.query({
            query: id => `/donation_details/?id=${id}`,
            providesTags: (result, error, arg) => [
                ...result.map(id => ({ type: 'Donation', id }))
            ]
        }),

        // header x-access-token required
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
    useFetchFilteredDonationsQuery,
    // useGetDonationDetailsByIdWithUserInfoQuery,
    useAddDonationMutation,
} = donationsApiSlice


