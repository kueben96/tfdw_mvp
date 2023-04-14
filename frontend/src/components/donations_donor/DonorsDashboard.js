import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import DonorsDashboardCards from './DonorsDashboardCards';
import { useNavigate } from 'react-router-dom';

const DonorsDashboard = () => {
    const navigate = useNavigate()
    const onCreateDonationClick = () => {
        navigate('/donation/new')
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
            <div className='registerpara'>
                <p>Erstelle eine Spende oder kontaktiere potenzielle Gesuche.   </p>
                <button onClick={onCreateDonationClick} className='button-pink'>Spende erstellen</button>
            </div>
            <DonorsDashboardCards></DonorsDashboardCards>
        </div>


    )
}

export default DonorsDashboard