import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDonations, getDonationsError, getDonationsStatus, selectAllDonations } from '../../store/reducers/donationsSlice';
import AddDonationForm from '../donations/AddDonationForm';
import DonationCard from '../donations/DonationCard';
import { Row, Col, Container } from 'react-bootstrap'

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
        <div className='App'>
            <Container>

                <h1> Donations</h1>
                {content}
                <Row>
                    <AddDonationForm></AddDonationForm>
                </Row>

            </Container>
        </div>

    )

}

export default Home;