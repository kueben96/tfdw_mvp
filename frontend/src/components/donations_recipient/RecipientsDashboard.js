import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import '../../resources/styles/dashboard.css';
import RecipientDashboardCards from './RecipientDashboardCards';
import DashboardHeader from '../ui_component/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { tokenFromLocalStorage } from '../../store/reducers/authSlice';


const RecipientsDashboard = () => {
    const [token, setToken] = useState(tokenFromLocalStorage);
    const navigate = useNavigate()
    const onCreateRequestClick = () => {
        token ? navigate('/donation_request/new') : navigate('/login')
    }
    useEffect(() => {
        const newToken = window.localStorage.getItem('token');
        setToken(newToken);
    }, [token]);

    return (
        <div>
            <Container>
                <form className='dashboard'>
                    <DashboardHeader />
                    <div className='registerpara'>
                        {token ? <p>Erstelle ein Gesuch oder kontaktiere potenzielle Spenden.</p> : <p>Logge dich ein, um ein Gesuch zu erstellen</p>}
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