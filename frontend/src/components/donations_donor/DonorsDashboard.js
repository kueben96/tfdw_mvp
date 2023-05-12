import React from 'react'
import '../../resources/styles/dashboard.css';
import DonorsDashboardCards from './DonorsDashboardCards';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../ui/DashboardHeader';

const DonorsDashboard = () => {
    const navigate = useNavigate()
    const onCreateDonationClick = () => {
        navigate('/donation/new')
    }

    return (


        <div className='dashboard'>
            <DashboardHeader />
            <div className='registerpara'>
                <p>Erstelle eine Spende oder kontaktiere potenzielle Gesuche.   </p>
                <button onClick={onCreateDonationClick} className='button-pink'>Spende erstellen</button>
            </div>
            <DonorsDashboardCards></DonorsDashboardCards>
        </div>


    )
}

export default DonorsDashboard