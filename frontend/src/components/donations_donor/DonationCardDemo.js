import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../resources/styles/donationcards.css';

const DonationCardDemo = ({ donation }) => {

    const navigate = useNavigate();

    const confirmation = () => {
        // console.log('donation object:', donation);
        navigate({
            pathname: '/donation',
            // somehow pass donation object
            // state: {donation: donation },
        });
    };
    return (

        <div className='each-article'>
            <button onClick={confirmation} >
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

export default DonationCardDemo
