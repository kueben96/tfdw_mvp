import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../resources/styles/dashboardfilter.css';

const FilterBarDonations = () => {
    return (
        <div className='filterbar'>
             <Container> 
                 <Row>
                    <h6>Gesuche</h6>
                 </Row>
                 <Row className='filter-down'> 
                       <Col sm={6} md={2}>
                            <select className='filters' >
                            <option value="" disabled selected>Kategorie</option>
                            <option value="9" >Trikot Set</option>
                            <option value="1" >Trikot Oberteil</option>
                            <option value="2"  >Trikot Hose</option>
                            <option value="3"  >Leibchen</option>
                            <option value="4"  >Trainingsanzug Oberteil</option>
                            <option value="5"  >Stutzen</option>
                            <option value="6"  >Schuhe (Paar)</option>
                            <option value="7"  >Handschuhe (Paar)</option>
                            <option value="8"  >Sonstiges</option>

                            </select> 
                       </Col>
                       <Col sm={2} >
                            <select className='filters'>
                            <option value='' disabled selected>Größe</option>
                            <optgroup label="Erwachsenengröße">
                            <option value="e-xs">XS</option>
                            <option value="e-s">S</option>
                            <option value="e-m">M</option>
                            <option value="e-l">L</option>
                            <option value="e-xl">XL</option>
                            <option value="e-xxl">XXL</option>
                            <option value="e-xxxl">XXXL</option>
                            </optgroup>
                            <optgroup label="Kindergröße">
                            <option value="k-xs">XS</option>
                            <option value="k-s">S</option>
                            <option value='k-m'>M</option>
                            <option value="k-xl">L</option>
                            <option value="k-xl">XL</option>
                            <option value="k-xxl">XXL</option>
                            <option value="k-xxxl">XXXL</option>
                            </optgroup>
                            </select>
                       </Col>
                       <Col sm={2}>
                           <select className='filters'>
                           <option value="" disabled selected>Farbe</option>
                           <option value="1" >Weiß</option>
                            <option value="2"  >Rot</option>
                            <option value="3"  >Gelb</option>
                            <option value="4"  >Blau</option>
                            <option value="5"  >Schwarz</option>
                            <option value="6"  >Orange</option>
                            <option value="7"  >Türkis</option>
                            <option value="8"  >Pink</option>
                            <option value="1" > Lila</option>
                            <option value="2"  > Braun</option>
                            
                           </select> 
                       </Col>
                       <Col sm={2}>
                           <input type="text"
                            placeholder="PLZ"
                            className="filters"
                            /> 
                            
                       </Col>
                       <Col >
                            <input type="search"
                             placeholder="Search"
                             className="search"
                            />
                        </Col>
                        
                 </Row>

             </Container>

        </div>
    )
}

export default FilterBarDonations