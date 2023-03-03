import React from 'react'
import { Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';


const DonationCard = ({ donations }) => {

    return (

        <div className='articles1'>

            <div className='each-article'>
                <article>
                    <Row>
                        <p>Category</p>
                        {/*             
            <p>{donations.category}</p> */}

                    </Row>
                </article>

            </div>


        </div>

    )
}

export default DonationCard