import React from 'react'
import { useFetchDonationsQuery } from '../../store/reducers/donationsSlice';
import AddDonationForm from '../donations/AddDonationForm';
import DonationCardDemo from '../donations/DonationCardDemo';
import { Row, Container } from 'react-bootstrap'

const SpendenTestRequest = () => {

    const {
        data: donations,
        isLoading,
        isSuccess,
        isError,
        error
    } = useFetchDonationsQuery()

    let content;

    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }
    return (
        <div className='App'>
            <Container>

                <h1> Donations</h1>

                <Row>
                    <AddDonationForm></AddDonationForm>
                </Row>
                {content}

            </Container>
        </div>

    )

}

export default SpendenTestRequest;