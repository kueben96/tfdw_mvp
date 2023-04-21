import React from 'react'
import { useGetUserDonationsQuery } from '../../store/reducers/donationsSlice'
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EntryDetail from './EntryDetail';
import EditEntry from './EditEntry';

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

    const handleAccountEntryClick = (donation) => {
        navigate(`/account/entries/${donation.id}`, { state: { donation } })
    }

    return (
        <>
            <Container>
                {data.map((donation, index) => (
                    <Row key={index} className="justify-content-center">
                        <div className='each-article'>
                            <button className='clickable' onClick={() => handleAccountEntryClick(donation)} >
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
                    </Row>
                ))}

            </Container>

        </>


    )
}

export default AccountEntries