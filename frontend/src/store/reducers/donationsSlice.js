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
        }),
        fetchDonationById: builder.query({
            query: (id) => `/donation?id=${id}`,
            providesTags: (result) =>
                result ? [{ type: 'Donation', id: result.id }] : [],
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
        }),
        getUserDonations: builder.query({
            query: () => '/user_donations',
        }),

    })
})

export const {
    useFetchDonationsQuery,
    useFetchDonationByIdQuery,
    useAddDonationMutation,
    useGetUserDonationsQuery
} = donationsApiSlice


