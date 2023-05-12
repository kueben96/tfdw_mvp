import React from 'react'
import { Container} from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import RecipientDashboardCards from './RecipientDashboardCards';
import DashboardHeader from '../ui/DashboardHeader';


const RecipientsDashboard = () => {

    return (
        <div>
            <Container>
                <form className='dashboard'>
                    <DashboardHeader />
                    <div className='registerpara'>
                        <p>Erstelle ein Gesuch oder kontaktiere potenzielle Spenden.     </p>
                        <button className='button-pink'>Gesuch erstellen</button>
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