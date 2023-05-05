import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDeleteDonationMutation } from '../../store/reducers/donationsSlice'

const EntryDetail = () => {
    const location = useLocation()
    const { donation } = location.state
    const navigate = useNavigate()
    const [isDeleting, setIsDeleting] = useState(false)

    const [deleteDonation, { isLoading, isError, isSuccess }] = useDeleteDonationMutation()

    const handleDelete = () => {
        setIsDeleting(true)
        deleteDonation(donation.id)
    }

    if (isSuccess) {
        navigate(-1, { state: { isItemDeleted: true } })
    }

    return (
        <Container>
            <Row>
                <Col className='yellow-tick' />
                <Col>
                    <Row>{donation.category}</Row>
                    <Row>
                        {donation.amount} {donation.date}
                    </Row>
                </Col>
                <Col>
                    <select placeholder='Eintrag aktiv' className='filters'>
                        <option value='offen' disabled>
                            Eintrag aktiv
                        </option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    {isDeleting ? (
                        <p>Lösche Eintrag...</p>
                    ) : (
                        <>
                            {isError && <p>Failed to delete donation</p>}
                            <button onClick={handleDelete} disabled={isLoading} className='button-pink'>
                                Lösche diesen Eintrag
                            </button>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default EntryDetail
