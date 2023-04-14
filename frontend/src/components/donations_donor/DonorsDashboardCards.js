import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';
import DonationCard from './DonationCard';
import FilterBarDonations from '../FilterBarDonations';
import { useFetchDonationRequestsQuery } from '../../store/reducers/donationsRequestSlice';


const DonorsDashboardCards = () => {

    const [filters, setFilters] = useState({});

    const {
        data: donations,
        isLoading,
        isSuccess,
        isError,
    } = useFetchDonationRequestsQuery(filters)

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
        content = donations.map(donation => <DonationCard key={donation.id} donation={donation} />)
    } else if (isError) {
        content = <p>Error fetching a donations</p>;
    }

    return (
        <div className='articles'>
            <h6>Hier siehst du alle Gesuche</h6>
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

export default DonorsDashboardCards