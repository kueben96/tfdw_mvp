import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDeleteDonationMutation } from '../../store/reducers/donationsSlice'

// TODO: Implement page according to figma file
// TODO: implement edit functionality
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
            <div>
                <h1>Account Detail</h1>
                <p>Kategorie: {donation.category}</p>
                <p>Anzahl: {donation.amount}</p>
                <p>Größe: {donation.size_1}</p>
                <p>Farbe: {donation.color_1}</p>
                <p>Beschreibung: {donation.description}</p>
            </div>
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
