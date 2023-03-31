import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';
import { useFetchDonationsQuery } from '../../store/reducers/donationsSlice';

import DonationCardDemo from './DonationCardDemo';
import FilterBarDonations from './FilterBarDonations';
import { useFetchDonationRequestsQuery } from '../../store/reducers/donationsRequestSlice';


const DonationsCard = () => {

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
        content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation} />)
    } else if (isError) {
        content = <p>Error fetching a donations</p>;
    }

    return (
        <>
            <FilterBarDonations onFilterChange={handleFilterChange} onClearFilters={clearFilters} />
            <div className='articles-cards'>
                <article>
                    <Row>
                        {content}
                    </Row>
                </article>

            </div>
        </>

    )
}

export default DonationsCard