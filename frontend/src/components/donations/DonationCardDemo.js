import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';


const DonationCardDemo = ({ donation }) => {
    let don;
    for (don in donation){
    return (
        <div className='each-article'>
            <button >
            <Row>
                <Col sm={2}  className='yellow-tick'>
            
                </Col>    
                <Col >
                   <article >
                   <h6> {donation.category}</h6>
                   <p>{donation.amount} Stück, PLZ {donation.plz}</p> 
          
                   </article></Col>
            </Row>
         
            </button>
        </div>
    )
}}

export default DonationCardDemo