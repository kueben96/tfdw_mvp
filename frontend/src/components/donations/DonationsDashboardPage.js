import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import DashboardResults from './DashboardResults';
import FilterBarDonations from './FilterBarDonations';

const DonationsDashboardPage = () => {

    const donations = [{}]

    return (
        <div>
            <Container>
                <form className='dashboard'>
                    
                    <div className="register-text-center">
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
                    <p className='dashboard-paragraph'>Erstelle eine Spende oder kontaktiere potenzielle Gesuche.   </p>
                    <button className='registerbutton' onclick="location.href='https://blog.hubspot.com/website/bootstrap-button'">Spende erstellen</button>
                    </div>
            <FilterBarDonations></FilterBarDonations>
            <DashboardResults></DashboardResults>
                </form>


</Container>
        </div>
    )
}

export default DonationsDashboardPage