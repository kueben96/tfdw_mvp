import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import '../../resources/styles/donationcards.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDonations, getDonationsError, getDonationsStatus, selectAllDonations } from '../../store/reducers/donationsSlice';

import DonationCardDemo from '../donations/DonationCardDemo';


const DonationCard= () => {
  const dispatch = useDispatch();
  const donations = useSelector(selectAllDonations)
  const donationsStatus = useSelector(getDonationsStatus)
  const error = useSelector(getDonationsError)

  useEffect(() => {
      if (donationsStatus === 'idle') {
          dispatch(fetchDonations())
      }
  }, [donationsStatus, dispatch])

  let content;
  if (donationsStatus === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (donationsStatus === 'succeeded') {
    
        content = donations.map(donation => <DonationCardDemo key={donation.id} donation={donation}  />)
  } else if (donationsStatus === 'failed') {
      content = <p>{error}</p>;
  }

    return (

      <div className='articles1'>
     
       
                <article>
                    <Row>
                      
                        {content}

                    </Row>
                </article>
                
             </div>
      

    )
}

export default DonationCard