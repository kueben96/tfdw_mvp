import React from 'react'
import '../../resources/styles/dashboard.css';
import DashboardResults from './DashboardResults';
import FilterBarDonations from './FilterBarDonations';

const DonationsDashboardPage = () => {

    const donations = [{}]

    return (
        <div>
<form className='dashboard'>
<div className="register-text-center">
          <label className='dashboard-titel'>SPENDEN SUCHMASCHINE</label>
        </div>
        <div className='registerpara'>
          <p className='dashboard-paragraph'>Hat jemand das, was du suchst oder spenden möchtest? Kontaktiere etwas Passendes. 
             Falls nichts Passendes dabei ist, erstelle einen Eintrag. </p>
        </div>
<FilterBarDonations></FilterBarDonations>
<DashboardResults></DashboardResults>
</form>



        </div>
    )
}

export default DonationsDashboardPage