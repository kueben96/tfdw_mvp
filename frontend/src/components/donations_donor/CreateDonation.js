import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterBarDonations from '../FilterBarDonations'

const CreateDonation = () => {
    const [filters, setFilters] = useState({});
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters)
    }
    return (
        <div className='dashboard'>
            <div className="text-center">
                <Row>
                    <Col sm={2} >
                        <button className='home-image'></button></Col>
                    <Col sm={8}>
                        <h4>Spendenplatform</h4></Col>
                    <Col sm={2} >
                        <button className='konto-image'></button></Col>
                </Row>
            </div>
            <Container className='p-5'>
                <Col>
                    <Row>
                        <h6>SPENDE ERSTELLEN</h6>
                    </Row>
                    <Row>
                        <p>Falls du einen Trikotsatz spendest, kannst du eine Durchschnittsgröße angeben. </p>
                    </Row>
                    <FilterBarDonations isForPostRequest={true} onFilterChange={handleFilterChange} />
                </Col>
            </Container>
        </div>
    )
}

export default CreateDonation