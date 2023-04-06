import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../resources/styles/donationdetail.css';

const DonationDetail = () => {
    const location = useLocation();
    const {donation} = location.state;
   
 
    return (
      <Container>
      <div className='dashboard'>
          <div className="text-center">
              <Row>
                  <Col sm={2} >
                      <button className='home-image'></button></Col>
                  <Col sm={8}>
                      <h4>Spendenplatform</h4></Col>
                  <Col sm={2} >
                      <button className='konto-image'></button></Col>
              </Row>
          </div>
         

          <div className='donation-articles' >
         
          <div className='articles-cards' id='elements'>
          <div className='each-article'>
            <button className='unclickable white-button'  disabled>
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
        <div  className='details-gesuch'>
          <h6>DETAILS GESUCH</h6>
            <p>Kategorie: {donation.category}</p>
            <p>Anzahl: {donation.amount}</p>
            {/* add more donation data fields here */}</div>
            <div className='kontaktdetails'>

            </div>
          </div>
          </div>
      </div>
  </Container>
      
      
     
    );
  };
  
  export default DonationDetail;








// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ConfirmationCards = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const donation = location.state?.donation;
 
//   const handleConfirm = () => {
//     // TODO: Add logic to confirm donation
//     navigate('/');
//   };

//   const handleGoBack = () => {
//     navigate('/');
//   };

//   if (!donation) {
//     return <p>No donation data available</p>;
// }

// // Render the confirmation page with the donation data
// return (
//     <div>
//         <h1>Confirm Donation</h1>
//         <p>Category: {donation.category}</p>
//         <p>Amount: {donation.amount} Stück</p>
//         <p>PLZ: {donation.zip_code}</p>
//         <button>Confirm</button>
//         <button>Go Back</button>
//     </div>
// );
// };

// export default ConfirmationCards;










// import React from 'react'
// import { useLocation } from 'react-router-dom';

// const ConfirmationCards = () => {
//     const location = useLocation();
//     const donation = location.state ? location.state.donation : null;
    
//     return (
//         <div>
//             <h1>Confirmation Cards</h1>
//             {donation && (
//                 <> <h6>h</h6>
//                     <p>{donation.category}</p>
//                     <p>{donation.amount}</p>
//                     <p>{donation.zip_code}</p>
//                 </>
//             )}
//         </div>
//     )
// }

// export default ConfirmationCards;