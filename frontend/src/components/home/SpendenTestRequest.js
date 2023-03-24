import React, { useEffect } from 'react'
import { useFetchDonationsQuery } from '../../store/reducers/donationsSlice';
import DonationCardDemo from '../donations/DonationCardDemo';
import { Container, } from 'react-bootstrap'
import { useState } from 'react';

const SpendenTestRequest = () => {

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
        content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation} />)
    } else if (isError) {
        content = <p>Error fetching a donations</p>;
    }

    return (
        <div className='App'>
            <Container>
                <h1> Donations</h1>
                <FilterToolBar onFilterChange={handleFilterChange} onClearFilters={clearFilters} />
                {content}
            </Container>
        </div>
    )
}

export default SpendenTestRequest;

// put these into utils folder
const sizes = {
    adult: {
        jersey_set: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        jersey_kit: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        jersey_top: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        tracksuit_top: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        gloves: Array.from({ length: 7 }, (_, i) => i + 1),
        shoes: Array.from({ length: 10 }, (_, i) => i + 39),
    },
    children: {
        jersey_set: ["XS", "S", "M", "L", "XL"],
        jersey_kit: ["XS", "S", "M", "L", "XL"],
        jersey_top: ["XS", "S", "M", "L", "XL"],
        tracksuit_top: ["XS", "S", "M", "L", "XL"],
        gloves: Array.from({ length: 6 }, (_, i) => i + 1),
        shoes: Array.from({ length: 11 }, (_, i) => i + 28),
    },
};

const getSizeOptions = (category, size1) => {
    if (category && size1 in sizes) {
        return sizes[size1][category];
    }
    return [];
};


const FilterToolBar = ({ onFilterChange, onClearFilters }) => {



    const [filters, setFilters] = useState({});
    const [sizeOptions, setSizeOptions] = useState([]);


    const handleFilterChange = (event) => {
        const newFilters = { ...filters, [event.target.name]: event.target.value };
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    const handleClearFilters = () => {
        setFilters({})
        onClearFilters()
    }

    useEffect(() => {
        setSizeOptions(getSizeOptions(filters.category, filters.size_1));
    }, [filters.category, filters.size_1]);



    return (
        <div>
            <label>
                Color:
                <select name="color" onChange={handleFilterChange}>
                    <option value="">Any</option>
                    <option value="red">Rot</option>
                    <option value="yellow">Gelb</option>
                    <option value="green">Grün</option>
                    <option value="blue">Blau</option>
                    <option value="white">Weiß</option>
                    <option value="black">Schwarz</option>
                    <option value="orange">Orange</option>
                </select>
            </label>
            <label>
                Category:
                <select name="category" onChange={handleFilterChange}>
                    <option value="">Any</option>
                    <option value="jersey_kit">Trikot Set</option>
                    <option value="jersey_top">Trikot Oberteil</option>
                    <option value="tracksuit_top">Trainingsanzug Oberteil</option>
                    <option value="shoes">Schuhe (Paar)</option>
                    <option value="football_sock">Stutzen</option>
                    <option value="bib">Leibchen</option>
                    <option value="gloves">Handschuhe (Paar)</option>
                </select>
            </label>

            <select name="size_1" onChange={handleFilterChange}>
                <option value="">Select Size 1</option>
                <option value="adult">Adult</option>
                <option value="children">Kids</option>
            </select>


            {filters.category && filters.size_1 && sizeOptions.length > 0 && (
                <select name="size_2" onChange={handleFilterChange}>
                    <option value="">Select Size 2</option>
                    {sizeOptions.map((size) => (
                        <option value={size} key={size}>
                            {size}
                        </option>
                    ))}
                </select>
            )}

            <button onClick={handleClearFilters}>Clear Filters</button>
        </div>
    )
}
