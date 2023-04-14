import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';


const RecipientDonationDashboard = ({ donation }) => {


    return (
        <div className='each-article'>
            <button >
                <Row>
                    <Col className='yellow-tick'>

                    </Col>
                    <Col >

                        <h6> {donation.category}</h6>
                        <p>{donation.amount} Stück, PLZ {donation.plz}</p>

                    </Col>
                </Row>

            </button>
        </div>
    )

}

export default RecipientDonationDashboard