import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDonations, getDonationsError, getDonationsStatus, selectAllDonations } from '../../store/reducers/donationsSlice';
import AddDonationForm from '../donations/AddDonationForm';
import DonationCard from '../donations/DonationCard';

const Home = () => {
    const dispatch = useDispatch();
    const donations = useSelector(selectAllDonations)
    const donationsStatus = useSelector(getDonationsStatus)
    const error = useSelector(getDonationsError)

    useEffect(() => {
        if (donationsStatus === 'idle') {
            dispatch(fetchDonations())
        }
    }, [donationsStatus, dispatch])

    let content;
    if (donationsStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (donationsStatus === 'succeeded') {
        content = donations.map(donation => <DonationCard key={donation.id} donation={donation} />)
    } else if (donationsStatus === 'failed') {
        content = <p>{error}</p>;
    }
    return (
        <>
            <h1> Donations</h1>
            {content}

            <AddDonationForm></AddDonationForm>

        </>
    )

}

export default Home;