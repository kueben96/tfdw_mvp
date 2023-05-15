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

const FilterBarDonations = ({ onFilterChange, onClearFilters, isForPostRequest }) => {


    const [filters, setFilters] = useState({});
    // TODO: handle default values for form
    // category has to be pre-selected in state in order 
    // for the filter to work 
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

                <Row className='filter-down'>
                    <Col sm={2} >

                        <select name="category" onChange={handleFilterChange} className='filters'>
                            <option value="" disabled>Kategorie</option>
                            <option value="jersey_kit" defaultValue>Trikot Set</option>
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
                            <option value='' disabled >Größe 1</option>
                            <option value="adult">Adult</option>
                            <option value="children">Kids</option>
                        </select>
                    </Col>

                    {filters.category && filters.size_1 && sizeOptions.length > 0 && (
                        <Col sm={2}>
                            <select name="size_2" className='filters' onChange={handleFilterChange}>
                                <option value="" disabled>Größe 2</option>
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
                            <option value='' disabled >Farbe</option>
                            <option value="red">Rot</option>
                            <option value="yellow">Gelb</option>
                            <option value="green">Grün</option>
                            <option value="blue">Blau</option>
                            <option value="white">Weiß</option>
                            <option value="black">Schwarz</option>
                            <option value="orange">Orange</option>
                        </select>
                    </Col>
                    {!isForPostRequest ? (
                        <Col >
                            <button onClick={handleClearFilters} className="search"
                            >Filter zurücksetzen</button>
                        </Col>) : (
                        <Col sm={2}>
                            <input type="number" name="amount" className='filters' onChange={handleFilterChange} placeholder="Anzahl" />
                        </Col>
                    )

                    }
                </Row>

            </Container>

        </div>
    )
}
export default FilterBarDonations