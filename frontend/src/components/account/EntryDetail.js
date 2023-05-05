import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const EntryDetail = () => {
    const location = useLocation()
    const { donation } = location.state
    console.log("iin entry detail")
    return (
        <Container>

            <Row>

                <Col className='yellow-tick' />
                <Col>
                    <Row>{donation.category}</Row>
                    <Row>{donation.amount} {donation.date}</Row>
                </Col>
                <Col>
                    <select placeholder='Eintrag aktiv' className='filters'>
                        <option value="offen" disabled>Eintrag aktiv</option>
                    </select>
                </Col>

            </Row>
        </Container>
    )
}

export default EntryDetail