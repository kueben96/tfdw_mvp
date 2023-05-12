import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import RecipientDashboardCards from './RecipientDashboardCards';
import DashboardHeader from '../ui/DashboardHeader';
import { useNavigate } from 'react-router-dom';


const RecipientsDashboard = () => {

    const navigate = useNavigate()
    const onCreateRequestClick = () => {
        navigate('/donation_request/new')
    }

    return (
        <div>
            <Container>
                <form className='dashboard'>
                    <DashboardHeader />
                    <div className='registerpara'>
                        <p>Erstelle ein Gesuch oder kontaktiere potenzielle Spenden.     </p>
                        <button onClick={onCreateRequestClick} className='button-pink'>Gesuch erstellen</button>
                    </div>
                    <div className='articles'>
                        <RecipientDashboardCards></RecipientDashboardCards>
                    </div>
                </form>


            </Container>
        </div>
    )
}

export default RecipientsDashboard