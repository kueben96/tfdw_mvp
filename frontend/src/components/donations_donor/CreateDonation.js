import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterBarDonations from '../FilterBarDonations'
import DashboardHeader from '../ui/DashboardHeader';

const CreateDonation = () => {
    const [filters, setFilters] = useState({});
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters)
    }
    return (
        <div className='dashboard'>
            <DashboardHeader />
            <Container className='p-5'>
                <Col>
                    <Row>
                        <h6>SPENDE ERSTELLEN</h6>
                    </Row>
                    <Row>
                        <p>Falls du einen Trikotsatz spendest, kannst du eine Durchschnittsgröße angeben. </p>
                    </Row>
                    <FilterBarDonations isForPostRequest={true} onFilterChange={handleFilterChange} />
                    <p>Beschreibe deine Spende</p>
                    <input type='text' placeholder='Description'></input>
                    <Row>
                        <Col sm={6}>
                            <button>Weitere Spende</button>
                        </Col>
                        <Col sm={3}>
                            <button>Zurück</button>
                        </Col>
                        <Col sm={3}>
                            <button className='button-pink'>Gesuch erstellen</button>
                        </Col>
                    </Row>

                </Col>
            </Container>
        </div>
    )
}

export default CreateDonation