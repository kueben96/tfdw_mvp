import { apiSlice } from "./apiSlice";

export const donationsRequestApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        fetchDonationRequests: builder.query({
            query: (filter) => {
                const filterQueryParams = new URLSearchParams(filter).toString();
                return `/donation_request?${filterQueryParams}`;
            },
            providesTags: (result = [], error, arg) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Donation', id })),
                        { type: 'Donation', id: 'LIST' },
                    ]
                    : [{ type: 'Donation', id: 'LIST' }],
        }),
        fetchDonationRequestById: builder.query({
            query: (id) => `/donation_request?id=${id}`,
            providesTags: (result) =>
                result ? [{ type: 'Donation', id: result.id }] : [],
        }),
        // TODO: handle case with authorization
        // header x-access-token required
        // for detailed card with contact info
        // getDonationDetailsByIdWithUserInfo: builder.query({
        //     query: id => `/donation_details/?id=${id}`,
        //     providesTags: (result, error, arg) => [
        //         ...result.map(id => ({ type: 'Donation', id }))
        //     ]
        // }),

        // header x-access-token required
        addDonationRequest: builder.mutation({
            query: donationRequestData => ({
                url: '/donation_request',
                method: 'POST',
                body: { ...donationRequestData }
            })
        })

    })
})

export const {
    useFetchDonationRequestsQuery,
    useFetchDonationRequestByIdQuery,
    useAddDonationRequestMutation
} = donationsRequestApiSlice


