import React, { useEffect, useState } from 'react'
import '../../resources/styles/dashboard.css';
import DonorsDashboardCards from './DonorsDashboardCards';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../ui_component/DashboardHeader';
import { tokenFromLocalStorage } from '../../store/reducers/authSlice';

const DonorsDashboard = () => {
    const [token, setToken] = useState(tokenFromLocalStorage);
    const navigate = useNavigate()
    const onCreateDonationClick = () => {
        token ? navigate('/donation/new') : navigate('/login')
    }

    useEffect(() => {
        const newToken = window.localStorage.getItem('token');
        setToken(newToken);
    }, [token]);
    return (


        <div className='dashboard'>
            <DashboardHeader />
            <div className='registerpara'>
                {token ? <p>Erstelle eine Spende oder kontaktiere potenzielle Gesuche.</p> : <p>Logge dich ein, um eine Spende zu erstellen</p>}
                <button onClick={onCreateDonationClick} className='button-pink'>Spende erstellen</button>
            </div>
            <DonorsDashboardCards></DonorsDashboardCards>
        </div>
    )
}

export default DonorsDashboard