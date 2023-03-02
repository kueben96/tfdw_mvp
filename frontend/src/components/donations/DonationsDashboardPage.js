import React from 'react'
import { Container } from 'react-bootstrap';
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
                    <label className='dashboard-titel'>SPENDEN SUCHMASCHINE</label>
                    </div>
                    <div className='registerpara'>
                    <p className='dashboard-paragraph'>Erstelle eine Spende oder kontaktiere potenzielle Gesuche.   </p>
                    <button className='registerbutton'>Spende erstellen</button>
                    </div>
<FilterBarDonations></FilterBarDonations>
<DashboardResults></DashboardResults>
</form>


</Container>
        </div>
    )
}

export default DonationsDashboardPage