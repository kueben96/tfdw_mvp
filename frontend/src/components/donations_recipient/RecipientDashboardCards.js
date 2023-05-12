import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';

import FilterBarDonations from '../donation_components/FilterBarDonations';
import { useFetchDonationsQuery } from '../../store/reducers/donationsSlice';
import DonationCard from '../donations_donor/DonationCard';



const RecipientDashboardCards = () => {

    const [filters, setFilters] = useState({});

    const {
        data: donations,
        isLoading,
        isSuccess,
        isError,
    } = useFetchDonationsQuery(filters)

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters)
    }

    const clearFilters = () => {
        setFilters({});
    };


    let content;

    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = donations.map(donation => <DonationCard type="offers" key={donation.id} donation={donation} />)
    } else if (isError) {
        content = <p>Error fetching a donations</p>;
    }
    return (
        <div className='articles'>
            <h6>Hier siehst du alle Spenden</h6>
            <FilterBarDonations onFilterChange={handleFilterChange} onClearFilters={clearFilters} />
            <div className='articles-cards'>
                <article>
                    <Row>
                        {content}
                    </Row>
                </article>
            </div>
        </div>


    )
}

export default RecipientDashboardCards