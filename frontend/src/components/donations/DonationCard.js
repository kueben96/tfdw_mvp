import React from 'react'
import '../../resources/styles/donationcards.css';

const DonationCard = ({ donation }) => {
    return ( 
        <div className='articles1'>
        <div className='each-article'>
        {/* <article>
         <h2>{donation.category}</h2>
            <p>{donation.description}</p>
        </article> */}
        </div> 
         <div className='each-article'>
         {/* <article>
          <h2>{donation.category}</h2>
             <p>{donation.description}</p>
         </article> */}
         </div> 
          <div className='each-article'>
          {/* <article>
           <h2>{donation.category}</h2>
              <p>{donation.description}</p>
          </article> */}
          </div> 
          <div className='each-article'>
        {/* <article>
         <h2>{donation.category}</h2>
            <p>{donation.description}</p>
        </article> */}
        </div> 
       
          </div>
    )
}

export default DonationCard