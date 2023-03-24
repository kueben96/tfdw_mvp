import React, { useEffect } from 'react'
import { useFetchDonationsQuery, useFetchFilteredDonationsQuery } from '../../store/reducers/donationsSlice';
import AddDonationForm from '../donations/AddDonationForm';
import DonationCardDemo from '../donations/DonationCardDemo';
import { Row, Container, Button } from 'react-bootstrap'
import { useState } from 'react';

const SpendenTestRequest = () => {
    // const [colorFilter, setColorFilter] = useState('')
    // const [categoryFilter, setCategoryFilter] = useState('')
    // size buttons erst aktiv nachdem kategorie ausgewählt wurde

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



const FilterToolBar = ({ onFilterChange, onClearFilters }) => {

    // TODO: for sizes, do category mapping (shoes have different sizes)

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

    // const handleCategoryChange = (event) => {
    //     const { categoryValue } = event.target;
    //     setFilters({ ...filters, category: categoryValue, size_1: '', size_2: '' })
    // }

    useEffect(() => {
        console.log("using effect")

        const sizes = {
            adult: {
                jersey_set: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
                jersey: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
                gloves: Array.from({ length: 7 }, (_, i) => i + 1),
                shoes: Array.from({ length: 10 }, (_, i) => i + 39),
            },
            children: {
                jersey_set: ["XS", "S", "M", "L", "XL"],
                jersey: ["XS", "S", "M", "L", "XL"],
                gloves: Array.from({ length: 6 }, (_, i) => i + 1),
                shoes: Array.from({ length: 11 }, (_, i) => i + 28),
            },
        };
        console.log("sizes")
        console.log("jersey" in sizes)

        const getSizeOptions = (category, size1) => {
            console.log("getSizeOptions")
            console.log(category)
            console.log(size1)
            if (category in sizes && size1 in sizes[filters.size_1]) {
                console.log("trueee")
                return sizes[filters.size_1][category];
            }
            return [];
        };

        setSizeOptions(getSizeOptions(filters.category, filters.size_1));
    }, [filters.category, filters.size_1]);

    console.log(filters.category)
    console.log(filters.size_1)
    console.log(filters)
    console.log(sizeOptions)

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
                    <option value="jersey">Trikot</option>
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


            {/* {filters.category && filters.size_1 && sizeOptions.length > 0 && ( */}
            {filters.category && filters.size_1 && (
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
