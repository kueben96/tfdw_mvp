import React from 'react'
import { useGetUserDonationsQuery } from '../../store/reducers/donationsSlice'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AccountEntries = () => {
    const navigate = useNavigate()
    const { data, isLoading, error } = useGetUserDonationsQuery();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data)

    const handleAccountEntryClick = () => {
        console.log('clicked')
        navigate('edit')
    }
    return (
        <div>
            <h1>User Donations</h1>
            {data.map((donation, index) => (
                <div key={index} className='each-article'>
                    <button className='clickable' onClick={handleAccountEntryClick} >
                        <Row>
                            <Col className='yellow-tick'>
                            </Col>
                            <Col >
                                <h6> {donation.category}</h6>
                                <p>{donation.amount} Stück, PLZ {donation.zip_code}</p>
                            </Col>
                        </Row>
                    </button>
                </div>

            ))}
        </div>
    )
}

export default AccountEntries