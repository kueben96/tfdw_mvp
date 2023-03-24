import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';
import { useSelector, useDispatch } from 'react-redux'


import RecipientDonationDashboard from './RecipientDonationdDashboard';



const RecipientDashboardCards = () => {

    let content = <p>hello</p>
    return (

        <div className='articles-cards'>


            <article>
                <Row>

                    {content}

                </Row>
            </article>

        </div>


    )
}

export default RecipientDashboardCards