import React from 'react'
import { Col } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';


const DonationCardDemo = ({ donation }) => {
    let don;
    for (don in donation){
    return (
        <div className='each-article'>
            <button >
        <article >
            <p>Category: {donation.category}</p>
            
            <p>Amount: {donation.amount}</p> 
            
            <p>Description: {donation.description}</p>
            
           
        </article></button>
        </div>
    )
}}

export default DonationCardDemo