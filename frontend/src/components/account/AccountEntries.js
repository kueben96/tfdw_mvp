import React from 'react'
import { useGetUserDonationsQuery } from '../../store/reducers/donationsSlice'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'


const AccountEntries = () => {

    // TODO: handle user feedback for deleting entry
    const navigate = useNavigate()
    const { data, isLoading, error } = useGetUserDonationsQuery()
    const { state } = useLocation()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const handleAccountEntryClick = (donation) => {
        navigate(`/account/entries/${donation.id}`, { state: { donation } })
    }

    return (
        <>
            {state && state.isItemDeleted && <div>Item deleted successfully</div>}
            <Container>
                {data.map((donation, index) => (
                    <Row key={index} className='justify-content-center'>
                        <div className='each-article'>
                            <button className='clickable' onClick={() => handleAccountEntryClick(donation)}>
                                <Row>
                                    <Col className='yellow-tick' />
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
