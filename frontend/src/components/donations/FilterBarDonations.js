import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../resources/styles/dashboardfilter.css';


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

const FilterBarDonations = ({ onFilterChange, onClearFilters }) => {


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
        <div className='filterbar'>
            <Container>
                <Row>
                    <h6>Hier siehst du all Gesuche</h6>
                </Row>
                <Row className='filter-down'>
                    <Col sm={6} md={2}>

                        <select name="category" onChange={handleFilterChange} className='filters'>
                            <option value="" disabled selected>Kategorie</option>
                            <option value="jersey_kit">Trikot Set</option>
                            <option value="jersey_top">Trikot Oberteil</option>
                            <option value="tracksuit_top">Trainingsanzug Oberteil</option>
                            <option value="shoes">Schuhe (Paar)</option>
                            <option value="football_sock">Stutzen</option>
                            <option value="bib">Leibchen</option>
                            <option value="gloves">Handschuhe (Paar)</option>
                        </select>

                    </Col>
                    <Col sm={2} >
                        <select name="size_1" onChange={handleFilterChange} className='filters'>
                            <option value='' disabled selected>Größe 1</option>
                            <option value="adult">Adult</option>
                            <option value="children">Kids</option>
                        </select>
                    </Col>

                    {filters.category && filters.size_1 && sizeOptions.length > 0 && (
                        <Col>
                            <select name="size_2" className='filters' onChange={handleFilterChange}>
                                <option value="" disabled selected>Größe 2</option>
                                {sizeOptions.map((size) => (
                                    <option value={size} key={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </Col>
                    )}

                    <Col sm={2}>
                        <select name="color" className='filters' onChange={handleFilterChange} >
                            <option value='' disabled selected>Farbe</option>
                            <option value="red">Rot</option>
                            <option value="yellow">Gelb</option>
                            <option value="green">Grün</option>
                            <option value="blue">Blau</option>
                            <option value="white">Weiß</option>
                            <option value="black">Schwarz</option>
                            <option value="orange">Orange</option>
                        </select>
                    </Col>

                    <Col >
                        <button onClick={handleClearFilters} className="search"
                        >Filter zurücksetzen</button>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default FilterBarDonations