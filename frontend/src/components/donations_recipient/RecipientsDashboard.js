import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import RecipientDashboardCards from './RecipientDashboardCards';
import FilterBarDonations from '../FilterBarDonations';


const RecipientsDashboard = () => {

    return (
        <div>
            <Container>
                <form className='dashboard'>

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
                    <div className='registerpara'>
                        <p>Erstelle ein Gesuch oder kontaktiere potenzielle Spenden.     </p>
                        <button className='button-pink' onclick="location.href='https://blog.hubspot.com/website/bootstrap-button'">Gesuch erstellen</button>
                    </div>
                    <FilterBarDonations></FilterBarDonations>
                    <div className='articles'>
                        <RecipientDashboardCards></RecipientDashboardCards>
                    </div>
                </form>


            </Container>
        </div>
    )
}

export default RecipientsDashboard