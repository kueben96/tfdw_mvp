import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../resources/styles/dashboardfilter.css';

const FilterBarDonations = () => {
    return (
        <div className='filterbar'>
             <Container> 
                 <Row className='filter-up'>
                      <Col sm={6} md={6}> 
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="split-btn1">SPENDEN</button>
                            <button type="button" class="split-btn2">SUCHEN</button>
                            </div>
                       </Col>
                       <Col sm={6}>
                            <input type="search"
                             placeholder=" Search"
                             className="search"/>
                        </Col>
                 </Row>
                 <Row className='filter-down'> 
                       <Col sm={6} md={2}>
                            <select className='filters' >
                            <option value="" disabled selected>Kategorie</option>
                            </select> 
                       </Col>
                       <Col sm={2} >
                            <select className='filters'>
                            <option value="" disabled selected>Größe</option>
                            </select> 
                       </Col>
                       <Col sm={2}>
                           <select className='filters'>
                           <option value="" disabled selected>Farbe</option>
                           </select> 
                       </Col>
                       <Col sm={2}>
                           <input type="text"
                            placeholder="PLZ"
                            className="filters"/> 
                       </Col>
                 </Row>

             </Container>

        </div>
    )
}

export default FilterBarDonations