import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../resources/styles/donationcards.css';

const DonationCard = ({ donation, type }) => {

    const navigate = useNavigate();

    const handleOnDonationClick = () => {
        let path;
        if (type === "requests") path = "donation_request"
        else path = "donation"

        navigate(`/${path}/${donation.id}`, { state: { id: donation.id } })
    };


    return (

        <div className='each-article'>
            <button className='clickable' onClick={handleOnDonationClick} >
                <Row>
                    <Col className='yellow-tick'>
                    </Col>
                    <Col >
                        <h6> {donation.category}</h6>
                        <p>{donation.amount} Stück, PLZ {donation.zip_code}</p>
                    </Col>
                </Row>
            </button>
        </div>
    )
}

export default DonationCard
