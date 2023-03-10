import React from 'react'
import { useFetchDonationsQuery, useFetchFilteredDonationsQuery } from '../../store/reducers/donationsSlice';
import AddDonationForm from '../donations/AddDonationForm';
import DonationCardDemo from '../donations/DonationCardDemo';
import { Row, Container, Button } from 'react-bootstrap'
import { useState } from 'react';

const SpendenTestRequest = () => {
    const [colorFilter, setColorFilter] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')


    // const {
    //     data: filteredDonations,
    //     isLoadingFilter,
    //     isSuccessFilter,
    //     isErrorFilter,
    //     errorFilter
    // } = useFetchFilteredDonationsQuery({ category: categoryFilter, color: colorFilter })

    const filterDonations = () => {
        console.log('clicked filter')
        content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation} />)
        if (isLoading) {
            content = <p>"Filtering..."</p>;
        } else if (isSuccess) {
            content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation} />)
        } else if (isError) {
            content = <p>{error}</p>;
        }

    }



    const {
        data: donations,
        isLoading,
        isSuccess,
        isError,
        error
    } = useFetchFilteredDonationsQuery({ category: categoryFilter, color: colorFilter })


    let content;

    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <div className='App'>
            <Container>

                <h1> Donations</h1>

                <Row>
                    <div>
                        <h2>Filters</h2>

                        <Row>
                            <p>color_filter</p>
                            <input id="color" type="text" onChange={e => setColorFilter(e.target.value)}></input>
                        </Row>
                        <Row>
                            <p>category_filter</p>
                            <input id="category" type="text" onChange={e => setCategoryFilter(e.target.value)}></input>
                        </Row>
                        <button onClick={filterDonations}>Filter</button>

                    </div>
                    <AddDonationForm></AddDonationForm>
                </Row>
                {content}

            </Container>
        </div>

    )

}

export default SpendenTestRequest;